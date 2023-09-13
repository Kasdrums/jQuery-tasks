//jquery
//как во всех div с классом "v-row-item" удалить класс "ui-icon-check" у всех span с этим классом, кроме тех div с классом "v-row-item", у которых есть data-id="20".
//<div class="v-row-item" data-id="..."><span class="ui-icon-check"></span></div>
//
////////////
$(document).ready(function () {
	$('div.v-row-item:not([data-id="20"])')
		.find('span.ui-icon-check')
		.removeClass('ui-icon-check');
});
