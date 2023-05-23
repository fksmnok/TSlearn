let person: {
    name: string,
    age: number
}

function introPerson(args: { name: string; age: number;}): void {
if(args.age>=0){
    console.log(args.name+"さんは"+args.age+"歳です。")
}
}

introPerson({ name: 'aaa', age: 3 })