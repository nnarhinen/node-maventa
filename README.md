Introduction
============

Node.js client for Maventa SOAP api.


Installation
============

`npm install node-maventa`

Usage
=====

```js
var Maventa = require('node-maventa');

var client = new Maventa(vendorApiKey, apiKey, companyUUID);

client.helloWorld().then(function(resp) {
  console.log(resp);
}).done();
```


License
=======

The MIT license
