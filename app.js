let tg = window.Telegram.WebApp;
 const DemoAppInitData = {
        init() {
            DemoApp.init();
            Telegram.WebApp.onEvent('themeChanged', function () {
                document.getElementById('theme_data').innerHTML = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
            });
            document.getElementById('webview_data').innerHTML = JSON.stringify(DemoApp.initDataUnsafe, null, 2);
            document.getElementById('theme_data').innerHTML   = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
            DemoApp.checkInitData();
        }
    };

document.getElementById('webview_data').innerHTML = JSON.stringify(DemoApp.initDataUnsafe, null, 2);


checkInitData() {
            const webViewStatus = document.querySelector('#webview_data_status');
            if (DemoApp.initDataUnsafe.query_id &&
                DemoApp.initData &&
                webViewStatus.classList.contains('status_need')
            ) {
                webViewStatus.classList.remove('status_need');
                DemoApp.apiRequest('checkInitData', {}, function (result) {
                    if (result.ok) {
                        webViewStatus.textContent = 'Hash is correct (async)';
                        webViewStatus.className   = 'ok';
                    } else {
                        webViewStatus.textContent = result.error + ' (async)';
                        webViewStatus.className   = 'err';
                    }
                });
            }
        },



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
    tg.showAlert(`Добро пожаловать!`);
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
