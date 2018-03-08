import React from 'react'

class TodoForm extends React.Component {
    state = { title: ''}

    handleChange = (e) => {
        //let name ='title'
        //this.state['title']
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.title)
        this.setState({ name: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input placeholder="add a todo"
            requiredvalue={this.state.title}
            onChange={this.handleChange}
            name="title" />
            </form>
        )
    }


}

export default TodoForm