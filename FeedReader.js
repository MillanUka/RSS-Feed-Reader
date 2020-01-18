let API = "https://api.rss2json.com/v1/api.json?rss_url="
var userFeedURLs = JSON.parse(urls)

userFeedURLs.forEach(userUrl => {
  $.ajax({
    type: 'GET',
    url: API + userUrl.url,
    dataType: 'jsonp',
    success: function (data) {
      console.log(data);
      data.items.forEach(item => {
        var content = document.getElementById('content');

        content.innerHTML += "<div class=\"itemtitle\"><a href=\""+ item.link + "\"><h1>" + item.title + "</h1></a>"+ " from " + data.feed.title+"</div>";
        if (item.author != "")
          content.innerHTML += "<h4> By " + item.author  +"</h4>";

        content.innerHTML += "<h4>Published Date: " + item.pubDate + "</h4>";
        
        content.innerHTML += "<div class=\"desc\">"+item.description + "<hr><div>";
      });
    }
  });
});
