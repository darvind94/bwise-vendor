import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class Playarea extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                                <span className="page-title">Add Play Area</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <h3>Play Area Info</h3>
                                {/* <ul className="nav nav-pills transparent">
                                    <li className="active"><a data-toggle="pill" href="#company-info">Play Area Info</a></li>
                                </ul> */}
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Name<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Organization Name <span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Age Group<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Entry Fee<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Week day Rate <span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Weekend Rate<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Offers<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Facilities</label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Ball Pool</option>
                                                                <option>Bridges/Tunnels</option>
                                                                <option >Climbing nets</option>
                                                                <option >Kiddie Rides</option>
                                                                <option>Soft Pay Area</option>
                                                                <option>Swings/Slides</option>
                                                                <option>Trampoline</option>
                                                                <option>Zip-line</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Bonus Features</label>
                                                        <div className='custom-select-drop dropdown'>
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Wi-fi</option>
                                                                <option>Cafe</option>
                                                                <option>Changing station</option>
                                                                <option>Parking</option>
                                                                <option>CCTV</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Bonus Features</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Indoor</option>
                                                                <option>Outdoor</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Packages <span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Book Requirement </label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Food</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Music</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Screen</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Kids Friendly </label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Product & Services Offered </label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Brances </label>
                                                        <div className="custom-select-drop dropdown">
                                                            <select className='form-control selectpicker' multiple data-live-search='true' >
                                                                <option key="1" id="1" data-id="1" value="1">Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>State<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Location<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Pincode<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Phone Number<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Landline Number<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Images<span className="astrick">*</span></label>
                                                        <input type="file" name="cus-name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    {/* <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div> */}
                                                    <div className="form-group col-md-4">
                                                        <label>Address</label>
                                                        <textarea className="form-control"></textarea>
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


export default Playarea;