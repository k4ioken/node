const fs=require("fs");
// fs.writeFileSync("./text.txt","Hello World");
// fs.appendFileSync("./text.txt"," Bye World");

const result=fs.readFileSync("./contacts.txt","utf-8");
//Async read
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})