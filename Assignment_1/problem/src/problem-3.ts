{
  type Tstring = string;
//   const sentence: Tstring = "TypeScript is great. I love TypeScript!";
  const sentence: Tstring = "I love typescript";
//   const word: Tstring = "typescript";
  const word: Tstring = "typescript";
  const countWordOccurrences = (sentence: Tstring, word: Tstring): number => {
    let result : number = 0;
    const arraySentence = sentence.replace(/[!.]/g, "").split(" ");
    for (let i = 0; i < arraySentence.length; i++) {
    if (arraySentence[i].toLowerCase() === word.toLocaleLowerCase()) {
        result = result + 1;
    }
    }
    return result;
  };
 const result =  countWordOccurrences(sentence, word);
 console.log(result)
}
