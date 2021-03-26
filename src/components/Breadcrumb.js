import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Breadcrumb extends Component {
    state = {
        crumbs : window.location.pathname.split("/")
    }
    render() {
        var last =  this.state.crumbs.length-1;
        var breads = [];
        var link_str = "/";
        var sublink = [];
        for(var i = 1; i<this.state.crumbs.length; i++){
            breads[i] = window.location.pathname.split("/")[i];
            link_str += breads[i] + "/";
            sublink[i] = link_str;
        }
        return (
            <div className = "bg-gray-900 px-2 py-1">
                {/* <Link className = "text-green-600 hover:no-underline" to = "/dashboard">{breads[1]}</Link>
                <span className = "text-green-600"> / </span>
                <Link className = "text-green-600 hover:no-underline" to = {bread_sub_link}>{breads[2]}</Link>
                <span className = "text-green-600"> / </span>
                <Link className = "text-green-600 hover:no-underline" to = {bread_sub_link_more}>{breads[3]}</Link> */}
                <ol className = "list-reset py-2 round flex">
                    {this.state.crumbs.map((crumb, index) => {
                        return index !== last & index>0 ?(
                            <li key = {index}>
                                <Link className = "px-1" to = {`sublink[index]`}>{crumb}</Link>
                                <span className = "text-white px-1">/</span>
                            </li>
                        ):(
                            <li key = {index}>
                                <Link className = "px-1" to = {`sublink[index]`}>{crumb}</Link>
                            </li>
                        )
                    })
                }
                </ol>
            </div>
        )
    }
}
