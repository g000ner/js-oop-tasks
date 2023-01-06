"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const elems = fio.split(' ');
    return `${elems[1]} ${elems[0]}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return array.filter((item, pos) => {
        return array.indexOf(item) == pos;
    });
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return (max / min);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    dictionary;

    constructor() {
        this.dictionary = new Map();
    }

    add(word, description) {
        if(typeof word !== 'string' || typeof description !== 'string') {
            return false;
        }

        if(word && description) {
            this.dictionary.set(word, description);
            return true;
        } else {
            return false;
        }
    }

    delete(word) {
        if(this.dictionary.has(word)) {
            this.dictionary.delete(word);
            return true;
        } else {
            return false;
        }
    }

    view(word) {
        if(this.dictionary.has(word)) {
            const wordDescription = this.dictionary.get(word);
            return `${word} - ${wordDescription}`;
        } else {
            return `no word ${word} founded in the dictionary`;
        }
    }

    toString() {
        let result = ''
        this.dictionary.forEach((val, key) => {
            result += `${key} - ${val}\n`;
        });
        return result;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};