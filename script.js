var images = [];
var index = 0;

var posterImg = document.getElementById("poster-img");


var emailSpan = document.getElementById("email")
var phoneSpan = document.getElementById("phone")
var webSpan = document.getElementById("web")
var openEstSpan = document.getElementById("open-est")
var openEngSpan = document.getElementById("open-eng")

fetch('https://spreadsheets.google.com/feeds/cells/1MkkhxU-MgcPDz5-vPpBQibAl9gr4p1DRNlPdtik7HJs/2/public/full?alt=json')
.then(response => response.json())
.then(data => {
    for (let i = 2; i < data.feed.entry.length; i++) {

        if (data.feed.entry[i].title.$t === "C1"){
            var setTime = parseInt(data.feed.entry[i].content.$t);
        }
        else {
            images.push(data.feed.entry[i].content.$t);
        }
        console.log(images)
    } 
    console.log(images)
    // posterImg.src = images[0];
    let interval = setInterval(function(){
        posterImg.src = images[index];
        index = (index + 1) % 4
    }, setTime * 1000)
});


fetch('https://spreadsheets.google.com/feeds/cells/1MkkhxU-MgcPDz5-vPpBQibAl9gr4p1DRNlPdtik7HJs/1/public/full?alt=json')
  .then(response => response.json())
  .then(data => {
      let info = {};
      data.feed.entry.forEach(element => {
          info[element.title.$t] = element.content.$t
        });
        emailSpan.innerText = info.B5
        phoneSpan.innerText = info.B6
        webSpan.innerText = info.B7
        openEstSpan.innerText = info.B2
        openEngSpan.innerText = info.C2
    });