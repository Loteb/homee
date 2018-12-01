let rows=prompt();
let message=1;
let mas=new Array(rows);
mas[0]=new Array;
for(let i=0; i<rows; i++){
    for(let j=i; j<rows; j++){
        mas[i][j]=message;
        message++;
    }
}
for(let i=0; i<rows; i++){
    for(let j=i; j<rows; j++){
        console.log(mas[i][j]);
    }
}