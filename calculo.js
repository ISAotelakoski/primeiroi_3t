function preguiça(){

let a = 6;
let b = -1;
let c = -12;
let delta = (b*d)-4*a.c;
if(delta < 0){
    console.log("Não tem raíz real");
}
if(delta == 0){
    let x1 = (-b)/(2*a);
    let x2 = x1;
    console.log("x1 = x2" + x1);
}
if(delta > 0){
    let x1 = ((-b) + Math.sqrt(delta))/(2*a);
    let x1 = ((-b) - Math.sqrt(delta))/(2*a);
    console.log("x1 = " + x1 + " x2 = " + x2);
}
}
preguiça();
