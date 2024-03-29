import React from 'react'
import propTypes from 'prop-types'
import './Loading.css'

export default function Loading(props) {
  
    const { width, height }=props
  
    return (
        <div className="Loading" style={{width,height}}/>
            )
}
Loading.defaultProps = {
    width: '28px',
    height: '28px'
}
Loading.propTypes={
    width: propTypes.string,
    height: propTypes.string
}