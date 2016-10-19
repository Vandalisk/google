$(document).ready(function() {
	$('#mic').tooltip({
		position: { my: "center top+10", at: "center bottom" },
		hide: { effect: "false"},
		show: { effect: "false"}
	});
	$('#searchbar').focus( function() {
		$('fieldset').toggleClass('active');
	});
	$('#searchbar').blur( function() {
		$('fieldset').toggleClass('active');
	})
});
