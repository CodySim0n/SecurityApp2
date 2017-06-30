var livehost = {
	getPinfo(){
		var url = `http://localhost:5000/api/hostlist`
		return fetch(url).then((res)=>res.json())
	}
};

module.exports = livehost;