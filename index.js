var xmlrpc = require('xmlrpc'),
    Q = require('q');

function Maventa(vendorApiKey, apiKey, companyUuid, testing) {
  this.vendorApiKey = vendorApiKey;
  this.apiKey = apiKey;
  this.companyUuid = companyUuid;
  this.testing = !!testing;
  this.apiUrl = this.testing ? 'testing.maventa.com' : 'secure.maventa.com';

};

Maventa.prototype.getClient = function() {
  return this.client || (this.client = xmlrpc.createSecureClient({ host: this.apiUrl, port: 443, path: '/apis/denver/api'}));
};


Maventa.prototype.helloWorld = function() {
  var cl = this.getClient();
  var defer = Q.defer();
  cl.methodCall('hello_world', [], function(err, value) {
    if (err) return defer.reject(err);
    defer.resolve(value);
  });
  return defer.promise;
};

Maventa.prototype.callAuthenticatedAction = function(action) {
  console.log(this.apiUrl);
  var defer = Q.defer(),
      cl = this.getClient(),
      parms = [{
        vendor_api_key: this.vendorApiKey,
        user_api_key: this.apiKey,
        company_uuid: this.companyUuid
      }].concat(Array.prototype.slice.call(arguments, 1));
  cl.methodCall(action, parms, function(err, value) {
    if (err) return defer.reject(err);
    defer.resolve(value);
  });
  return defer.promise;
};

Maventa.prototype.companyShow = function() {
  return this.callAuthenticatedAction('company_show');
};

module.exports = Maventa;
