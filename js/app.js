$(function(){
	// create function loadData that...
	function loadData(linkID) {		
		//...loaads JSON data onto page
		$.getJSON('data/data.json')
			.done( function(data) {
				var $data = data;
				console.log(typeof($data.drinks[0].name));

				// create msg variable to store HTML string
				var msg = ""; 
				// use Switch statement to find required data, add markup to msg 
				switch(linkID) {
					case "beer":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[0].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[0].perCap +'<br>Market Share: ' + $data.drinks[0].share + '</p></div>'; 
						break; 
					case "wine":
						msg += '<div class="drink"><h2 class="drink">'+ $data.drinks[1].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[1].perCap +'<br>Market Share: ' + $data.drinks[1].share + '</p></div>'; 
							break; 
					case "spirits":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[2].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[2].perCap +'<br>Market Share: ' + $data.drinks[2].share + '</p></div>'; 
						break; 
					case "coffee":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[3].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[3].perCap +'<br>Market Share: ' + $data.drinks[3].share + '</p></div>'; 
						break; 
					case "tea":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[4].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[4].perCap +'<br>Market Share: ' + $data.drinks[4].share + '</p></div>'; 
						break; 
					case "softDrink":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[5].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[5].perCap +'<br>Market Share: ' + $data.drinks[5].share + '</p></div>'; 
						break;
					case "bottledH20":
						msg += '<div class="drink"><h2 class="drink">' + $data.drinks[6].name + '</h2><p>Annual Consumption, Per Capita: ' + $data.drinks[6].perCap +'<br>Market Share: ' + $data.drinks[6].share + '</p></div>'; 
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