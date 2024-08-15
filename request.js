const request =require('request');

const callBack=(error,response,body)=>{
    console.log(`Error:${error}`);
    console.log(`Response:${response && response.statusCode}`);
    console.log(`body: ${body}`);
}
request('http://www.google.com',callBack);