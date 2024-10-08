import OneToHundredStream from './readable-stream.js';
import MultiplyByTenStream from './writable-stream.js';
import InverseNumberStream from './transform-stream.js';
import DivisibleByHundredStream from './duplex-stream.js'

//* Apenas readable *//
// new OneToHundredStream()
// .pipe(process.stdout)

//* Readable com Writable *//
// new OneToHundredStream()
// .pipe(new MultiplyByTenStream())

//* Transform dados do Readable e escreve com Writable *//
// new OneToHundredStream()
// .pipe(new InverseNumberStream())
// .pipe(new MultiplyByTenStream())

//* Duplex dados lidos (Readable) e escritos (Writable) *//
// const stream = new DivisibleByHundredStream()
// stream.pipe(stream)
