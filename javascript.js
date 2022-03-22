//
// function manejarClick(){
//   alert("Me has hecho click");
// }
//
// //ahora le añado al elemento h1 una oreja que escucha a ver si se produce un click sobre el h1
// document.querySelector("h1").addEventListener("click",manejarClick);
// document.querySelector("h1").addEventListener("mouseout",function noTeVayas(){
//   alert("Porfa, no te quites de encima mio");
// });
//quiero añadir ahora el elventlistener a todos los botones para que me avise que le hacen click a cualquiera de ellos
//selecciono y guardo todos los botones en un array
//averiguo la longitud del array, o sea, el número de botones que había
var arrayConLosBotones=document.querySelectorAll(".caja");
var numeroDeBotones=arrayConLosBotones.length;
//ahora recorro uno por uno los botones, usando un bucle de tipo "for" y en cada repetición añado un eventlistener
for(var i=0;i<numeroDeBotones;i++){
  arrayConLosBotones[i].addEventListener("click",function tocarTom1(){

   // alert(this.innerHTML);
   //extraemos la letra del boton, para saber que sonido reproducir
   //ahora uso la letra en un switch para reflejar los siete casos posibles
   var letraBoton=this.innerHTML;
   switch(letraBoton){
     case "w": var tom1=new Audio("sonidos/tom-1.mp3");
     tom1.play();
     break;
     case "a": var tom2=new Audio("sonidos/tom-2.mp3");
     tom2.play();
     break;
     case "s": var tom3=new Audio("sonidos/tom-3.mp3");
     tom3.play();
     break;
     case "d": var tom4=new Audio("sonidos/tom-4.mp3");
     tom4.play();
     break;
     case "j": var tom5=new Audio("sonidos/snare.mp3");
     tom5.play();
     break;
     case "k": var tom6=new Audio("sonidos/crash.mp3");
     tom6.play();
     break;
     case "l": var tom7=new Audio("sonidos/kick-bass.mp3");
     tom7.play();
     break;
   }
  });
}
