document.getElementById("confirmButton").addEventListener('click', handleConfirm);
document.getElementById("gotoFeedButton").addEventListener('click', handleGotoFeed);

function handleConfirm() {
    addFeedURL(document.getElementById("input").value);
    console.log(userFeedURLs);
}

function handleGotoFeed() {
    if (userFeedURLs.length == 0) {
        alert("You haven't entered any RSS feeds");
        return;
    }
    localStorage.setItem('userFeedURLs', userFeedURLs);
    window.location.href = 'feed.html';
}

function addFeedURL(url) {
    RemoveHtmlTagsFromURL(url);
    if (url == "") {
        alert("Please enter a RSS URL!")
        return;
    }
    userFeedURLs.push(url);
    document.getElementById("input").value = "";

    var listElement = "<li class=\"list-group-item border border-dark bg-white\"><h5>" + url + "</h5></li>"
    console.log(listElement);
    document.getElementById("urlList").insertAdjacentHTML('beforeend', listElement)
}


function RemoveHtmlTagsFromURL(url) {
    return url.replace(/(<([^>]+)>)/ig, "");
}