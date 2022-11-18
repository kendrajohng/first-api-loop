var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?&order=name');

/*remove quantity parameter because we want all products not just 2*/

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	
	
	for(item in parsedData) {
		var name = parsedData[item].name;
		var products = document.createElement('li');
		products.innerHTML = name;
		document.body.appendChild(products);

/*code below to display images*/

		var imageUrl = parsedData[item].image;
		var images = document.createElement('img');
		images.setAttribute ('src',imageUrl);
		document.body.appendChild(images);

	}

	
};

request.send();