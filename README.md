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

Implemented methods call atm
============================

 * [hello_world](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x1a1f1c30): `client.helloWorld()`
 * [company_show](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x1ee3aa50): `client.companyShow()`
 * [invoice_list_inbound_between_dates](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x1a1f5a50): `client.invoiceListInboundBetweenDates(startDateObj, endDateObj)`
 * [inbound_invoice_show](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x1ee66570): `client.inboundInvoiceShow(id, downloadAttachments, xmlFormat)`
 * [invoice_create](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x14f96a20): `client.invoiceCreate(invoiceData)`
 * [invoice_show](http://maventa.com/verkkolaskutus/maventa-api/api-versions/api-v1-1-documentation/#op.id0x1e484150): `client.invoiceShow(id, downloadAttachments, xmlFormat)`
 * collection_send: `client.invoiceShow(id, downloadAttachments, xmlFormat)` Not in maventa API documentation


Method calls will we implemented as I need them myself. Contributions as pull requests welcome.

License
=======

The MIT license
