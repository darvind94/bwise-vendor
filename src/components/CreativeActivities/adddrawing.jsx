import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { addDrawing } from '../../API/FetchCall';

class CreativeActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organisation_name: '',
            artist_name: '',
            email_id: '',
            phone_number: '',
            landline_number: '',
            website: '',
            state: '',
            location: '',
            pincode: '',
            about_school: '',
            google_location: '',
            type_of_drawing: '',
            available_days: '',
            address: '',
            number_of_artist: '',
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
    handleSelect = (e) => {
        const propName = e.target.name;
        const value = [...e.target.selectedOptions].map((item) => item.value);

        this.setState({ [propName]: value });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFile = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        addDrawing(this.state).then((res) => {
            if (res.status === 1) {
                this.props.history.push('/creativeactivities');
            }
        });
    };

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
                                <span className="page-title">Add Drawing</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/creativeactivities" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/creativeactivities">Creative Activities</a></li>
                                    <li>Add Drawing</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active" onSubmit={this.handleSubmit}>
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Organization Name <span className="astrick">*</span></label>
                                                        <input type="text" name="organisation_name" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Trainee Name <span className="astrick">*</span></label>
                                                        <input type="text" name="artist_name" className="form-control" onChange={this.handleChange}/>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id<span className="astrick">*</span></label>
                                                        <input type="email" name="email_id" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number<span className="astrick">*</span></label>
                                                        <input type="text" name="phone_number" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Landline Number<span className="astrick">*</span></label>
                                                        <input type="text" name="landline_number" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Website<span className="astrick">*</span></label>
                                                        <input type="text" name="website" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State<span className="astrick">*</span></label>
                                                        <input type="text" name="state" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location<span className="astrick">*</span></label>
                                                        <input type="text" name="location" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Pincode<span className="astrick">*</span></label>
                                                        <input type="text" name="pincode" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Address<span className="astrick">*</span></label>
                                                        <input type="text" name="address" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>About the Drawing School<span className="astrick">*</span></label>
                                                        <input type="text" name="about_school" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Google Location(Iframe)<span className="astrick">*</span></label>
                                                        <input type="text" name="google_location" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Key Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Type of Drawing<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' onChange={this.handleSelect} name="type_of_drawing" multiple>
                                                                <option key="1" id="1" data-id="1" value="Pencil / Sketch">Pencil / Sketch</option>
                                                                {/* <option>Doodling / Scribbling</option> */}
                                                                {/* <option key="1" id="1" data-id="1" value="1">Rough sketching</option>
                                                                <option>Doodling / Scribbling</option>
                                                                <option>Cartoon</option> */}
                                                                {/* <option>POINTILLISM</option>
                                                                <option>PHOTOREALISM / HYPERREALISM</option>
                                                                <option>ARCHITECTURAL</option>
                                                                <option>ANAMORPHIC</option>
                                                                <option>FASHION</option> */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Avaliable Days<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' onChange={this.handleSelect} name="available_days" multiple>
                                                                <option key="1" id="1" data-id="1" value="Week Days">Week Days</option>
                                                                <option>Week End</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Min Age</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>&nbsp;</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                    </div> */}
                                                    <div className="form-group col-md-4">
                                                        <label>Number of Trainee<span className="astrick">*</span></label>
                                                        <input type="text" className="form-control" name="number_of_artist" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Timing<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="timing" onChange={this.handleSelect} multiple>
                                                                <option key="1" id="1" data-id="1" value="5pm to 7pm">5.00PM - 7.00PM</option>
                                                                <option value="10am to 12pm">10.00AM - 12.00PM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Establishment Year <span className="astrick">*</span></label>
                                                        <input type="text" name="establishment_Year" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Average Fees(Monthly) <span className="astrick">*</span></label>
                                                        <input type="text" name="avg_anual_fee" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Admission Fees <span className="astrick">*</span></label>
                                                        <input type="text" name="addmission_fee" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4"><label>Is Refundable (Admission Fees)<span className="astrick">*</span></label>
                                                        <br />
                                                        <input type="radio" name="cus-name" />Yes&nbsp;&nbsp;
                                                        <input type="radio" name="cus-name" />No
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Area<span className="astrick">*</span></label>
                                                        <input type="text" name="area" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Country<span className="astrick">*</span></label>
                                                        <input type="text" name="country" className="form-control" onChange={this.handleChange}/>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Gallery</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Images <span className="astrick">*</span></label>
                                                        <input type="file" name="images" className="form-control" onChange={this.handleFile}/>
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