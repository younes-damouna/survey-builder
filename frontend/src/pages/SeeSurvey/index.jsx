import React, { useEffect, useState } from 'react'
import { sendRequest } from '../../core/request'
import {Link} from "react-router-dom"

const   SeeServey = () => {
    const [surveys,setSurveys]=useState([])
    useEffect(()=>{
        const getSurveys= async()=>{
            const response = await sendRequest({
              
                route: "survey",
                method: "GET",
              });
            //   return response
              console.log(response.surveys);
              let data= await response.surveys
              setSurveys(data)

        }
        getSurveys()
        // setSurveys(getSurveys())
      
    },[])
    console.log(surveys)
  return (
    <div className='survey-container container'>
L        {  Array.isArray(surveys)?surveys.map((survey)=>{
            return (
               <Link to={`/surveys/${survey._id}`}> 
               <div>{survey.title}</div>
               </Link>
            )
        }):null}
        
    </div>
  )
}

export default SeeServey