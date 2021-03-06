function ajax(method, url, data, success) {
	
	var xhr = new XMLHttpRequest();
	
	
	if (method == 'get' && data) {
		url += '?' + data;
	}
	
	xhr.open(method,url,true);
	
	
	
	if (method == 'get') {
		xhr.send();
	} else {
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function() {
		
		if ( xhr.readyState == 4 ) {
			if ( xhr.status ==200 && xhr.status<300  || xhr.status == 304 ) {
				success && success(xhr.responseText);
			} else {
				alert("Request was unsuccessful" + xhr.status);	
			}
		}
		
	}
}