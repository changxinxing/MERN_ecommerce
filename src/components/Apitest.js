import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Apitest() {
    const [allproducts, setAllproducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/getProducts", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                console.log(res.data)
                setAllproducts(res.data)
            })
    }, [])
    return (
        <div className="text-center">
            {allproducts.map((singleproduct, index) => (
                <div className="float-left text-white text-center w-1/3 my-2 no-underline">
                    <a className="hover:no-underline no-underline" href={singleproduct.permalink} key={index}>
                        <img className="w-4/5 mx-auto" src={singleproduct.images[0].src} />
                        <p className="text-white">{singleproduct.name}</p>
                        <p className="text-white">${singleproduct.price}</p>
                    </a>
                    <button className="bg-red-400 hover:bg-red-600 px-4 py-2 rounded">Add to cart</button>
                </div>
            ))}
        </div>
    )
}