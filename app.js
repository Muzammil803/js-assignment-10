//                         assignment 10
// =========================================================================== 

// function telltime(){
//     var date = new Date()
//     document.write(date)
// }
// telltime()
// ====================================
// var firstname =prompt("enter first name")
// var lastname =prompt("enter last name")
// function fullnama(){
//     var fulname = firstname+" "+ lastname
//     document.write(fulname)
// }
// fullnama()
// =================================================
// var input1 = +prompt("enter a num")
// var input2 = +prompt("enter a num")
// function ans(){
//     return input1+input2
// }
//  document.write(ans())
// ===========================================
// var input1  = +prompt("enter a num")
// var input2  = +prompt("enter a num")
// var operator = prompt("enter a operator like : +,-,*,/")

// function calc(){
//     if (operator==="+"){
//         alert( input1+input2)
//     }else if (operator==="-"){
//         alert( input1-input2)
//     }else
//     if (operator==="*"){
//         alert( input1*input2)
//     }else 
//     if (operator==="/"){
//         alert( input1/input2)
//     }
// }
// calc()
// =================================================

// function square(x){
//     alert(x*x)
// }
// square(3)
// ========================================================

// var a = +prompt("starting number")
// var b = +prompt("ending number")

// function counter(){
//     for(var i =a; i<=b; i++){
// console.log(i)
        
//     }
// }
// counter()
// // ============================================================

// var input =+prompt("number")
// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num =num* i;
//     }
//     return num;
//   }
//   alert(factorialize(input));
// ============================================================

// var base =+prompt("enter base of a triangle")
// var perp =+prompt("enter perpendicular of a triangle")

// function hypsq(){
//     return (base*base)+(perp*perp)
// }
// function hyp(){
// return Math.sqrt(hypsq())
// }
// alert(hyp())
// ======================================================

//  var name =prompt("enter a word")
// for(var i = 0 ; i<name.length;i++){
// var farword=name.slice(i,i+1)    
// }

//  for(var i = name.length-1 ; i>=0; i--){
// var reverse = name.slice(i,i+1)
// }
// if (farword===reverse){
//     alert("its palindram")

// }else{
//     alert("its not palindram"
// }

// ================================================
// function area(x,y){
  
//         return x*y;
// }
// console.log(area(2,4))
// ====================================================
// var sentence = "muy name is muzammil"
// var arr=sentence.split(" ");


// for(var i = 0; i < arr.length; i++ ){
//      arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
// }
// var ans = arr.join(" ")
// console.log(ans)

// ============================================

// function longestWord(text){

// var text1=text.split(" ")

// var word = 0
// for (var i = 0;i<text1.length; i++ ){
//     if (text1[i].length>word){
//         word = text1[i].length

//     }

// }
// for(var i = 0 ; i <text1.length; i++){
//     if (text1[i].length===word){
//        console.log( text1[i].slice(0))
//     }
// }}

// longestWord(  "i am studing softwere  ")
// =============================================================
// calc("my name is muzammil","m")
// function calc(sentence,letter){

//  var sentenceArray=sentence.split("")
// //  console.log(sentenceArray)
//     var occur = 0
//     for (var i =0; i <sentenceArray.length ; i++){
//         if (sentenceArray[i]===letter){
//             occur=occur+1
            
//         }
//     }
// console.log(occur)
// }
// =======================================================
// function circumference(r){
//     var calc = 2*3.142*r
//     alert(" The Circumference of given radius of a circle is : "+ calc.toFixed(2))
// }
// circumference(3)
// function area(r){
//     var calc =3.14*r*r
//     alert ("area of given radius of circle is" + calc.toFixed(2))
// }
// area(3)
