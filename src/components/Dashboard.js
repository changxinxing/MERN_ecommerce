import React, {useEffect, useState} from 'react'
import Header1 from './Header1'
import Header from './Header'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import {useDispatch} from 'react-redux';
import dashboard from '../Actions/user_dashboard'

export default function Dashboard() {
    const dispatch = useDispatch();

    const [auth, setauth] = useState("")
    const [admin, setadmin] = useState(false)
    useEffect(()=>{
        dispatch(dashboard())
        .then((res)=>{
            if(res.payload.isAuth === true){
                if(res.payload.isAdmin === 0){
                        setauth('success')
                        setadmin(true)
                }
                else{
                    setauth('success')
                    setadmin(false)
                }
            }
            else {
                setauth('failed')
            }
        })
    }, [])
    if(auth === "success"){
        if(admin === true){
            return (
                <div>
                    <Header1 />
                    <div className = "mt-cus1">
                        <Sidebar />
                        <div className = "main">
                            <Breadcrumb />
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Header1 />
                </div>
            )
        }
    }
    else{
        return (
            <div>
                <Header />
                {/* <p className = "warning">Please Login First</p> */}
            </div>
        )
    } 
}
