// jquery
// напиши функцию, которая вернет все div с классом "v-row-item", которых внутри есть span с классом "ui-icon-check"
//
///////////
$(document).ready(function () {
	function getDivsWithCheckIcon() {
		return $('div.v-row-item').has('span.ui-icon-check');
	}
	getDivsWithCheckIcon();
	const divsWithCheckIcon = getDivsWithCheckIcon();
	console.log(divsWithCheckIcon);
});
