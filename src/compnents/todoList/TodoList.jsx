import React, { Component } from 'react'
import { Row, Col, Card } from 'reactstrap';
import './TodoList.css';

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            todoInput: '',
            editMode: false,
            id: ''
        }
    }

    addTodo(e) {
        let { todoList, editMode, id } = this.state;
        let obj = { value: this.state.todoInput, selected: false }
        e.preventDefault();
        if (!editMode) {
            todoList.push(obj)
            this.setState({ todoList: todoList, todoInput: '' })
        } else {
            todoList.splice(id, 1, obj)
            this.setState({ todoList: todoList, todoInput: '', editMode: false, })
        }
    }

    editTodo(todoVal, i) {
        this.setState({ todoInput: todoVal.value, editMode: true, id: i })
    }

    markRecord(e, id) {
        let { todoList } = this.state;
        e.target.checked = !e.target.checked
        todoList[id].selected = !e.target.checked
        this.setState({ todoList: todoList })
    }

    deleteAll(e) {
        let { todoList } = this.state;
        e.preventDefault();
        todoList.forEach((item) => {
            if (item.selected) {
                todoList.splice(todoList.indexOf(item), 1)
            }
        })
        this.setState({ todoList: todoList })
    }
    deleteRecord(val) {
        let { todoList } = this.state;
        todoList.splice(todoList.indexOf(val), 1)
        this.setState({ todoList: todoList })
    }

    getInputForm() {
        let { todoInput } = this.state;
        return (
            <div className='input-container'>
                <form>
                    <Row>
                        <Col>
                            <div>
                                <input type="text" className='me-2' value={todoInput} placeholder='New Task' onChange={(e) => this.setState({ todoInput: e.target.value })} />
                                <button className='btn btn-primary me-2' onClick={(e) => this.addTodo(e)}>Add</button>
                                <button className='btn btn-danger' onClick={(e) => this.deleteAll(e)}>Delete</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }

    render() {
        let { todoList } = this.state;
        return (
            <section className='text-center'>
                <header><h3 className='text-start'>To do List</h3></header>
                {this.getInputForm()}
                {todoList.length > 0 &&
                    <Row className='m-0 mt-3'>
                        <Col>
                            <Card className='p-2'>
                                <div className='m-0'>
                                    {todoList.map((item, idx) =>
                                        <div key={idx} className="border my-2">
                                            <span className='py-1 d-inline-block checkbox-container text-start'><input type="checkbox" checked={item.selected ? true : false} onChange={(e) => this.markRecord(e, idx)} /></span>
                                            <span className='py-1 d-inline-block value-container text-start'>{item.value}</span>
                                            <span className='py-1 d-inline-block btn-container align-middle'><button className="btn btn-outline-warning btn-sm float-end border-0" onClick={() => this.editTodo(item, idx)}><i className='fa fa-edit' /></button>
                                                <button className='btn btn-outline-danger btn-sm float-end me-2 border-0' onClick={() => this.deleteRecord(item)}> <i className='fa fa-trash-o' /></button>
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </Col>
                    </Row>
                }
            </section>
        )
    }
}

export default TodoList