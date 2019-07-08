import React from 'react'
import './Pagination.css'
import propTypes from 'prop-types'
export default function Pagination(props) {
    const { page, totalPages, handlePaginationClick } = props
    return (
        <div className="Pagination">
            <button className="Pagination-button"
                onClick={() => handlePaginationClick('prev')}
                disabled={page <= 1}
            >
                &larr;
            </button>
            <span className="Pagination-info">
                page <b>{page}</b> of  <b>{totalPages}</b>
            </span>
            <button className="Pagination-button"
                onClick={() => handlePaginationClick('next')}
                disabled={page >= totalPages}
            >
                &rarr;

            </button>

        </div>
    )
}

Pagination.propTypes={
    page:propTypes.number.isRequired,
    totalPages: propTypes.number.isRequired,
    handlePaginationClick: propTypes.func.isRequired
}