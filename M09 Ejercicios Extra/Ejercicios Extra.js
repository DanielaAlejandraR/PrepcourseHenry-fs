/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   const newArray =[];
   for(let key in objeto){
      const miniArray =[key, objeto[key]];
      newArray.push(miniArray);
   }
   return newArray
}
// const mainArray=[]
// for(let i=0; i <object.keys(objeto).length; i++){
// mainArray.push(Object.keys(objeto)[i], objeto[Object.keys(objeto)[i]]]);
//}
// return mainArray; 

//OTRA SOLUCIÓN
//var array=[];
//for(x in objeto){
// array.push([x, objeto[x]]);
//}
// return array;

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj = {}

   // const sortedString = string.split("").sort();
   for(let letter of string){
      if( obj.hasOwnProperty(letter)) obj[letter] += 1
      else{
         obj[letter]=1
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minus ="";
   let mayus ="";

   const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz"

   for (let letter of string){
      if(MINUSCULAS.includes(letter)) minus += letter;
      else mayus += letter
   }
   return mayus + minus;
}
// let minus ="";
// let mayus="";
// for (let letter of string){
// if(letter === letter.toUpperCase()) mayus += letter;
// else minus += letter;
// return mayus + minus;

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let palabras =frase.split(" ");// separamos cada palabra en partes de un array 
   let reverseWords = palabras.map((elem) => {
      let res  ="";
      for(let i=elem.length-1; i>=0; i--){
         res = res + elem[i];
      }
      return res;
   });
   return reverseWords.join(" ")
}
 //let palabras =frase.split(" "); --separamos cada palabra por letras
 //let array=[]
 //nuevafrase.forEach(element) =>{
 // array.push(element.split("").reverse().join(""));
//});
//let string= array.join(" ");
// return string;  
// }

//OTRA SOLUCION 
//let arrayFrase= frase.split(" ") 
// let fraseEspejo =[]
// for( let i=0; i<arrayFrase.length; i++){
//  let espejo = arrayFrase[i].split("").reverse().join("")
// fraseEspejo.push(espejo)
//} 
//return fraseEspejo.join(" ")

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let arr = String(numero).split("");
  let rigth = null;
  let left = null;

  if(arr.length % 2 === 0){
   left = arr.slice(0, arr.length/2);
   rigth = arr.slice(arr.length/2);
  }
  if(arr.length % 2 === 1){
   left = arr.slice(0, arr.length -1/2);
   rigth = arr.slice(arr.length +1 /2);
  }
  for(let i=0; i<arr.length; i++){
   if(arr[i] !== arr[arr.length -1 -i]){
      return "No es capicua";
   }
  }
  return "Es capicua";
}

//OTRA SOLUCION                        [1, 2, 3]
//              Pasa numero a string  separa en array     une el string
// let nuevonumero= numero.toString().split("").reverse().join("");
                                             // voltea el array
// if(nuevonumero === numero){
// return  "Es capicua";
// else return "No es capicua";  
//}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let res= "";
   let letras= "abc";

   for(let i=0; i<string.length; i++){
      if(!letras.includes(string[i])){
         res += string[i];
      }
   }
   return res;
}
// let array=[]
// for(let i=0; i<string.length; i++){
// if(string[i] != "a" && string[i] != "b" && string[i] != "c" &&){
// array.push(string[i]);
// }
// }
// let stringjunto = array.join("");
// return stringjunto;

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i = 0; i < arrayOfStrings.length -1; i++) {
      for (let j = i; j < arrayOfStrings.length; j++){
         if(arrayOfStrings[i].length> arrayOfStrings[j].length){
            let temp=arrayOfStrings[i]
            arrayOfStrings[i]=arrayOfStrings[j]
            arrayOfStrings[j]= temp
         }
      }
   }
   return arrayOfStrings
}

//var arr = arrayOfStrings;
//for(var i=0; i< arr.length; i++){
//   var comparador = arr[i];
//   j =i-1;
//   while(j>0 && comparador.length < arr[j].length){
//      arr[j+1] = arr[j]
//      j--
//   }
//   arr[j+1] = comparador;
//}
//return arr;


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const array3= []
   for (let i = 0; i < array1.length; i++) {
      const element1 = array1[i];
      for (let j = 0; j < array2.length; j++) {
         const element2 = array2[j];
         if(element1 === element2){
            array3.push(element1)
         }
      }
   }
   return array3
}

// var resultado=[];
// var set= new Set(array1);
// for (let i = 0; i < array1.length; i++) {
// if(set.has(array2[i]){
// resultado.push(array2[i]);
// };
// };
// return resultado;


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
