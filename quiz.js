var cat = 0;
var dog = 0;

function tally(){
  for(var i =1; i <6; i++){
    var elem = 'q'+i;
    //console.log(elem);
    //console.log(document.getElementById(elem).getElementsByTagName("input")[1].value);
    if(document.getElementById(elem).getElementsByTagName("input")[1].value == "a"){
      dog+=1;
      //console.log(dog.value);
    }
    if(document.getElementById(elem).getElementsByTagName("input")[1].value == "b"){
      cat+=1;
      //console.log(cat.value);
    }
  }
  output();
}


function output(){
  if(cat<dog){
    document.write("You're a cat person!")
  }
  else if (cat>dog){
    document.write("You're a dog person!")
  }
}

document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault();
  tally();
});
