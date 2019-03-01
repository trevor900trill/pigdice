//BUSINESS LOGIC
console.log("hello world");
//USER INTERFACE
$(document).ready(function(){
  $(".beginnerbtn").on("click",function(){
    sessionStorage.setItem("level","easy");
  });
  $(".probtn").on("click",function(){
    sessionStorage.setItem("level","hard");
  });
});
