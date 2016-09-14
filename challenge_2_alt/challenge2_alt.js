/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 $(function(){

	
    //var teamTwoShoot = $("#teamtwo-shoot");
    //var teamOneShotsTaken = $("#teamone-numshots");
    //var teamTwoShotsTaken = $("#teamtwo-numshots");
    //var teamOneGoals = $("#teamone-numhits");
    //var teamTwoGoals = $("#teamtwo-numhits");

	
    var shot2 = 0;
	var shot1 = 0;
	var goals1 = 0;
	var goals2 = 0;
	var numResets = 0;
	var baseURL = "http://66.90.94.162/ost/blades-of-steel-nintendo-/znhlvuyhgx/game-end.mp3";
$("html").css("background-color", "#0059b3");
$("div").css("background-color", "#99ccff");

$("#teamone-shoot").click(function() {

	var audio = document.getElementById("team1sound");
     	audio.play();
	
	jumbler = Math.floor((Math.random() * 8) + 1);

	if (jumbler == 6) {
		$("html").css("background-color", "blue");
		$("div").css("background-color", "red");
		goals1++;
		$("#teamone-numhits").html(goals1);
		shot1++;
		$("#teamone-numshots").html(shot1);
		
	} else {
		shot1++;
		$("#teamone-numshots").html(shot1);
		
	}

  

});


$("#teamtwo-shoot").click(function() {
	
	jumbler = Math.floor((Math.random() * 8) + 1);

	if (jumbler == 6) {
		$("html").css("background-color", "black");
		$("div").css("background-color", "yellow");
		goals2++;
		$("#teamtwo-numhits").html(goals2);
		shot2++;
		$("#teamtwo-numshots").html(shot2);
		
	} else {
		shot2++;
		$("#teamtwo-numshots").html(shot2);
		
	}
  

});	

$("#reset").click(function() {

	numResets++;
	$("#num-resets").html(numResets); {
 	shot2 = 0;
	shot1 = 0;
	goals1 = 0;
	goals2 = 0;
			
		$("html").css("background-color", "#0059b3");
		$("div").css("background-color", "#99ccff");
        $("#teamone-numhits").html(goals1);
        $("#teamone-numshots").html(shot1);
        $("#teamtwo-numhits").html(goals2);
        $("#teamtwo-numshots").html(shot2);
         

	}


	var audio = document.getElementById("mysoundclip");
     	audio.play();
     
	

});


 })