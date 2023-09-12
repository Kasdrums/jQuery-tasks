$(document).ready(function () {
	function getDivsWithCheckIcon() {
		return $('div.v-row-item').has('span.ui-icon-check');
	}
	getDivsWithCheckIcon();
	const divsWithCheckIcon = getDivsWithCheckIcon();
	console.log(divsWithCheckIcon);
});
