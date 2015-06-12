import request from '../lib/request'

export default function(url, data, opts) {
  return request('post', url, data, opts)
}