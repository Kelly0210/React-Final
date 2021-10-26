import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [profileStatus, setProfileStatus] = useState(props.profileStatus);

    useEffect(() => {
        setProfileStatus(props.profileStatus);
    }, [props.profileStatus])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(profileStatus);
    }

    const onStatusChange = (event) => {
        setProfileStatus(event.currentTarget.value);
    }

    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.profileStatus || "Set Status!"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   value={profileStatus}
                   onChange={onStatusChange}
            />
        </div>
        }
    </div>

}

export default ProfileStatusWithHooks;