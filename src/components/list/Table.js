import React from 'react'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './Table.css'
import {renderChangePercent} from './../../helpers'


function Table(props) {
    const {currencies,history}=props

    return (

        <div className='Table-container'>
       
                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H Change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                    {
                    currencies.map(currency =>
                        <tr key={currency.id}
                        onClick={()=>{history.push(`/currency/${currency.id}`)}}
                        >
                            <td><span className="Table-rank">{currency.rank}</span>{currency.name}</td>
                            <td><span className="Table-dollar">$</span>{currency.price}</td>
                            <td><span className="Table-dollar">$</span>{currency.marketCap}</td>
                            <td>
                                {renderChangePercent(currency.percentChange24h)}
                            </td>
                            
                        </tr>)
                
                }
                    </tbody>
                </table>


            </div>
    )
}

Table.propTypes = {
    currencies: propTypes.array.isRequired,
    history: propTypes.object.isRequired
}
export default withRouter(Table)