import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class SeasonalCamp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            camp_name: '',
            email_id: '',
            phone_no: '',
            landline_no: '',
            fax_no: '',
            website: '',
            state: '',
            location: '',
            pincode: '',
            address: '',
            about: '',
            iframe: '',
            banner_img: '',
            gallery_img: '',
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

    handleSchoolsName = (e) => {
        this.setState({ camp_name: e.target.value })
        this.clearValidationErr("camp_name");
    }
    handleEmailId = (e) => {
        this.setState({ email_id: e.target.value })
        this.clearValidationErr("email_id");
    }
    handlePhoneNo = (e) => {
        this.setState({ phone_no: e.target.value })
        this.clearValidationErr("phone_no");
    }
    handleLandlineNo = (e) => {
        this.setState({ landline_no: e.target.value })
        this.clearValidationErr("landline_no");
    }
    handleFaxNo = (e) => {
        this.setState({ fax_no: e.target.value })
        this.clearValidationErr("fax_no");
    }
    handleWebsite = (e) => {
        this.setState({ website: e.target.value })
        this.clearValidationErr("website");
    }
    handleState = (e) => {
        this.setState({ state: e.target.value })
        this.clearValidationErr("state");
    }
    handleLocation = (e) => {
        this.setState({ location: e.target.value })
        this.clearValidationErr("location");
    }
    handlePincode = (e) => {
        this.setState({ pincode: e.target.value })
        this.clearValidationErr("pincode");
    }
    handleAddress = (e) => {
        this.setState({ address: e.target.value })
        this.clearValidationErr("address");
    }
    handleAbout = (e) => {
        this.setState({ about: e.target.value })
        this.clearValidationErr("about");
    }
    handleIframe = (e) => {
        this.setState({ iframe: e.target.value })
        this.clearValidationErr("iframe");
    }
    handleGallery = (e) => {
        this.setState({ gallery_img: e.target.value })
        this.clearValidationErr("gallery_img");
    }
    handleBanner = (e) => {
        this.setState({ banner_img: e.target.value })
        this.clearValidationErr("banner_img");
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }
    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of this.state.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // const isValid = this.isEmailValid();

        if ((this.state.camp_name !== '') && (this.state.processing_fees !== '')) {


        } else {
            if (this.state.camp_name === "") {
                this.showValidationErr("camp_name", "Enter school name");
            }
            if (this.state.email_id === "") {
                this.showValidationErr("email_id", "Enter email id");
            }
            if (this.state.phone_no === "") {
                this.showValidationErr("phone_no", "Enter Phone No.");
            }
            if (this.state.landline_no === "") {
                this.showValidationErr("landline_no", "Enter Landline No.");
            }
            if (this.state.fax_no === "") {
                this.showValidationErr("fax_no", "Enter Fax No.");
            }
            if (this.state.website === "") {
                this.showValidationErr("website", "Enter Website");
            }
            if (this.state.location === "") {
                this.showValidationErr("location", "Enter location");
            }
            if (this.state.state === "") {
                this.showValidationErr("state", "Select State");
            }
            if (this.state.pincode === "") {
                this.showValidationErr("pincode", "Enter Pincode");
            }
            if (this.state.address === "") {
                this.showValidationErr("address", "Enter Address");
            }
            if (this.state.about === "") {
                this.showValidationErr("about", "Enter About the school");
            }
            if (this.state.iframe === "") {
                this.showValidationErr("iframe", "Enter Google location");
            }
            if (this.state.banner_img === "") {
                this.showValidationErr("banner_img", "Select Banner Image");
            }
            if (this.state.gallery_img === "") {
                this.showValidationErr("gallery_img", "Enter Gallery Image");
            }
        }

    }
    render() {
        let camp_nameErr = null, email_idErr = null, phone_noErr = null, landline_noErr = null, fax_noErr = null, websiteErr = null, stateErr = null, locationErr = null, pincodeErr = null, addressErr = null, aboutErr = null, iframeErr = null, banner_imgErr = null, gallery_imgErr = null;
        for (let err of this.state.errors) {
            if (err.elm === 'camp_name') {
                camp_nameErr = err.msg;
            } if (err.elm === 'email_id') {
                email_idErr = err.msg;
            } if (err.elm === 'phone_no') {
                phone_noErr = err.msg;
            } if (err.elm === 'landline_no') {
                landline_noErr = err.msg;
            } if (err.elm === 'fax_no') {
                fax_noErr = err.msg;
            } if (err.elm === 'website') {
                websiteErr = err.msg;
            } if (err.elm === 'state') {
                stateErr = err.msg;
            } if (err.elm === 'location') {
                locationErr = err.msg;
            } if (err.elm === 'pincode') {
                pincodeErr = err.msg;
            } if (err.elm === 'address') {
                addressErr = err.msg;
            } if (err.elm === 'about') {
                aboutErr = err.msg;
            } if (err.elm === 'iframe') {
                iframeErr = err.msg;
            } if (err.elm === 'banner_img') {
                banner_imgErr = err.msg;
            } if (err.elm === 'gallery_img') {
                gallery_imgErr = err.msg;
            }
        }
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
                                <span className="page-title">Add Camp</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <h3>Camp Info</h3>
                                {/* <ul className="nav nav-pills transparent">
                                    <li className="active"><a data-toggle="pill" href="#company-info">Play Area Info</a></li>
                                </ul> */}
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form method="post" onSubmit={this.handleSubmit} autoComplete="off" className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Camp Name <span className="astrick">*</span></label>
                                                        <input type="text" name="camp_name" value={this.state.camp_name} onChange={this.handleSchoolsName} className="form-control" />
                                                        <small className="alert-msg text-danger">{camp_nameErr ? camp_nameErr : ""}</small>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id<span className="astrick">*</span></label>
                                                        <input type="text" name="email_id" value={this.state.email_id} onChange={this.handleEmailId} className="form-control" />
                                                        <small className="alert-msg text-danger">{email_idErr ? email_idErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number<span className="astrick">*</span></label>
                                                        <input type="text" name="phone_no" value={this.state.phone_no} onChange={this.handlePhoneNo} className="form-control" />
                                                        <small className="alert-msg text-danger">{phone_noErr ? phone_noErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Landline Number<span className="astrick">*</span></label>
                                                        <input type="text" name="landline_no" value={this.state.landline_no} onChange={this.handleLandlineNo} className="form-control" />
                                                        <small className="alert-msg text-danger">{landline_noErr ? landline_noErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Fax Number<span className="astrick">*</span></label>
                                                        <input type="text" name="fax_no" value={this.state.fax_no} onChange={this.handleFaxNo} className="form-control" />
                                                        <small className="alert-msg text-danger">{fax_noErr ? fax_noErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Website<span className="astrick">*</span></label>
                                                        <input type="text" name="website" value={this.state.website} onChange={this.handleWebsite} className="form-control" />
                                                        <small className="alert-msg text-danger">{websiteErr ? websiteErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State<span className="astrick">*</span></label>
                                                        <input type="text" name="state" value={this.state.state} onChange={this.handleState} className="form-control" />
                                                        <small className="alert-msg text-danger">{stateErr ? stateErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location<span className="astrick">*</span></label>
                                                        <input type="text" name="location" value={this.state.location} onChange={this.handleLocation} className="form-control" />
                                                        <small className="alert-msg text-danger">{locationErr ? locationErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Pincode<span className="astrick">*</span></label>
                                                        <input type="text" name="pincode" value={this.state.pincode} onChange={this.handlePincode} className="form-control" />
                                                        <small className="alert-msg text-danger">{pincodeErr ? pincodeErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Address<span className="astrick">*</span></label>
                                                        <input type="text" name="address" value={this.state.address} onChange={this.handleAddress} className="form-control" />
                                                        <small className="alert-msg text-danger">{addressErr ? addressErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>About the School<span className="astrick">*</span></label>
                                                        <input type="text" name="about" value={this.state.about} onChange={this.handleAbout} className="form-control" />
                                                        <small className="alert-msg text-danger">{aboutErr ? aboutErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Google Location(Iframe)<span className="astrick">*</span></label>
                                                        <input type="text" name="iframe" value={this.state.iframe} onChange={this.handleIframe} className="form-control" />
                                                        <small className="alert-msg text-danger">{iframeErr ? iframeErr : ""}</small>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Key Information</span>
                                                    </div>                                                    
                                                    <div className="form-group col-md-4">
                                                        <label>Where<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select value={this.state.email_id} onChange={this.handleOwnerName} className='form-control selectpicker'>
                                                                <option key="1" id="1" data-id="1" value="1">Multiple Venues</option>
                                                                <option> Single Venue</option>
                                                            </select><br />
                                                            <small className="alert-msg text-danger">{camp_nameErr ? camp_nameErr : ""}</small>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>When</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>&nbsp;</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Age Group</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>&nbsp;</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Event Fee <span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" value={this.state.email_id} onChange={this.handleOwnerName} className="form-control" />
                                                        <small className="alert-msg text-danger">{camp_nameErr ? camp_nameErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Contact Person </label>
                                                        <input type="text" name="cus-name" value={this.state.email_id} onChange={this.handleOwnerName} className="form-control" />
                                                        <small className="alert-msg text-danger">{camp_nameErr ? camp_nameErr : ""}</small>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Images</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Banner Images <span className="astrick">*</span></label>
                                                        <input type="file" name="banner_img" value={this.state.banner_img} onChange={this.handleBanner} className="form-control" />
                                                        <small className="alert-msg text-danger">{banner_imgErr ? banner_imgErr : ""}</small>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Gallery Images <span className="astrick">*</span></label>
                                                        <input type="file" name="gallery_img" value={this.state.gallery_img} onChange={this.handleGallery} className="form-control" />
                                                        <small className="alert-msg text-danger">{gallery_imgErr ? gallery_imgErr : ""}</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-xs-12 btn-bdr">
                                                    <button className="btn btn-blue">Submit</button>
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
            </React.Fragment>
        )
    }
}


export default SeasonalCamp;