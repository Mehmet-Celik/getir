## Install NPM Packages

> $ npm install

## Start App
> $ npm start

## Environments
    development baseUrl: http://localhost:3000
    production baseUrl: https://getirchallenge.herokuapp.com

## POST ${baseUrl}/record
Request Payload
___

    content-type →application/json; charset=utf-8
    body: {
        "startDate": "2017-02-02", // string
        "endDate": "2018-02-02", // string
        "minCount": 2700, // number
        "maxCount": 3000 // number
    }

Success Response Payload
___

    response: {
        "code": 0,
        "msg": "success",
        "records": ${recordList}
    }

Error Response Payload
___

    response: {
        "code": 1,
        "msg": ${error},
        "records": []
    }

## Test

> $ npm test