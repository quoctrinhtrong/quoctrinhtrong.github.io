import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object,
    onPageChange: PropTypes.func,
};

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = Math.ceil(_totalRows/_limit);

    const handlePageChange = (page) => {
        if(onPageChange) {
            onPageChange(page);
        }
    }

    return (
        <div>
            <button disabled={_page <= 1} onClick={()=>handlePageChange(_page-1)}>
                Prev
            </button>
            <button disabled={_page >= totalPages} onClick={()=>handlePageChange(_page+1)}>
                Next
            </button>
        </div>
    );
}

export default Pagination;