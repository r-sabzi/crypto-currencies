import React, { Component } from 'react'
import './Search.css'
import { handleResponse } from './../../helpers'
import { API_URL } from './../../config'
import Loading from './Loading'

export default class Search extends Component {
    
    state = {
        searchQuery: '',
        loading:false
    }



    handleChange = (event) => {
       const searchQuery= event.target.value
       
        this.setState({
            searchQuery 
        })

        if (!searchQuery) {
            return '';
        }
        this.setState({
            loading:true
        })
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(handleResponse)
        .then((result) => {
            


            this.setState({
                loading:false
            })
        }
        )

    }
    
    render() {

        const {loading}=this.state

        return (
            <div className="Search" >
                <span className="Search-icon"/>
                <input
                    onChange={this.handleChange}
                    value={this.state.searchQuery}
                    type="text"
                    placeholder="currency name"
                    className="Search-input"
                />
                {   loading &&
                    <div className="Search-loading">
                        <Loading width="12px" height="12px" />
                    </div>
                }
            </div>
        )
    }
}
