import { Transform } from 'node:stream';

export default class InverseNumberStream extends Transform{
  _transform(chunk, encoding, callback) {
    const transformedNumber = Number(chunk.toString())*-1;

    callback(null, Buffer.from(transformedNumber.toString()));
  }
}
