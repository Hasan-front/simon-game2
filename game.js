var userClickedPattern=[];
var colorset=["red","green","yellow","blue"];
var gamepattern = [];

function nextSequencw() {
    var randomnumber1 = Math.floor((Math.random()*3)+1);
    var randomchoosencolor=colorset[randomnumber1];
    gamepattern.push(randomchoosencolor);
    $("#"+randomchoosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      var audio = new Audio("sounds/" + randomchoosencolor+ ".mp3");
  audio.play();
}
$("button").click( function () {
   userChosenColor= $("#"+randomchoosencolor);
   userClickedPattern.push(userChosenColor);
})
