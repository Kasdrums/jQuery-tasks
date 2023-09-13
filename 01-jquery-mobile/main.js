// jquery-mobile
// напиши функцию, которая будет создавать и открывать popup с двумя полями ввода "количество" и "цена", а также двумя кнопками "закрыть" и "сохранить".
////////
$(document).ready(function () {
	const linkAsBtn = $('<a>', {
		href: '#pop-up-div',
		'data-rel': 'popup',
		class: 'ui-btn ui-corner-all ui-shadow ui-btn-inline',
		text: 'Открыть окно',
	});

	$('#home').append(linkAsBtn);

	const popupDiv = $('<div>', {
		'data-role': 'popup',
		id: 'pop-up-div',
		class: 'pop-up-div-wrapper',
	});

	const form = $('<form>');

	const quantityLabel = $('<label>', {
		text: 'Количество:',
	});
	const quantityInput = $('<input>', {
		type: 'number',
	});

	const priceLabel = $('<label>', {
		text: 'Цена:',
	});
	const priceInput = $('<input>', {
		type: 'number',
	});

	const closeButton = $('<button>', {
		text: 'Закрыть',
		click: function () {
			$(this).closest('#pop-up-div').popup('close');
		},
		class: 'close-btn-in-popup',
	});

	const saveButton = $('<button>', {
		text: 'Сохранить',
		click: function () {
			const quantityValue = quantityInput.val();
			const priceValue = priceInput.val();

			if (quantityValue === '' || priceValue === '') {
				alert('Пожалуйста, заполните все поля!');
			} else {
				alert('Сохранено!');
			}
		},
		class: 'save-btn-in-popup',
	});

	quantityLabel.css({
		'font-size': '16px',
		'text-decoration': 'underline',
		margin: '10px',
	});

	quantityInput.css({
		width: '100px',
		margin: '5px',
		'background-color': '#f2f2f2',
	});

	priceLabel.css({
		'font-size': '16px',
		'text-decoration': 'underline',
		margin: '10px',
	});

	priceInput.css({
		width: '100px',
		margin: '5px',
		'background-color': '#f2f2f2',
	});

	closeButton.css({
		'background-color': '#FF968A',
		color: 'white',
		'border-radius': '5px',
		padding: '10px',
		'margin-right': '10px',
	});

	saveButton.css({
		'background-color': '#98C1A9',
		color: 'white',
		'border-radius': '5px',
		padding: '10px',
	});

	form.append(quantityLabel, quantityInput, priceLabel, priceInput);

	popupDiv.append(form, closeButton, saveButton);

	$('#home').append(popupDiv);

	$('#pop-up-div').popup();
});
