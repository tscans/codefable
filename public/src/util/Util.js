import Alert from './Alert';
import Local from './Local';

const Util = {
	...new Alert(),
	...new Local()
}

export default Util;