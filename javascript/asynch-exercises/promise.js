var p = Promise.reject( "Oops" ).defer();

// `foo(..)` is Promise-aware
foo( 42 )
.then(
	function fulfilled(){
		return p;
	},
	function rejected(err){
		// handle `foo(..)` error
	}
);