const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const setHeader = {
    headers: {
        Accept: 'application/json'
    }
};

// promises

// const generateJoke = () => {
//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }


// Async Await with error handling

const generateJoke = async () => {
    try {
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(err);
    }
}
jokeBtn.addEventListener('click', generateJoke);

