$(document).ready(function() {
	"use strict";
	
	$(".jumbotron h1").text("Driving License");

	$(".jumbotron #1").text("Можете да ни намерите на адрес:");
	
	$(".jumbotron #2").text("Холивуд Лос Анджелис, Калифорния Съединени щати");
	
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