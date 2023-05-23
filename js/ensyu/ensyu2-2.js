"use strict";
let person2;
function introPerson2(args) {
    if (args.age >= 0) {
        console.log(args.name + "さんは" + args.age + "歳です。");
    }
    else if (args.age < 0) {
        console.log(args.name + "さんは年齢非公表です。");
    }
}
introPerson2({ name: 'aaa', age: -1 });
