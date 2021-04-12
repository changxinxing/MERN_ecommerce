import React, { Component } from 'react'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import Chart from '../utils/chart'
import Ordertotal from '../utils/order_total'
import Saletotals from '../utils/sale_totals'
import ProductTotal from '../utils/product_total'

export default class Analytics extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mt-cus1">
                    <Sidebar />
                    <div className="main">
                        <Breadcrumb />
                        <Ordertotal />
                        <Saletotals />
                        <ProductTotal />
                        <Chart />
                    </div>
                </div>
            </div>
        )
    }
}
