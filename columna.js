function asignar(){
var a1 = document.getElementById("ancha");
		  a1.onclick = function(){
		  cambio('completo')
		  return false;
		  }
var a2 = document.getElementById("estrecha");
		  a2.onclick = function(){
		  cambio('estrecho')
		  return false;
		  }
}
function cambio(clase){
dataLayer=document.getElementById('contenedor');
if(dataLayer.className!=(clase)) dataLayer.className=(clase);
return false;
}
window.onload = function(){
		  asignar();
		}