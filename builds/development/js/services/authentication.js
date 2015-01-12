myApp.factory('Authentication', function($firebase,$firebaseAuth,$location){
	var ref= new Firebase('https://attendancedt.firebaseio.com/');
	var simpleLogin = $firebaseAuth(ref);

	var myObject ={
		login: function(user){
			return simpleLogin.$authWithPassword({
			email: user.email,
			password: user.password
		},function(error, authData) { /* Your Code */ }, {
		  remember: "sessionOnly"
		});
	}//login
	}//myObject
	return myObject;
});