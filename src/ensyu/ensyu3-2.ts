type person5 = {
  name: string;
  age: number;
};

let age: {
  maxAge: number;
  minAge: number;
};

let person5 = [];

function classifyPeopleByAge2(
  args: person5[],
  args2: { maxAge?: number; minAge?: number }
): string[] {
  let arr1: string[] = [];

  if (args2.minAge != undefined && args2.maxAge != undefined) {
   
      for (let i = 0; i < args.length; i++) {
        if (args[i].age >= args2.minAge && args[i].age <= args2.maxAge) {
          arr1.push(args[i].name);
        }
      }
    
  } else if (args2.minAge != undefined) {
    for (let i = 0; i < args.length; i++) {
      if (args[i].age >= args2.minAge) {
        arr1.push(args[i].name);
      }
    }
  } else if (args2.maxAge != undefined) {
    for (let i = 0; i < args.length; i++) {
      if (args[i].age <= args2.maxAge) {
        arr1.push(args[i].name);
      }
    }
  } else {
    for (let i = 0; i < args.length; i++) {
      arr1.push(args[i].name);
    }
  }
  return arr1;
}

console.log(
  classifyPeopleByAge2(
    [
      { name: "abc", age: 10 },
      { name: "def", age: 18 },
      { name: "ghi", age: 5 },
      { name: "jkl", age: 22 },
    ],
    { maxAge: 10, minAge: 6 }
  )
);
