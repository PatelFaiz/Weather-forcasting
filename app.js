var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',() =>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=12109d2a5111ef61a146dd52d16ae37c')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data =>{
        var nameValue = data['name'];
        var tempValue = `${(data['main']['temp'] - 273.15).toFixed(2)} Degree Celsius`;
        var descValue = (data['weather'][0]['main']);

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    .catch(err => alert("Wrong city name!"))
});