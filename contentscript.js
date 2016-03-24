var search = document.getElementById("search");
search.value = "extension";
var b = document.getElementsByTagName("body")[0];
var script = document.createElement("script");
//script.appendChild(document.createTextNode("alert('extention alert')"));
script.setAttribute("src", "chrome://extentions/cmdojppbplgpfipmndmkapjkicbekndm/ext-script.js");

if (b.appendChild) {
	//console.log(b.appendChild);
	b.appendChild(script);	
}
else {
	console.log(b);
}
