var enterBtn = document.getElementById("myText");
var output = document.getElementById("output");

enterBtn.addEventListener("keyup", function(event)
  {
    event.preventDefault;
    if(event.keyCode === 13){
      promptTheUser();
    }
  });

function promptTheUser(){
  var input = document.getElementById("myText").value;
 output.innerHTML += ">>" + input + "</br>"
  switch(input){
      case"g":
        output.innerHTML += "What direction would you like to go?</br><small>(e-East s-South w-West n-North)"
      break
  }//end switch
  output.scrollTop = output.scrollHeight
}//end promptTheUser
