import React from 'react'
import {useEffect} from "react"
import {useDispatch} from 'react-redux'
import {auth} from '../Actions/index'

export default function(SpecificComponent, option, adminRoute = null){
    function AuthenticationCheck(props) {
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(auth()).then((res) => {
                console.log(res);
                if(!res.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                }
                else{
                    if(adminRoute && !res.payload.isAdmin){
                        props.history.push('/')
                    }
                    else{
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])
        return(
            <SpecificComponent />
        ) 
    }
    return AuthenticationCheck
}