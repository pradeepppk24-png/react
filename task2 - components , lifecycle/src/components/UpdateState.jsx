import { Component } from "react";
export default class UpdateState extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }

    render(){
        return(
            <>
            <div>
                <h1>SIMPLE CALCULATOR</h1>
                <div>
                    <h3>Value : {this.state.count}</h3>
                </div>
            </div>

            <div>
                <button onClick ={()=> { this.setState({ count: this.state.count + 1 }) } }> ADD </button>
            </div>
            </>
        )
    }
}