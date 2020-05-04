import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class VendorDetails extends Component {

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
                                <span className="page-title">View vendor</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/vendorlist" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/vendorlist">Vendor</a></li>
                                    <li>Info</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Vendor Info</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Vendor type</label>
                                                        <p className="p14">Organisation</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Organisation Name</label>
                                                        <p className="p14"><a href="/schooldetails" >ABC International School</a></p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Owner Name</label>
                                                        <p className="p14">Ranjith</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Organisation Register Number</label>
                                                        <p className="p14">RNHS0B5S</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id</label>
                                                        <p className="p14"><a mailto="#">abc@gmail.com</a></p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number</label>
                                                        <p className="p14">9876543210</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Organisation Type</label>
                                                        <p className="p14">School</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State</label>
                                                        <p className="p14">Bangalore</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location</label>
                                                        <p className="p14">koramangala</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Pincode</label>
                                                        <p className="p14">674 653</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Address</label>
                                                        <p className="p14">Rajyog Unit 4 & 5, Rajhans Indl Estate, V V Road, Chinchpada,satival, Vasai (east)</p>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Plan Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Plan</label>
                                                        <p className="p14">Platinum - INR 7500 / Month</p>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Plan Expire date</label>
                                                        <p className="p14">22-05-2021</p>
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


export default VendorDetails;