import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Pagination from 'react-js-pagination'

export default class UserProfile extends Component{
    constructor(){
        super();
        this.handlePageChange=this.handlePageChange.bind(this);
        this.state={
            User:{},
            Data:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
        }
    }

    componentDidMount(){
   axios.get("/home/user/edit/"+this.props.match.params.id)
     .then(response=>{
             this.setState({User:response.data});
        }).catch(error => {
            console.log(error)
        });
        axios.get("/home/all/appoiments")
     .then(response => {
             this.setState({
                             Data:response.data.data,
                             activePage:response.data.current_page,
                             itemsCountPerPage:response.data.per_page,
                             totalItemsCount:response.data.total
                            });
        })
        .catch(error => {
            console.log(error)
        });


    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get("/home/all/appoiments?page="+pageNumber)
         .then(response=>{
              this.setState({
                                     Data:response.data.data,
                                     activePage:response.data.current_page,
                                     itemsCountPerPage:response.data.per_page,
                                     totalItemsCount:response.data.total
                                 });
         }).catch(error => {
             console.log(error)
         });
       }

        render(){
    return (
        <div>
              <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 ">
               <h4> Name :</h4> {this.state.User.name}
                <h4>Email:</h4> {this.state.User.email}
                <h4>Phone Number :</h4> {this.state.User.phoneNumber}
                <h4>Age:</h4> {this.state.User.age}
                <h4>Gender:</h4> {this.state.User.gender}
                <hr></hr>
                <Link to={"/home/user/edit/"+this.state.User.id} className="btn btn-success btn-sm">Edit Your Profile</Link>
              </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    {
                        this.state.Data.map(data =>{
                            return(
                                         <div className="card crd" key={data.id}>
                                           <p className="card-text"><label>Malady type:</label> {data.maladyName} </p>
                                           <p className="card-text"><label>Description:</label> {data.maladyDescription}</p>
                                           <p className="card-text"><label>Created at:</label> {data.created_at}</p>
                                           <p className="card-text"><label>Updated at:</label> {data.updated_at}</p>
                                           <p className="card-text"><label>Result:</label> {data.Result}</p>
                                       </div>

                                  )
                        })
                    }
                    <div className="d-flex justify-content-center">
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                  />
                  </div>
                 </div>
              </div>
        </div>
           )
}
    }
