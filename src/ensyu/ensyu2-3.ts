let person3: {
    name: string,
    age: number,
    ageInput: boolean
}

function introPerson3(args: { name: string; age: number; ageInput: boolean}): void {

    if(args.ageInput){
        if(args.age>=0){
            console.log(args.name+"さんは"+args.age+"歳です。")
        }else if(args.age<0){
            console.log(args.name+"さんは年齢非公表です。")
        }
    } else{
        console.log(args.name+"さんは年齢未入力です。")
    }
    }
    
    introPerson3({ name: 'aaa', age: 0, ageInput: false })