import React, {Component } from 'react';

import hostlist from './utilities/hostListApi';



class HostList extends Component
{

	
	constructor(props){
		super(props);
		this.state = {
			data: [],
			list_of_devices: []
			
			
		}
	}



	componentWillMount(){
		console.log('component will mount');
		hostlist.getPinfo().then((res)=>{
			this.setState({
				data: res
			
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
		hostlist.getPinfo().then((res)=>{
			this.setState({
				data: res
				
			})
		})
	}
	componentDidUpdate(){
		console.log("component did update")
	}
	
	
	render(){
        // const data = hostlist.getPinfo();
		// const li = this.state.list_of_devices;
        // const devicelist = li.map( devices,index =>{
        //     return(
		// 		<td key = {index}>{li.list_of_devices}</td>
        //     )
        // })
		// console.log("li" + li.list_of_devices);
		// var zz = this.state.data;
		// console.log(zz)
		// var bb = zz.forEach(function(Object) {
		// 	console.log(Object.Vendor);
		// 	return <p>{Object.IpAddress} --- {Object.Vendor}</p>
		// }, this);
		// console.log('bb' + bb)
		



		return(
			
			
			<ul>
				{this.state.data.map(Object => {
					return <li>{Object.IpAddress}---{Object.MacAddress}---{Object.Vendor}</li>
				})}
			</ul>
						
           
                                    
			)
			}
			}


	








export default HostList;
