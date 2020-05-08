import React, { Component } from 'react';
import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import FetchCall from '../../API/FetchCall';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      owner_name: '',
      school_name: '',
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
      admission_link: '',
      processing_fees: '',
      req_document: '',
      admission_process: '',
      banner_img: '',
      gallery_img: '',
      school_type: '',
      classification: '',
      boardofedu: '',
      grade: '',
      gradeto: '',
      timefrom: '',
      modeofpayment: '',
      school_logo: '',
      minage: '',
      inst_lang: '',
      estyear: '',
      amenities: '',
      avg_fees: '',
      other_fees: '',
      admission_fees: '',
      isrefund: '',
      google_location: '',
      school_timimg: '10am to 4pm',
    };
  }
  componentDidMount() {}
  UNSAFE_componentWillMount() {}
  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // jQuery("#currency_selected").val(4);
  }

  handleOwnerName = (e) => {
    this.setState({ owner_name: e.target.value });
    this.clearValidationErr('owner_name');
  };
  handleSchoolsName = (e) => {
    this.setState({ school_name: e.target.value });
    this.clearValidationErr('school_name');
  };
  handleEmailId = (e) => {
    this.setState({ email_id: e.target.value });
    this.clearValidationErr('email_id');
  };
  handlePhoneNo = (e) => {
    this.setState({ phone_no: e.target.value });
    this.clearValidationErr('phone_no');
  };
  handleLandlineNo = (e) => {
    this.setState({ landline_no: e.target.value });
    this.clearValidationErr('landline_no');
  };
  handleFaxNo = (e) => {
    this.setState({ fax_no: e.target.value });
    this.clearValidationErr('fax_no');
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
  handleAbout = (e) => {
    this.setState({ about: e.target.value });
    this.clearValidationErr('about');
  };
  handleIframe = (e) => {
    this.setState({ iframe: e.target.value });
    this.clearValidationErr('iframe');
  };
  handleAdmissionLink = (e) => {
    this.setState({ admission_link: e.target.value });
    this.clearValidationErr('admission_link');
  };
  handleProcessingFees = (e) => {
    this.setState({ processing_fees: e.target.value });
    this.clearValidationErr('processing_fees');
  };
  handleRequiredDocment = (e) => {
    this.setState({ req_document: e.target.value });
    this.clearValidationErr('req_document');
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
  handleSchoolType = (e) => {
    this.setState({ school_type: e.target.value });
    this.clearValidationErr('school_type');
  };
  handleClassification = (e) => {
    this.setState({ classification: e.target.value });
    this.clearValidationErr('classification');
  };
  handleBoardOfEducation = (e) => {
    this.setState({ boardofedu: e.target.value });
    this.clearValidationErr('boardofedu');
  };
  handlegradeTo = (e) => {
    this.setState({ gradeto: e.target.value });
    this.clearValidationErr('gradeto');
  };
  handleGrade = (e) => {
    this.setState({ grade: e.target.value });
    this.clearValidationErr('grade');
  };
  handleTimingFrom = (e) => {
    this.setState({ timefrom: e.target.value });
    this.clearValidationErr('timefrom');
  };
  handleModeOfPayament = (e) => {
    this.setState({ modeofpayment: e.target.value });
    this.clearValidationErr('modeofpayment');
  };
  handleMinAge = (e) => {
    this.setState({ minage: e.target.value });
    this.clearValidationErr('minage');
  };
  handleLogo = (e) => {
    this.setState({ school_logo: e.target.value });
    this.clearValidationErr('school_logo');
  };
  handleInstLang = (e) => {
    this.setState({ inst_lang: e.target.value });
    this.clearValidationErr('inst_lang');
  };
  handleEstYear = (e) => {
    this.setState({ estyear: e.target.value });
    this.clearValidationErr('estyear');
  };
  handleAmenities = (e) => {
    this.setState({ amenities: e.target.value });
    this.clearValidationErr('amenities');
  };
  handleAvgFees = (e) => {
    this.setState({ avg_fees: e.target.value });
    this.clearValidationErr('avg_fees');
  };
  handleOtherFees = (e) => {
    this.setState({ other_fees: e.target.value });
    this.clearValidationErr('other_fees');
  };
  handleAdmissionFees = (e) => {
    this.setState({ admission_fees: e.target.value });
    this.clearValidationErr('admission_fees');
  };
  handleIsRefund = (e) => {
    this.setState({ isrefund: e.target.value });
    this.clearValidationErr('isrefund');
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

  handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = this.isEmailValid();

    if (this.state.owner_name !== '' && this.state.school_name !== '') {
      let schoolType = [
        ...window.document.querySelectorAll('#schoolType option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let Classification = [
        ...window.document.querySelectorAll('#classification option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let board_of_edu = [
        ...window.document.querySelectorAll('#board_of_edu option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let gradefrom = [
        ...window.document.querySelectorAll('#gradefrom option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let gradeto = [
        ...window.document.querySelectorAll('#gradeto option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let timefrom = [
        ...window.document.querySelectorAll('#timefrom option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let modeofpayment = [
        ...window.document.querySelectorAll('#modeofpayment option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let minage = [
        ...window.document.querySelectorAll('#minage option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let inst_lang = [
        ...window.document.querySelectorAll('#inst_lang option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let amenities = [
        ...window.document.querySelectorAll('#amenities option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let req_document = [
        ...window.document.querySelectorAll('#req_document option:checked'),
      ]
        .map((item) => item.value)
        .join(', ');
      let addlist = {
        ownerName: this.state.owner_name,
        schoolName: this.state.school_name,
        email_id: this.state.email_id,
        phone_number: this.state.phone_no,
        landline_number: this.state.landline_no,
        fax_number: this.state.fax_no,
        website: this.state.website,
        statecountry: this.state.country,
        city: this.state.city,
        state: this.state.state,
        location: this.state.location,
        pincode: this.state.pincode,
        address: this.state.address,
        schoolType: schoolType,
        classification: Classification,
        board_of_education: board_of_edu,
        grade: gradefrom + ' to ' + gradeto,
        gradeto: gradeto,
        school_timing: timefrom,
        school_logo: this.state.school_logo,
        min_age: minage,
        instruction_lang: inst_lang,
        establishment_Year: this.state.estyear,
        No_of_Teacher: this.state.No_of_Teacher,
        No_of_Students: this.state.No_of_Students,
        Source: this.state.Source,
        rating: this.state.rating,
        aminities: amenities,
        avg_anual_fee: this.state.avg_fees,
        other_fee: this.state.other_fees,
        addmission_fee: this.state.admission_fees,
        // is_refundable: this.state.isrefund,
        admission_link: this.state.admission_link,
        processing_fee: this.state.processing_fees,
        required_document: req_document,
        admission_process: this.state.admission_process,
        // banner_img: this.state.banner_img,
        // gallery_img: this.state.gallery_img,
        about_school: this.state.about,
        google_location: this.state.iframe,
        school_timimg: this.state.school_timimg,
        mode_of_payment: modeofpayment,
      };

      FetchCall.createSchool(addlist).then((res) => {
        if (res.status === 200) {
          this.props.history.push('schoolsList');
        }
      });
    } else {
      if (this.state.owner_name === '') {
        this.showValidationErr('owner_name', 'Enter owner name');
      }
      if (this.state.school_name === '') {
        this.showValidationErr('school_name', 'Enter school name');
      }
      if (this.state.email_id === '') {
        this.showValidationErr('email_id', 'Enter email id');
      }
      if (this.state.phone_no === '') {
        this.showValidationErr('phone_no', 'Enter Phone No.');
      }
      if (this.state.landline_no === '') {
        this.showValidationErr('landline_no', 'Enter Landline No.');
      }
      if (this.state.fax_no === '') {
        this.showValidationErr('fax_no', 'Enter Fax No.');
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
      if (this.state.about === '') {
        this.showValidationErr('about', 'Enter About the school');
      }
      if (this.state.iframe === '') {
        this.showValidationErr('iframe', 'Enter Google location');
      }
      if (this.state.admission_link === '') {
        this.showValidationErr('admission_link', 'Enter Admission link');
      }
      if (this.state.processing_fees === '') {
        this.showValidationErr('processing_fees', 'Enter Processing Fees');
      }
      if (this.state.req_document === '') {
        this.showValidationErr('req_document', 'Enter Required Document');
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
      if (this.state.school_type === '') {
        this.showValidationErr('school_type', 'Enter School type');
      }
      if (this.state.classification === '') {
        this.showValidationErr('classification', 'Enter classification');
      }
      if (this.state.boardofedu === '') {
        this.showValidationErr('boardofedu', 'Enter Board of Education');
      }
      if (this.state.grade === '') {
        this.showValidationErr('grade', 'Enter grade from');
      }
      if (this.state.gradeto === '') {
        this.showValidationErr('gradeto', 'Enter grage to');
      }
      if (this.state.timefrom === '') {
        this.showValidationErr('timefrom', 'Enter Timing');
      }
      if (this.state.modeofpayment === '') {
        this.showValidationErr('modeofpayment', 'Enter Mode of Payment');
      }
      if (this.state.school_logo === '') {
        this.showValidationErr('school_logo', 'Select Logo');
      }
      if (this.state.minage === '') {
        this.showValidationErr('minage', 'Enter Minimum Age');
      }
      if (this.state.inst_lang === '') {
        this.showValidationErr('inst_lang', 'Enter Instruction Language');
      }
      if (this.state.estyear === '') {
        this.showValidationErr('estyear', 'Enter Establised Year');
      }
      if (this.state.amenities === '') {
        this.showValidationErr('amenities', 'Enter amenities');
      }
      if (this.state.avg_fees === '') {
        this.showValidationErr('avg_fees', 'Enter Average ');
      }
      if (this.state.other_fees === '') {
        this.showValidationErr('other_fees', 'Enter Other fees');
      }
      if (this.state.admission_fees === '') {
        this.showValidationErr('admission_fees', 'Enter Admission fees');
      }
      if (this.state.isrefund === '') {
        this.showValidationErr('isrefund', 'Enter Is Refund');
      }
    }
  };
  render() {
    console.log('processing_fees', this.state.processing_fees);
    let owner_nameErr = null,
      school_nameErr = null,
      email_idErr = null,
      phone_noErr = null,
      landline_noErr = null,
      fax_noErr = null,
      websiteErr = null,
      stateErr = null,
      locationErr = null,
      pincodeErr = null,
      addressErr = null,
      aboutErr = null,
      iframeErr = null,
      admission_linkErr = null,
      processing_feesErr = null,
      req_documentErr = null,
      admission_processErr = null,
      banner_imgErr = null,
      gallery_imgErr = null;
    let school_typeErr = null,
      classificationErr = null,
      boardofeduErr = null,
      gradeErr = null,
      gradetoErr = null,
      timefromErr = null,
      modeofpaymentErr = null,
      school_logoErr = null,
      minageErr = null,
      inst_langErr = null,
      estyearErr = null,
      amenitiesErr = null,
      avg_feesErr = null,
      other_feesErr = null,
      admission_feesErr = null,
      isrefundErr = null;
    for (let err of this.state.errors) {
      if (err.elm === 'owner_name') {
        owner_nameErr = err.msg;
      }
      if (err.elm === 'school_name') {
        school_nameErr = err.msg;
      }
      if (err.elm === 'email_id') {
        email_idErr = err.msg;
      }
      if (err.elm === 'phone_no') {
        phone_noErr = err.msg;
      }
      if (err.elm === 'landline_no') {
        landline_noErr = err.msg;
      }
      if (err.elm === 'fax_no') {
        fax_noErr = err.msg;
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
      if (err.elm === 'about') {
        aboutErr = err.msg;
      }
      if (err.elm === 'iframe') {
        iframeErr = err.msg;
      }
      if (err.elm === 'admission_link') {
        admission_linkErr = err.msg;
      }
      if (err.elm === 'processing_fees') {
        processing_feesErr = err.msg;
      }
      if (err.elm === 'req_document') {
        req_documentErr = err.msg;
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
      if (err.elm === 'school_type') {
        school_typeErr = err.msg;
      }
      if (err.elm === 'classification') {
        classificationErr = err.msg;
      }
      if (err.elm === 'boardofedu') {
        boardofeduErr = err.msg;
      }
      if (err.elm === 'grade') {
        gradeErr = err.msg;
      }
      if (err.elm === 'gradeto') {
        gradetoErr = err.msg;
      }
      if (err.elm === 'timefrom') {
        timefromErr = err.msg;
      }
      if (err.elm === 'modeofpayment') {
        modeofpaymentErr = err.msg;
      }
      if (err.elm === 'school_logo') {
        school_logoErr = err.msg;
      }
      if (err.elm === 'minage') {
        minageErr = err.msg;
      }
      if (err.elm === 'inst_lang') {
        inst_langErr = err.msg;
      }
      if (err.elm === 'estyear') {
        estyearErr = err.msg;
      }
      if (err.elm === 'amenities') {
        amenitiesErr = err.msg;
      }
      if (err.elm === 'avg_fees') {
        avg_feesErr = err.msg;
      }
      if (err.elm === 'other_fees') {
        other_feesErr = err.msg;
      }
      if (err.elm === 'admission_fees') {
        admission_feesErr = err.msg;
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
                              type="text"
                              className="form-control"
                              name="owner_name"
                              value={this.state.owner_name}
                              onChange={this.handleOwnerName}
                            />
                            <small className="alert-msg text-danger">
                              {owner_nameErr ? owner_nameErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Name <span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="school_name"
                              value={this.state.school_name}
                              onChange={this.handleSchoolsName}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {school_nameErr ? school_nameErr : ''}
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
                              type="text"
                              name="phone_no"
                              value={this.state.phone_no}
                              onChange={this.handlePhoneNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {phone_noErr ? phone_noErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Landline Number<span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="landline_no"
                              value={this.state.landline_no}
                              onChange={this.handleLandlineNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {landline_noErr ? landline_noErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Fax Number<span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="fax_no"
                              value={this.state.fax_no}
                              onChange={this.handleFaxNo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {fax_noErr ? fax_noErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Website<span className="astrick">*</span>
                            </label>
                            <input
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
                              About the School<span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="about"
                              value={this.state.about}
                              onChange={this.handleAbout}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {aboutErr ? aboutErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Google Location(Iframe)
                              <span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="iframe"
                              value={this.state.iframe}
                              onChange={this.handleIframe}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {iframeErr ? iframeErr : ''}
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
                            <div
                              name="school_type"
                              id="schoolType"
                              className="custom-select-drop dropdown"
                            >
                              <select
                                onChange={this.handleSchoolType}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="govt"
                                >
                                  Government{' '}
                                </option>
                                <option
                                  key="1"
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="private"
                                >
                                  Private{' '}
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {school_typeErr ? school_typeErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Classification<span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="classification"
                                id="classification"
                                onChange={this.handleClassification}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="co-ed"
                                >
                                  Co-Ed
                                </option>
                                <option value="boys"> Boys</option>
                                <option value="girls"> Girls</option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {classificationErr ? classificationErr : ''}
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
                                name="boardofedu"
                                id="board_of_edu"
                                onChange={this.handleBoardOfEducation}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  id="1"
                                  data-status="1"
                                  data-id="1"
                                  value="state"
                                >
                                  StateBoard
                                </option>
                                <option value="cbse"> CBSE</option>
                                <option value="ib"> IB</option>
                                <option value="icse">ICSE</option>
                                <option value="others"> Others</option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {boardofeduErr ? boardofeduErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4 input-group-cus">
                            <div>
                              <label>Grade</label>
                              <div className="custom-select-drop dropdown">
                                <select
                                  name="grade"
                                  id="gradefrom"
                                  onChange={this.handleGrade}
                                  className="form-control selectpicker"
                                >
                                  <option
                                    key="1"
                                    data-status="1"
                                    data-id="1"
                                    value="Nursery"
                                  >
                                    Nursery
                                  </option>
                                  <option value="Class 1"> Class 1</option>
                                  <option value="Class 2"> Class 2</option>
                                  <option value="--">--</option>
                                  <option value="Class 12"> Class 12</option>
                                </select>
                                <br />
                                <small className="alert-msg text-danger">
                                  {gradeErr ? gradeErr : ''}
                                </small>
                              </div>
                            </div>
                            <div>
                              <label>&nbsp;</label>
                              <div className="custom-select-drop dropdown">
                                <select
                                  name="gradeto"
                                  id="gradeto"
                                  onChange={this.handlegradeTo}
                                  className="form-control selectpicker"
                                >
                                  <option
                                    key="1"
                                    data-status="1"
                                    data-id="1"
                                    value="Nursery"
                                  >
                                    Nursery
                                  </option>
                                  <option value="Class 1"> Class 1</option>
                                  <option value="Class 2"> Class 2</option>
                                  <option value="--">--</option>
                                  <option value="Class 12"> Class 12</option>
                                </select>
                                <br />
                                <small className="alert-msg text-danger">
                                  {gradetoErr ? gradetoErr : ''}
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Timing<span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="timefrom"
                                id="timefrom"
                                onChange={this.handleTimingFrom}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="1"
                                >
                                  9.30Am - 5.00PM{' '}
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {timefromErr ? timefromErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Modes of Payment<span className="astrick">*</span>
                            </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="modeofpayment"
                                id="modeofpayment"
                                onChange={this.handleModeOfPayament}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="Cash/Cheque"
                                >
                                  Cash/Cheque
                                </option>
                                <option key="Online Payment">
                                  Online Payment
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {modeofpaymentErr ? modeofpaymentErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Logo<span className="astrick">*</span>
                            </label>
                            <input
                              type="file"
                              value={this.state.logo}
                              onChange={this.handleLogo}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {school_logoErr ? school_logoErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Min Age of Admission</label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="minage"
                                id="minage"
                                value={this.state.minage}
                                onChange={this.handleMinAge}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="2"
                                >
                                  2 Years
                                </option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {minageErr ? minageErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Instruction Language</label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="inst_lang"
                                id="inst_lang"
                                value={this.state.inst_lang}
                                onChange={this.handleInstLang}
                                className="form-control selectpicker"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="english"
                                >
                                  English
                                </option>
                                <option value="tamil">Tamil</option>
                                <option value="hindi">Hindi</option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {inst_langErr ? inst_langErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Establishment Year{' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="cus-name"
                              value={this.state.estyear}
                              onChange={this.handleEstYear}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {estyearErr ? estyearErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Amenities </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="amenities"
                                id="amenities"
                                onChange={this.handleAmenities}
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
                                {amenitiesErr ? amenitiesErr : ''}
                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Average Fees(Annualy){' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              type="number"
                              name="cus-name"
                              value={this.state.avg_fees}
                              onChange={this.handleAvgFees}
                              className="form-control"
                              placeholder="Enter in K's"
                            />
                            <small className="alert-msg text-danger">
                              {avg_feesErr ? avg_feesErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Other Fees <span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="other_fees"
                              value={this.state.other_fees}
                              onChange={this.handleOtherFees}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {other_feesErr ? other_feesErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Admission Fees <span className="astrick">*</span>
                            </label>
                            <input
                              type="text"
                              name="admission_fees"
                              value={this.state.admission_fees}
                              onChange={this.handleAdmissionFees}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {admission_feesErr ? admission_feesErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Is Refundable (Admission Fees)
                              <span className="astrick">*</span>
                            </label>
                            <br />
                            <input
                              type="radio"
                              name="isrefund"
                              onClick={this.handleIsRefund}
                            />
                            Yes&nbsp;&nbsp;
                            <input
                              type="radio"
                              name="isrefund"
                              onClick={this.handleIsRefund}
                            />
                            No
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
                              type="text"
                              name="processing_fees"
                              value={this.state.processing_fees}
                              onChange={this.handleProcessingFees}
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">
                              {processing_feesErr ? processing_feesErr : ''}
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Required Documents </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                multiple
                                name="req_document"
                                id="req_document"
                                className="form-control selectpicker"
                                data-live-search="true"
                              >
                                <option
                                  key="1"
                                  data-status="1"
                                  data-id="1"
                                  value="Birth Certificate"
                                >
                                  Birth Certificate
                                </option>
                                <option
                                  key="2"
                                  data-status="2"
                                  data-id="2"
                                  value="Aadhar Card"
                                >
                                  Aadhar Card
                                </option>
                                <option
                                  key="3"
                                  data-status="3"
                                  data-id="3"
                                  value="Residential Proof"
                                >
                                  Residential Proof
                                </option>
                                <option
                                  key="4"
                                  data-status="4"
                                  data-id="4"
                                  value="Immunization Certficate"
                                >
                                  Immunization Certficate
                                </option>
                                <option
                                  key="5"
                                  data-status="5"
                                  data-id="5"
                                  value=" Passport Size Photos"
                                >
                                  Passport Size Photos
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">
                                {req_documentErr ? req_documentErr : ''}
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
