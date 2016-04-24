$(document).ready(function() {
	"use strict";

	$("#username a").text("Admin");
	
	$("#logout a").click(function() {
		$.removeCookie('session', { path: '/' });
		$.removeCookie('id', { path: '/' });
		window.location = "http://localhost:8080/Driving-License/index.html";
	});
	
	$("#logout a").text("Logout");
	$(".jumbotron h1").text("Изберете категория:");
	
	var ENDPOINT = "http://localhost:3000/users";

	if($.cookie("session")){
	
		$("#username a").text($.cookie('session'));
		console.log($.cookie('id'));
		
	$(".btn-info").click(function() {	
		
		var person = {
				id: $.cookie('id'),
			license: $(":checked").val(),
		};
 
		$.ajax(ENDPOINT + "/" + $.cookie('id'), {
				method: "GET",
				dataType: "json"
			}).then(function(response1) {
		var allData = {
				license: person.license + " " + response1.license
		};
		//console.log(allData);
		$.ajax(ENDPOINT + "/" + $.cookie('id'), {
			method: "PATCH",
			dataType: "json",
			data: JSON.stringify(allData),
			contentType: "application/json; charset=utf-8",
			success: function() {
				//window.location = "http://localhost:8080/Driving-License/profile.html";
			}
		});
			});
		
	});
	};
});