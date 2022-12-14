var enterBtn = document.getElementById("myText");
var output = document.getElementById("output");
var goBool = false;
var inspectBool = false;
//these two values should put my player in the Foyer
var activeRow = 0;
var activeColumn = 1;
var inventory = ["You have the follow:<br>"];

enterBtn.addEventListener("keyup", function(event)
  {
    event.preventDefault;
    if(event.keyCode === 13){
      control();
    }
  });
function control(){
  //check to see if any commands in the game need to be resolved
  var input = document.getElementById("myText").value;
  document.getElementById("myText").value = ""
  if(goBool && roomRestrictions(input)){
    resolveDirection(input);
  }else if(inspectBool){
    resolveInspect(input);
  }else{
    promptTheUser(input)
  }
  
}// 
function promptTheUser(input){
  
 output.innerHTML += ">>" + input + "</br>"
  switch(input){
      case"g":
        output.innerHTML += "What direction would you like to go?</br><small>(e-East s-South w-West n-North)</br>"
        goBool = true
      break
      case"m":
         output.innerHTML += "Here is a map</br>"
      break
      case"i":
        output.innerHTML += "What would you like to inspect?<br>"
        inspectBool = true;
        break
      case"c":
        for(i=0 ; i<inventory.length ; i++){
          output.innerHTML += inventory[i]
        }//end for loop
      break
    default:
      output.innerHTML += "I don't recognize that command</br>"
  }//end switch
  output.scrollTop = output.scrollHeight
}//end promptTheUser
function roomRestrictions(input){
  /*This function will a recieve a direction letter
  of either n,e,s,w if we need restrict a room 
  we will do it here.
  Add an if-Block for each restriction you want.
  */
  if(rooms[activeRow][activeColumn].name == "Foyer" && input =="e"){
    /*this means they are trying to go East from the Foyer
    I don't want them to be able to do this.
    */
    output.innerHTML += "<br> Sorry the door is locked.<br>";
    output.scrollTop = output.scrollHeight
    goBool  =false;  
    return false;
  }
  return true;
}//
function resolveDirection(input){
  switch(input){
    case "e":
      activeColumn += 1;
    break
    case"w":
      activeColumn -= 1;
    break
    case "n":
      activeRow -= 1;
    break
    case"s":
      activeRow += 1;
    break
  }//end switch
  output.innerHTML += rooms[activeRow][activeColumn].description;
  goBool = false;
}
function resolveInspect(input){
  switch(input){
      //for every object in your game you need a 'case' and a matching 'break'
    case "sword":
      output.innerHTML += "You notice a nice sword, you pick it up and add it to your inventory</br>";
      inventory.push("Sword<br>")
    break;
    default:
      output.innerHTML += "Sorry I Don't recognize that item</br>";
  }//end switch
  inspectBool = false;
  
}
