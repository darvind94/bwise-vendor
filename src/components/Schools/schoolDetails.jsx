import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

import FetchCall from '../../API/FetchCall';

class Schools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolDetails : ''
        }
        this.id = this.props.match.params.id;
        this.getSchoolInfo = this.getSchoolInfo.bind(this);
        this.getSchoolInfo();
        
    }
    componentDidMount() {
        
    }
    UNSAFE_componentWillMount() {

    }
    componentDidUpdate() {
        window.jQuery('.selectpicker').selectpicker('refresh')
        // jQuery("#currency_selected").val(4);
    }

    getSchoolInfo() {
        FetchCall.getSchoolDetails(this.id)
            .then(res=>{
                console.log("res.data",res.data);
                let result = res.data[0]
                this.setState({
                    schoolDetails : result
                },()=>{
                    console.log("schoolDetails",this.state)
                })
            })
    }

    render() {
        const  { schoolDetails } = this.state;
        console.log("schoolDetails",this.state)
        if(schoolDetails != '') {
            return (
                <React.Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <LeftSidebar></LeftSidebar>
                            <div className="menu-close visible-xs">&nbsp;</div>
                            <div className="main-wrap col-md-12 col-xs-12 pad-r-no">
                                <Topbar></Topbar>
                                <div className="col-md-12 col-xs-12 mar-top visible-xs">
                                    <a href="/schoolsList" className="back">
                                        <img src="../assets/images/back-arrow-blue.svg" alt="back_icon" />
                                    </a>
                                    <span className="page-title">View Schools</span>
                                </div>

                                <div className="content-top col-md-12 col-xs-12">
                                    <a href="#" className="back hidden-xs" >
                                        <img src="../assets/images/back-arrow-blue.svg" alt="img" />
                                    </a>
                                    <ul className="list-unstyled breadcrumb page-title hidden-xs">
                                        <li><a href="#">Schools</a></li>
                                        <li>Info</li>
                                    </ul>
                                </div>

                                <div className="main-content col-md-12 col-xs-12">
                                    <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                        <div className="tab-content">
                                            <div id="company-info" className="tab-pane fade in active">
                                                <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                    <div className="row">
                                                        <div className="form-group col-md-4">
                                                            <label>Owner Name</label>
                                                            <p className="p14"><a href="/vendordetails" >{schoolDetails.owner_name ? schoolDetails.owner_name : '---'}</a></p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>School Name </label>
                                                            <p className="p14">{schoolDetails.school_name ? schoolDetails.school_name : '---'}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-xs-12">
                                                            <span className="form-legend">Address Information</span>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Email Id</label>
                                                            <p className="p14"><a mailto="#">{schoolDetails.address.email_id ? schoolDetails.address.email_id : '---' }</a></p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Phone Number</label>
                                                            <p className="p14">{schoolDetails.address.phone_no ? schoolDetails.address.phone_no : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Landline Number</label>
                                                            <p className="p14">{schoolDetails.address.landline_no ? schoolDetails.address.landline_no : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Fax Number</label>
                                                            <p className="p14">{schoolDetails.address.fax_no ?  schoolDetails.address.fax_no : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Website</label>
                                                            <p className="p14"><a href="#">{schoolDetails.address.website ?  schoolDetails.address.website : '---'}</a></p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>State</label>
                                                            <p className="p14">{schoolDetails.address.state ? schoolDetails.address.state : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Location</label>
                                                            <p className="p14">{schoolDetails.address.location ? schoolDetails.address.location : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Pincode</label>
                                                            <p className="p14">{schoolDetails.address.pincode ? schoolDetails.address.pincode : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Address</label>
                                                            <p className="p14">{schoolDetails.address.address ? schoolDetails.address.address : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-8">
                                                            <label>About the School</label>
                                                            <p className="p14">
                                                            {schoolDetails.address.about_school ? schoolDetails.address.about_school : '---'}
                                                            </p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Google Location(Iframe)</label>
                                                            <p className="p14">
                                                                <iframe 
                                                                src={schoolDetails.address.google_location} width="327" height="194" style={{ border: '0' }} aria-hidden="false" ></iframe></p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="row">
                                                        <div className="col-md-12 col-xs-12">
                                                            <span className="form-legend">Key Information</span>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>School type</label>
                                                            <p className="p14">{schoolDetails.keyInfo.school_type ? schoolDetails.keyInfo.school_type : '---' }</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Classification</label>
                                                            <p className="p14">{schoolDetails.keyInfo.classification ? schoolDetails.keyInfo.classification : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Board of Education</label>
                                                            <p className="p14">{schoolDetails.keyInfo.board_of_education ? schoolDetails.keyInfo.board_of_education : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4 input-group-cus">
                                                            <div>
                                                                <label>Grade</label>
                                                                <p className="p14">{schoolDetails.keyInfo.grade ? schoolDetails.keyInfo.grade : '---'} to 
                                                                {schoolDetails.keyInfo.gradeto ? schoolDetails.keyInfo.gradeto : '---'}</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>School Timing</label>
                                                            <p className="p14">{schoolDetails.keyInfo.school_timing ? schoolDetails.keyInfo.school_timing : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Modes of Payment</label>
                                                            <p className="p14">{schoolDetails.keyInfo.modeofpayment ? schoolDetails.keyInfo.modeofpayment : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>School Logo</label>
                                                            <p className="p14"></p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Min Age of Admission</label>
                                                            <p className="p14">{schoolDetails.keyInfo.minage ? schoolDetails.keyInfo.minage : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Instruction Language</label>
                                                            <p className="p14">{schoolDetails.keyInfo.inst_lang ? schoolDetails.keyInfo.inst_lang : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Establishment Year </label>
                                                            <p className="p14">{schoolDetails.keyInfo.estyear ? schoolDetails.keyInfo.estyear : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Average Fees(Annualy) </label>
                                                            <p className="p14">50,000</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Other Fees </label>
                                                            <p className="p14">{schoolDetails.keyInfo.other_fees ? schoolDetails.keyInfo.other_fees : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Admission Fees </label>
                                                            <p className="p14">{schoolDetails.keyInfo.admission_fees ? schoolDetails.keyInfo.admission_fees : '---'}</p>

                                                        </div>
                                                        <div className="form-group col-md-4"><label>Is Refundable (Admission Fees)</label>
                                                            <p className="p14">Yes</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Amenities </label>
                                                            <p className="p14">{schoolDetails.keyInfo.amenities ? schoolDetails.keyInfo.amenities : '---'}</p>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12 col-xs-12">
                                                            <span className="form-legend">Admission Details</span>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Admission Link </label>
                                                            <p className="p14"><a href="#" >{schoolDetails.admission.admission_link ? schoolDetails.admission.admission_link : '---'}</a></p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Processing Fees </label>
                                                            <p className="p14">{schoolDetails.admission.processing_fees ? schoolDetails.admission.processing_fees : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Required Documents </label>
                                                            <p className="p14">{schoolDetails.admission.req_document ? schoolDetails.admission.req_document : '---'}</p>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Admission Process</label>
                                                            <p className="p14">{schoolDetails.admission.admission_process ? schoolDetails.admission.admission_process : '---'}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row"> 
                                                        <div className="col-md-12 col-xs-12">
                                                            <span className="form-legend">Gallery</span>
                                                        </div>
                                                        <div className="form-group col-md-3">
                                                            <a href="../assets/images/22.jpg" rel="lightbox[plants]">
                                                                <img src="../assets/images/22.jpg" width="244" height="249" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="form-group col-md-3">
                                                            <a href="../assets/images/44.jpg" rel="lightbox[plants]">
                                                                <img src="../assets/images/44.jpg" width="244" height="249" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="form-group col-md-3">
                                                            <a href="../assets/images/33.jpg" rel="lightbox[plants]">
                                                                <img src="../assets/images/33.jpg" width="244" height="249" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="form-group col-md-3">
                                                            <a href="../assets/images/44.jpg" rel="lightbox[plants]">
                                                                <img src="../assets/images/44.jpg" width="244" height="249" alt="img" />
                                                            </a>
                                                        </div>
                                                        <div className="form-group col-md-3">
                                                            <a href="../assets/images/22.jpg" rel="lightbox[plants]">
                                                                <img src="../assets/images/22.jpg" width="244" height="249" alt="img" />
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
                    <Footer></Footer>
                </React.Fragment >
            )
        } else {
            return (
                <h5></h5>
            )
        }
    }
}


export default Schools;