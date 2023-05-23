"use strict";
let person3;
function introPerson3(args) {
    if (args.ageInput) {
        if (args.age >= 0) {
            console.log(args.name + "さんは" + args.age + "歳です。");
        }
        else if (args.age < 0) {
            console.log(args.name + "さんは年齢非公表です。");
        }
    }
    else {
        console.log(args.name + "さんは年齢未入力です。");
    }
}
introPerson3({ name: 'aaa', age: 0, ageInput: false });
