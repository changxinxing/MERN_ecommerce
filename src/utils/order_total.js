import React, { useEffect, useState } from 'react'
import {totalorder} from '../Actions/index'
import {useDispatch} from 'react-redux'

export default function Ordertotal() {
    const dispatch = useDispatch();
    const [orderdata, setOrderdata] = useState([])
    useEffect(()=>{
        dispatch(totalorder())
        .then((res)=>{
            setOrderdata(res.payload);
        })
    },[])
    return (
        <div className = "px-4 py-4 mx-3 my-3 bg-white">
            <h3 className = "text-center mb-spt font-normal">Total Orders Report</h3>
            <table className="w-full mx-auto leading-normal">
                <thead>
                    <tr>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            PENDING
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            PROCESSING
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            ON-HOLD	
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            COMPLETED
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            CANCELLED
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            REFUNDED
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            FAILED
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <th className = "px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                        Total
                    </th>
                    {orderdata.map((order, index)=>(                        
                        <th key = {index} className = "px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-tw">
                            {order.total}
                        </th>                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}
