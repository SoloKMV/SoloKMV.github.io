let tg = window.Telegram.WebApp;


tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
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

Telegram.WebApp.onEvent("mainButtonClicked", function(){
var price = ''
if (item === "1") {
        price = {"label": "Дрель-шуруповерт", "amount": 20000}
    } else if (item === "2") {
        price = {"label": "Пила", "amount": 10000}
    } else if (item === "3") {
        price = {"label": "УШМ", "amount": 32000}
    } else if (item === "4") {
        price = {"label": "Стремянка", "amount": 10000}
    } else if (item === "5") {
        price = {"label": "Набор инструментов", "amount": 60000}
    } else if (item === "6") {
        price = {"label": "Строительный пылесос", "amount": 27000}
    }
  tg.MainButton.setText("Продолжить");
  document.getElementById('itemTitle').textContent = price.label;
  document.getElementById('itemPrice').textContent = (price.amount / 100).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
	var section_main = document.querySelector('.second');
	var section = document.querySelector('.cafe-order-overview');
  if (section.style.display === 'none') {
	section_main.style.display = 'none'
    section.style.display = 'block';
  } else
  {
Buy();
  }
});






function Buy(){
	var price = '';
if (item === "1") {
        price = '[{"label": "Дрель-шуруповерт", "amount": 20000}]'
    } else if (item === "2") {
        price = '[{"label": "Пила", "amount": 10000}]'
    } else if (item === "3") {
        price = '[{"label": "УШМ", "amount": 32000}]'
    } else if (item === "4") {
        price = '[{"label": "Стремянка", "amount": 10000}]'
    } else if (item === "5") {
        price = '[{"label": "Набор инструментов", "amount": 60000}]'
    } else if (item === "6") {
        price = '[{"label": "Строительный пылесос", "amount": 27000}]'
    }

let xhrURL = new URL('https://api.telegram.org/bot7003515026:AAFGUqHYmheoz-hppBT25XXCJeOCTv8Yc3Y/createInvoiceLink');
    xhrURL.searchParams.set('title', 'Покупка');
    xhrURL.searchParams.set('description', 'Оборудование в аренду');
    xhrURL.searchParams.set('payload', 'some_invoice');
    xhrURL.searchParams.set('provider_token', '381764678:TEST:84529');
    xhrURL.searchParams.set('need_phone_number', 'True');
    xhrURL.searchParams.set('need_email', 'True');
    xhrURL.searchParams.set('need_shipping_address', 'True');
    xhrURL.searchParams.set('need_name', 'True');
    xhrURL.searchParams.set('is_flexible', 'True');	
    xhrURL.searchParams.set('currency', 'rub');
    xhrURL.searchParams.set('prices', price);
    /* ... setting other non-private optional parameters */

    let xhr = new XMLHttpRequest();
    xhr.open('GET', xhrURL);
    xhr.send();
    xhr.onload = function() {
        tg.openInvoice(JSON.parse(xhr.response).result);
    }
}

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
