type person4 = {
    name: string,
    age: number
}

let maxAge: number

let ary: person4[] = [
    { name: 'abc',age: 10 },
    { name: 'def', age: 18 },
    { name: 'ghi', age: 5 },
    { name: 'jkl', age: 22 },
];

function classifyPeopleByAge1(args:  person4[], maxAge: number): string[] {
    let arr1: string[] = [];
    for (let i = 0; i < args.length; i++){
        if(args[i].age <= maxAge){
            arr1.push(args[i].name)
        }
    }
    return arr1;
}

console.log(classifyPeopleByAge1([
    { name: 'abc',age: 10 },
    { name: 'def', age: 18 },
    { name: 'ghi', age: 5 },
    { name: 'jkl', age: 22 }], 18))