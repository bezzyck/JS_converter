const curElem1 = document.querySelector('.cur_elem_1'),
	curElem2 = document.querySelector('.cur_elem_2'),
	curInp1 = document.querySelector('.cur_input_1'),
	curInp2 = document.querySelector('.cur_input_2'),
	rateBox = document.querySelector(".rate-box");

function calc() {
	let curElem1Value = curElem1.value,
		curElem2Value = curElem2.value;

	fetch(`https://v6.exchangerate-api.com/v6/725d5af1d7a33f5430c87a2a/latest/${curElem1Value}`)
		.then(response => response.json())
		.then(data => {
			let rate = data.conversion_rates[curElem2Value];

			rateBox.textContent = `1 ${curElem1Value} = ${rate.toFixed(4)} ${curElem2Value}`;

			curInp2.value = (curInp1.value * rate).toFixed(2);
		});
}

function listeners() {
	curElem1.addEventListener("change", calc);
	curElem2.addEventListener("change", calc);
	curInp1.addEventListener("input", calc);
	curInp2.addEventListener("input", calc);
}

listeners();
calc();