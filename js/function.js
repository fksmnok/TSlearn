"use strict";
function f1(strArg) {
    console.log(strArg);
}
const f2 = function (boolArg) { return boolArg; };
const f3 = (numArg) => { return numArg; };
//const f4: (numArg: number) => string = (arg) => {return arg}
f1('aaa');
//f1(111);
