var xhr = require('../dist');

xhr.get('http://jsonip.com').then(function(resp) {
  console.log('Get: Response', resp.body);
}).catch(function(err) {
  console.log('Get: Error', err)
})