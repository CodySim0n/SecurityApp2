import React, {Component } from 'react';

import api from './utilities/api';



class Data extends Component
{

	
	constructor(props){
		super(props);
		this.state = {
			data: [],
			srcMac1: "",
				srcMac2: "",
				srcMac3: "",
				srcMac4: "",
				srcMac5: "",
				destMac1: "",
				destMac2: "",
				destMac3: "",
				destMac4: "",
				destMac5: "",
				srcIp1: "",
				srcIp2: "",
				srcIp3: "",
				srcIp4: "",
				srcIp5: "",
				destIp1: "",
				destIp2: "",
				destIp3: "",
				destIp4: "",
				destIp5: ""

		}
	}

	


	componentWillMount(){
		console.log('component will mount');
		api.getPinfo().then((res)=>{
			this.setState({
				data: res,
				srcMac1: res[0].SourceMac,
				srcMac2: res[1].SourceMac,
				srcMac3: res[2].SourceMac,
				srcMac4: res[3].SourceMac,
				srcMac5: res[4].SourceMac,
				destMac1: res[0].DestinationMac,
				destMac2: res[1].DestinationMac,
				destMac3: res[2].DestinationMac,
				destMac4: res[3].DestinationMac,
				destMac5: res[4].DestinationMac,
				srcIp1: res[0].SourceIP,
				srcIp2: res[1].SourceIP,
				srcIp3: res[2].SourceIP,
				srcIp4: res[3].SourceIP,
				srcIp5: res[4].SourceIP,
				destIp1: res[0].DestinationIP,
				destIp2: res[1].DestinationIP,
				destIp3: res[2].DestinationIP,
				destIp4: res[3].DestinationIP,
				destIp5: res[4].DestinationIP,
				srcMac6: res[5].SourceMac,
				srcMac7: res[6].SourceMac,
				srcMac8: res[7].SourceMac,
				srcMac9: res[8].SourceMac,
				srcMac10: res[9].SourceMac,
				destMac6: res[5].DestinationMac,
				destMac7: res[6].DestinationMac,
				destMac8: res[7].DestinationMac,
				destMac9: res[8].DestinationMac,
				destMac10: res[9].DestinationMac,
				srcIp6: res[5].SourceIP,
				srcIp7: res[6].SourceIP,
				srcIp8: res[7].SourceIP,
				srcIp9: res[8].SourceIP,
				srcIp10: res[9].SourceIP,
				destIp6: res[5].DestinationIP,
				destIp7: res[6].DestinationIP,
				destIp8: res[7].DestinationIP,
				destIp9: res[8].DestinationIP,
				destIp10: res[9].DestinationIP,
				data1: res[0].Data,
				data2: res[1].Data,
				data3: res[2].Data,
				data4: res[3].Data,
				data5: res[4].Data,
				data6: res[5].Data,
				data7: res[6].Data,
				data8: res[7].Data,
				data9: res[8].Data,
				data10: res[9].Data
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
		api.getPinfo().then((res)=>{
			this.setState({
				data: res,
				srcMac1: res[0].SourceMac,
				srcMac2: res[1].SourceMac,
				srcMac3: res[2].SourceMac,
				srcMac4: res[3].SourceMac,
				srcMac5: res[4].SourceMac,
				destMac1: res[0].DestinationMac,
				destMac2: res[1].DestinationMac,
				destMac3: res[2].DestinationMac,
				destMac4: res[3].DestinationMac,
				destMac5: res[4].DestinationMac,
				srcIp1: res[0].SourceIP,
				srcIp2: res[1].SourceIP,
				srcIp3: res[2].SourceIP,
				srcIp4: res[3].SourceIP,
				srcIp5: res[4].SourceIP,
				destIp1: res[0].DestinationIP,
				destIp2: res[1].DestinationIP,
				destIp3: res[2].DestinationIP,
				destIp4: res[3].DestinationIP,
				destIp5: res[4].DestinationIP,
				srcMac6: res[5].SourceMac,
				srcMac7: res[6].SourceMac,
				srcMac8: res[7].SourceMac,
				srcMac9: res[8].SourceMac,
				srcMac10: res[9].SourceMac,
				destMac6: res[5].DestinationMac,
				destMac7: res[6].DestinationMac,
				destMac8: res[7].DestinationMac,
				destMac9: res[8].DestinationMac,
				destMac10: res[9].DestinationMac,
				srcIp6: res[5].SourceIP,
				srcIp7: res[6].SourceIP,
				srcIp8: res[7].SourceIP,
				srcIp9: res[8].SourceIP,
				srcIp10: res[9].SourceIP,
				destIp6: res[5].DestinationIP,
				destIp7: res[6].DestinationIP,
				destIp8: res[7].DestinationIP,
				destIp9: res[8].DestinationIP,
				destIp10: res[9].DestinationIP,
				data1: res[0].Data,
				data2: res[1].Data,
				data3: res[2].Data,
				data4: res[3].Data,
				data5: res[4].Data,
				data6: res[5].Data,
				data7: res[6].Data,
				data8: res[7].Data,
				data9: res[8].Data,
				data10: res[9].Data
			})
		})
	}
	componentDidUpdate(){
		console.log("component did update")
	}
	
	
	render(){
		return(
			<div>
			<h1>Live Data</h1>
			<table>
			<thead>
				<tr style={{padding : "20px", backgroundColor: "lightblue"}}>
					<td style={{padding : "20px"}}>|Source Mac Address        </td>
					<td style={{padding : "20px"}}>|Destination Mac Address        </td>
					<td style={{padding : "20px"}}>|Source IP address    </td>
					<td style={{padding : "20px"}}>|Destination IP address    </td>
					<td style={{padding : "20px"}}>|Data                                 </td>
				</tr>
			</thead>
			<tbody>
			<tr style={{padding : "20px"}}>
            <td style={{padding : "20px"}} >{this.state.srcMac1}    </td>
            <td style={{padding : "20px"}}>{this.state.destMac1}   </td>
            <td style={{padding : "20px"}}>{this.state.srcIp1}   </td>
            <td style={{padding : "20px"}}>{this.state.destIp1}   </td>
            <td style={{padding : "20px"}}>{this.state.data1}    </td>
            </tr>
            <tr style={{padding : "20px", backgroundColor: "lightblue"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac2}    </td>
                <td style={{padding : "20px"}}>{this.state.destMac2}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp2}  </td>
                <td style={{padding : "20px"}}>{this.state.destIp2}   </td>
                <td style={{padding : "20px"}}>{this.state.data2}    </td>
            </tr>
            <tr style={{padding : "20px"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac3}    </td>
                <td style={{padding : "20px"}}>{this.state.destMac3}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp3}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp3}   </td>
                <td style={{padding : "20px"}}>{this.state.data3}    </td>
            </tr>
            <tr style={{padding : "20px", backgroundColor: "lightblue"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac4}   </td> 
                <td style={{padding : "20px"}}>{this.state.destMac4}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp4}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp4}  </td>
                <td style={{padding : "20px"}}>{this.state.data4}    </td>
                
            </tr>
            <tr style={{padding : "20px"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac5}   </td>
                <td style={{padding : "20px"}}>{this.state.destMac5}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp5}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp5}  </td>
                <td style={{padding : "20px"}}>{this.state.data5}    </td>
            </tr>
            <tr style={{padding : "20px", backgroundColor: "lightblue"}}>
            <td style={{padding : "20px"}}>{this.state.srcMac6}   </td>
            <td style={{padding : "20px"}}>{this.state.destMac6}   </td>
            <td style={{padding : "20px"}}>{this.state.srcIp6}   </td>
            <td style={{padding : "20px"}}>{this.state.destIp6}   </td>
            <td style={{padding : "20px"}}>{this.state.data6}    </td>
            </tr>
            <tr style={{padding : "20px"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac7}   </td>
                <td style={{padding : "20px"}}>{this.state.destMac7}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp7}  </td>
                <td style={{padding : "20px"}}>{this.state.destIp7}   </td>
                <td style={{padding : "20px"}}>{this.state.data7}    </td>
            </tr>
            <tr style={{padding : "20px", backgroundColor: "lightblue"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac8}    </td>
                <td style={{padding : "20px"}}>{this.state.destMac8}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp8}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp8}   </td>
                <td style={{padding : "20px"}}>{this.state.data8}    </td>
            </tr>
            <tr style={{padding : "20px"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac9}   </td> 
                <td style={{padding : "20px"}}>{this.state.destMac9}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp9}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp9}  </td>
                <td style={{padding : "20px"}}>{this.state.data9}    </td>
            </tr>
            <tr style={{padding : "20px", backgroundColor: "lightblue"}}>
                <td style={{padding : "20px"}}>{this.state.srcMac10}   </td>
                <td style={{padding : "20px"}}>{this.state.destMac10}   </td>
                <td style={{padding : "20px"}}>{this.state.srcIp10}   </td>
                <td style={{padding : "20px"}}>{this.state.destIp10}  </td>
                <td style={{padding : "20px"}}>{this.state.data10}    </td>
            </tr>
            </tbody>
            </table>
            </div>
                                    
			)


	}






}

export default Data;
