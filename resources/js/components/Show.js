import React, {Component} from 'react'
import axios from 'axios'

export default class Show extends Component{
    constructor(){
        super()
        this.state = {Data:{}}
    }

    componentDidMount(){
        axios.get("/home/appointment/edit/"+this.props.match.params.id)
        .then(response=>{
             this.setState({Data:response.data  });
        }).catch(error => {
            console.log(error)
        });
    }

    render(){
        return(
<div className="card crd2">
  <div className="card-header">
 <h5> Appointment id :{this.state.Data.id}</h5>
  </div>
  <div className="card-body">
    <p className="card-text"> <h5>Malady Type :</h5> <h6>{this.state.Data.maladyName}</h6></p>
    <p className="card-text"><h5>Description :</h5><h6>{this.state.Data.maladyDescription}</h6></p>
    <p className="card-text"><h5>Created at :</h5><h6>{this.state.Data.created_at}</h6></p>
    <p className="card-text"><h5>Updated at :</h5><h6>{this.state.Data.updated_at}</h6></p>
    <p className="card-text"><h5>Result :</h5><h6>{this.state.Data.Result}</h6></p>
  </div>
</div>
        )
    }
}
