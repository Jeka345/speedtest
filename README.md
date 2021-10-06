# Speedtest для веб сайта

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Jeka345/speedtest/archive/refs/heads/main.zip)

Speedtest для сайта незаменим в том случае если у вас организована видео & аудио трансляция с сайта, из основного:
- Поддержка любой платформы использования;
- Не требуется дальнейшая установка
- Отсуствуют минимальные требования
## Совместимость & Функции
- Полная совместимость с apache2 и nginx без php!
- Наличие перевода всех основных функций;
- Поддержка множественной проверки скорости;

##### Автор [Evgeniy Zolotov] специально для телеграм канала [telegramdevchannel]
##### Открывается только с телеграма который скачен не из плеймаркета
#
> Этот спидтест предназначен в основном для веб сайтов
> а также он идеален будет на тех сайтах где установлена стрименг платформа
> Как вариант Flussonic, Astra
> Скорость замера до серверов рестрим платформы будет точной
> при настройке строки var TestServerip в index.html
> работа спидтеста возможна даже на серверах где вообще нет php и mysql
по сути спидтест независим от любых внешних сред

## Установка

Исходный код требует наличия [Apache2](https://httpd.apache.org/download.cgi)
Или наличия [Nginx](https://nginx.org/download/nginx-1.21.3.zip)

Для систем линукс требуется в случае с apache2
```sh
    sudo apt-get install apache2
    sudo nano /etc/apache2/sites-available/speedtest.conf
    в него ввести следущее 👇
````

```sh
    <VirtualHost *:9999>
    ServerAdmin sendrepomail@gmail.com
    DocumentRoot /var/www/speedtest
    ErrorLog ${APACHE_LOG_DIR}/error-speedtest.log
    CustomLog ${APACHE_LOG_DIR}/access-speedtest.log combined
    </VirtualHost>
`````
## Далее

```sh
    a2ensite speedtest enabled
````
Установка исходного кода с использованием GIT
```sh
    cd /var/www/
`````
git clone [git-repo-url]
Далее просто перезагружаем Apache2 и идем по порту который был вами указан для speedtest, тестируем и используем.

Установка исходного кода без использования GIT ONLY WINDOWS!

````sh
    Скачать ZIP архив: https://github.com/Jeka345/speedtest/archive/refs/heads/main.zip
    Распаковать архив в любую папку, желательно в папку с бинарником nginx или apache
    Путь примерно такой %username\nginx\html
    или C:\Denwer\homee
    Использовать.
``````
   [git-repo-url]: <https://github.com/Jeka345/speedtest.gitt>
   [Evgeniy Zolotov]: <https://t.me/SmallVeins>
   [telegramdevchannel]: <https://t.me/devcm_jeka345old>
   
## ВАЖНО! Исходный код распространяется по свободной лицензии но с сохранением авторских прав, удаление авторских прав запрещено!
