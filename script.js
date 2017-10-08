


$.ajax({
  url: "https://quotes.stormconsultancy.co.uk/random.json",
  type: 'GET',
  dataType: "jsonp",
  async: false,
  data: data,
  success: function(data) {
    console.log(data);
  }
});

// $(document).ready(function() {
//   //global vars used to store the quote and author
  



//   var author;
//   var quote;
  
//   //function called at startup 
//   $.getJSON("quotes.stormconsultancy.co.uk/random.json", function(data) {
//           author = data.author;
//           quote = data.quote;
//           $("#quoteID").html(quote);
//           $("#authorID").html(author);
          
//           //creates an anchor element with the following attriubutes
//           var link = document.createElement('a');
//           link.setAttribute('href', 'https://twitter.com/share');
//           link.setAttribute('class', 'twitter-share-button');
//           link.setAttribute('style', 'margin-top: 5px;');
//           link.setAttribute('id', 'twitterbutton');
//           link.setAttribute("data-text", "" + quote + " - " + author + "");
//           link.setAttribute("data-via", "");
//           link.setAttribute("data-size", "large");

//        // Put it inside the twtbox div
//         tweetdiv  =  document.getElementById('twtbox');
//         tweetdiv.appendChild(link);

//         twttr.widgets.load(); //loads the widgey
//    });
  
//    $("#buttonID").on("click", function() {
//      $.getJSON("https://quotes.stormconsultancy.co.uk/random.json", function(data) {
//               $("#twtbox").children().remove();
//               author = data.author;
//               quote = data.quote;
//               $("#quoteID").html(quote);
//               $("#authorID").html(author);
              
//               //after deleting the twitter button, create a new one with the new quote
//               var link = document.createElement('a');
//               link.setAttribute('href', 'https://twitter.com/share');
//               link.setAttribute('class', 'twitter-share-button');
//               link.setAttribute('style', 'margin-top:5px;');
//               link.setAttribute('id', 'twitterbutton');
//               link.setAttribute("data-text", "" + quote + " - " + author + "");
//               link.setAttribute("data-via", "");
//               link.setAttribute("data-size", "large");

//               // Put it inside the twtbox div
//               tweetdiv  =  document.getElementById('twtbox');
//               tweetdiv.appendChild(link);
//               twttr.widgets.load(); //loads the widget
//       });
//    });
// });