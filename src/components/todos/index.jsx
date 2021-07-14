import React from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

import ListView from './../listview';
import TableView from './../tableview';
import CreateTodoForm from './../create-todo-form';
import Controller from './../controllers';

class Todos extends React.Component {
    state = {
        todos:[
            {
                id: "shfbksj",
                text: "main todo text",
                description: "simple description",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
            {
                id: "shfbeyetyksj",
                text: "main todo text",
                description: "simple description",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            }
        ],
        isOpenTodoForm: false,
        searchTerm: ''
    };
    
    toggleSelect = todoId =>{}
    toggleComplete = todoId =>{}
    handleSearch = () =>{}
    toggleForm = () =>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm,
        })
    }
    createTodo = todo =>{}

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Stack Todos</h1>
                <Controller 
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                />
                <div>
                    <ListView 
                        todos={this.state.todos}
                        toggleSelect={this.state.toggleSelect}
                        toggleComplete={this.state.toggleComplete}
                    />
                </div>
                <div>
                    <TableView 
                        todos={this.state.todos}
                        toggleSelect={this.state.toggleSelect}
                        toggleComplete={this.state.toggleComplete}
                    />
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default Todos;