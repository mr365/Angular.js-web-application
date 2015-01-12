myApp.controller('StatusController',['$scope','$firebaseAuth', function ($scope,$firebaseAuth) {
	// body...
	var ref = new Firebase('https://attendancedt.firebaseio.com/');
	 function authDataCallback(authData) {
		  if (authData) {
		  	$scope.userid = authData.uid;
		    console.log("User " + authData.uid + " is logged in with " + authData.provider);
		  } else {
		    console.log("User is logged out");
		  }
		}

  	ref.onAuth(authDataCallback);

  	


}]);//StatusController