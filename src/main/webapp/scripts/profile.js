$(document).ready(function() {
	"use strict";

	$("#logout a").text("Logout");
	$(".jumbotron h1").text("Изберете категория:");
	
	var ENDPOINT = "http://localhost:3000/users";

	if($.cookie("session")){
	
		$("#username a").text($.cookie('session'));
		
		
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
				//window.location = "http://localhost:8080/Driving-License/profile.html";
			}
		});
	});
	};
});