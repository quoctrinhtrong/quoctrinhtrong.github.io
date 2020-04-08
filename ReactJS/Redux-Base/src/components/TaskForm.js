import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            status: false
        }
    }

    componentDidMount() {
        // console.log(this.props.itemEditing);
        if(this.props.itemEditing) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        } else {
            this.setState({
                id:"",
                name:"",
                status: false
            });
        }
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.itemEditing) {
            if(nextProps.itemEditing.id !== prevState.id) {
                // console.log("getDerivedStateFromProps New taskEditing");
                return {
                    id:nextProps.itemEditing.id,
                    name:nextProps.itemEditing.name,
                    status: nextProps.itemEditing.status
                };
            }
        } else {
            if(prevState.id!==""){
                // console.log("getDerivedStateFromProps set state NULL");
                return {
                    id:"",
                    name:"",
                    status: false
                };
            }
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {

    }
    
    // componentWillUnmount() {
        
    // }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = target.value === "false" ? false : true;
        }
        this.setState({
            [name]:value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState ({
            name:"",
            status: false
        });
    }
    render() {
        let task_id = this.state.id;
        if(!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading panel-heading-task">
                    <h3 className="panel-title">{task_id?"Sửa công việc":"Thêm Công Việc"}</h3>
                    <span className="fa fa-times-circle text-right" onClick={this.props.onCloseForm}></span>
                </div>
                <div className="panel-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name ="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                            className="form-control" 
                            required="required" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{task_id?"Sửa":"Thêm"}</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
          dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
