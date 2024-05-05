let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

let initDataURLSP = new URLSearchParams(WebApp.initData);
var hash = initDataURLSP.get('hash');

initDataURLSP.delete('hash');
initDataURLSP.sort();
var checkDataString = initDataURLSP.toString().replaceAll('&', '\n');

let xhrURL = new URL('https://<your_domain>/<userIsValid>');
xhrURL.searchParams.set('hash', hash);
xhrURL.searchParams.set('checkDataString', checkDataString);

let xhr = new XMLHttpRequest();
xhr.open('GET', xhrURL);
xhr.send();
xhr.onload = function() {
    if (JSON.parse(xhr.response).result == true) {
      WebApp.showAlert(`Добро пожаловать, ${WebApp.WebAppUser.username}.`);
    } else {
      WebApp.showAlert("Ты что, хакер?");
      WebApp.close();
    }
}

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Дрель-шуруповерт");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Пила");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Угловая шлифовальная машина");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Стремянка");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Набор инструментов");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Строительный пылесос");
		item = "6";
		tg.MainButton.show();
	}
});



let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








