import React, { Component } from 'react'

export class Data extends Component {
    state ={
        count: 0
    }
    render() {
        
        return (
            <div>
                <button onClick ={()=>{ this.setState({count : this.state.count + 1 });
                                        console.log(this.state.count);
                                        }}>Click me</button>
            </div>
        )
    }
}

export default Data
