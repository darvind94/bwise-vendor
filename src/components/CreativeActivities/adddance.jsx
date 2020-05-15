import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { addDance } from '../../API/FetchCall';

class CreativeActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dance_schoolName:'',
            email_id:'',
            phone_number:'',
            landline_number:'',
            website:'',
            state:'',
            location:'',
            pincode:'',
            address:'',
            about_school:'',
            google_location:'',
          sub_type:'',
          number_of_trainee:'',
          timing:'',
          establishment_Year:'',
          avg_anual_fee:'',
          addmission_fee:'',
          area:'',
          min_age:'',
          country:'',
          images:''

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
        addDance(this.state).then((res) => {
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
                                <span className="page-title">Add Dance</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <a href="/creativeactivities" class="back hidden-xs" >
                                    <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                </a>
                                <ul class="list-unstyled breadcrumb page-title hidden-xs">
                                    <li><a href="/creativeactivities">Creative Activities</a></li>
                                    <li>Add Dance</li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no" onSubmit={this.handleSubmit}>
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Dance School Name <span className="astrick">*</span></label>
                                                        <input type="text" name="dance_schoolName" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email Id<span className="astrick">*</span></label>
                                                        <input type="email" name="email_id" className="form-control" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number<span className="astrick">*</span></label>
                                                        <input type="text" name="phone_number" className="form-control" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Landline Number<span className="astrick">*</span></label>
                                                        <input type="text" name="landline_number" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Website<span className="astrick">*</span></label>
                                                        <input type="text" name="website" className="form-control" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State<span className="astrick">*</span></label>
                                                        <input type="text" name="state" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Country<span className="astrick">*</span></label>
                                                        <input type="text" name="country" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location<span className="astrick">*</span></label>
                                                        <input type="text" name="location" className="form-control" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Area<span className="astrick">*</span></label>
                                                        <input type="text" name="area" className="form-control" onChange={this.handleChange}/>
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
                                                    <div className="form-group col-md-4">
                                                        <label>Dance Style<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' onChange={this.handleSelect} name="dance_type" multiple>
                                                                <option key="1" id="1" data-id="1" value="Indian" >Indian</option>
                                                                <option value="western">Western</option>
                                                                <option value="ballet">Ballet</option>
                                                                <option value="salsa">Salsa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Style<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' onChange={this.handleSelect} name="sub_type" multiple>
                                                                <option key="1" id="1" data-id="1" value="bollywoodoodessi">Bollywood</option>
                                                                <option value="bharath_natyum">Bharat Natyam</option>
                                                                <option value="oodessi">Odessi</option>
                                                                <option value="kuchupudi">Kuchupudi</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Min Age</label>
                                                            <input type="text" name="min_age" onChange={this.handleChange} className="form-control" placeholder="enter here" />
                                                        </div>
                                                        <div>
                                                            <label>&nbsp;</label>
                                                            <input type="text" name=""  className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Number of Trainee<span className="astrick">*</span></label>
                                                        <input type="text" name="number_of_trainee" className="form-control" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Timing<span className="astrick">*</span></label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' name="timing" onChange={this.handleSelect} multiple>
                                                                <option key="1" id="1" data-id="1" value="5pm to 7pm">5.00PM - 7.00PM</option>
                                                                <option value="7pm to 9pm">7.00PM - 9.00PM</option>
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
                                                    <button className="btn btn-blue" type="submit">Submit</button>
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