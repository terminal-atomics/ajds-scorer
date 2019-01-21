function getParams(){
	let hash = location.hash.toString();
	if (hash == "") {
		return {};
	}
	hash = hash.substring(1);
	let sections = hash.split("&");
	let params = {};
	sections.forEach(section => {
		let parts = section.split("=");
		params[parts[0]] = parts[1];
	});
	return params;
}