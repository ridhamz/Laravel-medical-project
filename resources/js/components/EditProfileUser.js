import React, {Component} from 'react'
import axios from 'axios'
import AlertMessage from './AlertMessage'
export default class EditProfileUser extends Component{
    constructor(props){
        super(props)
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
        this.onChange5 = this.onChange5.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
          t1:'',
          t2:'',
          t3:'',
          t4:'',
          t5:'',
          alertMessage:''
        }
    }
    componentDidMount(){
        axios.get("/home/user/edit/"+this.props.match.params.id)
        .then(response=>{
             this.setState({
                 t1:response.data.name,
                 t2:response.data.email,
                 t3:response.data.phoneNumber,
                 t4:response.data.age,
                 t5:response.data.gender
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
    onChange3(e){
        this.setState({
            t3:e.target.value
        });
    }
        onChange4(e){
            this.setState({
                t4:e.target.value
            });
    }
    onChange5(e){
        this.setState({
            t5:e.target.value
        });
}
onSubmit(e){
    e.preventDefault();
    const user = {
        t1:this.state.t1,
        t2:this.state.t2,
        t3:this.state.t3,
        t4:this.state.t4,
        t5:this.state.t5,
    }
    axios.put('/home/user/update/'+this.props.match.params.id,user)
        .then(res => this.setState({
            alertMessage:'success',
                     }))
}
    render(){
        return(
            <div>
            {this.state.alertMessage == 'success' ? <AlertMessage message={'Your informations updated successfully'}/>:null}
            <form onSubmit={this.onSubmit}>
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label>Name :</label>
              <input type="text" name='t1' className="form-control"
              onChange={this.onChange1} value={this.state.t1}/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="t2" className="form-control"
              onChange={this.onChange2} value={this.state.t2} />
            </div>
            <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="t3" className="form-control"
            onChange={this.onChange3} value={this.state.t3} />
          </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
            <label>Age</label>
            <input type="text" name="t4" className="form-control"
            onChange={this.onChange4} value={this.state.t4} />
          </div>
          <div className="form-group">
          <label>Gender</label>
          <input type="text" name="t5" className="form-control"
          onChange={this.onChange5} value={this.state.t5} />
          </div>
            </div>
            </div>
            <button type="submit" className="btn btn-success">Update</button>
          </form>
       </div>
        )
    }
}
