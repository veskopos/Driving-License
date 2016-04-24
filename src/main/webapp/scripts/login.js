$(document).ready(function() {
	"use strict";
	//$.cookie('session', 'asdasd', {path: '/', expires: 100});
	//console.log($.cookie('session'));
	
	
	$(".jumbotron h1").text("Driving License");

	$("#login a").text("Login");
	$("#register a").text("Register");

	var ENDPOINT = "http://localhost:3000/users";
	
	$(".btn-info").click(function() {
		var person = {
			username: $("input#usr").val(),
			password: $("input#pwd").val()
		};
		
		$.ajax(ENDPOINT, {
			method: "GET",
			dataType: "json",
			data: /*JSON.stringify(person)*/{
				username: $("input#usr").val(),
				password: $("input#pwd").val()
			},
			contentType: "application/json; charset=utf-8",
			error: function() {
				alert("Password do not match!");
			},
			success: function(response) {
				//console.log(response[0]);
				if (typeof(response[0]) === 'undefined') {
					console.log('No user');
				} else {
					$.cookie('session', person.username, {path: '/', expires: 3});
					$.cookie('id', response[0].id, {path: '/', expires: 3});
					window.location = "http://localhost:8080/Driving-License/profile.html";
				}
				
			}
		});
	});

});