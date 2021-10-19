import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        profileStatus: this.props.profileStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.profileStatus);
    }

    onStatusChange = (event) => {
        this.setState({
            profileStatus: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                profileStatus: this.props.profileStatus
            })
        }

    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.profileStatus}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.profileStatus} onChange={this.onStatusChange}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;