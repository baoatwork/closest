function reloadgo(){
        document.getElementById("reloadtext").style.display = "none";
    }

    function reloadshow(){
        document.getElementById("reloadtext").style.display = "block";
    }

    var modal = document.getElementById('myModal');
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = "images/truth.png";
        captionText.innerHTML = "<br>"+"These are the true roles.";
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";}


var bgm = document.getElementById ("bgm");
function what(){
	bgm.play();
	document.getElementById ("audioStart").style.display ="none";
}