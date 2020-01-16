let API = "https://api.rss2json.com/v1/api.json?rss_url=" 
var userFeedURLs = JSON.parse(urls)

userFeedURLs.forEach(userUrl => {
  $.ajax({
    type: 'GET',
    url: API + userUrl.url,
    dataType: 'jsonp',
    success: function(data) {
      console.log(data);    
      data.items.forEach(item => {
        document.writeln("<h2>"+item.title+"</h1>");
        document.writeln("<h4> By "+ item.author+"</h4>");
        document.writeln(item.description)
      });
    }
  });
});
