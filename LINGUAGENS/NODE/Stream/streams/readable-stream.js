import { Readable } from 'node:stream'

export default class OneToHundredStream extends Readable {
  index = 1;
 _read(){
  var i = this.index++;
  setTimeout(()=>{
    if(i>100){
   
      this.push(null)
    }else{
      const buf = Buffer.from(String(i))
      this.push(buf)
    }
  }, 1000)
 }
}