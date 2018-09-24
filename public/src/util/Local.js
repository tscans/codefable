import Util from './Util';

class Local {
	saveItem = (key,item) =>{
		item = JSON.stringify(item);
		localStorage.setItem(`bb-${key}`, item);
		return 0;
	}
	loadItem = (key) =>{
		var loadedItem = localStorage.getItem(`bb-${key}`) || null;
		loadedItem = JSON.parse(loadedItem);
		return loadedItem;
	}
}

export default Local;