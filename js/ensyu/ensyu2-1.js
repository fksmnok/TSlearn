"use strict";
let person;
function introPerson(args) {
    if (args.age >= 0) {
        console.log(args.name + "さんは" + args.age + "歳です。");
    }
}
introPerson({ name: 'aaa', age: 3 });
