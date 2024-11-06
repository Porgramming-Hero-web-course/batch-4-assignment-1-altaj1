{
    type Tarray = number[];
    const duplicatesArray :Tarray = [1, 2, 2, 3, 4, 4, 5];
    const removeDuplicates =(array:Tarray) : Tarray =>{
        const result :Tarray = []
        for (let i = 0; i < array.length; i++) {
            let isDuplicates : boolean = false;
            for (let j = 0; j < array.length; j++) {
                if (array[i] === result[j]) {
                    isDuplicates = true;
                    break;
                }
            }
            if (!isDuplicates) {
                result.push(array[i])
            }
        }
        return result;
    }
   const result =  removeDuplicates(duplicatesArray);
   console.log(result)

}