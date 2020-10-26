function clear(){
    document.getElementById("demo").innerHTML=null;
    document.getElementById("demo2").innerHTML=null;
    document.getElementById("demo3").innerHTML=null;
    document.getElementById("demo4").innerHTML=null;
    document.getElementById("demo5").innerHTML=null;
    document.getElementById("demo6").innerHTML="null";
}

var d = new Date();//new date
function year(){
    document.getElementById("demo").innerHTML="The Year Is" +" "+ d.getFullYear();
}
function month(){
var months =   ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("demo2").innerHTML="The Month Is" +" "+ months[d.getMonth()];
}
function day(){
    document.getElementById("demo3").innerHTML="The Day Of The Month Is"+" "+d.getDate();
}
function hour(){
    document.getElementById("demo4").innerHTML=d.getHours()+" "+"Hours Have Passed Today";
}
function minute(){
    document.getElementById("demo5").innerHTML=d.getMinutes()+" "+"Minutes Have Passed In This Hour";
}
function second(){
    document.getElementById("demo6").innerHTML=d.getSeconds()+" "+"Seconds Have Passed In This Minute"
}
