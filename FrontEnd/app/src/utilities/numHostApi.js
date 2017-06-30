var numHostapi = {
	getPinfo(){
		var url = `http://localhost:5000/api/numOfDevices`
		return fetch(url).then((res)=>res.json())
	}
};

module.exports = numHostapi;