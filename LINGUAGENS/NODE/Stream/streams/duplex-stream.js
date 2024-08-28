import { Duplex } from 'node:stream';

export default class DivisibleByHundredStream extends Duplex {
	index = 1;
	i;
	_read() {
    if (this.i > 100) {
      this.push(null);
      return;
    }
		this.i = this.index++;
    this.push(Buffer.from(String(this.i)));
	}

	_write(chunk, encoding, callback) {
		if (this.i % 100 === 0) {
			console.log(Number(chunk.toString()));
		}
    callback();
	}
}
