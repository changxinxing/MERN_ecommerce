import React, { Component } from 'react'
import Header1 from './Header1'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header1 />
                <button class = "bg-red-500 hover : bg-blue-700 text-black font-bold py-2 px-4 rounded">Tailwind Button </ button>
            </div>
        )
    }
}
