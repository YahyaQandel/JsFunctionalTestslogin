function lgn(){
	var em = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;

	em = em ? em : 0
	pass = pass ? pass : 0
	$.ajax({
			url: "http://localhost:3030/login",
			method : "GET",
			data: {username:em,password:pass},
			success: function(result){
            document.getElementById('res').innerHTML = result? "successfull " : "failed"
        }});

	return false;
}