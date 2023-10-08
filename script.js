const collection = document.getElementsByClassName("grid-item");
console.log(collection.length);
console.log("hi ravi");
document.getElementsByClassName("input").innerHTML="ravi";

for (let i = 0; i < collection.length; i++) {
  if((i+1)%4!=0 && i<13){
console.log(collection[i]);
collection[i].addEventListener("click",function(){
    document.getElementsByClassName("input").innerHTML="ravi";
    collection[i].classList.add('blue');

})
    };

  
}
