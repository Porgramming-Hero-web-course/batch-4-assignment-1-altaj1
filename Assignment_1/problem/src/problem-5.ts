{
    type Tperson = {
        name:string;
        age: number;
    }
    const getProperty =  <T , K extends keyof T >(obj: T, key: K): T[K]=>{
        return obj[key];
    }
    const person :Tperson ={
        name: "Alice", 
        age:30
    } 
    const result = getProperty(person, "name");
    console.log(result)
}