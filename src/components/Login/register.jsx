import React, { Component } from 'react';
// import $ from 'jquery';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            register_step1: true,
            register_step2: false,

            paymentMode: '',
        }
    }
    componentDidMount() {

    }
    componentWillMount() {
        
    }
    handleSubmitFirst = (e) => {
        // e.preventDefault();
        this.setState({
            register_step1: false,
            register_step2: true,
        })
    }
    handlePaymentMode = (e) => {
        this.setState({
            paymentMode: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row dflex">
                        {/* RegisterLeft Starts here */}
                        <div className="col-md-4 col-sm-4 register-left hidden-xs">
                            <div className="nav-brand text-center">
                                {/* <img className="img-responsive" src="images/nav-brand-transparent.png" alt="Logo" /> */}
                            </div>
                            <h1>B'Wise</h1>

                        </div>
                        <div className="col-md-8 col-sm-8 register-right">
                            <div className="register-form col-md-12 col-xs-12">
                                <div className="nav-brand text-center visible-xs">
                                </div>
                                <div className="formstep-enclose step-1 col-md-12 col-xs-12 pad-no">
                                    {(this.state.register_step1 === true) ? (
                                        <div className="form-step1 col-md-12 col-xs-12 pad-no">
                                            <form action="#" onSubmit={this.handleSubmitFirst} className="custom-form">
                                            <div className="form-group col-md-12">
                                                    <label>User Type<span className="astrick">*</span></label><br/>
                                                    <label><input type="radio" name="fname" /> Individual</label> &nbsp;&nbsp;&nbsp;
                                                    <label><input type="radio" name="fname" /> Organisation </label>&nbsp;&nbsp;&nbsp;
                                                    <label><input type="radio" name="fname" /> Is this Organisation Owner</label>
                                                    {/* <small className="alert-msg text-danger">Please fill the detail</small> */}
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Organisation Name<span className="astrick">*</span></label>
                                                    <input type="text" name="fname" className="form-control" />
                                                    {/* <small className="alert-msg text-danger">Please fill the detail</small> */}
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Owner Name<span className="astrick">*</span></label>
                                                    <input type="text" name="lname" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Organisation Register Number <span className="astrick">*</span></label>
                                                    <input type="text" name="lname" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>E-Mail Id<span className="astrick">*</span></label>
                                                    <input type="text" name="fname" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Phone Number<span className="astrick">*</span></label>
                                                    <input type="text" name="lname" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Organisation Type<span className="astrick">*</span></label>
                                                    <select className="select-dropdown selectpicker" data-live-search="true" title="Choose...">
                                                        <option>School</option>
                                                        <option>Pre-School</option>
                                                        <option>Play Area</option>
                                                        <option>Creative Activities</option>
                                                        <option>Events</option>
                                                        <option>Seasonal Camps</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>State<span className="astrick">*</span></label>
                                                    <select className="select-dropdown selectpicker" data-live-search="true" title="Choose...">
                                                        <option>Delhi</option>
                                                        <option>Banglore</option>
                                                        <option>Tamil Nadu</option>
                                                        <option>Kerala</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Location<span className="astrick">*</span></label>
                                                    <input type="tel" name="contact" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Pincode<span className="astrick">*</span></label>
                                                    <input type="tel" name="contact" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Address<span className="astrick">*</span></label>
                                                    <textarea className="form-control" rows="4" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Password<span className="astrick">*</span></label>
                                                    {/* <i className="pass-visible" toggle="#password-field">
                                                    <img className="off" src="assets/images/visibility-off.svg" alt="icon" />
                                                    <img className="on" src="assets/images/visibility.svg" alt="icon" />
                                                </i> */}
                                                    <input id="password-field" type="password" name="password" className="form-control" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Confirm Password<span className="astrick">*</span></label>
                                                    {/* <i className="pass-visible" toggle="#password-fieldc">
                                                    <img className="off" src="assets/images/visibility-off.svg" alt="icon" />
                                                    <img className="on" src="assets/images/visibility.svg" alt="icon" />
                                                </i> */}
                                                    <input id="password-fieldc" type="password" name="cpassword" className="form-control" />
                                                </div>
                                                <div className="col-md-12 col-xs-12 text-left">
                                                    <label><input type="checkbox" className="" /> I agree to <a href="#" >terms of service and privacy policy</a></label>
                                                </div>
                                                <div className="col-md-12 col-xs-12 text-right">
                                                    <button type="submit" className="btn btn-blue btn-rounded next">Next</button>
                                                </div>
                                            </form>
                                        </div>
                                    ) : ''}
                                    {(this.state.register_step2 === true) ? (
                                        <div className="form-step2 col-md-12 col-xs-12 pad-no">
                                            <form action="#" className="custom-form">
                                                <div className="form-group col-md-12">
                                                    <label>Our Packages<span className="astrick">*</span></label><br/>
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="1"  />&nbsp;Bronze - INR 2000 / Month
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="2" />&nbsp;Silver - INR 4500 / Month
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="3" />&nbsp;Gold - INR 6000 / Month
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="4"  />&nbsp;Platinum - INR 7500 / Month
                                                    </div>
                                                    {/* <select className="select-dropdown selectpicker" title="Choose...">
                                                        <option selected='selected'>Bronze - INR 2000 / Month</option>
                                                        <option>Silver - INR 4500 / Month</option>
                                                        <option>Gold - INR 6000 / Month</option>
                                                        <option>Platinum - INR 7500 / Month</option>
                                                    </select> */}
                                                </div>
                                                <div className="form-group col-md-6">
                                                </div>
                                                <div className="form-group col-md-12 package-bg">
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>100 Word Write up with Address on site</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>Control over content </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>1 Photograph or premisis </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>Visibility of Cust Ratings</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>Number of Visits to site </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li>Auto access for Content update</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Payment Mode<span className="astrick">*</span></label><br />
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="1" onClick={this.handlePaymentMode} />&nbsp;Online Payments
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="radio" name="payment_mode" value="2" onClick={this.handlePaymentMode} />&nbsp;Cheque Collections
                                                    </div>
                                                </div>
                                                {(this.state.paymentMode === '1') ? (
                                                    <div className="col-md-6 payment-bg">
                                                        <div className="form-group col-md-12 m12">
                                                            <label>Card Holder Name</label> <span id="card-holder-name-info"
                                                                className="info"></span><br />
                                                            <input type="text" id="name" name="name" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-md-12 m12">
                                                            <label>Email</label> <span id="email-info" className="info"></span><br />
                                                            <input type="text" id="email" name="email" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-md-12 m12">
                                                            <label>Card Number</label> <span id="card-number-info"
                                                                className="info"></span><br />
                                                            <input type="text" id="card-number" name="card-number" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-md-12 m12">
                                                            <div className="contact-row column-right">
                                                                <label>Expiry Month / Year</label>
                                                                <span id="userEmail-info" className="info"></span><br />
                                                                <select name="month" id="month" className="form-control" style={{ width: '70px', float: "left" }}>
                                                                    <option value="08">08</option>
                                                                    <option value="09">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                                <select name="year" id="year" className="form-control" style={{ width: '120px', marginLeft: '92px' }}>
                                                                    <option value="20">2020</option>
                                                                    <option value="21">2021</option>
                                                                    <option value="22">2022</option>
                                                                    <option value="23">2023</option>
                                                                    <option value="24">2024</option>
                                                                    <option value="25">2025</option>
                                                                    <option value="26">2026</option>
                                                                    <option value="27">2027</option>
                                                                    <option value="28">2028</option>
                                                                    <option value="29">2029</option>
                                                                    <option value="30">2030</option>
                                                                </select>
                                                            </div>
                                                            <div className="contact-row form-group  cvv-box">
                                                                <label>CVC</label> <span id="cvv-info" className="info"></span><br />
                                                                <input type="text" name="cvc" id="cvc" className="form-control cvv-input" />
                                                            </div>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                ) : ""}
                                                {(this.state.paymentMode === '2') ? (
                                                    <div className="form-group col-md-12">
                                                        <label>Upload Cheque/ Reciept</label>
                                                        <input type="file" />
                                                        <small>Note: File format .pdf</small>
                                                    </div>
                                                ) : ""}
                                                <div className="col-md-12 col-xs-12 text-right">
                                                    <button className="btn btn-rounded btn-blue">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Register;