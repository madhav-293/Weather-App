const toggle=document.getElementById("icon1");
const body=document.querySelector("body");
const da=document.querySelectorAll("div");
const aa=document.querySelectorAll("a");
const tdt=document.querySelectorAll("td");
const tht=document.querySelectorAll("th");
const h=document.querySelectorAll("h3");
const i=document.querySelectorAll("input");
const s=document.querySelectorAll("span");
toggle.addEventListener('click',function(){
this.classList.toggle('bi-moon-stars-fill');
if(this.classList.toggle('bi-sun-fill')){

  for(hl of h){
    hl.style.color="black";
    hl.style.transition="2s";
  }
  for(sl of s){
    sl.style.color="black";
    sl.style.transition="2s";
  }
  for(il of i){
    il.style.color="black";
    il.style.transition="2s";
  }
    for(td of tdt){
      td.style.color="black";
      td.style.transition="2s";
    }
    for(th of tht){
      th.style.color="black";
      th.style.transition="2s";
    }
    body.style.background='white';
    body.style.color='black';
    for(d of da){
      d.style.color='black';
      d.style.background='white';
      d.style.transition='2s';
    }
    for(a of aa){
    a.style.color='black';
    a.style.transition='2s';
    }
    body.style.transition='2s';
}
else{
  for(sl of s){
    sl.style.color="white";
    sl.style.transition="2s";
  }
  for(il of i){
    il.style.color="white";
    il.style.transition="2s";
  }
  for(hl of h){
    hl.style.color="white";
    hl.style.transition="2s";
  }
  for(td of tdt){
      td.style.color="white";
      td.style.transition="2s";
    }
  for(th of tht){
      th.style.color="white";
      th.style.transition="2s";
    }
    body.style.background='black';
    body.style.color='white';
    for(d of da){
      d.style.color='white';
      d.style.background='black';
      d.style.trasition='2s';
    }
    for(a of aa){
    a.style.color='white';
    a.style.transition='2s';
    }
    body.style.transition='2s';
}
})
