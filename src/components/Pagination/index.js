import React from 'react';
import PaginationHook from '../../hooks/pagination';
import './styles.css';

const Pagination = ({ type, page }) => {
    const { pageButtons } = PaginationHook(type, page);

    return (
        <div className="pagination">
            {pageButtons}
        </div>
    )
}

export default Pagination;