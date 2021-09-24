import React from 'react';
import {useDispatch} from "react-redux";
import {logoutUser} from "../state/userSlice";

interface Props {
    avatarUrl: string;
    email: string;
}

const EmailSidebar: React.FC<Props> = ({email, avatarUrl}) => {

    const dispatch = useDispatch();

    return (
        <div className={'email-sidebar'}>
            <div className={'email-sidebar-user-box'}>
                <div className={'email-sidebar-user-box-avatar'} style={{backgroundImage: `url(${avatarUrl})`}}/>
                <div className={'email-sidebar-user-box-info'}>
                    <p>{email}</p>
                </div>
            </div>
            <div className={'email-sidebar-buttons-box'}>
                <button>
                    <i className="bx bx-envelope"/>
                    <p>Inbox</p>
                    <div className={'inbox-amount-box'}>
                        <p>12</p>
                    </div>
                </button>
                <button>
                    <i className="bx bx-pencil"/>
                    <p>New message</p>
                </button>
                <button>
                    <i className="bx bx-send"/>
                    <p>Send</p>
                </button>

            </div>
            <div className={'email-sidebar-logout-box'}>
                <button onClick={() => dispatch(logoutUser())}><i className="bx bx-power-off"/>
                    <p>Logout</p>
                </button>
            </div>
        </div>
    );
};

export default EmailSidebar;