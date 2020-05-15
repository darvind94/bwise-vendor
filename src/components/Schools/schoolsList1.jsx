import React, { Component } from 'react';
import jQuery from 'jquery';
// import './main.css';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';


import FetchCall from '../../API/FetchCall';
import config from '../../API/DomainName';

// import $ from 'jquery';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXIiOnsiaWQiOiI1ZWFhOWM2MjI4NTcxYjFiZDAxMDc0OTcifSwiaWF0IjoxNTg4OTk5Nzk3LCJleHAiOjE1ODkzNTk3OTd9.BXgLA3w2AhC4MZCeHI-UZCMtUX3wAVGq6ggWPzNqgPY';

class Schools1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolList: [],
    };
    this.getSchools = this.getSchools.bind(this);
    this.getSchools();
  }
  componentDidMount() {
    // window.jQuery('#example1').DataTable({
    //   paging: false,
    //   lengthChange: false,
    //   searching: true,
    //   ordering: true,
    //   info: true,
    //   autoWidth: true,
    //   oLanguage: {
    //     sEmptyTable: '',
    //   },
    // });
  }
  UNSAFE_componentWillMount() {}

  getSchools() {
    FetchCall.getSchool().then((res) => {
      let schoolList = res.data;
      this.setState({
        schoolList: schoolList,
      });
    });
  }
  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // var self = this;
    // $('#List').dataTable({
    //   "sPaginationType": "bootstrap",
    //   "bAutoWidth": false,
    //   "bDestroy": true,
    //   "fnDrawCallback": function() {
    //     	self.forceUpdate();
    //   },
    // });
    // jQuery("#currency_selected").val(4);
  }
  // handleUpdate(e){
  //   e.preventDefault();
  //   fetch(config.register + 'school', {method : 'PUT',
  //     body:{
  //     'name':"ram",
  //     },
  //     mode: 'cors',
  //     headers: { 'x-auth-token': token, 'Content-Type': 'application/json' }})
  //     .then(res =>{
  //       return res.json();
  //     })
  //     .then(data =>{
  //         console.log(data);
  //     })
  // }

  renderList() {
    if (this.state.schoolList.length != 0) {
      return this.state.schoolList.map((item, i) => {
        return (
          <tr key={item._id} className="tabledata">
            <td>{i + 1}</td>
           <td><a href={'/updateschools/'+ item.vender}><button> {item.schoolName}</button></a></td>
            <td>{item.board_of_education ? item.board_of_education : '---'}</td>
            <td>{item.email_id ? item.email_id : '---'}</td>
            <td>{item.phone_no ? item.phone_no : '---'}</td>
            <td>{item.location ? item.location : '---'}</td>
            <td>
              <span className="label label-danger">Waiting for Apporve</span>
            </td>
            <td style={{ textAlign: 'center' }}>
              <a href={'/schooldetails1/'+ item.vender}>
                {' '}
                <i className="eye-button fa fa-eye" title="View"></i>
              </a>{' '}
              &nbsp;
            </td>
          </tr>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    const schooList = this.state.schoolList;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {/*<LeftSidebar></LeftSidebar>*/}
            <div className="menu-close visible-xs">&nbsp;</div>
            <div className="main-wrap col-md-12 col-xs-12 pad-r-no">
              {/*<Topbar></Topbar>*/}
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
                              name="owner_name"

                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Name <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="school_name"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Phone Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="phone_no"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Landline Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="landline_no"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Fax Number<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="fax_no"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
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
                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              About the School<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="about"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Google Location(Iframe)
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="iframe"
                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                                className="form-control selectpicker"
                              >
                                <option
                                  id="1"
                                  data-id="1"
                                  data-status="1"
                                  value="govt"
                                >
                                  Government{' '}
                                </option>
                                <option
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
                                className="form-control selectpicker"
                              >
                                <option
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
                                className="form-control selectpicker"
                              >
                                <option
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

                                </small>
                              </div>
                            </div>
                            <div>
                              <label>&nbsp;</label>
                              <div className="custom-select-drop dropdown">
                                <select
                                  name="gradeto"
                                  id="gradeto"
                                  className="form-control selectpicker"
                                >
                                  <option
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

                                className="form-control selectpicker"
                              >
                                <option data-status="1" data-id="1" value="1">
                                  9.30Am - 5.00PM{' '}
                                </option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">

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
                                className="form-control selectpicker"
                              >
                                <option
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

                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              School Logo<span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="file"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Min Age of Admission</label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="minage"
                                id="minage"

                                className="form-control selectpicker"
                              >
                                <option data-status="1" data-id="1" value="2">
                                  2 Years
                                </option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                              </select>
                              <br />
                              <small className="alert-msg text-danger">

                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Instruction Language</label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="inst_lang"
                                id="inst_lang"

                                className="form-control selectpicker"
                              >
                                <option
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

                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Establishment Year{' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="cus-name"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Amenities </label>
                            <div className="custom-select-drop dropdown">
                              <select
                                name="amenities"
                                id="amenities"
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

                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Average Fees(Annualy){' '}
                              <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="number"
                              name="cus-name"

                              className="form-control"
                              placeholder="Enter in K's"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Other Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="other_fees"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Admission Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="admission_fees"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                            />
                            Yes&nbsp;&nbsp;
                            <input
                              required
                              type="radio"
                              name="isrefund"

                            />
                            No
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

                            </small>
                          </div>
                          <div className="form-group col-md-4">
                            <label>
                              Processing Fees <span className="astrick">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              name="processing_fees"

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              </small>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label>Admission Process</label>
                            <textarea
                              name="admission_process"
                              className="form-control"
                            ></textarea>
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

                              className="form-control"
                            />
                            <small className="alert-msg text-danger">

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

export default Schools1;
