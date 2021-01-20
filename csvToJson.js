let csvToJson = require('convert-csv-to-json');

let contactInput = 'contacts.csv'; 
let contactOutput = 'contacts.json';
let listInput = 'listings.csv';
let listOutput = 'listings.json';

csvToJson.generateJsonFileFromCsv(contactInput,contactOutput);
csvToJson.generateJsonFileFromCsv(listInput, listOutput);

let jsonC = csvToJson.getJsonFromCsv("contacts.csv");
for(let i=0; i<jsonC.length;i++){
    console.log(jsonC[i]);
}

let jsonL = csvToJson.getJsonFromCsv("listings.csv");
for(let i=0; i<jsonL.length;i++){
    console.log(jsonL[i]);
}

csvToJson.parseSubArray('*',',').getJsonFromCsv('contacts.csv');

csvToJson.fieldDelimiter('~').getJsonFromCsv(contactInput);

csvToJson.formatValueByType().getJsonFromCsv(contactInput);

csvToJson.utf8Encoding().getJsonFromCsv(contactInput);

 csvToJson.parseSubArray('*',',').getJsonFromCsv('listings.csv');

 csvToJson.fieldDelimiter('~').getJsonFromCsv(listInput);

 csvToJson.formatValueByType().getJsonFromCsv(listInput);

 csvToJson.utf8Encoding().getJsonFromCsv(listInput);

