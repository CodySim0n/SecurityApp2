import React, {Component } from 'react';

import numHostapi from './utilities/numHostApi';
import HostList from './listHostComponent'



class LiveHosts extends Component
{

	
	constructor(props){
		super(props);
		this.state = {
			data: [],
			numHost: ""
			
		}
	}

	


	componentWillMount(){
		console.log('component will mount');
		numHostapi.getPinfo().then((res)=>{
			this.setState({
				data: res,
			numHost: res[0].number_of_hosts
			})
		})
	
	}
	componentDidMount(){
		console.log("component did mount");

	}
	componentWillReceiveProps(nextProps){
			console.log("componentWill receive props" + nextProps);
	}
	shouldComponentUpdate(nextProps, nextState){
	
		return true;
	}

	componentWillUpdate(nextProps, nextState){

		console.log("component did update")
		numHostapi.getPinfo().then((res)=>{
			this.setState({
				data: res,
			numHost: res[0].number_of_hosts
				
			})
		})
	}
	componentDidUpdate(){
		console.log("component did update")
	}
	
	
	render(){
		return(
			<div>

			<h1>Number of Devices on Network: {this.state.numHost}</h1>

			<HostList />
			
				
            </div>
                                    
			)
			}
			}


	








export default LiveHosts;
