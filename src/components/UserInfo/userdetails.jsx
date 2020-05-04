import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    UNSAFE_componentWillMount() {

    }
    componentDidUpdate() {
        window.jQuery('.selectpicker').selectpicker('refresh')
        // jQuery("#currency_selected").val(4);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <LeftSidebar></LeftSidebar>
                        <div className="menu-close visible-xs">&nbsp;</div>
                        <div className="main-wrap col-md-12 col-xs-12 pad-r-no">
                            <Topbar></Topbar>
                            <div className="col-md-12 col-xs-12 mar-top visible-xs">
                                <a href="#" className="back">
                                    <img src="../assets/images/back-arrow-blue.svg" alt="back_icon" />
                                </a>
                                <span className="page-title">View Details</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/userlist" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/userlist">User Management</a></li>
                                    <li>View User</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Name</label>
                                                        <p className="p14">Jon Favreau</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id</label>
                                                        <p className="p14"><a mailto="#">abc@gmail.com</a></p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Mobile Number</label>
                                                        <p className="p14">9876543210</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Child Name</label>
                                                        <p className="p14">Arjun</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Age</label>
                                                        <p className="p14">10</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <p className="p14">Karthika</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <p className="p14">8</p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment >
        )
    }
}


export default UserDetails;