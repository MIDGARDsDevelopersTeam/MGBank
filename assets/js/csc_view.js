function show_hide_password(target){
	var input = document.getElementById('csc');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
        document.getElementById("show-csc").setAttribute('class', 'far fa-eye');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
        document.getElementById("show-csc").setAttribute('class', 'far fa-eye-slash');
	}
	return false;
}