import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../css/app.css'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AlertMessage from './AlertMessage'

export default class Allappoiments extends Component{

    constructor(){
        super();
        this.handlePageChange=this.handlePageChange.bind(this);
        this.state={
            Data:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
            alert_message:''
        }
    }

    componentDidMount(){
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
       resultColor(result){
         return  result == 'wait...' ? 'red' :'green'
       }

       onDelete(id){
        axios.delete('/home/appointment/delete/'+id)
        .then(res => {
            axios.get("/home/all/appoiments")
            .then(response => {
                    this.setState({
                                    Data:response.data.data,
                                    activePage:response.data.current_page,
                                    itemsCountPerPage:response.data.per_page,
                                    totalItemsCount:response.data.total
                                   });
               })
            this.setState({alert_message:'success'})
        })
    }
  render(){
    return (
        <div>
        {this.state.alert_message == 'success' ? <AlertMessage message={'Appointment deleted successfully'}/>:null}
        <table className="table">
        <thead>
          <tr>
            <th scope="col">App id</th>
            <th scope="col">Result</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">Show</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {
            this.state.Data.map((data,i) =>{
                      return (
                           <tr key={i}>
                                <td key={i+1}>{data.id}</td>
                                <td key={i+3} style={{color:this.resultColor(data.Result)}}>{data.Result}</td>
                                <td key={i+4}>{data.created_at}</td>
                                <td key={i+5}>{data.updated_at}</td>
                                <td>
                                <Link to={'/home/appointment/show/'+data.id} className='btn btn-info btn-sm'>Show</Link>
                                </td>
                                <td key={i+6}>
                                <Link to={'/home/appointment/edit/'+data.id} className='btn btn-success btn-sm'>
                                Edit
                                </Link>
                                </td>
                                <td>
                                <a href="#" className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this,data.id)}>Delete</a>
                                 </td>

                           </tr>)
                      })
        }

        </tbody>
      </table>
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
           )}
}
