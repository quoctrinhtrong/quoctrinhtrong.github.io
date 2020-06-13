import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onFilters: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onFilters: null,
};

// Handle search debouce
function PostFiltersForm(props) {
    const {onFilters} = props;
    const [filters, setFilters] = useState('');
    const typingTimeoutRef = useRef(null);

    const onFiltersChange = (e) => {
        const value = e.target.value;
        setFilters(value);

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                filters: value,
            };
            onFilters(formValues);
        }, 300);
    }

    const onSubmitFilters = (e) => {
        e.preventDefault();
        const formValues = {
            filters,
        };
        onFilters(formValues);
    }

    return (
        <div>
            <form >
                <input type="text" value={filters} onChange={onFiltersChange}/>
            </form>
        </div>
    );
}

export default PostFiltersForm;