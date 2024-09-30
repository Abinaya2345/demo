var image=document.getElementById("image");
var button=document.getElementById("button");
var form=document.getElementById("forming");


button.addEventListener("click",generate);

function generate(){
	var picture=["picture/welcome.JPG","picture/tamilnadu.JPG","picture/taj.JPG","piucture/kerala.JPG","picture/korin.JPG","picture/korea.JFIF"];
	picture.forEach(function(){
		var a=Math.floor(Math.random()*(picture.length));
		image.src=picture[a];
		
	})
}