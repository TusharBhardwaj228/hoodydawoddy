const close=document.getElementById("close");
const bar=document.getElementById("bar");
const nev=document.getElementById("nevbar");
if(bar){
  bar.addEventListener("click", ()=>{
    nev.classList.add("active");
  })
}
if(close){
  close.addEventListener("click", ()=>{
    nev.classList.remove("active");
  })
}