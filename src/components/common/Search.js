import React, { Component } from 'react'
import './Search.css'
import {withRouter} from 'react-router-dom'
import { handleResponse } from './../../helpers'
import { API_URL } from './../../config'
import Loading from './Loading'

 class Search extends Component {

    state = {
        searchQuery: '',
        loading: false,
        searchResult: []
    }

    handleRedirect = (currencyId) => {
        this.setState({
             searchQuery: '',
            searchResult:[]
        })
        this.props.history.push(`/currency/${currencyId}`)
         
         
    }     
     
    handleChange = (event) => {
        const searchQuery = event.target.value

        this.setState({
            searchQuery
        })

        if (!searchQuery) {
            return '';
        }
        this.setState({
            loading: true
        })
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(handleResponse)
            .then((result) => {
                this.setState({
                    searchResult: result,
                    loading: false
                })
            }
            )

    }

    renderSearchResult = () => {

        const { searchResult,loading,searchQuery } = this.state
       
        if (!searchQuery) {
            return ''
        }

        if (searchResult.length > 0) {
            return (
                < div className="Search-result-container" >
                    {
                        searchResult.map(result => (
                            <div
                                key={result.id}
                                className="Search-result"
                                onClick={()=>this.handleRedirect(result.id)}
                            >
                            {result.name} ({result.symbol})
    
                            </div>
                        )
    
                        )
                    }
    
                </div >
            )
    
    
        }
        if (!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No result found
                </div>
                </div>
            )
        }

    }

    render() {

        const { loading,searchQuery } = this.state

        return (
            <div className="Search" >
                <span className="Search-icon" />
                <input
                    onChange={this.handleChange}
                    value={searchQuery}
                    type="text"
                    placeholder="currency name"
                    className="Search-input"
                />
                {loading &&
                    <div className="Search-loading">
                        <Loading width="12px" height="12px" />
                    </div>
                }
                {this.renderSearchResult()}
            </div>
        )
    }
}
export default withRouter(Search)