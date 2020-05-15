import React, { Component } from 'react';
import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
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

class PlayAreaDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schoolDetails: ''
    };
    this.id = this.props.match.params.id;
    this.getPlayAreaInfo = this.getPlayAreaInfo.bind(this);
    this.getPlayAreaInfo();

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

  async getPlayAreaInfo() {
    let response = await FetchCall.getPlayAreaDetails(this.id);
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
                  <span className="page-title">View PlayArea</span>
                </div>

                <div className="content-top col-md-12 col-xs-12">
                  <a href="#" className="back hidden-xs">
                    {/*<img src="../assets/images/back-arrow-blue.svg" alt="img"/>*/}
                  </a>
                  <ul className="list-unstyled breadcrumb page-title hidden-xs">
                    <li><h3 style={{color : "green"}}>Play Area Info</h3></li>
                  </ul>
                </div>

                <div className="main-content col-md-12 col-xs-12" style={{padding : "70px"}}>
                  <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                    <div className="tab-content">
                      <div id="company-info" className="tab-pane fade in active">
                        <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="form-group col-md-4">
                              <label>Area</label>
                              <p className="p14"><a
                                href="/vendordetails">{schoolDetails.area ? schoolDetails.area : '---'}</a>
                              </p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Type of Playarea </label>
                              <p className="p14">{schoolDetails.type_of_playarea ? schoolDetails.type_of_playarea : '---'}</p>
                            </div>
                          </div>
                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend"><h4  style={{color : "green"}}>Address Information</h4></span>
                            </div>
                            <div className="form-group col-md-4">
                              <label>PlayArea Name</label>
                              <p className="p14"><a
                                mailto="#">{schoolDetails.playarea_name ? schoolDetails.playarea_name : '---'}</a>
                              </p>
                            </div>

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
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Landline Number</label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.landline_no ? schoolDetails.landline_no : '---'}</p>*/}
                            {/*</div>*/}
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Fax Number</label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.fax_no ? schoolDetails.fax_no : '---'}</p>*/}
                            {/*</div>*/}
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
                                className="p14">{schoolDetails.pin_code ? schoolDetails.pin_code : '---'}</p>
                            </div>
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Address</label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.address ? schoolDetails.address : '---'}</p>*/}
                            {/*</div>*/}
                            <div className="form-group col-md-8">
                              <label>About PlayArea</label>
                              <p className="p14">
                                {schoolDetails.about_playarea ? schoolDetails.about_playarea : '---'}
                              </p>
                            </div>
                            <div className="form-group col-md-8">
                              <label>Price Per Hour</label>
                              <p className="p14">
                                {schoolDetails.price_per_hour ? schoolDetails.price_per_hour : '---'}
                              </p>
                            </div>
                            <div className="form-group col-md-8">
                              <label>Number of Support Staff</label>
                              <p className="p14">
                                {schoolDetails.no_of_support_staff ? schoolDetails.no_of_support_staff : '---'}
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

                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend"><h4 style={{color : "green"}}>Key Information</h4></span><br/>
                            </div>
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>School type</label>*/}
                            {/*  <p className="p14">{schoolDetails.schoolType ? schoolDetails.schoolType : '---'}</p>*/}
                            {/*</div>*/}
                            <div className="form-group col-md-4">
                              <label>Type of PlayArea</label>
                              <p
                                className="p14">{schoolDetails.type_of_playarea ? schoolDetails.type_of_playarea : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>PlayArea Name</label>
                              <p
                                className="p14">{schoolDetails.playarea_name ? schoolDetails.playarea_name: '---'}</p>
                            </div>
                            <div className="form-group col-md-4 input-group-cus">
                              {/* <div>
                                <label>Grade</label>
                                <p className="p14">{schoolDetails.grade ? schoolDetails.grade : '---'} to
                                  {schoolDetails.gradeto ? schoolDetails.gradeto : '---'}</p>
                              </div> */}
                            </div>
                            {/* <div className="form-group col-md-4">
                              <label>Pre School Timing</label>
                              <p className="p14">{schoolDetails.school_timing ? schoolDetails.school_timing : '---'}</p>
                            </div> */}
                            {/* <div className="form-group col-md-4">
                              <label>Modes of Payment</label>
                              <p
                                className="p14">{schoolDetails.mode_of_payment ? schoolDetails.mode_of_payment : '---'}</p>
                            </div> */}
                            {/* <div className="form-group col-md-4">
                              <label>School Logo</label>
                              <p className="p14"></p>
                            </div> */}
                            {/* <div className="form-group col-md-4">
                              <label>Min Age of Admission</label>
                              <p className="p14">{schoolDetails.min_age ? schoolDetails.min_age : '---'}</p>
                            </div> */}
                            {/* <div className="form-group col-md-4">
                              <label>Instruction Language</label>
                              <p
                                className="p14">{schoolDetails.instruction_lang ? schoolDetails.instruction_lang : '---'}</p>
                            </div> */}
                            {/* <div className="form-group col-md-4">*/}
                            {/*  <label>Number of Teachers</label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails. ? schoolDetails.establishment_Year : '---'}</p>*/}
                            {/*</div>*/}
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Establishment Year </label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.establishment_Year ? schoolDetails.establishment_Year : '---'}</p>*/}
                            {/*</div>*/}
                            <div className="form-group col-md-4">
                              <label>Entry Fees </label>
                              <p
                                className="p14">{schoolDetails.entry_fee ? schoolDetails.entry_fee : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Weekday Rate</label>
                              <p className="p14">{schoolDetails.weekday_rate ? schoolDetails.weekday_rate : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Weekend Rate</label>
                              <p className="p14">{schoolDetails.weekend_rate ? schoolDetails.weekend_rate : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Packages</label>
                              <p className="p14">{schoolDetails.packages ? schoolDetails.packages: '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Facilities</label>
                              <p className="p14">{schoolDetails.facilities ? schoolDetails.facilities : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Offers</label>
                              <p className="p14">{schoolDetails.offers ? schoolDetails.offers : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Bonus Features</label>
                              <p className="p14">{schoolDetails.bonus_features? schoolDetails.bonus_features : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Book Requirements</label>
                              <p className="p14">{schoolDetails.book_requirements ? schoolDetails.book_requirements : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Food</label>
                              <p className="p14">{schoolDetails.food ? schoolDetails.food: '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Music</label>
                              <p className="p14">{schoolDetails.music ? schoolDetails.music : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Screen</label>
                              <p className="p14">{schoolDetails.screen ? schoolDetails.screen : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Kids Friendly</label>
                              <p className="p14">{schoolDetails.kids_friendly ? schoolDetails.kids_friendly : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label>Products and Services Offered</label>
                              <p className="p14">{schoolDetails.products_and_service_offered ? schoolDetails.products_and_service_offered : '---'}</p>
                            </div>
                            <div className="form-group col-md-4">
                              <label> Branches</label>
                              <p className="p14">{schoolDetails.branches ? schoolDetails.branches : '---'}</p>
                            </div>
                            {/* <div className="form-group col-md-4">
                              <label>Admission Fees </label>
                              <p
                                className="p14">{schoolDetails.admission_fees ? schoolDetails.admission_fees : '---'}</p>

                            </div> */}
                            {/* <div className="form-group col-md-4"><label>Is Refundable (Admission Fees)</label>
                              <p className="p14">Yes</p>
                            </div> */}
                            {/*<div className="form-group col-md-4">*/}
                            {/*  <label>Amenities </label>*/}
                            {/*  <p*/}
                            {/*    className="p14">{schoolDetails.amenities ? schoolDetails.amenities : '---'}</p>*/}
                            {/*</div>*/}

                          </div>

                          {/*<div className="row">*/}
                          {/*  <div className="col-md-12 col-xs-12">*/}
                          {/*    <span className="form-legend">Admission Details</span>*/}
                          {/*  </div>*/}
                          {/*  <div className="form-group col-md-4">*/}
                          {/*    <label>Admission Link </label>*/}
                          {/*    <p className="p14"><a*/}
                          {/*      href="#">{schoolDetails.admission_l ink ? schoolDetails.admission_link : '---'}</a>*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="form-group col-md-4">*/}
                          {/*    <label>Processing Fees </label>*/}
                          {/*    <p*/}
                          {/*      className="p14">{schoolDetails.processing_fees ? schoolDetails.processing_fees : '---'}</p>*/}
                          {/*  </div>*/}
                          {/*  <div className="form-group col-md-4">*/}
                          {/*    <label>Required Documents </label>*/}
                          {/*    <p*/}
                          {/*      className="p14">{schoolDetails.required_document ? schoolDetails.required_document : '---'}</p>*/}
                          {/*  </div>*/}
                          {/*  <div className="form-group col-md-4">*/}
                          {/*    <label>Admission Process</label>*/}
                          {/*    <p*/}
                          {/*      className="p14">{schoolDetails.admission_process ? schoolDetails.admission_process : '---'}</p>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          <div className="row" style={{border : "1px solid #ddd"}}>
                            <div className="col-md-12 col-xs-12">
                              <span className="form-legend"><h4 style={{color : "green"}}>Gallery</h4></span><br/>
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


export default PlayAreaDetails;