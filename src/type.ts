type Type1 = {
    prop1: string;
    prop2: number;
    prop3: boolean;
}

interface Type2{
    prop4: boolean;
    prop5: number;
    prop6: string;
}

let valWithType: Type1

valWithType = {
    prop1: 'correct',
    prop2: 1,
    prop3: true
}

let valWithInterface: Type2

// valWithInterface = {
//     prop4: false
// }

// valWithInterface = {
//     prop4: 'incorrect'
// }