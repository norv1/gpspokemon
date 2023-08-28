const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const botao = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('keydown', procurar)
button.addEventListener('click', pokegps)

    function procurar(event){
    if (event.keyCode === 13 || event.key === 'Enter') {
      console.log('Enter key was pressed');
      pokegps()
        }
    }
    
    function pokegps(){

    const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;
    console.log("executando");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            function abreurl(n){
                fetch(n)
                .then(response => response.json())
                .then(data => {

                var random = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
                var pokem = random.pokemon.url
          
                fetch(pokem)
                .then(response => response.json())
                .then(imgs => {
                
                let url = imgs.sprites.other["official-artwork"].front_default;
                let url2 = imgs.sprites.other.home.front_default;
                let url3 = imgs.sprites.front_default;
                if(url === null && url2 === null){
                    image.src = url3;
                }
                else if(url === null){
                    image.src = url2;
                }
                else{
                    image.src = url;
                }
                let name1 = imgs.name
                var name = imgs.species.name
                console.log("nome: "+ name1 +"\n" + "tipo: "+ type.innerHTML + "\n"+"url: "+pokem)
                if(name1 === name){
                    pokemon.innerHTML = name.replaceAll('-', ' ');
                    pokemonsub.innerHTML = "----"
                }
                else{
                    name1 = name1.replace(new RegExp(name, "g"), "");
                    pokemon.innerHTML = name.replaceAll('-', ' ')
                    pokemonsub.innerHTML = name1.replaceAll('-', ' ')
                }

                if(!imgs.types[1]){
                    let type1 = imgs.types[0].type.name

                    type.innerHTML = tipos[type1];
                }
                else{
                    let type1 = imgs.types[0].type.name;
                    let type2 = imgs.types[1].type.name;
                    type.innerHTML = (tipos[type1] +" "+tipos[type2])
                }
    
                });
            })}
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
            const pokemon = document.querySelector('.weather-box .pokemon');
            const pokemonsub = document.querySelector('.weather-box .pokemonsub');
            const description = document.querySelector('.weather-box .description');
            const type = document.querySelector('.weather-box .type');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const pokeapi = "https://pokeapi.co/api/v2/type/"


        let urlpoke = ""
        if(json.name === "Chernobyl" ) {
            urlpoke = pokeapi + "ghost"
        }
        else{
            if (json.weather[0].main === "Rain" || json.weather[0].main === "Thunderstorm") {
                urlpoke = pokeapi + "electric"
            }
            else if(json.main.temp < 5 ) {
                urlpoke = pokeapi + "ice"
            }
            else if(json.main.temp >= 5 && json.main.temp < 10) {
                urlpoke = pokeapi + "water"
            }
            else if(json.main.temp >= 12 && json.main.temp < 15) {
                urlpoke = pokeapi + "grass"
            }
            else if(json.main.temp >= 15 && json.main.temp < 21) {
                urlpoke = pokeapi + "ground"
            }
            else if(json.main.temp >= 23 && json.main.temp < 27) {
                urlpoke = pokeapi + "bug"
            }
            else if(json.main.temp >= 27 && json.main.temp < 34) {
                urlpoke = pokeapi + "rock"
            }
            else if(json.main.temp > 33) {
                urlpoke = pokeapi + "fire"
            }
            else {
                urlpoke = pokeapi + "normal"
            }
        }
        abreurl(urlpoke)

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        description.innerHTML = `${json.weather[0].description}`;
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '620px';
        
        })
    }