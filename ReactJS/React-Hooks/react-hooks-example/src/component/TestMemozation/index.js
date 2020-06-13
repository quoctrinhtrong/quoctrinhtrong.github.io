import React from 'react';
import PropTypes from 'prop-types';

TestMemozation.propTypes = {
    
};

function TestMemozation(props) {
    const {name} = props;
    console.log(name);
    return (
        <div>
            <h1>Tét Memozation</h1>
        </div>
    );
}

export default React.memo(TestMemozation);