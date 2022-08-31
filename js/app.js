const API_KEY = `b51089897c5df1fa27da56e58df21134`

const searchName = () => {
    const city = document.getElementById('searchCity').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCity(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;

}
const displayCity = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('temparature', temparature.main.temp);
    setInnerText('icons', temparature.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}

