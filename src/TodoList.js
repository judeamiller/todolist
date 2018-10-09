import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        TODO: video stopped at 20:37
    }


    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                <form onSubmit ={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                        placeholder="enter task"></input>
                    <button type="submit">add</button>
                </form>
                </div>
            </div>
        )
    }
}

export default TodoList;