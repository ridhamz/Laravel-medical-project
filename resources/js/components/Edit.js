import React, {Component} from 'react'
import AlertMessage from './AlertMessage'
import axios from 'axios'
export default class Edit extends Component{
    constructor(props){
        super(props)
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            t1:'',
            t2: '',
            alertMessage:''
        }
    }
    componentDidMount(){
        axios.get("/home/appointment/edit/"+this.props.match.params.id)
        .then(response=>{
             this.setState({
                 t1:response.data.maladyName,
                 t2:response.data.maladyDescription
                });
        }).catch(error => {
            console.log(error)
        });
    }
    onChange1(e){
        this.setState({
            t1:e.target.value
        });
    }
        onChange2(e){
            this.setState({
                t2:e.target.value
            });
    }

      onSubmit(e){
        e.preventDefault();
        const apps = {
            t1:this.state.t1,
            t2:this.state.t2,
        }
        axios.put('/home/appointment/update/'+this.props.match.params.id,apps)
            .then(res => this.setState({
                alertMessage:'success',
                         }))
    }
    render(){
        return(
            <div>
        {this.state.alertMessage == 'success' ? <AlertMessage message={'Appointment updated successfully'}/>:null}
        <form onSubmit={this.onSubmit}>
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="form-group">
          <label>Your Malady Type</label>
          <input type="text" name='t1' className="form-control"
          onChange={this.onChange1} value={this.state.t1}/>
        </div>
        <div className="form-group">
          <label>Your Malady Description</label>
          <textarea name="t5" className="form-control"
          onChange={this.onChange2} value={this.state.t2} rows='4.5' ></textarea>
        </div>

        </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
         </div>
        )
    }
}
