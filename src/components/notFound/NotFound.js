import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">oops! page not found</h1>
            <Link to='/' className="NotFound-link" >Go to homepage</Link>
       </div>
    )
}
