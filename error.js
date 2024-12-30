let validJSON = '{"name":"daniel","age":16,"interest":"programming"}'
let invalidJSON = 'this is not a JSON';

const JSONchecker = (json) => {
    
    try{
        let a = JSON.parse(json)
        console.log(` this JSON is valid `)
    } catch(e){
        console.log(`this JSON is invalid because \n ${e}`);
    } finally{
    console.log("program execution compelted");
    }
}

JSONchecker(validJSON); // checks the valid JSON
JSONchecker(invalidJSON); // checks the invalid JSON