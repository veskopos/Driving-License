$(document).ready(function() {
	"use strict";
	
	$(".jumbotron h1").text("Driving License");
	
	$("#login a").text("Login");
	
	$("#register a").text("Register");
	
	$(".jumbotron #1").text("Предоставя възможност на хората да се запишат за шофьорски курсове, през интернет. Това става посредством качването на данните на лицето, след което се изпраща запитването към администратор, който одобрява това запитване и изпраща датата на която да се яви лицето записало курсовете. В зависимост от това на колко е години, как се казва и каква категория иска да кара, така се оформя книжката и съответно профила на лицето как да изглежда.");
	
	var img = $("<img />").attr("src", "libs/maxresdefault.jpg");
	$(".jumbotron #pic").append(img);

});