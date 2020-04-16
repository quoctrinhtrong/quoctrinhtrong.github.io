import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }
    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        });
    }
    render() {
        let {isChecked} = this.state;
        return (
            <div>
                This page is Contact.   
                <button onClick={()=>this.onClick(false)} type="button" className="btn btn-info">Allow</button>
                <button onClick={()=>this.onClick(true)} type="button" className="btn btn-danger">Not Allow</button>
                <Prompt 
                    when={isChecked}
                    message={location=> (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
                />
            </div>
          );
    }
}

export default Contact;
