## Description

Tasks: 
1. Нужно визуально показать иерархию жителей.

- Москва 
- - Мытищи
- - - Ленина
- - - - Петр
- - - - Анна

- Город
- - Район
- -  - Улица
- -  - - Житель 1
- -  - - Житель 2
- -  - Улица 2
- -  - - Житель 3
- -  - - Житель 4

2. Предусмотреть возможность конфигурации цепочки иерархии. Например в данных у всех
жителей появится страна или дом. И мы должны уметь добавить этот уровень в конфигурации.
Изначальная цепочка:

Город - Район - Улица

Возможные варианты изменений цепочки:

Страна - Город - Район - Улица - Дом
Город - Улица

3. По наведению на жителя показать тултип в формате: Москва, 10000000 жителей (поле data)
Главная задача - реализовать описанный выше алгоритм и в любом понятном виде отобразить
иерархию.

Задача второго порядка - сделать мини-приложение на любом FE-фреймворке (в идеале с
применением BEM в стилях). C бекэндом и базой.
Идеально, если это будет докер контейнер, который мы сможем запустить у себя и сразу
попробовать.

## Development requirement:
* express
* postgresql
* graphql

## Stack: 
* express
* Sequelize
* postgresql
* docker-compose
* graphql

## Installation

```bash
$ npm install
```


## Running the backend app

Endpoint example:
get http://localhost:3000/getCitizens?city=Москва г.&district=Пресненский р-н&street=Гашека ул.

I used postmen for testing this route.
Be sure to pass the value of the city.

# Running the docker-compose container with image database

```bash
# up database container
$ docker-compose up
# stop database container
$ docker-compose down -v
```

# Migration management commands

```bash
# up migration
$ knex migrate:latest
# rollback migration
$ knex migrate:rollback
# run seeds
$ knex seed:run
```

