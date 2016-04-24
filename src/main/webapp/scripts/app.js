$(document).ready(function() {
	"use strict";

	$(".jumbotron h1").text("Driving License");
	$(".jumbotron #1").text("При нас ще получите бързо и лесно записване за шофьорски курсове, регистрирайте се сега!");
	$(".jumbotron #2").text("Започни сега:");
	$(".jumbotron p a").text("Create account");
	
	var img = $("<img />").attr("src", "libs/car-captain-driving-courses.jpg").attr("class", "img-responsive").attr("id", "lesson").attr("align", "right");
	$(".jumbotron #1").prepend(img);
	
	if($.cookie("session")){
		
		$("#login a").text($.cookie('session'));
		$("#login a").attr('href', 'http://localhost:8080/Driving-License/profile.html');
		
		$("#register a").text("Logout");
		$("#register a").click(function() {
			$.removeCookie('session', { path: '/' });
			$.removeCookie('id', { path: '/' });
			location.reload();
		});
		
	}else{
		$("#login a").text("Login");
		$("#login a").attr('href', 'http://localhost:8080/Driving-License/login.html');
		$("#register a").text("Register");
		$("#register a").attr('href', 'http://localhost:8080/Driving-License/register.html');

	};

});