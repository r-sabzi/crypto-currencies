import React, { Component } from 'react'
import { handleResponse } from './../../helpers'
import { API_URL } from './../../config'
import Loading from './../common/Loading'
import Table from './Table';
import Pagination from './Pagination'





export default class List extends Component {

    state = {
        loading: false,
        currencies: [],
        error: null,
        totalPages: 0,
        page:1
    }
    componentDidMount() {
        this.fetchCurrencies()
    }
    fetchCurrencies = () => {
        this.setState({ loading: true })
        
        const {page}=this.state

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
            const {currencies,totalPages}=data
            this.setState({
                currencies,
                loading: false,
                totalPages
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
    handlePaginationClick = (direction) => {
        let nextPage = this.state.page
        nextPage = direction ==='next' ? nextPage+1:nextPage-1
        this.setState({ page: nextPage }, () => { this.fetchCurrencies() })
        
    }
    render() {
        const {loading,currencies,error,totalPages,page}=this.state

        if (loading) {
            return <Loading/>
        }
        if (error) {
            return <span className="error">{error}</span>
}
        return (

            <div>
                <Table
                    currencies={currencies}
                    renderChangePercent={this.renderChangePercent}
                />
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    handlePaginationClick={this.handlePaginationClick}
                />

</div>        )
    }
}
