import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { addMusic } from '../../API/FetchCall';

class CreativeActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {

            music_schoolName: '',
            email_id: '',
            phone_number: '',
            landline_number: '',
            website: '',
            state: '',
            location: '',
            pincode: '',
            about_school: '',
            google_location: '',
            music_type: '',
            style: '',
            number_of_trainee: '',
            timing: '',
            establishment_Year: '',
            addmission_fee: '',
            area: '',
            min_age: '',
            country: '',
            grade: '',
            specification: '',
            class_frequency: '',
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
        addMusic(this.state).then((res) => {
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
                                <span className="page-title">Add Music</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/creativeactivities" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/creativeactivities">Creative Activities</a></li>
                                    <li>Add Music</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active" onSubmit={this.handleSubmit}>
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Music School Name <span className="astrick">*</span></label>
                                                        <input type="text" name="music_schoolName" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Music Type<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="music_type" multiple>
                                                                <option key="1" id="1" data-id="1" value="vocal">Vocal</option>
                                                                <option value="instrumental">Instrumental</option>
                                                                {/*<option>Indian Modern</option>*/}
                                                                {/*<option>Western Modern</option>*/}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Music Style<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' onChange={this.handleSelect} name="style" multiple>
                                                                <option key="1" id="1" data-id="1" value="classical">Classical</option>
                                                                <option value="western">Western</option>
                                                                <option value="carnatic">Carnatic</option>
                                                                <option value="hindustani">Hindustani</option>
                                                                <option value="drumps_trumpet">Drumps trumpet</option>
                                                                <option value="valian_guitar">Aalian Guitar</option>
                                                                <option value="keyboard_piano">Keyboard Piano</option>
                                                                <option value="flute">Flute</option>
                                                                <option value="tabala">Tabala</option>

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
                                                        <label>About the Music School<span className="astrick">*</span></label>
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
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Grade</label>
                                                            <div className='custom-select-drop dropdown' name="grade">
                                                                <select className='form-control selectpicker' name="grade">
                                                                    <option key="1" id="1" data-id="1" value="1 to class 5">1 to class 5</option>
                                                                    <option value="1 to class 10">1 to class 10</option>
                                                                    <option value="6 to class 10">6 to class 10</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/*<div>*/}
                                                        {/*    <label>&nbsp;</label>*/}
                                                        {/*    <div className='custom-select-drop dropdown' name="grade">*/}
                                                        {/*        <select className='form-control selectpicker' >*/}
                                                        {/*            <option key="1" id="1" data-id="1" value="1">5 class</option>*/}
                                                        {/*            <option> 6 class</option>*/}
                                                        {/*            <option >--</option>*/}
                                                        {/*            <option>10 class</option>*/}
                                                        {/*        </select>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Number of Trainee<span className="astrick">*</span></label>
                                                        <input type="text" className="form-control" name="number_of_trainee" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Timing<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="timing" onChange={this.handleSelect} multiple>
                                                                <option key="1" id="1" data-id="1" value="1">5.00PM - 7.00PM</option>
                                                                <option>7.00PM - 9.00PM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Establishment Year <span className="astrick">*</span></label>
                                                        <input type="text" name="establishment_Year" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Average Fees(Monthly) <span className="astrick">*</span></label>
                                                        <input type="text" name="average_fee" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Admission Fees <span className="astrick">*</span></label>
                                                        <input type="text" name="addmission_fee" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Area<span className="astrick">*</span></label>
                                                        <input type="text" name="area" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Min Age<span className="astrick">*</span></label>
                                                        <input type="text" name="min_age" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Country<span className="astrick">*</span></label>
                                                        <input type="text" name="country" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Specification<span className="astrick">*</span></label>
                                                        <input type="text" name="specification" className="form-control" onChange={this.handleChange}/>

                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Class Frequency<span className="astrick">*</span></label>
                                                        <input type="text" name="class_frequency" className="form-control" onChange={this.handleChange}/>

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