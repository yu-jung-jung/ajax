
var topics=["cat", "dog", "pig", "hamster", "cow", "duck"]

	function displayGIF() {

		var topic = $(this).attr("data-name");

		var queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";
	
	$.ajax({

		url: queryURL,
		method: "GET"

	}).done(function(response) {

		console.log(queryURL);

		console.log(response);

		var results = response.data;

		for (var i = 0; i < results.length; i++){

			var topicDiv = $("<div>");

			var p = $("<p>").text("Rating: " + results[i].rating);

			var topicGIF = $("<img>");

			topicGIF.attr("src", results[i].images.fixed_height.url);

			topicDiv.append(p);
			topicDiv.append(topicGIF);

			$("#displayGIF").prepend(topicDiv);
		}

	// Get still image from giphy by using data-state  - failed.

	// $("#displayGIF").on("click", function() {

	// 	var state = $(this).attr("date-state");

	// 	if (state === "still") {

	// 		$(this).attr("src", $(this).attr("data-animate"));

	// 	} else{

	// 		$(this).attr("src", $(this).attr("data-still"));
 //        	$(this).attr("data-state", "still");
	// 	}


	// });

		
	});

}

	function renderButtons() {

		$("#buttons").empty();

		for (var i = 0; i < topics.length; i++) {

			var button = $("<button>");

			button.addClass("topic");

			button.attr("data-name", topics[i]);

			button.text(topics[i]);

			$("#buttons").append(button)

		}
	}

	$("#add").on("click", function(event) {

		event.preventDefault();

		var search = $("#search-input").val().trim();

		topics.push(search);

		renderButtons();
	});

	$(document).on("click", ".topic", displayGIF);

	renderButtons();
