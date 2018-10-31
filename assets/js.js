var zipArray = ["80203"];




var apiKey = '97539589e8683273163bc2ab1d295f57e572ec46';
// Perfoming an AJAX GET request to our queryURL
var search;

queryUrl = "https://api.census.gov/data/2016/acs/acs5?get=B05002_021E,NAME&for=zip+code+tabulation+area:" + search + "&key=" + apiKey;

let recentClick;
// queryUrl += apiKey
////////////////

function runQuery(queryURL) {

    // AJAX Function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(result) {
  
      // Logging to Console
      console.log("------------------");
      console.log(queryURL);
      console.log("------------------");
      console.log(result);
  
      // Clear the wells from the previous run
      $("#timelapse-input").empty();
  
      
  
    });
  
  }
  
  // MAIN PROCESSES
  // =========================================
  
  



