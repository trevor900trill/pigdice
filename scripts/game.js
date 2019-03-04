//BUSIINESS LOGIC
//easy LOGIC
//rolls only once then stops
var userscorelist = [];
var easycomputerroll = [];
var easycomproll = () => {
  var num = Math.floor(Math.random()*6)+1;
  if (num === 1 )
  {
    //user scores nothing anf=d has to hold;
    //function for computer to roll dice
    document.getElementsByClassName('errorstatuscompon')[0].textContent = "";
    document.getElementsByClassName('successstatuscompon')[0].textContent = "roll the dice";
    //hide the button to prevent further clicks
    $(".buttonbox").show();
    //userscores nothing dont push to array;
    addresultcomp();
    playereasyroll();
  }
  else
  {
    //stop it;
    document.getElementsByClassName('errorstatuscompon')[0].textContent = "";
    document.getElementsByClassName('successstatuscompon')[0].textContent = "roll the dice";
    easycomputerroll.push(num);
    var render = document.getElementById("npclive");
    render.innerHTML += "<li>"+num+"</li>";
    $(".buttonbox").show();
    addresultcomp();
  }
};

var playereasyroll = (callback) => {
  //guess a number btn 1 - 6
  var num = Math.floor(Math.random()*6)+1;
  if (num === 1 )
  {
    alert(num);
    addresultuser();
    //user scores nothing anf=d has to hold;
    //function for computer to roll dice
    document.getElementsByClassName('errorstatuscompon')[0].textContent = "you rolled a one you have to hold";
    document.getElementsByClassName('successstatuscompon')[0].textContent = "";
    //hide the button to prevent further clicks
    $(".buttonbox").hide();
    //userscores nothing dont push to array;
    setTimeout(function(){
      easycomproll();
    },2000);
  }
  else
  {
    //continue;
    alert(num);
    userscorelist.push(num);
    var render = document.getElementById("live");
    render.innerHTML += "<li>"+num+"</li>";
  }
};

var addresultcomp = () => {
  var result = eval(easycomputerroll.join('+'));
  alert(result);
  document.getElementsByClassName("npcactuallcount")[0].textContent = result;
}
var addresultuser = () => {
  var result = eval(userscorelist.join('+'));
  alert(result);
  document.getElementsByClassName("actuallcount")[0].textContent = result;
};



//click handler
var gamemode = () => {
  var checkLvl = sessionStorage.getItem("level");
  if(checkLvl === "easy")
  {
    //level is easy
    playereasyroll();
  }
  else
  {
    //level is hard
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
