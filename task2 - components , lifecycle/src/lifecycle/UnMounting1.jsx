import { Component } from "react";

export default class UnMounting1 extends Component{

    constructor(){
        super()
        this.state = {
            candidateName:"saravanan",
            canidateAge: 28,
            desigination: "Software Engieer"
        }
    }
    componentWillUnmount(){
        console.log("Component will unmount caling")
        this.setState({})
    }

    render(){
        return(
            <>
                <div>
                    <h3> Un Mounting Phase </h3>
                    <p> Candidate Name : {this.state.candidateName}</p>
                </div>
            </>
        )
    }
}