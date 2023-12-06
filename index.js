function openNavbar() { 
	document.getElementById("sideNavigationBar") 
		.style.width = "50%"; 
} 
function closeNavbar() { 
	document.getElementById("sideNavigationBar") 
		.style.width = "0%"; 
}


function mUp(obj){
    if(obj.id == "a")
        obj.className += ' boxa';
    else if(obj.id == 'b')
        obj.className += ' boxb';
    else
        obj.className += ' boxc';
}

function mDown(obj){
    console.log("left", obj.id);
    if(obj.id == "a")
        obj.className = 'box';
    else if(obj.id == 'b')
        obj.className = 'box';
    else
        obj.className = 'box';
}