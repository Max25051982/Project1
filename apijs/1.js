let moscowbut = document.getElementById('moscow')
moscowbut.onclick = fmoscow
token = '26d0904ee571127678bdf09197a8ff7a'




function fmoscow() {
    moscowId = 524901
    let req
    if (window.XMLHttpRequest) { //чтобы работало на разных браузерах
        req = new XMLHttpRequest()  //чтобы работало на разных браузерах
    } else {
        req = new ActiveXObject("Microsoft.XMLHTTP")  //чтобы работало на разных браузерах
    }
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?id='+moscowId+'&appid='+token+
    '&units=metric&lang=ru') // готовит запрос к отправке
    req.onreadystatechange= function () {    // функция принимает ответ
        console.log(req.readyState)
        if (req.readyState === 4) {      // можно неписать
            console.log('статус = '+ req.status)  // можно неписать
            if (req.status === 200){      // можно неписать
                console.log(req.response)  // можно неписать
                data = JSON.parse(req.response) // расщифровывает объект
                console.log(data)
                fresult(data)
            }
        }
    }
    req.send()      // отправляет запрос
}

function  fresult(data) {
    let  k1 = data.main.temp
    let  k2 = data.wind.speed
    let  k3 = data.weather[0].description
    let  k4 = data.name
    let out = document.getElementById('out')

    out.innerHTML = 'город' + k4 + '<br>' +
        k3 + '<br>'+
        'температура ' + Math.round(k1,0) + 'C '+ '<br>' +
        'скорость ветра ' + Math.round(k2,0) + 'м/с'
}

let gorod = document.getElementById('gorod')
let gorodbut = document.getElementById('anygorod')
let divout = document.getElementById('divout')

gorodbut.onclick = fgorod
function fgorod () {
    let req
    if (window.XMLHttpRequest) { //чтобы работало на разных браузерах
        req = new XMLHttpRequest()
    }
    else {
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }
    let poisk = gorod.value
    req.open('GET', 'https://api.openweathermap.org/data/2.5/find?q=' + poisk +
        '&units=metric&APPID=' + token + '&tupe=like')
    req.onreadystatechange= function () {    // функция принимает ответ
        console.log(req.readyState)
        if (req.readyState === 4) {      // можно неписать
            console.log('статус = '+ req.status)  // можно неписать
            if (req.status === 200){      // можно неписать
                console.log(req.response)  // можно неписать
                data = JSON.parse(req.response) // расщифровывает объект
                console.log(data)
                for (i=0; i<data.list.length;i++){
                    console.log(data.list[i].name + data.list[i].sys.country + data.list[i].id)
                }
                fdivout(data)
            }
        }
    }
    req.send()
}

function fdivout(data){
    let stroka = '<table>'

    for (i=0;i<data.list.length;i++) {
        stroka += '<tr>' +
            '<td>' + data.list[i].name + '</td>' +
            '<td>' + data.list[i].sys.country + '</td>'+
            '<td>' + data.list[i].id + '</td>' + '</td>' +
            '<td>' + '<button onclick=fanypogoda('+ data.list[i].id +')> Погода </button>' + '</td>' +
            '</tr>'
    }
    stroka += '<table>'
    divout.innerHTML = stroka
}

function fanypogoda(id){
    moscowId = id
    let req
    if (window.XMLHttpRequest) { //чтобы работало на разных браузерах
        req = new XMLHttpRequest()  //чтобы работало на разных браузерах
    } else {
        req = new ActiveXObject("Microsoft.XMLHTTP")  //чтобы работало на разных браузерах
    }
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?id='+moscowId+'&appid='+token+
    '&units=metric&lang=ru') // готовит запрос к отправке
    req.onreadystatechange= function () {    // функция принимает ответ
        console.log(req.readyState)
        if (req.readyState === 4) {      // можно неписать
            console.log('статус = '+ req.status)  // можно неписать
            if (req.status === 200){      // можно неписать
                console.log(req.response)  // можно неписать
                data = JSON.parse(req.response) // расщифровывает объект
                console.log(data)
                fresult(data)
            }
        }
    }
    req.send()
}

