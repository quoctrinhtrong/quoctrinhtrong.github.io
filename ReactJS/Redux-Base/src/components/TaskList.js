import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1, // all: -1, active, 1, deactive: 0
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let filter = {
            filterName: (name === "filterName") ? value: this.state.filterName,
            filterStatus: (name === "filterStatus") ? value: this.state.filterStatus
        }
        this.props.onFilterTask(filter);
        this.setState({
            [name]: value,
        });
    }

    render() {
        let {filterName, filterStatus} = this.props.filterTable;
        let { tasks, search, sort } = this.props;
        if (filterName) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            });
        };

        tasks = tasks.filter((task) => {
            if (filterStatus === -1) {
                return task;
            } else {
                return task.status === (filterStatus === 1 ? true : false);
            }
        });

        if (search) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
        }

        if (sort.by === "name") {
            tasks.sort((a, b) => {
                if (a.name > b.name) {
                    return sort.value;
                } else if (a.name < b.name) {
                    return -sort.value;
                } else {
                    return 0;
                }
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status < b.status) {
                    return sort.value;
                } else if (a.status > b.status) {
                    return -sort.value;
                } else {
                    return 0;
                }
            });
        }
        
        let elmTask = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} />;
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTask}
                </tbody>
            </table>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        search: state.search,
        sort: state.sort
    }
};

const mapDispatchToProps = (dispatch, action) => {
    return {
        onFilterTask: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
