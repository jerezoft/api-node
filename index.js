//var autos =new Array ("auto-uno","auto-dos","auto-tres","auto-cuatro")
//var autos = ["moto-1","moto-2","mote-3","moto-4"]

var moneda = new Array();
moneda["uno"] = "dolar";
moneda["dos"] = "euro";
moneda["tres"] = "peso";
//document.write(moneda.dos)
//document.write(moneda[dos]); // => document.write(moneda.dos)
// for(var i=0,auto = autos.length;i<auto;i++){
//   document.write(autos[i]+"<br>")
// }
// Arrays Multidimencionales
var usuario = [["pepe",23,"rojo"],["pedro",34,"amarillo"],["manuel",30,"verde","jerez"]]

for(var i=0,usu = usuario.length;i<usu;i++){
    for (var j = 0,len = usuario[i].length; j < len; j++) {
          document.write(usuario[i][j]+"<br>")
    }
    document.write("------------------------------------<br>")
}
