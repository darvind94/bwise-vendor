import React from 'react';
// import jQuery from 'jquery';

class topbar extends React.Component {

    constructor(props) {
        super(props);
        //const { history } = this.props;
        this.state = {

         };
    }


    logoutFunc(e) {
        e.preventDefault();
        this.props.logoutSubmit();
    }

    componentDidMount() {

    }

    render() {
        return (


            <div className="pull-right">
                <div className="notify-wrap">
                    <a href="/"><img src="../assets/images/notification-icon.svg" alt="Notification" /></a>
                </div>
                <div className="profile-wrap dropdown">
                    <a href="#" className="avatar dropdown-toggle" data-toggle="dropdown">
                        <span className="avatar-img"><img className="img-responsive" src="../assets/images/user-img-1.png" alt={this.state.logged_user_name} /></span>
                        <span className="hidden-xs">{this.state.logged_user_name}</span>
                    </a>
                    <ul className="dropdown-menu">
                        {/* <li>
                            <a href="/"><img src="../assets/images/edit-icon.svg" alt="icon" />Edit Profile</a>
                        </li> */}
                        <li><a href="/"><img src="../assets/images/edit-icon.svg" alt="icon" />Edit Profile</a></li>
                        <li><a href="/"><img src="../assets/images/settings-icon.svg" alt="icon" />Change Password</a></li>
                        <li><a href="/" onClick={this.logoutFunc.bind(this)}><img src="../assets/images/turn-off-icon.svg" alt="icon" />Logout</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default topbar;