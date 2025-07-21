let stop=document.getElementById("stop");
let ready=document.getElementById("ready");
let go=document.getElementById("go");
let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
d1.onclick=function(){
    red();
}
d2.onclick=function(){
    yellow();
}
d3.onclick=function(){
    green();
}
function red(){
 d1.style.background="red";
 d2.style.background=" rgb(226, 190, 30)";
 d3.style.background="rgb(226, 190, 30)";
 c1.style.background="red";
 c2.style.background="rgba(7, 6, 12, 1)";
 c3.style.background="rgba(8, 8, 14, 1)";
}
function yellow(){
 d1.style.background="rgb(226, 190, 30)";
 d2.style.background="yellow";
 d3.style.background="rgb(226, 190, 30)";
 c1.style.background="rgba(22, 22, 26, 1)";
 c2.style.background="yellow";
 c3.style.background="rgba(9, 6, 22, 1)";
}
function green(){
 d1.style.background="rgb(226, 190, 30)";
 d2.style.background=" rgb(226, 190, 30)";
 d3.style.background="green";
 c1.style.background="rgba(19, 18, 24, 1)";
 c2.style.background="rgba(15, 14, 20, 1)";
 c3.style.background="green";
}