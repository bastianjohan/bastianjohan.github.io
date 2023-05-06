var opopasdf;
// var x = innerHeight;

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    opopasdf = 255;
    x = innerHeight;
    setTimeout(function() { 
        window.location.href = href
    }, 500)
  }
  
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
    opopasdf = 0;
})

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCI_uUXBH0Qjv4veOmt2hjQg&maxResults=6&order=date&key=AIzaSyAMJxlFFLN4GRpUClrZcPAuppwWu3fvH9Q")
.then((result)=>{
    return result.json()
}).then((data)=>{
    let videos = data.items
    let videoContainer = document.querySelector(".youtube__slider")
    for(video of videos){
        var elem = document.createElement("img");
        elem.setAttribute("src", video.snippet.thumbnails.high.url);
        elem.setAttribute("height", "600");
        // elem.setAttribute("width", "1024");
        elem.setAttribute("alt", "Flower");
        videoContainer.appendChild(elem);
    }
});