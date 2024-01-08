const myFunction = (a: number, b: number): boolean => {
  return a === b;
};

myFunction(1,2)

/////////

class myClass<T>{
    list=[]
    constructor(list){
        this.last=list
    }
    firstElement(){
        return.this.list(0)
    }

}
const k = new myClass((true,'sas',34))
k.firstElement()

/////////

type MyTuple