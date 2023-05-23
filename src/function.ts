function f1(strArg: string): void{
    console.log(strArg)
}

const f2 = function(boolArg: boolean): boolean {return boolArg}

const f3 = (numArg: number): number => {return numArg}

//const f4: (numArg: number) => string = (arg) => {return arg}

f1('aaa');
//f1(111);