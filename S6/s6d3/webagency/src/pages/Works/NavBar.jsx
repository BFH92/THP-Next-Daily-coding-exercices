import React from 'react'
import uuid from "uuid";
import CaseStudies from '../../data/CaseStudies'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
    <div className="casesTitle">
    {CaseStudies.map((caseStudy)=>
      <div >
        <Link className="work" key={uuid} to= {`/works/${caseStudy.slug}`}>{caseStudy.client}</Link>

      </div>
        
      )}
    </div>
  )
}

export default NavBar;