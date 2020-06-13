import React, {useState} from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
    onSubmit: null,
};

function ToDoForm(props) {
    const {onSubmit}= props;
    const [value, setValue] = useState('');
    const handleValueChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    } 

    const handleSubmit = (event) => {
        event.preventDefault();

        const formValues = {
            title: value,
        };
        onSubmit(formValues);
        // reset form
        setValue('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="form-input" placeholder="Todo title" value={value} onChange={handleValueChange}></input>
            </form>
        </div>
    );
}

export default ToDoForm;