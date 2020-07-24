var cell=document.querySelectorAll("td");
var restart=document.querySelector("#b");


function change() {
  if(this.textContent===" ")
      this.textContent="X"
  else if(this.textContent==="X")
      this.textContent="0"
  else{
    this.textContent=""
  }
}
function refreshing() {

  for (var i=0;i< cell.length;i++)
  {
      cell[i].textContent=" ";
  }
}
restart.addEventListener("click",refreshing);
for(var i=0;i<cell.length;i++)
{
  cell[i].addEventListener("click",change);
}
