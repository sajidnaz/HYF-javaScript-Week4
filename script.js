var hyf06 = ['Zeeshan', 'Anas', 'Sajid', 'Anuradha', 'Gary', 'Marco', 'Ehsan','Haretha','Krishna', 'Mohammad Huq',
'Mohammad Rahman','Samara', 'Vignesh', 'Zoey Zou', 'Mohammad Subhiyeh'];
console.log(hyf06);
function randName(){
  var leng = hyf06.length;
  return Math.floor(Math.random()*leng)
}
var p1 = hyf06[randName()];
var p2 = hyf06[randName()];

if(p1 == p2){
  document.write("First member is : " + p1);
  document.write("<br>");
  document.write("Second member is: " + p2);
  document.write("<br>");
  document.write("Both names are same. So please try again ");
}
else{
  console.log("First member is :" + p1 +"," +"Second member is: " +p2);
  document.write("First member is : " + p1);
  document.write("<br>");
  document.write("Second member is: " + p2);
}
