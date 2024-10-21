// api key = 7369a0179c5cb855a5b1190905e4e4b5

document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const apikey = '7369a0179c5cb855a5b1190905e4e4b5';
    let cityname = document.querySelector('#cityname').value;
    const article = document.getElementById("article");
    article.style.display = 'flex';

    if (!cityname) {
        return alert("Você precisa digitar uma cidade");
    }
    
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric&lang=pt_br`;
    
    try {
        const results = await fetch(apiurl);
        if (!results.ok) {
            throw new Error("Cidade não encontrada");
        }
        const json = await results.json();
        console.log(json);
        
        // Aqui você pode adicionar o código para exibir os dados na página
        document.querySelector('#city-title').textContent = json.name;
        document.querySelector('#temperature').textContent = `Temperatura: ${json.main.temp} °C`;
        document.querySelector('#precipitation').textContent = `Precipitação: ${json.weather[0].description}`;
        // Atualizar a imagem da cidade se houver
        document.querySelector('#city-image').src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
    } catch (error) {
        alert(error.message);
    }
});
