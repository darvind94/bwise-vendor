import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class SeasonalCamp extends Component {

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
                                <span className="page-title">Seasonal Camp List</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">

                                <div className="custom-form form-inline col-md-12 col-xs-12 h-small pad-top">
                                    <div className="row">
                                        <div className="form-group mar-rgt">
                                            <h4 className="fw-sbold mar-t-no">Seasonal Camp List</h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="dropdown menu-item">
                                                <button className="btn btn-green dropdown-toggle btn-arrow" data-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-plus" aria-hidden="true"></i> Add
                                                    <span className="caret"></span></button>
                                                <ul className="dropdown-menu align-right">
                                                    <li><a href="/addcamp">Add</a></li>
                                                    <li><a href="#">Import</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="tabledata">S.No</th>
                                                <th className="tabledata">Camp Name</th>
                                                <th className="tabledata">Email Id</th>
                                                <th className="tabledata">Phone Number</th>
                                                <th className="tabledata">Location</th>
                                                <th className="tabledata">Status</th>
                                                <th className="tabledata">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="tabledata">
                                                <td>1</td>
                                                <td>A2Z Camp</td>
                                                <td>a2z@gmail.com</td>
                                                <td>9876543210</td>
                                                <td>Banglore</td>
                                                <td><span className='label label-danger'>Waiting for Apporve</span></td>
                                                <td style={{ textAlign: 'center' }}><a href='/schooldetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;</td>
                                            </tr>
                                            <tr className="tabledata">
                                                <td>2</td>
                                                <td>HMR Camp</td>
                                                <td>hmr@gmail.com</td>
                                                <td>9876543210</td>
                                                <td>Tamil Nadu</td>
                                                <td><span className='label label-primary'>Apporved</span></td>
                                                <td style={{ textAlign: 'center' }}><a href='/schooldetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;</td>
                                            </tr>
                                        </tbody>

                                    </table>
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


export default SeasonalCamp;