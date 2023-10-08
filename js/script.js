const toggleDropdown = document.getElementById("toggleDropdown");
const dropdownContent = document.getElementById("dropdownContent");

let click = true;
		
toggleDropdown.addEventListener('click', () => {
	if (click) {
		dropdownContent.style.display = "block";
		click = false;
	}else{
		dropdownContent.style.display = "none";
		click = true;
	}
});