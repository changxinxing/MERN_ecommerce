import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Apitest() {
    const [allproducts, setAllproducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/getProducts", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                console.log(res);
                setAllproducts(res.data)
            })
    }, [])
    return (
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="w-11/12 mx-auto leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-2/5">
                            Product Image
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">
                            Title
                            </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">
                            SKU
                            </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">
                            Price
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {allproducts.map((singleproduct, index) => (
                        <tr key = {index}>
                            <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm w-2/5"><a href={singleproduct.permalink}><img className="flex-shrink-0 w-20 h-20 hidden sm:table-cell" src={singleproduct.images[0].src} /></a></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>{singleproduct.name}</p></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>{singleproduct.sku}</p></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>${singleproduct.price}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}