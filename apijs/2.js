
let but = document.getElementById('but1')
let pic = document.getElementById('pic')
but.onclick = fbut

function fbut(){

	const data = null;

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
			let response = JSON.parse(this.responseText)
			fpic(response)
		}
	});
	xhr.open('GET', 'https://cat14.p.rapidapi.com/v1/images/search');
	xhr.setRequestHeader('x-api-key', 'live_tkfn5Qu13T9qimIfGmAxBAFooC12t7GvENwLXIoJQRTgUv83zQ8mjz5cSpzahmyK');
	xhr.setRequestHeader('X-RapidAPI-Key', 'ae0f08324fmsh079b6ba3edc3060p197c26jsn90fd9ebb2617');
	xhr.setRequestHeader('X-RapidAPI-Host', 'cat14.p.rapidapi.com');
	xhr.send(data);
}

function  fpic(response){
	console.log(response [0].url)
	pic.src = response[0].url
}
///////////////////////////////////////////////////

let but2 = document.getElementById('but2')
let out2 = document.getElementById('out2')
but2.onclick = fbut2

function fbut2() {
	const data = null;
	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
			let response = JSON.parse(this.responseText)
			fjoke(response)
		}
	});
	xhr.open('GET', 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random');
	xhr.setRequestHeader('accept', 'application/json');
	xhr.setRequestHeader('X-RapidAPI-Key', 'ae0f08324fmsh079b6ba3edc3060p197c26jsn90fd9ebb2617');
	xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');
	xhr.send(data);
}

function fjoke(response){
	console.log(response.value)
	out2.innerHTML = response.value
	const data = 'source_language=en&target_language=ru&text='+ response.value

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText)
			let response2 = JSON.parse(this.responseText)
			console.log(response2.data.translatedText)
			out2.innerHTML += '<br>' + response2.data.translatedText
		}
	});
	xhr.open('POST', 'https://text-translator2.p.rapidapi.com/translate');
	xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('X-RapidAPI-Key', 'ae0f08324fmsh079b6ba3edc3060p197c26jsn90fd9ebb2617');
	xhr.setRequestHeader('X-RapidAPI-Host', 'text-translator2.p.rapidapi.com');
	xhr.send(data);


	// const data = 'texte='+response.value+'&to_lang=ru';
	//
	// const xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;
	//
	// xhr.addEventListener('readystatechange', function () {
	// 	if (this.readyState === this.DONE) {
	// 		console.log(this.responseText)
	// 		let response2 = JSON.parse(this.responseText)
	// 		console.log(response2.data.translation_data.translation)
	// 		out2.innerHTML += '<br>' + response2.data.translation_data.translation
	// 	}
	// });
	//
	// xhr.open('POST', 'https://google-translation-unlimited.p.rapidapi.com/translate');
	// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	// xhr.setRequestHeader('X-RapidAPI-Key', 'ae0f08324fmsh079b6ba3edc3060p197c26jsn90fd9ebb2617');
	// xhr.setRequestHeader('X-RapidAPI-Host', 'google-translation-unlimited.p.rapidapi.com');
	//
	// xhr.send(data);
}