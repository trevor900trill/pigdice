//BUSIINESS LOGIC
//Easy logic

//USER INTERFACE LOGIC
$(document).ready(function(){
  var checkLvl = sessionStorage.getItem("level");
  if(checkLvl === "easy")
  {
    //the functionality for easy goes here;
    var name = prompt("What is you're name?");
    document.getElementsByClassName("playername")[0].textContent = name;
    document.getElementsByClassName("levelof")[0].textContent = "  LEVEL : EASY";

  }
  else if(checkLvl === "hard")
  {
    //the functionality for hard goes here
    var name = prompt("What is you're name?");
    document.getElementsByClassName("playername")[0].textContent = name;
    document.getElementsByClassName("levelof")[0].textContent = "  LEVEL : DIFFICULT";
  }
  else
  {
    //an error occured
    var name = prompt("What is you're name?");
    document.getElementsByClassName("playername")[0].textContent = name;
    document.getElementsByClassName("levelof")[0].textContent = "ERROR";
  }
});
