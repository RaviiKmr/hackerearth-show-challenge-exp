var array = [];
var results = [];
var gResult = [];

var links = document.getElementsByClassName("challenge-card-link");
gResult = document.getElementsByClassName('challenge-button');

for (let i = 0, max = links.length; i < max; i++) {
  array.push(links[i].href);

  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', array[i], true);
  xhttp.responseType = 'document';
  xhttp.send();

  xhttp.onload = function () {

    results[i] = this.responseXML.getElementsByClassName("light")[5].innerHTML;
    if (i == max - 1) {
      addExperienceTag(gResult, results);
    }
  };


}
// addExperienceTag(gResult, results);

for (var i = 0; i < results.length; i++) {
  console.log(results[i]);
}

function addExperienceTag(gResult, results) {

  // console.log(gResult[0]);

  for (var j = 0; j < gResult.length; j++) {

    gResult[j].insertAdjacentHTML('beforeend', '<div style="background-color: #de5833; position: absolute; top:0; right:0;"><p style="font-size: 15px; color: white; margin: 0; padding: 2px 9px 2px 9px;">' + j + '</p></div>');
  }
}




xhttp.onprogress = function (event) {
  if (event.lengthComputable) {

  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhttp.onerror = function (e) {
  console.log("Request failed " + e.target.status);
};

// console.log(array);
