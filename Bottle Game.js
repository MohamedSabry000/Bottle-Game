let textInput = prompt("Enter some names separated with comma `,`");

const findRandom = (text, iteration) => {
    let arrayName = text.split(',');
    let output = [];
    for (let index = 0; index < iteration; index++) {
        const random = Math.floor(Math.random() * arrayName.length);
        
        output.unshift(arrayName[random]);
        arrayName.splice(random, 1);
    }
    
    return output;
}

console.log(findRandom(textInput, 2));
