function toUpper(string){
    let output = "";
    for(let index in string){
        if(index == 0 && string.charCodeAt(0)>=97 && string.charCodeAt(0) <= 122){
            output += String.fromCharCode(string[index].charCodeAt(0) - 32) ;
        }else{
            output += string[index] ;
        }
    }
    return output;
}

console.log(toUpper("tahmasious"))