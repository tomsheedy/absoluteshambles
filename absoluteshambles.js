
alert('hello world');

var url = 'http://cors.io/?u=https://absoluteradio.co.uk/absolute-radio/music/'

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.body.className = 'ok';
            console.log(request.responseText);
        } else {
            document.body.className = 'error';
        }
    }
};
request.open("GET", url , true);
request.send(null);
