import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination justify-content-md-center">
                {pageNumbers.map(number => (

                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link" href="!#">{number}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
