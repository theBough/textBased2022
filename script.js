var enterBtn = document.getElementById("myText");

enterBtn.addEventListener("keyup", function(event)
  {
    event.preventDefault;
    if(event.keyCode === 13){
      promptTheUser();
    }
  });

function promptTheUser(){
  var input = document.getElementById("myText").value;
  document.getElementById("output").innerHTML += ">>" + input + "</br>"
}
