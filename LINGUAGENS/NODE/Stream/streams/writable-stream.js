import { Writable } from 'node:stream'

export default class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString())*10)
    callback()
  }
}