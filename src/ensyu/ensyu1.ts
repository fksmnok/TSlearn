let calc1: {
    operater: string,
    num1: number,
    num2: number
}

function calc(arg: { operater: string; num1: number; num2: number}): number{
let val = 0;
    if(arg.num1>=arg.num2){
if(arg.operater == '+'){
val = arg.num1+arg.num2
}else if(arg.operater == '-'){
    val = arg.num1-arg.num2
    }else if(arg.operater == '*'){
        val = arg.num1*arg.num2
        }else if(arg.operater == '/'){
            val = arg.num1/arg.num2
            }else{
                val = 0;
            }

    }
    return val;
}

calc({ operater: 'g', num1: 3, num2: 3 })
//calc(obj)