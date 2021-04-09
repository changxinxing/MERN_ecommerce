import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    componentDidMount() {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }
    render() {
        return (
            <div>
                <div className="sidenav h-cus2 w-sw fixed top-cus1 z-1 bg-black pt-spt">
                    <button className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Account Settings</button>
                    <div className="dropdown-container">
                        <Link to = "/dashboard/accounts">All Users</Link>
                    </div>
                    <Link to='/dashboard/rep' className="text-white font-bold py-2 px-4 rounded active:bg-red-700">Rep Management</ Link>
                    <button className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Products</ button>
                    <div className="dropdown-container">
                        <Link to = "/dashboard/products">All Products</Link>
                    </div>
                    <button className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Customers</ button>
                    <div className="dropdown-container">
                        <Link to = "/dashboard/customers">All Customers</Link>
                    </div>
                    <Link to='/dashboard/analytics' className="text-white font-bold py-2 px-4 rounded active:bg-red-700">Analytics</ Link>
                </div>
            </div>
        )
    }
}
