import React, { Component } from "react";

class TodoItems extends Component {
    createTasks(item) { 
        return <li key = {item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.enties;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className = "todoList">
                {listItems}
            </ul>
        );
    }
}