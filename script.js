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
  output.scrollTop = output.scrollHeight
}
