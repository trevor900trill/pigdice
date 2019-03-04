//BUSIINESS LOGIC
//easy LOGIC
//rolls only once then stops
var choice = ["stop","continue"];
var easyroll = () => {
  //guess a number btn 1 - 6
  var num = Math.floor(Math.random()*6);
  if (num === 1 )
  {
    //user scores nothing anf=d has to hold;
    alert("no reroll");
  }
  alert(num);
};

//click handler
var gamemode = () => {
  var checkLvl = sessionStorage.getItem("level");
  if(checkLvl === "easy")
  {
    easyroll();
  }
  else
  {

  }
};
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
