$(document).ready(function() {
	"use strict";

	$(".jumbotron h1").text("Driving License");
	$(".jumbotron #1").text("При нас ще получите бързо и лесно записване за шофьорски курсове, регистрирайте се сега!");
	$(".jumbotron #2").text("Започни сега:");
	$(".jumbotron p a").text("Create account");
	
	var img = $("<img />").attr("src", "libs/car-captain-driving-courses.jpg").attr("class", "img-responsive").attr("id", "lesson").attr("align", "right");
	$(".jumbotron #1").prepend(img);
	
	$("#login a").text("Login");
	$("#register a").text("Register");

});