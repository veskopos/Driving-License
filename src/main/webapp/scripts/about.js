$(document).ready(function() {
	"use strict";
	
	$(".jumbotron h1").text("Driving License");
	
	$(".jumbotron #1").text("Предоставя възможност на хората да се запишат за шофьорски курсове, през интернет. Това става посредством качването на данните на лицето, след което се изпраща запитването към администратор, който одобрява това запитване и изпраща датата на която да се яви лицето записало курсовете. В зависимост от това на колко е години, как се казва и каква категория иска да кара, така се оформя книжката и съответно профила на лицето как да изглежда.");
	
	var img = $("<img />").attr("src", "libs/maxresdefault.jpg").attr("class", "img-responsive").attr("id", "audi").attr("align", "right");
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