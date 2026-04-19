// ============================================
// LaunchFlow Telegram Mini App — логика
// Навигация: welcome → niche → situation → contact → success
// ============================================

// --- Инициализация Telegram SDK ---
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();          // сообщаем Telegram что приложение готово
  tg.expand();         // разворачиваем на весь экран

  // Подстраиваем header-colour под тему
  if (tg.setHeaderColor) tg.setHeaderColor('bg_color');
}

// --- Состояние приложения ---
const state = {
  niche: '',
  situation: '',
  name: '',
  contact: '',
};

// --- Ссылки на DOM-элементы ---
const screens = {
  welcome:   document.getElementById('screen-welcome'),
  niche:     document.getElementById('screen-niche'),
  situation: document.getElementById('screen-situation'),
  contact:   document.getElementById('screen-contact'),
  success:   document.getElementById('screen-success'),
};

// История экранов для кнопки «Назад»
let history = ['welcome'];

// --- Навигация между экранами ---

function goTo(screenId) {
  const current = history[history.length - 1];
  if (current === screenId) return;

  // Уходящий экран — уезжает влево
  screens[current].classList.remove('active');
  screens[current].classList.add('exit-left');

  // После завершения анимации убираем класс exit-left
  setTimeout(() => {
    screens[current].classList.remove('exit-left');
  }, 300);

  // Новый экран — появляется справа
  screens[screenId].classList.add('active');
  history.push(screenId);
}

function goBack() {
  if (history.length <= 1) return;

  const current = history.pop();
  const previous = history[history.length - 1];

  // Текущий уходит вправо (обратная анимация через убирание active)
  screens[current].classList.remove('active');

  // Предыдущий появляется
  screens[previous].classList.remove('exit-left');
  screens[previous].classList.add('active');
}

// --- Экран 0: Приветствие ---

document.getElementById('btn-start').addEventListener('click', () => {
  goTo('niche');
});

// --- Экран 1: Ниша ---

document.getElementById('back-niche').addEventListener('click', goBack);

document.getElementById('niche-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.option-btn');
  if (!btn) return;

  state.niche = btn.dataset.value;

  // Визуальная отметка выбранного
  document.querySelectorAll('#niche-options .option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Небольшая задержка — пользователь видит выбор перед переходом
  setTimeout(() => goTo('situation'), 180);
});

// --- Экран 2: Ситуация ---

document.getElementById('back-situation').addEventListener('click', goBack);

document.getElementById('situation-options').addEventListener('click', (e) => {
  const btn = e.target.closest('.option-item');
  if (!btn) return;

  state.situation = btn.dataset.value;
  setTimeout(() => goTo('contact'), 180);
});

// --- Экран 3: Контакт ---

document.getElementById('back-contact').addEventListener('click', goBack);

const inputName    = document.getElementById('input-name');
const inputContact = document.getElementById('input-contact');
const contactError = document.getElementById('contact-error');
const btnSubmit    = document.getElementById('btn-submit');
const submitText   = document.getElementById('submit-text');
const submitIcon   = document.getElementById('submit-icon');
const submitSpinner = document.getElementById('submit-spinner');

// Предзаполнение имени из данных Telegram-пользователя
if (tg?.initDataUnsafe?.user) {
  const user = tg.initDataUnsafe.user;
  const tgName = [user.first_name, user.last_name].filter(Boolean).join(' ');
  if (tgName) inputName.value = tgName;

  // Предзаполнение username
  if (user.username && !inputContact.value) {
    inputContact.value = '@' + user.username;
  }
}

// Сброс ошибки при вводе
inputContact.addEventListener('input', () => {
  contactError.textContent = '';
  inputContact.classList.remove('error');
});

document.getElementById('btn-submit').addEventListener('click', handleSubmit);

async function handleSubmit() {
  const contact = inputContact.value.trim();
  if (!contact) {
    contactError.textContent = 'Укажите Telegram или телефон для связи';
    inputContact.classList.add('error');
    inputContact.focus();
    return;
  }

  state.name = inputName.value.trim();
  state.contact = contact;

  setSubmitting(true);

  try {
    const res = await fetch('/.netlify/functions/send-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        niche: state.niche,
        situation: state.situation,
        name: state.name,
        contact: state.contact,
        source: 'tg-app',
      }),
    });

    if (!res.ok) throw new Error('server error');

    goTo('success');
  } catch {
    contactError.textContent = 'Не удалось отправить. Напиши напрямую в Telegram — ссылка выше.';
  } finally {
    setSubmitting(false);
  }
}

function setSubmitting(loading) {
  btnSubmit.disabled = loading;
  submitText.textContent = loading ? 'Отправляем...' : 'Отправить заявку';
  submitIcon.classList.toggle('hidden', loading);
  submitSpinner.classList.toggle('hidden', !loading);
}

// --- Экран 4: Успех ---

document.getElementById('btn-close').addEventListener('click', () => {
  // Закрываем Mini App если открыт в Telegram
  if (tg?.close) {
    tg.close();
  }
});
