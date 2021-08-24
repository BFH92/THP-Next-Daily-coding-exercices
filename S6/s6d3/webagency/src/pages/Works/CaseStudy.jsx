import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CaseStudies from '../../data/CaseStudies'

import './works.css'

const CaseStudy = () => {
  const {caseSlug} = useParams();
  const [currentCase, setCurrentCase] = useState(undefined)
  

  useEffect(() => {
  
    const foundCase = CaseStudies.find((casestudy) => casestudy.slug === caseSlug);
    setCurrentCase(foundCase );

  }, [caseSlug])


  return(
  
      <div className="useCaseContent">
        <p>{currentCase? currentCase.title : "Oups il ya un couac"}</p>
        <p>{currentCase? currentCase.text : "Oups il ya un couac"}</p>
      </div>


  )
}

export default CaseStudy;