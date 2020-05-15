import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class CreativeActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {


            organisation_name: '',
            trainee_name: '',
            gender: '',
            email_id: '',
            phone_number: '',
            landline_number: '',
            fax_number: '',
            website: '',
            state: '',
            location: '',
            pincode: '',
            address: '',
            about_yoga: '',
            google_location: '',
            type_of_yoga: '',
            available_days: '',
            min_Age: '',
            number_of_trainee: '',
            timing: '',
            establishment_Year: '',
            avg_anual_fee: '',
            addmission_fee: '',
            area: '',
            country: '',
            images: '',

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
                                <span className="page-title">Add Yoga</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/creativeactivities" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/creativeactivities">Creative Activities</a></li>
                                    <li>Add Yoga</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Organization Name <span className="astrick">*</span></label>
                                                        <input type="text" name="organisation_name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Trainee Name <span className="astrick">*</span></label>
                                                        <input type="text" name="trainee_name" className="form-control" />
                                                    </div>

                                                    <div className="form-group col-md-4">
                                                        <label>Gender<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="gender" multiple>
                                                                <option key="1" id="1" data-id="1" value="1">Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id<span className="astrick">*</span></label>
                                                        <input type="text" name="email_id" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number<span className="astrick">*</span></label>
                                                        <input type="text" name="phone_number" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Landline Number<span className="astrick">*</span></label>
                                                        <input type="text" name="landline_number" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Fax Number<span className="astrick">*</span></label>
                                                        <input type="text" name="fax_number" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Website<span className="astrick">*</span></label>
                                                        <input type="text" name="website" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State<span className="astrick">*</span></label>
                                                        <input type="text" name="state" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location<span className="astrick">*</span></label>
                                                        <input type="text" name="location" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Pincode<span className="astrick">*</span></label>
                                                        <input type="text" name="pincode" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Address<span className="astrick">*</span></label>
                                                        <input type="text" name="address" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>About the Music School<span className="astrick">*</span></label>
                                                        <input type="text" name="about_yoga" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Google Location(Iframe)<span className="astrick">*</span></label>
                                                        <input type="text" name="google_location" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Key Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Type of Yoga<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="type_of_yoga" multiple>
                                                                <option key="1" id="1" data-id="1" value="1">Indian</option>
                                                                <option>Western</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Avaliable Days<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="available_days" multiple>
                                                                <option key="1" id="1" data-id="1" value="1">Week Days</option>
                                                                <option>Week End</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Min Age</label>
                                                            <input type="text" name="min_Age" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>&nbsp;</label>
                                                            <input type="text" name="min_Age" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Number of Trainee<span className="astrick">*</span></label>
                                                        <input type="text" name="number_of_trainee" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Timing<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="timing" multiple>
                                                                <option key="1" id="1" data-id="1" value="1">5.00PM - 7.00PM</option>
                                                                <option>7.00PM - 9.00PM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Establishment Year <span className="astrick">*</span></label>
                                                        <input type="text" name="establishment_Year" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Average Fees(Monthly) <span className="astrick">*</span></label>
                                                        <input type="text" name="avg_anual_fee" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Admission Fees <span className="astrick">*</span></label>
                                                        <input type="text" name="addmission_fee" className="form-control" />

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Area<span className="astrick">*</span></label>
                                                        <input type="text" name="area" className="form-control" />

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Country<span className="astrick">*</span></label>
                                                        <input type="text" name="country" className="form-control" />

                                                    </div>
                                                    <div className="form-group col-md-4"><label>Is Refundable (Admission Fees)<span className="astrick">*</span></label>
                                                        <br />
                                                        <input type="radio" name="cus-name" />Yes&nbsp;&nbsp;
                                                        <input type="radio" name="cus-name" />No
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Gallery</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Images <span className="astrick">*</span></label>
                                                        <input type="file" name="images" className="form-control" />
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


export default CreativeActivities;