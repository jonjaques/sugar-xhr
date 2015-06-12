import request from '../lib/request'
import u from 'url'

export default function(url, query = null, opts) {
  let parsed = u.parse(url);
  if (query && Object.keys(query).length) {
    if (!parsed.query) { parsed.query = {} }
    Object.keys(query).forEach((key)=> {
      parsed.query[key] = query[key]
    })
    url = u.format(parsed);
  }
  return request('get', url, null, opts);
}