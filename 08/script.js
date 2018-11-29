let rows=prompt();
let message=' ';
let symbol=prompt();
for(let i=0; i<rows; i++){
    for(let j=i; j<rows; j++){
        message+=' ';
    }
    for( let k=rows; k>=rows-(i*2); k--){
        message+=symbol;
        message+=' ';
    }
    message+='\n';
}
console.log(message);