functionMultiple = function(n) {
	 value = ''+n;	
	if (n == 1) return 'Linianos';		
	switch (n%3){
	  case 0: value = 'Linio';  break;
	  case 1:
	    switch(n%5){
	      case 0:   
		     value = 'IT'; break;
	      case 1:
  		     value = ''+n;    break;
	    }
		default: value= ''+n;  break;
	}
	switch (n%5) { 
	   case 0: value = 'IT';  break;
	}	
	switch ((n%5 ==0) && (n%3==0)) {
	   case true: 
     	   console.log('Linianos');  break;
	   case false: 	
           console.log(value);  break;		   
	}		
	console.log (functionMultiple(n-1)); 
}