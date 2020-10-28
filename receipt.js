function docReady(fn) {
	// see if DOM is already available
	if (document.readyState === "complete" || document.readyState === "interactive") {
		// call on next available tick
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function currentDateTime() {
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();
	return today.toLocaleDateString('id-ID') + ' ' + today.toLocaleTimeString('id-ID');
}

function refreshDateTime(){
	var refresh=1000;
	mytime=setTimeout('displayDateTime()', refresh);
}

function displayDateTime() {
	document.getElementById('currentDateTime').innerHTML = currentDateTime();
	refreshDateTime();
}

/*display datetime*/
docReady(function() {
	var el = document.createElement('div');
	el.setAttribute('id', 'currentDateTime');
	el.style.cssText = 'padding-top: 10px;font-size: 0.9em;text-align: center;';
	el.innerHTML = currentDateTime();
	var div = document.getElementById('barcode');
	if (div != null) {
		insertAfter(div, el);
		displayDateTime();
	}
});
