{
type Tarray = number[];
const array : Tarray = [1, 2, 3, 4, 5];
const sumArray =(array: Tarray) : number =>{
    let result : number = 0;
    for (let i = 0; i < array.length; i++) {
        result = result + array[i] ;
        
    }
    return result
}
 const result = sumArray(array);
 console.log(result)

}