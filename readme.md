# sugar-xhr

## Usage

```
import { post } from 'sugar-xhr'
let options =  { headers: { 'X-Foo': 'bar' } }

post('http://foobar.com', { foo: 'bar' }, opts).then(function(resp) {
	console.log(resp.body)
})
```

```
import get from 'sugar-xhr/get'

get('http://google.com').then(function(resp) {
	console.log(resp.text)
})
```

## Methods

`get(url: String, data?: PlainObject, opts?: PlainObject)`

Using the `data` parameter will encode the object into the url's querystring.
Options are passed directly to superagent. 

`post(url: String, data?: PlainObject, opts?: PlainObject)`

`put(url: String, data?: PlainObject, opts?: PlainObject)`

`del(url: String, opts?: PlainObject)`