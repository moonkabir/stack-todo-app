import React from 'react';

import ListView from './../listview';
import TableView from './../tableview';


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
        ]
    };
    
    toggleSelect = todoId =>{}
    toggleComplete = todoId =>{}

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Stack Todos</h1>
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
            </div>
        )
    }
}
export default Todos;