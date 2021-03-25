import axios from 'axios';
import React, { Component } from 'react'

export default class Apitest extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            posts: [],
            error:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/getProducts",{withCredentials: true, credentials: 'include'})
        .then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
