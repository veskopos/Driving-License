$(document).ready(function() {
	"use strict";

	$(".jumbotron h1").text("Driving License");
	$(".jumbotron #1").text("При нас ще получите бързо и лесно записване за шофьорски курсове, регистрирайте се сега!");
	$(".jumbotron #2").text("Започни сега:");
	$(".jumbotron p a").text("Create account");
	
	var img = $("<img />").attr("src", "libs/car-captain-driving-courses.jpg");
	$(".jumbotron #pic").append(img);
	
	$("#login a").text("Login");
	$("#register a").text("Register");

});