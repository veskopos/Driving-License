$(document).ready(function() {
	"use strict";

	
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
			requestedLicense: $(":checked").val(),
		};
 
		$.ajax(ENDPOINT + "/" + $.cookie('id'), {
				method: "GET",
				dataType: "json"
			}).then(function(response1) {
		/*var allData = {
				license: person.requestedLicense + " " + response1.license
		};*/
		//console.log(allData);
		//alert(person.license);
		if (typeof(person.requestedLicense) === 'undefined') {
			$(".modal-title").text("Грешка!");
			$(".modal-body p").text("Изберете категория!");
		}else{
		$.ajax(ENDPOINT + "/" + $.cookie('id'), {
			method: "PATCH",
			dataType: "json",
			data: JSON.stringify(person),
			contentType: "application/json; charset=utf-8",
			success: function() {
				//window.location = "http://localhost:8080/Driving-License/profile.html";
			}
		});
		$(".modal-title").text("Успешно кандидатствахте за:");
		$(".modal-body p").text(person.requestedLicense);
		};
			});
		
	});
	};
});