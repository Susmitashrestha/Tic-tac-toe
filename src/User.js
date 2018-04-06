import React,{Component} from 'react';
class User extends Component{
	
		constructor(props){
			super(props)
			this.state= {
				fullname: props.firstName + ' ' + props.lastName,
				username:'usernhnhn'
			}
		}
	
	render(){
		return(
			<div>
			   <h1 onClick={()=>this.handleClick(this.state.fullName)}>
			   this is {this.props.firstName+' '+this.props.lastName}!.
			   </h1>
			   <p>{this.state.username}</p>
			   <input
			   name='username'
			   type='text'
			   value={this.state.username}
			   onChange ={(event) =>{this.handlechange(event)} />
			  </div>

)
	}
	handleClick=function(){
		alert(this.state.fullName +'clicked')
	}

	handleChange=function(event){
		this.setState({
			username: event.target.value
}


}
export default User;