const countryHtml = document.getElementById('country');

countryHtml.addEventListener('change', (data) => {
    console.log(countryHtml.value);
});

let counterHtml = document.getElementById('counter');
console.log(counterHtml.getAttribute('data-counter'));