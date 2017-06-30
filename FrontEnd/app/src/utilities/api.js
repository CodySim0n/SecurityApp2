var api = {
	getPinfo(){
		var url = `http://localhost:5000/api`
		return fetch(url).then((res)=>res.json())
	}
};

module.exports = api;