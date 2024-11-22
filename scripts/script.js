(function() {
    function sum(left, right) {
        return left + right;
    }
    console.log(sum(5, 6));
})();

function statement(value) {
    let result;
    if (value > 100) {
        result = 'Huge';
    } else if (value >= 50) {
        result = 'Medium';
    } else if (value >= 25) {
        result = 'Small';
    } else if (value == 0) {
        result = 'Nothing'
    } else {
        result = 'Extra small';
    }
    return result;
}

function demo() {
    document.getElementById('username').innerHTML = 'Pieter';
    document.querySelector('html #username').innerHTML = 'Pieter';
}

function prom() {
    new Promise((resolve, reject) => {
        reject('This is my given error!');
    }).then(value => {
        console.log(value);
    }).catch(reason => {
        console.log(reason);
    });
}

function validatePhone(element) {
    if (element.value.length < 10 || element.value.length > 12) {
        element.style.borderColor = 'red';
        element.title = 'This is not a valid phonenumber';
    }
}

function getData() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.0333&longitude=5.6583&current=temperature_2m').then((result) => {
        result.json().then(weatherData => {
            document.getElementById('weather').innerText = weatherData.current.temperature_2m;            
        });
    });
}

function loopWeather() {
    getData();

    setInterval(() => {
        getData();
    }, 300000)
}
loopWeather();