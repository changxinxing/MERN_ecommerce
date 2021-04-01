import React from 'react'
import {useEffect} from "react"
import {useDispatch} from 'react-redux'
import {auth} from '../Actions/index'
export default function(SpecificComponent, option, adminRoute = null){

        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(auth()).then((res) => {
                console.log(res);
            })
        }, [])        

}