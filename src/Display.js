import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false, firstName: this.props.firstName, lastName: this.props.lastName };
    }
    onEdit = () => {
        this.setState({ isClicked: true })
    }
    saveChange = () => {
        this.setState({ isClicked: false })
    }
    cancelChange = () => {
        const prevFirstName = this.props.firstName;
        const prevLastName = this.props.lastName;
        this.setState({firstName:prevFirstName,lastName:prevLastName,isClicked:false})
    }
    getFirstChange = (event) => {
        this.setState({ firstName: event.target.value })
    }
    getLastChange = (event) => {
        this.setState({ lastName: event.target.value });
    }
    renderContent() {
        if (this.state.isClicked) {
            return (
                <div>
                    <form>
                        <label>First Name:</label>
                        <input type="text" value={this.state.firstName} onChange={this.getFirstChange} />
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastName} onChange={this.getLastChange} />
                        <button type="button" onClick={this.saveChange}>Save</button>
                        <button type="button" onClick={this.cancelChange}>Cancel</button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div style={{ margin: '15px' }}>
                        Last name: {this.state.firstName}
                    </div>
                    <div>
                        First Name: {this.state.lastName}
                    </div>
                    <button style={{ width: '100px', marginTop: '2rem' }} type="button" onClick={this.onEdit}>Edit</button>
                </div>
            )
        }
    }
    render() {
        return (
            <div style={{ textAlign: 'center', margin: '50px' }}>
                {this.renderContent()}
            </div>
        )
    }
}
export default Display;