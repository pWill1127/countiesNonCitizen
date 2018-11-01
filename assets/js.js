var apiKey = '97539589e8683273163bc2ab1d295f57e572ec46';
// Perfoming an AJAX GET request to our queryURL
var searchTerm = "90210";
var numResults = 0;

var queryURLBase = "https://api.census.gov/data/2016/acs/acs5?get=B05002_021E,NAME&for=zip+code+tabulation+area:" + searchTerm + "&key=" + apiKey;



////////////////
var articleCounter = 0;

function runQuery(queryURL) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(result) {

    // Logging the URL so we have access to it for troubleshooting
    console.log("------------------------------------");
    console.log("URL: " + queryURL);
    console.log("------------------------------------");

    console.log(result[1][0]);
    console.log("------------------------------------");
    $('#well-section').append(`Estimated number of Non-US Citizens in ${searchTerm}:  <strong> ${result[1][0]} </strong>`);

  });

}

// METHODS
// ==========================================================

// on.("click") function associated with the Search Button
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();

  // Initially sets the articleCounter to 0
  articleCounter = 0;

  // Empties the region associated with the articles
  $("#well-section").empty();

  // Grabbing text the user typed into the search input
  searchTerm = $("#search-term").val().trim();
  var searchURL = "https://api.census.gov/data/2016/acs/acs5?get=B05002_021E,NAME&for=zip+code+tabulation+area:" + searchTerm + "&key=" + apiKey;

  
  runQuery(searchURL);
});

// This button clears the top articles section
$("#clear-all").on("click", function() {
  articleCounter = 0;
  $("#well-section").empty();
});
  



