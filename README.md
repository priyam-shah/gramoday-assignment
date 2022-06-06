# gramoday-assignment

The aim of this repository is to submit assignment for gramoday. It is an express JS API web-service which captures user contributed reports and returns an aggregate report in response. Each report consists of a market-commodity combination for which prices in the Mandi(Market) are provided in a certain unit (along with their conversion factor to base unit - Kg). The API combines the reports per market-commodity by calculating the average of the report prices.

## How to run the program

```
npm install --save express
npm install body-parser
npm install --save-dev nodemon
``` 
#### Run `node index.js`
Requirements: `postman` for making  POST, DELETE, PATCH requests
***

Adding data via POST request at localhost:5050/reports 
![alt text](https://github.com/priyam-shah/gramoday-assignment/blob/main/misc/1.png?raw=true)
***
Fetching data including computed prices of commodoty at localhost:5050/reports/:id
![alt text](https://github.com/priyam-shah/gramoday-assignment/blob/main/misc/2.png?raw=true)

***
Fetching all the data via GET request at localhost:5050/reports
![alt text](https://github.com/priyam-shah/gramoday-assignment/blob/main/misc/3.png?raw=true)

***

>Thankyou🎆


