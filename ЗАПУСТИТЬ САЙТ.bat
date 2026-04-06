@echo off
SET PATH=C:\Program Files\nodejs;%PATH%
echo Запускаю сайт...
echo Когда появится адрес - открой браузер и введи localhost:5173
echo Не закрывай это окно!
echo.
cd /d "%~dp0"
npm run dev
pause
