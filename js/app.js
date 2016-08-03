$(function(){
	// create function loadData that...
	function loadData(linkID) {		
		//...loaads JSON data onto page
		$.getJSON('data/data.json')
			.done( function(data) {
				var drinks = data;
				alert("working");
				// create msg variable to store HTML string
				var msg = ""; 
				// use Switch statement to find required data, add markup to msg 
				switch(linkID) {
					case "beer":
						msg += '<div class="drink"><h2 class="drink">' + drinks[0].name + '</h2><p>Annual Consumption, Per Capita: ' + drinks[0].perCap +'<br>Market Share: ' + drinks.beer.share + '</p></div>'; 
						break; 
					case "wine":
						msg += '<div class="drink"><h2 class="drink">Wine</h2><p>Annual Consumption, Per Capita: ' + drinks.wine.perCap +'<br>Market Share: ' + drinks.wine.share + '</p></div>'; 
							break; 
					case "sprits":
						msg += '<div class="drink"><h2 class="drink">Beer</h2><p>Annual Consumption, Per Capita: ' + drinks.spirits.perCap +'<br>Market Share: ' + drinks.spirits.share + '</p></div>'; 
						break; 
					case "coffee":
						msg += '<div class="drink"><h2 class="drink">Beer</h2><p>Annual Consumption, Per Capita: ' + drinks.coffee.perCap +'<br>Market Share: ' + drinks.coffee.share + '</p></div>'; 
						break; 
					case "tea":
						msg += '<div class="drink"><h2 class="drink">Beer</h2><p>Annual Consumption, Per Capita: ' + drinks.tea.perCap +'<br>Market Share: ' + drinks.tea.share + '</p></div>'; 
						break; 
					case "cola":
						msg += '<div class="drink"><h2 class="drink">Beer</h2><p>Annual Consumption, Per Capita: ' + drinks.softDrinks.perCap +'<br>Market Share: ' + drinks.softDrinks.share + '</p></div>'; 
						break;
					case "bottledH20":
						msg += '<div class="drink"><h2 class="drink">Beer</h2><p>Annual Consumption, Per Capita: ' + drinks.bottledH20.perCap +'<br>Market Share: ' + drinks.bottledH20.share + '</p></div>'; 
						break;
				}
				$("#content").html(msg); 
			}).fail( function() {
				alert("not working"); 
			}); 
		}

	// add event listener to nav links - on click: 
	$('.nav').on("click", function(e){
		e.preventDefault										// prevent default behavior
		var linkID = $(this).attr("id"); 						// find the id attr of the clicked elem
		loadData(linkID);										// call the loadData function
	}); 
}); 