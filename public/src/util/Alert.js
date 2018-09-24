import Util from './Util';
import alertify from 'alertify.js';

class SignIn {
	alert = (success,message)=>{
		if(success){
			alertify.logPosition("top right");
			alertify.success(message);
		}
		else{
			alertify.logPosition("top right");
			alertify.error(message);
		}
	}
}

export default SignIn;