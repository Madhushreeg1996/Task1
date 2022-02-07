import React from 'react';
import { withRouter } from 'react-router-dom';
class LoginForm extends React.Component
{
    state ={
        pass:"",
        email:"",
    }
    add =(e) =>
    { e.preventDefault();
        if(this.state.pass =="" || this.state.email =="")
        {
            alert("Please enter Name and email");
            return;
        }
        else{
            alert("Signin  successfully");
            this.props.history.push("/");
        }
    }
    render(){
        return(
            <div className ="text-white">
                
                <table>
                    <tr> <th> <label>Email:</label> </th>
                    <td><input  style={{height :"5vmin", width:"100vmin",border:"1px solid"}} type="email" id ="email" placeholder="Email" value={this.state.email} onChange={(e) =>this.setState({email :e.target.value}) } /></td> </tr>
                    <tr> <th> <label>Password:</label> </th>
                    <td><input  style={{height :"5vmin", width:"100vmin",border:"1px solid"}} type="password" id ="password" placeholder="password" value={this.state.pass} onChange={(e) =>this.setState({pass :e.target.value}) } /></td> </tr>
                    <tr><button className ="addbtn" onClick={this.add}>LOGIN</button></tr>
                </table>
            </div>
        );
    }
    
}
export default withRouter(LoginForm);
