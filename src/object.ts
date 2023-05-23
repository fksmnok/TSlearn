// let obj: {
//     strProp: string,
//     numProp: number,
//     boolProp: boolean
// } = {
//     strProp: 'aaa',
//     numProp: 0,
//     boolProp: true
// }


const obj2 = {
    strProp: 'aaa',
    numProp: 0,
    boolProp: true
}
//delete obj2.boolProp

let obj3: {
    strProp: string,
    numProp: number,
    boolProp?: boolean
} = {
    strProp: 'aaa',
    numProp: 0,
    boolProp: true
}
delete obj3.boolProp
//obj.numProp = 111

function log(argObj: {strProp: string; numProp: number; boolProp: boolean;}): void{
    console.log(argObj.strProp)
    console.log(argObj.numProp)
    console.log(argObj.boolProp)
}

log({strProp: 'bbb', numProp: 555, boolProp: false})
//log(obj)