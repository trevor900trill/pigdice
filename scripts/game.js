//BUSIINESS LOGIC
//Easy logic

//USER INTERFACE LOGIC
$(document).ready(function(){
  var checkLvl = sessionStorage.getItem("level");
  if(checkLvl === "easy")
  {
    //the functionality for easy goes here;
    alert("this is super easy");
    var name = prompt("What is you're name?");
    document.getElementsByClassName("playername")[0].textContent = name;
    document.getElementsByClassName("levelof")[0].textContent = "  LEVEL : EASY";
  }
  else if(checkLvl === "hard")
  {
    //the functionality for hard goes here
    alert("this is super hard");
  }
  else
  {
    //an error occured
    alert("an error!! did you choose a difficulty level?");
  }
});
