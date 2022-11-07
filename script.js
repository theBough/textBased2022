var enterBtn = document.getElementById("myText");

enterBtn.addEventListener("keyup", function(event)
  {
    event.preventDefault;
    if(event.keyCode === 13){
      console.log("hello")
    }
  });
