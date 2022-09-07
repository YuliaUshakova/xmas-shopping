
import { Component } from 'react';

export class ShoppingList extends Component {
    state = {
        userInput: "",
        shoppingList: []
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    
    addItem(input) {
        if (input === '') {
            alert("Please add an item")
        } else {
        let listArray = this.state.shoppingList;
        listArray.push(input);
        this.setState({shoppingList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.shoppingList;
        listArray = [];
        this.setState({shoppingList: listArray})
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

        render() {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                    <input type="text" 
                    placeholder="Gifts to prepare.." 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                    value={this.state.userInput}/>
                </div>

                <div className="container">
                    <button className="add" onClick={() => this.addItem(this.state.userInput)}>+</button>
                </div>

                <div className="container">
                    <ul className="added">
                        {this.state.shoppingList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                            {item}</li>
                        ))}
                    </ul>
                    </div>
            <div className="container delete">
            <button onClick={() => this.deleteItem()}>Delete</button>
            </div>
        </form>
    </div>
            )
        }
    }