const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    // Feel free to use mine :)
    const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '400px';

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');

                return;

            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const type = document.querySelector('.weather-box .type');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const pokeapi = "http://pokeapi.co/api/v2/type/"


            if (json.weather[0].main === "Rain" || json.weather[0].main === "Thunderstorm") {
                var urlpoke = pokeapi + "electric"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Elétrico";
                    });
                });
            }   
            else if(json.main.temp < 5 ) {
                var urlpoke = pokeapi + "ice"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Gelo";
                    });
                });
            }
            else if(json.main.temp >= 5 && json.main.temp < 10) {
                var urlpoke = pokeapi + "water"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Água";
                    });
                });
            }
            else if(json.main.temp >= 12 && json.main.temp < 15) {
                var urlpoke = pokeapi + "grass"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Grama";
                    });
                });
            }
            else if(json.main.temp >= 15 && json.main.temp < 21) {
                var urlpoke = pokeapi + "ground"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Solo";
                    });
                });
            }
            else if(json.main.temp >= 23 && json.main.temp < 27) {
                var urlpoke = pokeapi + "bug"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Inseto";
                    });
                });
            }
            else if(json.main.temp >= 27 && json.main.temp < 34) {
                var urlpoke = pokeapi + "rock"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Pedra";
                    });
                });
            }
            else if(json.main.temp > 33) {
                var urlpoke = pokeapi + "fire"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Fogo";
                    });
                });
            }
            else {
                var urlpoke = pokeapi + "normal"
                fetch(urlpoke)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
                console.log("it is " + pokem)
                    fetch(pokem)
                    .then(response => response.json())
                    .then(imgs => {
                    
                    let url = imgs.sprites.other.home.front_default;
                    image.src = url;
                    description.innerHTML = imgs.name.replaceAll('-', ' ');
                    type.innerHTML = "Normal";
                    });
                });
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;

            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');

            container.style.height = '610px';
        });
});