import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { addPreschool } from '../../API/FetchCall';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      ownerName: '',
      schoolName: '',
      email_id: '',
      phone_number: '',
      landline_number: '',
      fax_number: '',
      website: '',
      state: '',
      location: '',
      country: '',
      pincode: '',
      address: '',
      about_school: '',
      google_location: '',
      admission_link: '',
      processing_fee: '',
      required_document: '',
      admission_process: '',
      banner_img: '',
      gallery_img: '',
      number_of_teachers: '',
      establishment_Year: '',
      avg_anual_fee: '',
      other_fee: '',
      addmission_fee: '',
      isrefund: '',
      schoolType: '',
      board_of_education: '',
      opening_timimg_end: '',
      opening_timimg_start: '',
      opening_timimg: '',
      mode_of_payment: '',
    };
  }
  componentDidMount() {}
  UNSAFE_componentWillMount() {}
  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // jQuery("#currency_selected").val(4);
  }

  handleOwnerName = (e) => {
    this.setState({ ownerName: e.target.value });
    this.clearValidationErr('ownerName');
  };
  handleSchoolsName = (e) => {
    this.setState({ schoolName: e.target.value });
    this.clearValidationErr('schoolName');
  };
  handleEmailId = (e) => {
    this.setState({ email_id: e.target.value });
    this.clearValidationErr('email_id');
  };
  handlePhoneNo = (e) => {
    this.setState({ phone_number: e.target.value });
    this.clearValidationErr('phone_number');
  };
  handleLandlineNo = (e) => {
    this.setState({ landline_number: e.target.value });
    this.clearValidationErr('landline_number');
  };
  handleFaxNo = (e) => {
    this.setState({ fax_number: e.target.value });
    this.clearValidationErr('fax_number');
  };
  handleWebsite = (e) => {
    this.setState({ website: e.target.value });
    this.clearValidationErr('website');
  };
  handleState = (e) => {
    this.setState({ state: e.target.value });
    this.clearValidationErr('state');
  };
  handleLocation = (e) => {
    this.setState({ location: e.target.value });
    this.clearValidationErr('location');
  };
  handlePincode = (e) => {
    this.setState({ pincode: e.target.value });
    this.clearValidationErr('pincode');
  };
  handleAddress = (e) => {
    this.setState({ address: e.target.value });
    this.clearValidationErr('address');
  };
  handleabout_school = (e) => {
    this.setState({ about_school: e.target.value });
    this.clearValidationErr('about_school');
  };
  handlegoogle_location = (e) => {
    this.setState({ google_location: e.target.value });
    this.clearValidationErr('google_location');
  };
  handleAdmissionLink = (e) => {
    this.setState({ admission_link: e.target.value });
    this.clearValidationErr('admission_link');
  };
  handleProcessingFees = (e) => {
    this.setState({ processing_fee: e.target.value });
    this.clearValidationErr('processing_fee');
  };
  handleRequiredDocment = (e) => {
    this.setState({ required_document: e.target.value });
    this.clearValidationErr('required_document');
  };
  handleAdmissionProcess = (e) => {
    this.setState({ admission_process: e.target.value });
    this.clearValidationErr('admission_process');
  };
  handleGallery = (e) => {
    this.setState({ gallery_img: e.target.value });
    this.clearValidationErr('gallery_img');
  };
  handleBanner = (e) => {
    this.setState({ banner_img: e.target.value });
    this.clearValidationErr('banner_img');
  };
  handlenumber_of_teachers = (e) => {
    this.setState({ number_of_teachers: e.target.value });
    this.clearValidationErr('number_of_teachers');
  };
  handleEstYear = (e) => {
    this.setState({ establishment_Year: e.target.value });
    this.clearValidationErr('establishment_Year');
  };
  handleAvgFees = (e) => {
    this.setState({ avg_anual_fee: e.target.value });
    this.clearValidationErr('avg_anual_fee');
  };
  handleother_fee = (e) => {
    this.setState({ other_fee: e.target.value });
    this.clearValidationErr('other_fee');
  };
  handleAdmisionFees = (e) => {
    this.setState({ addmission_fee: e.target.value });
    this.clearValidationErr('addmission_fee');
  };
  handleIsrefund = (e) => {
    this.setState({ isrefund: e.target.value });
    this.clearValidationErr('isrefund');
  };

  handleSchoolType = (e) => {
    this.setState({ schoolType: e.target.value });
  };

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
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
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = this.isEmailValid();
    let required_document = window.document.querySelectorAll(
      '#req_document option:checked'
    );
    required_document = Array.from(required_document)
      .map((item) => item.value)
      .join(', ');

    let facilities = Array.from(
      window.document.querySelectorAll('#facilities option:checked')
    )
      .map((item) => item.value)
      .join(', ');

    const data = {
      ...this.state,
      opening_timimg:
        this.state.opening_timimg_start +
        ' to ' +
        this.state.opening_timimg_end,
    };

    if (
      this.state.ownerName !== '' &&
      this.state.schoolName !== '' &&
      this.state.processing_fee !== ''
    ) {
      console.log(this.state, required_document);
      addPreschool({ ...data, required_document, facilities }).then((res) =>
        this.props.history.push('/preschoolslist')
      );
    } else {
      if (this.state.ownerName === '') {
        this.showValidationErr('ownerName', 'Enter owner name');
      }
      if (this.state.schoolName === '') {
        this.showValidationErr('schoolName', 'Enter school name');
      }
      if (this.state.email_id === '') {
        this.showValidationErr('email_id', 'Enter email id');
      }
      if (this.state.phone_number === '') {
        this.showValidationErr('phone_number', 'Enter Phone No.');
      }
      if (this.state.landline_number === '') {
        this.showValidationErr('landline_number', 'Enter Landline No.');
      }
      if (this.state.fax_number === '') {
        this.showValidationErr('fax_number', 'Enter Fax No.');
      }
      if (this.state.website === '') {
        this.showValidationErr('website', 'Enter Website');
      }
      if (this.state.location === '') {
        this.showValidationErr('location', 'Enter location');
      }
      if (this.state.state === '') {
        this.showValidationErr('state', 'Select State');
      }
      if (this.state.pincode === '') {
        this.showValidationErr('pincode', 'Enter Pincode');
      }
      if (this.state.address === '') {
        this.showValidationErr('address', 'Enter Address');
      }
      if (this.state.about_school === '') {
        this.showValidationErr('about_school', 'Enter about_school the school');
      }
      if (this.state.google_location === '') {
        this.showValidationErr('google_location', 'Enter Google location');
      }
      if (this.state.admission_link === '') {
        this.showValidationErr('admission_link', 'Enter Admission link');
      }
      if (this.state.processing_fee === '') {
        this.showValidationErr('processing_fee', 'Enter Processing Fees');
      }
      if (this.state.required_document === '') {
        this.showValidationErr('required_document', 'Enter Required Document');
      }
      if (this.state.admission_process === '') {
        this.showValidationErr('admission_process', 'Enter Admission Process');
      }
      if (this.state.banner_img === '') {
        this.showValidationErr('banner_img', 'Select Banner Image');
      }
      if (this.state.gallery_img === '') {
        this.showValidationErr('gallery_img', 'Enter Gallery Image');
      }
      if (this.state.number_of_teachers === '') {
        this.showValidationErr('number_of_teachers', 'Enter No of Teacher');
      }
      if (this.state.establishment_Year === '') {
        this.showValidationErr('establishment_Year', 'Enter Established year');
      }
      if (this.state.avg_anual_fee === '') {
        this.showValidationErr('avg_anual_fee', 'Enter Average fees');
      }
      if (this.state.other_fee === '') {
        this.showValidationErr('other_fee', 'Enter other fees');
      }
      if (this.state.addmission_fee === '') {
        this.showValidationErr('addmission_fee', 'Enter Admission fees');
      }
      if (this.state.isrefund === '') {
        this.showValidationErr('isrefund', 'Enter Is refundable');
      }
    }
  };
  render() {
    console.log('processing_fee', this.state.processing_fee);
    let ownerNameErr = null,
      schoolNameErr = null,
      email_idErr = null,
      phone_numberErr = null,
      landline_numberErr = null,
      fax_numberErr = null,
      websiteErr = null,
      stateErr = null,
      locationErr = null,
      pincodeErr = null,
      addressErr = null,
      about_schoolErr = null,
      google_locationErr = null,
      admission_linkErr = null,
      processing_feeErr = null,
      required_documentErr = null,
      admission_processErr = null,
      banner_imgErr = null,
      gallery_imgErr = null;
    let number_of_teachersErr = null,
      establishment_YearErr = null,
      avg_anual_feeErr = null,
      other_feeErr = null,
      addmission_feeErr = null,
      isrefundErr = null;
    for (let err of this.state.errors) {
      if (err.elm === 'ownerName') {
        ownerNameErr = err.msg;
      }
      if (err.elm === 'schoolName') {
        schoolNameErr = err.msg;
      }
      if (err.elm === 'email_id') {
        email_idErr = err.msg;
      }
      if (err.elm === 'phone_number') {
        phone_numberErr = err.msg;
      }
      if (err.elm === 'landline_number') {
        landline_numberErr = err.msg;
      }
      if (err.elm === 'fax_number') {
        fax_numberErr = err.msg;
      }
      if (err.elm === 'website') {
        websiteErr = err.msg;
      }
      if (err.elm === 'state') {
        stateErr = err.msg;
      }
      if (err.elm === 'location') {
        locationErr = err.msg;
      }
      if (err.elm === 'pincode') {
        pincodeErr = err.msg;
      }
      if (err.elm === 'address') {
        addressErr = err.msg;
      }
      if (err.elm === 'about_school') {
        about_schoolErr = err.msg;
      }
      if (err.elm === 'google_location') {
        google_locationErr = err.msg;
      }
      if (err.elm === 'admission_link') {
        admission_linkErr = err.msg;
      }
      if (err.elm === 'processing_fee') {
        processing_feeErr = err.msg;
      }
      if (err.elm === 'required_document') {
        required_documentErr = err.msg;
      }
      if (err.elm === 'admission_process') {
        admission_processErr = err.msg;
      }
      if (err.elm === 'banner_img') {
        banner_imgErr = err.msg;
      }
      if (err.elm === 'gallery_img') {
        gallery_imgErr = err.msg;
      }
      if (err.elm === 'number_of_teachers') {
        number_of_teachersErr = err.msg;
      }
      if (err.elm === 'establishment_Year') {
        establishment_YearErr = err.msg;
      }
      if (err.elm === 'avg_anual_fee') {
        avg_anual_feeErr = err.msg;
      }
      if (err.elm === 'other_fee') {
        other_feeErr = err.msg;
      }
      if (err.elm === 'addmission_fee') {
        addmission_feeErr = err.msg;
      }
      if (err.elm === 'isrefund') {
        isrefundErr = err.msg;
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
                  <img
                    src="../assets/images/back-arrow-blue.svg"
                    alt="back_icon"
                  />
                </a>
                <span className="page-title">Add Schools</span>
              </div>

              <div className="content-top col-md-12 col-xs-12">
                <h3>Schools Info</h3>
                {/* <ul className="nav nav-pills transparent">
                                    <li className="active"><a data-toggle="pill" href="#company-info">Play Area Info</a></li>
                                </ul> */}
              </div>

              <div className="main-content col-md-12 col-xs-12">
                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                  <div className="tab-content">
                    <div id="company-info" className="tab-pane fade in active">
                      <form
                        method="post"
                        onSubmit={this.handleSubmit}
                        autoComplete="off"
                        className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no"
                      >
                        <div className="row">
                          <div className="form-group col-md-4">
                            <label>
                              Owner Name<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="ownerName"
                              value={this.state.ownerName}
                              onChange={this.handleOwnerName}
                            />
                            <small className="alert-msg text-danger">
                              {ownerNameErr ? ownerNameErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Name <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="schoolName"
                              value={this.state.schoolName}
                              onChange={this.handleSchoolsName}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {schoolNameErr ? schoolNameErr : ''}
                            </small>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <span className="form-legend">
                              Address Information
                            </span>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Email Id<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="email_id"
                              value={this.state.email_id}
                              onChange={this.handleEmailId}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {email_idErr ? email_idErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Phone Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="phone_number"
                              value={this.state.phone_number}
                              onChange={this.handlePhoneNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {phone_numberErr ? phone_numberErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Landline Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="landline_number"
                              value={this.state.landline_number}
                              onChange={this.handleLandlineNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {landline_numberErr ? landline_numberErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Fax Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="fax_number"
                              value={this.state.fax_number}
                              onChange={this.handleFaxNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {fax_numberErr ? fax_numberErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Website<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="website"
                              value={this.state.website}
                              onChange={this.handleWebsite}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {websiteErr ? websiteErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              State<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="state"
                              value={this.state.state}
                              onChange={this.handleState}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {stateErr ? stateErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Location<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="location"
                              value={this.state.location}
                              onChange={this.handleLocation}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {locationErr ? locationErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Pincode<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="pincode"
                              value={this.state.pincode}
                              onChange={this.handlePincode}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {pincodeErr ? pincodeErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Address<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="address"
                              value={this.state.address}
                              onChange={this.handleAddress}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {addressErr ? addressErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Country<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="country"
                              value={this.state.location}
                              onChange={this.handleChange}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {locationErr ? locationErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              About the School
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="about_school"
                              value={this.state.about_school}
                              onChange={this.handleabout_school}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {about_schoolErr ? about_schoolErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Google Location(iframe link)
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="google_location"
                              value={this.state.google_location}
                              onChange={this.handlegoogle_location}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {google_locationErr ? google_locationErr : ''}
                            </small>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <span className="form-legend">Key Information</span>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School type<span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                className="form-control selectpicker"
                                onChange={this.handleSchoolType}
                                value={this.state.schoolType}
                              >
                                <option
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="day_care"
                                >
                                  Day Care{' '}
                                </option>
                                <option
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="play_group"
                                >
                                  Play Group{' '}
                                </option>
                                <option
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="nursery"
                                >
                                  Nursery{' '}
                                </option>
                                <option
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="kinder_garden"
                                >
                                  Kindergarden{' '}
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group col-md-4">
                            <label>Amenities </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="facilities"
                                id="facilities"
                                className="form-control selectpicker"
                                data-live-search="true"
                              >
                                {/* <option>Indoor Sports</option> */}
                                <option value="day_boarding">
                                  Day Boarding
                                </option>
                                <option value="ac_classrooms">
                                  AC Classes
                                </option>
                                <option value="transportation">
                                  Transportation
                                </option>
                                <option value="food_and_snacks">
                                  Food And Snacks
                                </option>
                                {/* <option>Hostel</option> */}
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {/* {amenitiesErr ? amenitiesErr : ''} */}
                              </small>
                            </div>
                          </div>

                          <div className="form-group col-md-4">
                            <label>
                              Board of Education
                              <span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                className="form-control selectpicker"
                                name="board_of_education"
                                value={this.state.board_of_education}
                                required
                                onChange={this.handleChange}
                              >
                                <option
                                  key="1"
                                  id="1"
                                  data-id="1"
                                  value="State"
                                >
                                  State
                                </option>
                                <option value="ISCE"> ISCE</option>
                                <option value="IB"> IB</option>
                                <option value="CBSE">CBSE</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-md-4 input-group-cus">
                            <div>
                              <label>Opening Timing</label>
                              <div className="custom-select-drop dropdown">
                                <select
                                  className="form-control selectpicker"
                                  onChange={this.handleChange}
                                  value={this.state.opening_timimg_start}
                                  name="opening_timimg_start"
                                >
                                  <option key="1" value="1.00PM">
                                    1.00PM
                                  </option>
                                  <option value="2.00 PM"> 2.00 PM</option>
                                  <option value="--">--</option>
                                  <option value="9.00 PM">9.00 PM</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label>&nbsp;</label>
                              <div className="custom-select-drop dropdown">
                                <select
                                  className="form-control selectpicker"
                                  onChange={this.handleChange}
                                  value={this.state.opening_timimg_end}
                                  name="opening_timimg_end"
                                >
                                  <option key="1" value="1.00PM">
                                    1.00PM
                                  </option>
                                  <option value="2.00 PM"> 2.00 PM</option>
                                  <option value="--">--</option>
                                  <option value="9.00 PM">9.00 PM</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Modes of Payment<span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                required
                                name="mode_of_payment"
                                id="modeofpayment"
                                onChange={this.handleChange}
                                className="form-control selectpicker"
                                value={this.state.mode_of_payment}
                                required
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="Cash/Cheque"
                                >
                                  Cash/Cheque
                                </option>
                                <option value="Online Payment">
                                  Online Payment
                                </option>
                              </select>
                              <br />
                              {/* <small className='alert-msg text-danger'>
                                {modeofpaymentErr ? modeofpaymentErr : ''}
                              </small> */}
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Number of Teacher
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="number_of_teachers"
                              value={this.state.number_of_teachers}
                              onChange={this.handleChange}
                              required
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {number_of_teachersErr
                                ? number_of_teachersErr
                                : ''}
                            </small>
                          </div>

                          <div className="form-group col-md-4">
                            <label>
                              Establishment Year{' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="establishment_Year"
                              value={this.state.establishment_Year}
                              onChange={this.handleEstYear}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {establishment_YearErr
                                ? establishment_YearErr
                                : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Average Fees(Annualy){' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="number"
                              name="avg_anual_fee"
                              value={this.state.avg_anual_fee}
                              onChange={this.handleAvgFees}
                              className="form-control"
                              required
                            />
                            {/* <small className='alert-msg text-danger'>
                              {avg_anual_feeErr ? avg_anual_feeErr : ''}
                            </small> */}
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Other Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="other_fee"
                              value={this.state.other_fee}
                              onChange={this.handleother_fee}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {other_feeErr ? other_feeErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Admission Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="addmission_fee"
                              value={this.state.addmission_fee}
                              onChange={this.handleAdmisionFees}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {addmission_feeErr ? addmission_feeErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Is Refundable (Admission Fees)
                              <span className="astrick">*</span>
                            </label>
                            <br />
                            <input
                              required
                              type="radio"
                              name="isrefund"
                              onChange={this.handleIsrefund}
                            />
                            Yes&nbsp;&nbsp;
                            <input
                              required
                              type="radio"
                              name="isrefund"
                              onChange={this.handleIsrefund}
                            />
                            No
                            <br />
                            <small className="alert-msg text-danger">
                              {isrefundErr ? isrefundErr : ''}
                            </small>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <span className="form-legend">
                              Admission Details
                            </span>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Admission Link <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="admission_link"
                              value={this.state.admission_link}
                              onChange={this.handleAdmissionLink}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {admission_linkErr ? admission_linkErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Processing Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="processing_fee"
                              value={this.state.processing_fee}
                              onChange={this.handleProcessingFees}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {processing_feeErr ? processing_feeErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Required Documents </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="required_document"
                                id="req_document"
                                // value={this.state.required_document}
                                onChange={this.handleChange}
                                className="form-control selectpicker"
                                data-live-search="true"
                                multiple
                              >
                                <option
                                  key="1"
                                  id="1"
                                  data-id="1"
                                  value="Birth Certificate"
                                >
                                  Birth Certificate
                                </option>
                                <option value="Aadhar Card">Aadhar Card</option>
                                <option value="Residential Proof">
                                  Residential Proof
                                </option>
                                <option value="Immunization Certficate">
                                  Immunization Certficate
                                </option>
                                <option value="Passport Size Photos">
                                  Passport Size Photos
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {required_documentErr
                                  ? required_documentErr
                                  : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Admission Process</label>
                            <textarea
                              name="admission_process"
                              value={this.state.admission_process}
                              onChange={this.handleAdmissionProcess}
                              className="form-control"
                            ></textarea>
                            <small className="alert-msg text-danger">
                              {admission_processErr ? admission_processErr : ''}
                            </small>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-xs-12">
                            <span className="form-legend">Images</span>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Banner Images <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="file"
                              name="banner_img"
                              value={this.state.banner_img}
                              onChange={this.handleBanner}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {banner_imgErr ? banner_imgErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Gallery Images <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="file"
                              name="gallery_img"
                              value={this.state.gallery_img}
                              onChange={this.handleGallery}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {gallery_imgErr ? gallery_imgErr : ''}
                            </small>
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
    );
  }
}

export default Schools;
