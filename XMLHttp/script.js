const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET', 'http://api.countrylayer.com/v2/name/india?access_key=74913c3e0007c3b065f70e40a21148bb');
request.send();

// to get the response
request.addEventListener('load', function () {
    // console.log(JSON.parse(this.responseText));
    const [data] = JSON.parse(this.responseText);
    const html = `<h2>My country name is ${data.name} and its capital is ${data.capital}.</h2>`;
    container.innerHTML = html;
    //container.insertAdjacentHTML(beore)
});