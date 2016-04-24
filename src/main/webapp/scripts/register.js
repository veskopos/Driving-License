$(document).ready(function() {
	"use strict";

	$(".jumbotron h1").text("Driving License");

	$("#login a").text("Login");
	$("#register a").text("Register");

	var ENDPOINT = "http://localhost:3000/users";
	
	$(".btn-info").click(function() {
		var person = {
			username: $("input#usr").val(),
			password: $("input#pwd").val(),
			name: $("input#name").val(),
			email: $("input#email").val(),
			license: null,
			admin: 0
		};
		
		$.ajax(ENDPOINT, {
			method: "POST",
			dataType: "json",
			data: JSON.stringify(person),
			contentType: "application/json; charset=utf-8",
			error: function() {
				listError("Username or password incorrect!");
			},
			success: function() {
				var now = new Date();
				now.setTime(now.getTime() + 3600 * 1000);
				document.cookie = "session=" + person.username + "; expires=" + now.toGMTString() + ";";
				window.location = "http://localhost:8080/Driving-License/profile.html";
			}
		});
	});
	
});