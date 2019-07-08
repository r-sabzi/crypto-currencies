import React, { Component } from 'react'
import { handleResponse } from './../../helpers'
import { API_URL } from './../../config'
import Loading from './../common/Loading'
import Table from './Table';





export default class List extends Component {

    state = {
        loading: false,
        currencies: [],
        error: null,
    }
    componentDidMount() {
        this.setState({loading:true})
        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
            .then(handleResponse)
        .then((data) => {
            this.setState({
                currencies: data.currencies,
                loading: false
            })
        })
            .catch((error) => {
              
            this.setState({
                error: error.errorMessage||error.toString(),
                loading: false
            })
        });
    }
    
    renderChangePercent = (percent) => {
        if (percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            return <span>{ percent }</span>
        }
    }

    render() {
        const {loading,currencies,error}=this.state

        if (loading) {
            return <Loading/>
        }
        if (error) {
            return <span className="error">{error}</span>
}
        return (
            <Table currencies={currencies} renderChangePercent={this.renderChangePercent}/>
        )
    }
}
