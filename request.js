const request = require('request');
const cheerio = require('cheerio');

const callBack = (error, response, html) => {
    console.log(`Response: ${response && response.statusCode}`);
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        allData(html);
    }
};

request('https://souq-today.com/en', callBack);

const allData = (html) => {
    const selTol = cheerio.load(html);
    const souqData = selTol("td");
    const jsonData = [];

    souqData.each((index, element) => {
        const tdText = selTol(element).text().trim();
        jsonData.push({ [`td_${index + 1}`]: tdText });
    });

    // Convert the array to a JSON object
    const result = {
        data: jsonData
    };

    // Output the JSON object
    console.log(JSON.stringify(result, null, 2));
};
