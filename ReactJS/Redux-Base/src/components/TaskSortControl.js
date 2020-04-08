import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskSortControl extends Component {
    constructor(props){
        super(props); 
        this.state = {
            sort : {
                by: "name",
                value: 1,
            }
        };
    }
    onClick = (sortBy, sortValue) => {
        this.setState ({
            sort: {
                by: sortBy,
                value: sortValue
            }
        }, () => {
            this.props.onSortTask(this.state.sort);
        });

    }
    render() {
        const {sort} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick = {()=> this.onClick('name',1)}>
                            <a role="button" href="#" className={(sort.by === "name" && sort.value === 1)?"sort-selected":""}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                            </span>
                            </a>
                        </li>
                        <li onClick = {()=> this.onClick('name',-1)}>
                            <a role="button" className={(sort.by === "name" && sort.value === -1)?"sort-selected":""}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                            </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li 
                            onClick = {()=> this.onClick('status',1)}
                        >
                            <a role="button" className={(sort.by === "status" && sort.value === 1)?"sort-selected":""}>Trạng Thái Kích Hoạt</a>
                        </li>
                        <li onClick = {()=> this.onClick('status',-1)}>
                            <a role="button" className={(sort.by === "status" && sort.value === -1)?"sort-selected":""}>Trạng Thái Ẩn</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onSortTask: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskSortControl);
