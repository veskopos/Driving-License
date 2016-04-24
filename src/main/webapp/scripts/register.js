$(document).ready(function() {
	"use strict";

	$(".jumbotron h1").text("Driving License");

	$("#login a").text("Login");
	$("#register a").text("Register");

	var ENDPOINT = "http://localhost:3000/users";
	
	$('[data-toggle="popover"]').popover();
	
	$(".btn-info").click(function() {
		var person = {
			username: $("input#usr").val(),
			password: $("input#pwd").val(),
			name: $("input#name").val(),
			email: $("input#email").val(),
			license: null,
			requestedLicense: null,
			admin: 0
		};
		
		$.ajax(ENDPOINT, {
			method: "GET",
			dataType: "json",
			data: /*JSON.stringify(person)*/{
				username: $("input#usr").val()
			},
		}).then(function(response1) {
			//console.log(response1[0].username);
			if (typeof(response1[0]) === 'undefined'){
				console.log("User registered!");

				$.ajax(ENDPOINT, {
					method: "POST",
					dataType: "json",
					data: JSON.stringify(person),
					contentType: "application/json; charset=utf-8",
					error: function() {
						listError("Username or password incorrect!");
					},
					success: function(response) {
					$.cookie('session', person.username, {path: '/', expires: 3});
					$.cookie('id', response.id, {path: '/', expires: 3});
					window.location = "http://localhost:8080/Driving-License/profile.html";
					}
				});
			
			}else{
				console.log("Existing user!")
				$('[data-toggle="popover"]').popover();
				}
		});
	});
});