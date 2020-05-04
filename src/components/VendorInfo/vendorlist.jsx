import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class VendorList extends Component {

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
                                <span className="page-title">Vendor Management</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">

                                <div className="custom-form form-inline col-md-12 col-xs-12 h-small pad-top">
                                    <div className="row">
                                        <div className="form-group mar-rgt">
                                            <h4 className="fw-sbold mar-t-no">Vendor Management</h4>
                                        </div>
                                        <div className="pull-right">
                                            <div className="dropdown menu-item">
                                                <button className="btn btn-green dropdown-toggle btn-arrow" data-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-file-excel-o" aria-hidden="true"></i> Export to Excel
                                                   </button>
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
                                                <th className="tabledata">User Type</th>
                                                <th className="tabledata">Organisation Name</th>
                                                <th className="tabledata">Category</th>
                                                <th className="tabledata">Package</th>
                                                <th className="tabledata">Payment Method</th>
                                                <th className="tabledata">Status</th>
                                                <th className="tabledata">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="tabledata">
                                                <td>1</td>
                                                <td>Organisation</td>
                                                <td>JHG School</td>
                                                <td>School</td>
                                                <td>Gold</td>
                                                <td>Netbanking</td>
                                                <td><span className='label label-danger'>Waiting for Approve</span></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <a href='/vendordetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;
                                                    <a href='/updatevendor'> <i className='eye-button fa fa-edit' title='edit'></i></a>
                                                </td>
                                            </tr>
                                            <tr className="tabledata">
                                                <td>2</td>
                                                <td>Individual</td>
                                                <td>NHG Music</td>
                                                <td>Creative Activities</td>
                                                <td>Platinum</td>
                                                <td>Credit card</td>
                                                <td><span className='label label-primary'>Apporved</span></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <a href='/vendordetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;
                                                    <a href='/updatevendor'> <i className='eye-button fa fa-edit' title='edit'></i></a></td>
                                            </tr>
                                            <tr className="tabledata">
                                                <td>3</td>
                                                <td>Organisation</td>
                                                <td>NHG Nursery </td>
                                                <td>Nursery</td>
                                                <td>Silver</td>
                                                <td>Cheque</td>
                                                <td><span className='label label-primary'>Apporved</span></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <a href='/vendordetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;
                                                    <a href='/updatevendor'> <i className='eye-button fa fa-edit' title='edit'></i></a></td>
                                            </tr>
                                            <tr className="tabledata">
                                                <td>4</td>
                                                <td>Organisation</td>
                                                <td>NBH Camps</td>
                                                <td>Seasonal Camps</td>
                                                <td>Gold</td>
                                                <td>Netbanking</td>
                                                <td><span className='label label-primary'>Apporved</span></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <a href='/vendordetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;
                                                    <a href='/updatevendor'> <i className='eye-button fa fa-edit' title='edit'></i></a></td>
                                            </tr>
                                            <tr className="tabledata">
                                                <td>5</td>
                                                <td>Individual</td>
                                                <td>HGY Hall </td>
                                                <td>Events</td>
                                                <td>Gold</td>
                                                <td>Credit card</td>
                                                <td><span className='label label-primary'>Apporved</span></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <a href='/vendordetails'> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;
                                                    <a href='/updatevendor'> <i className='eye-button fa fa-edit' title='edit'></i></a></td>
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


export default VendorList;