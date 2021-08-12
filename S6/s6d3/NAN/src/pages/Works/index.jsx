import React from 'react'
import uuid from "uuid";
import CaseStudies from '../../data/CaseStudies'
import {Link} from 'react-router-dom'
const Works = () => {
  return(
    <>
    {CaseStudies.map((caseStudy)=>
      <Link key={uuid} to= {`/works/${caseStudy.slug}`}>{caseStudy.client} </Link>
    )}
    </>
  )
}

export default Works;
