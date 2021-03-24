import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    componentDidMount() {
        console.log("clicked");
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
                <div class="sidenav">
                    <Link to='/dashboard/accounts' className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Account Settings</ Link>
                    <div className="dropdown-container">
                        <a href="#">Listing Page</a>
                        <a href="#">Detail Page</a>
                        <a href="#">Add New</a>
                    </div>
                    <Link to='/dashboard/rep' className="text-white font-bold py-2 px-4 rounded active:bg-red-700">Rep Management</ Link>
                    <Link to='/dashboard/products' className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Products</ Link>
                    <div className="dropdown-container">
                        <a href="#">Listing Page</a>
                        <a href="#">Detail Page</a>
                        <a href="#">Add New</a>
                    </div>
                    <Link to='/dashboard/customers' className="dropdown-btn text-white font-bold py-2 px-4 rounded active:bg-red-700">Customers</ Link>
                    <div className="dropdown-container">
                        <a href="#">Listing Page</a>
                        <a href="#">Detail Page</a>
                        <a href="#">Add New</a>
                    </div>
                    <Link to='/dashboard/analytics' className="text-white font-bold py-2 px-4 rounded active:bg-red-700">Analytics</ Link>
                </div>

                <div class="main">
                    <p>This is the dashboard page for admin</p>
                </div>
            </div>
        )
    }
}
