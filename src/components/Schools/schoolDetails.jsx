import React, { Component } from 'react';
import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import './details-style.css';
import FetchCall from '../../API/FetchCall';
import Copyright from '../Copyrights/Copyright';
// import React, { Component } from 'react';
// import jQuery from 'jquery';
// import Topbar from '../../layouts/topbar';
// import Footer from '../../layouts/footer';
// import LeftSidebar from '../../layouts/left_side';

// import '../../../public/assets/css/custom-style.css';
// import '../../../public/assets/css/jquery.mCustomScrollbar.min.css';
// import '../../../public/assets/css/lightbox.min.css';

class Schools extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schoolDetails: ''
    };
    this.id = this.props.match.params.id;
    this.getSchoolInfo = this.getSchoolInfo.bind(this);
    this.getSchoolInfo();

  }

  componentDidMount() {
    console.log(this.props);
  }

  UNSAFE_componentWillMount() {

  }

  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // jQuery("#currency_selected").val(4);
  }

  async getSchoolInfo() {
    let response = await FetchCall.getSchoolDetails(this.id);
    console.log(response);
    if (response) {
      const data = response.data;
      this.setState({ schoolDetails: data });

    } else {
      return <div>Error</div>;
    }
    // .then(res=>{
    //     console.log("res.data",res.data);
    //     let result = res.data[0];
    //     this.setState({
    //         schoolDetails : result
    //     },()=>{
    //         console.log("schoolDetails",this.state)
    //     })
    // })
  }

  render() {
    const { schoolDetails } = this.state;
    console.log('schoolDetails', this.state);
    if (schoolDetails != '') {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              {/*<LeftSidebar/>*/}
              <div className="menu-close visible-xs">&nbsp;</div>
              <div className="main-wrap col-md-12 col-xs-12 pad-r-no">
                {/*<Topbar></Topbar>*/}
                <div className="col-md-12 col-xs-12 mar-top visible-xs">
                  <a href="/schoolsList" className="back">
                    <img src="../assets/images/back-arrow-blue.svg" alt="back_icon"/>
                  </a>
                  <span className="page-title">View Schools</span>
                </div>

                <div className="content-top col-md-12 col-xs-12">
                  <a href="#" className="back hidden-xs">
                    {/*<img src="../assets/images/back-arrow-blue.svg" alt="img"/>*/}
                  </a>
                  <ul className="list-unstyled breadcrumb page-title hidden-xs">
                    <li><h3 style={{color : "green"}}>School Info</h3></li>

                  </ul>
                </div>

                <div className="main-content col-md-12 col-xs-12" style={{padding : "30px auto"}}>
                  <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                    <div className="tab-content">
                      <div id="company-info" className="tab-pane fade in active">
                        <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="form-group col-md-4">
                              <label>Owner Name</label>
                              <p className="p14"><a
                                href="/vendordetails">{schoolDetails.ownerName ? schoolDetails.ownerName : '---'}</a>
                              </p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>School Name </label>
                              <p className="p14">{schoolDetails.schoolName ? schoolDetails.schoolName : '---'}</p>
                            </div>
                          </div>
                          <div className="col-md-12 col-xs-12">
                            <span className="form-legend"><h4  style={{color : "green"}}>Address Information</h4></span>
                          </div>
                          <div className="row" style={{border : "1px solid #ddd"}}>

                            <div >
                              <div className="form-group col-md-4">
                                <label>Email Id</label>
                                <p className="p14"><a
                                  mailto="#">{schoolDetails.email_id ? schoolDetails.email_id : '---'}</a>
                                </p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Phone Number</label>
                                <p
                                  className="p14">{schoolDetails.phone_number ? schoolDetails.phone_number : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Landline Number</label>
                                <p
                                  className="p14">{schoolDetails.landline_number ? schoolDetails.landline_number : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Fax Number</label>
                                <p
                                  className="p14">{schoolDetails.fax_number ? schoolDetails.fax_number : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Website</label>
                                <p className="p14"><a
                                  href="#">{schoolDetails.website ? schoolDetails.website : '---'}</a></p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>State</label>
                                <p className="p14">{schoolDetails.state ? schoolDetails.state : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Location</label>
                                <p
                                  className="p14">{schoolDetails.location ? schoolDetails.location : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Pincode</label>
                                <p
                                  className="p14">{schoolDetails.pincode ? schoolDetails.pincode : '---'}</p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Address</label>
                                <p
                                  className="p14">{schoolDetails.address ? schoolDetails.address : '---'}</p>
                              </div>
                              <div className="form-group col-md-8">
                                <label>About the School</label>
                                <p className="p14">
                                  {schoolDetails.about_school ? schoolDetails.about_school : '---'}
                                </p>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Google Location(Iframe)</label>
                                <p className="p14">
                                  <iframe
                                    src={schoolDetails.google_location} width="327" height="194"
                                    style={{ border: '0' }} aria-hidden="false"></iframe>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend" style={{color : "green"}}><h4>Key Information</h4></span><br/>
                            </div>
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>School type</label>*/}
                            {/*  <p className="p14">{schoolDetails.schoolType ? schoolDetails.schoolType : '---'}</p>*/}
                            {/*</div>*/}
                            <div className="form-group col-md-4">
                              <label>Classification</label>
                              <p
                                className="p14">{schoolDetails.classification ? schoolDetails.classification : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Board of Education</label>
                              <p
                                className="p14">{schoolDetails.board_of_education ? schoolDetails.board_of_education : '---'}</p>
                            </div>
                            <div className="form-group col-md-4 input-group-cus">
                              <div>
                                <label>Grade</label>
                                <p className="p14">{schoolDetails.grade ? schoolDetails.grade : '---'} to
                                  {schoolDetails.gradeto ? schoolDetails.gradeto : '---'}</p>
                              </div>
                            </div>
                            <div className="form-group col-md-4">
                              <label>School Timing</label>
                              <p className="p14">{schoolDetails.school_timimg ? schoolDetails.school_timimg : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Modes of Payment</label>
                              <p
                                className="p14">{schoolDetails.mode_of_payment ? schoolDetails.mode_of_payment : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>School Logo</label>
                              <p className="p14"></p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Min Age of Admission</label>
                              <p className="p14">{schoolDetails.min_age ? schoolDetails.min_age : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Instruction Language</label>
                              <p
                                className="p14">{schoolDetails.instruction_lang ? schoolDetails.instruction_lang : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Establishment Year </label>
                              <p
                                className="p14">{schoolDetails.establishment_Year ? schoolDetails.establishment_Year : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Average Fees(Annualy) </label>
                              <p
                                className="p14">{schoolDetails.avg_anual_fee ? schoolDetails.avg_anual_fee : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Other Fees </label>
                              <p className="p14">{schoolDetails.other_fee ? schoolDetails.other_fee : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Admission Fees </label>
                              <p
                                className="p14">{schoolDetails.addmission_fee ? schoolDetails.addmission_fee : '---'}</p>

                            </div>
                            <div className="form-group col-md-4"><label>Is Refundable (Admission Fees)</label>
                              <p className="p14">Yes</p>
                            </div>
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Amenities </label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.amenities ? schoolDetails.amenities : '---'}</p>*/}
                            {/*</div>*/}

                          </div>

                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend"><h4  style={{color : "green"}}>Admission Details</h4></span><br/>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Admission Link </label>
                              <p className="p14"><a
                                href="#">{schoolDetails.admission_link ? schoolDetails.admission_link : '---'}</a>
                              </p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Processing Fees </label>
                              <p
                                className="p14">{schoolDetails.processing_fee ? schoolDetails.processing_fee : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Required Documents </label>
                              <p
                                className="p14">{schoolDetails.required_document ? schoolDetails.required_document : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Admission Process</label>
                              <p
                                className="p14">{schoolDetails.admission_process ? schoolDetails.admission_process : '---'}</p>
                            </div>
                          </div>
                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend"><h4 style={{color : "green"}}>Gallery</h4></span>
                            </div>
                            <div className="form-group col-md-3">
                              <a href="../assets/images/22.jpg" rel="lightbox[plants]">
                                <img src="../assets/images/22.jpg" width="244" height="249" alt="img"/>
                              </a>
                            </div>
                            <div className="form-group col-md-3">
                              <a href="../assets/images/44.jpg" rel="lightbox[plants]">
                                <img src="../assets/images/44.jpg" width="244" height="249" alt="img"/>
                              </a>
                            </div>
                            <div className="form-group col-md-3">
                              <a href="../assets/images/33.jpg" rel="lightbox[plants]">
                                <img src="../assets/images/33.jpg" width="244" height="249" alt="img"/>
                              </a>
                            </div>
                            <div className="form-group col-md-3">
                              <a href="../assets/images/44.jpg" rel="lightbox[plants]">
                                <img src="../assets/images/44.jpg" width="244" height="249" alt="img"/>
                              </a>
                            </div>
                            <div className="form-group col-md-3">
                              <a href="../assets/images/22.jpg" rel="lightbox[plants]">
                                <img src="../assets/images/22.jpg" width="244" height="249" alt="img"/>
                              </a>
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
          {/*<Footer/>*/}

          <Copyright/>
        </React.Fragment>
      );
    } else {
      return (
        <h5></h5>
      );
    }
  }
}


export default Schools;