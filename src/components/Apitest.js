import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {product, productupdate} from '../Actions/index'
import { Redirect } from 'react-router';

export default function Apitest() {
    const [allproducts, setAllproducts] = useState([]);
    const [single, setSingle] = useState('')
    const [item_name, setItem_name] = useState('')
    const [item_src, setItem_src] = useState('')
    const [saleprice, setSalePrice] = useState('')
    const [normalprice, setNormalPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [edit, setEdit] = useState('')
    // const item = useSelector((state) => state.product);
    const dispatch = useDispatch()
    const GoToDetail = (e) =>{
        let postdata = {
            id:e,
        }
        dispatch(product(postdata))
        .then((res)=>{
            setItem_name(res.payload.name);
            setItem_src(res.payload.images[0].src)
            setSalePrice(res.payload.sale_price);
            setNormalPrice(res.payload.regular_price);
            setDesc(res.payload.description)
        })        
        setSingle(e);      
    }
    const GoToEdit = (e) =>{
        let postdata = {
            id:e,
        }
        dispatch(product(postdata))
        .then((res)=>{
            setItem_name(res.payload.name);
            setItem_src(res.payload.images[0].src)
            setSalePrice(res.payload.sale_price);
            setNormalPrice(res.payload.regular_price);
            setDesc(res.payload.description)
        })        
        setSingle(e);
        setEdit('edit');
        console.log(e);        
    }
    const Update = (e) => {
        setSingle('');
        let postdata = {
            id:e,
            name:item_name,
            regular_price:normalprice,
            sale_price:saleprice
        }
        dispatch(productupdate(postdata))
        .then((res)=>{
        })
    }
    const Cancel = ()=>{
        setSingle('');
        setEdit('');
    }
    const NameHandle = (e) => {
        e.preventDefault();
        setItem_name(e.target.value);
    }
    const SalePriceHandle = (e) => {
        e.preventDefault();
        setSalePrice(e.target.value);
    }
    const NormalPriceHandle = (e) => {
        e.preventDefault();
        setNormalPrice(e.target.value);
    }
    useEffect(() => {
        axios.get("http://localhost:4000/getProducts", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                setAllproducts(res.data);
                console.log(res);
            })
    }, [])
    
    if(single === ''){
    return (
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <p className = "text-center text-5xl py-5 text-yellow-800">All Products</p>
            <table className="w-11/12 mx-auto leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">
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
                            Description
                            </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">
                            Action
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {allproducts.map((singleproduct, index) => (
                        <tr key = {index}>
                            {/* <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm w-1/5"><button><a href={singleproduct.permalink}><img className="flex-shrink-0 w-20 h-20 hidden sm:table-cell" src={singleproduct.images[0].src} /></a></button></td> */}
                            <td className="px-5 py-1 border-b border-gray-200 bg-white text-center text-sm w-1/5"><button onClick = {()=>{GoToDetail(singleproduct.id)}}><img className="flex-shrink-0 w-40 h-44 hidden sm:table-cell" src={singleproduct.images[0].src} /></button></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>{singleproduct.name}</p></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>{singleproduct.sku}{singleproduct.id}</p></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-center"><p>{singleproduct.description.replace('<p>','').replace('</p>','')}</p></td>
                            <td className="px-5 py-1 border-b border-gray-200 bg-white text-center text-sm w-1/5"><button className = "mb-4 bg-pink-400 hover:bg-pink-700 px-10 py-2 rounded text-green-900 hover:text-green-400" onClick = {()=>{GoToEdit(singleproduct.id)}}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
else{
    if(edit === ''){
    var redirect = `/dashboard/products?${single}`
    var back = "<-Back";   
    return (
        <>
            <Redirect to = {redirect} />
            <button className = "bg-gray-50 hover:bg-gray-400 ml-2 mt-2 px-3 py-1 rounded" onClick = {Cancel}>{back}</button>
            <div className = "px-40 inline-flex pt-40 w-full">
                <div className = "product_img w-1/2 relative">
                    <img className = "float-right" src = {item_src} />
                    <p className = "absolute right-0 bg-green-500 text-white font-bold">Sale!</p>
                </div>
                <div className = "product_info w-1/2 px-4">
                    <h1>{item_name}</h1>
                    <p><span className = "line-through">${normalprice}</span><span>   ${saleprice}</span></p>
                    {desc.replace('<p>','').replace('</p>','')}<br/>
                    
                </div>
            </div>                       
        </>
    )
    }
    else{    
        return (
            <>
                <div className = "px-40 inline-flex pt-40 w-full">
                    <div className = "product_img w-1/2">
                        <img id = "item_img" src = {item_src} />
                    </div>
                    <div className = "product_info w-1/2 px-4">
                        <label className = "text-white">Product Name</label>
                        <input type = "text" value = {item_name} onChange = {NameHandle} />
                        <label className = "text-white">Regular Price</label>
                        <input type = "text" value = {normalprice} onChange = {NormalPriceHandle} />
                        <label className = "text-white">Sale Price</label>
                        <input type = "text" value = {saleprice} onChange = {SalePriceHandle}/>
                        <button className = "bg-green-400 font-bold py-2 px-4 rounded text-white" onClick = {()=>{Update(single)}}>Update</button>
                        <button className = "bg-red-700 font-bold py-2 px-4 rounded text-white" onClick = {Cancel}>Cancel</button>
                    </div>
                </div>                           
            </>
        )
        }
}
}