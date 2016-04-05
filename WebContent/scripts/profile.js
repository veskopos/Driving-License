$(document).ready(function() {
	"use strict";

	$("#logout a").text("Logout");
	$(".jumbotron h1").text("Изберете категория:");
	
	var ENDPOINT = "http://localhost:3000/users";

	$(".btn-info").click(function() {	
		
		var person = {
			license: $(":checked").val(),
		};
		
		$.ajax(ENDPOINT, {
			method: "POST",
			dataType: "json",
			data: JSON.stringify(person),
			contentType: "application/json; charset=utf-8",
			success: function() {
				var now = new Date();
				now.setTime(now.getTime() + 3600 * 1000);
				document.cookie = "session=" + person.username + "; expires=" + now.toGMTString() + ";";
				//window.location = "http://localhost:8080/Driving-License/profile.html";
			}
		});
	});
	
});