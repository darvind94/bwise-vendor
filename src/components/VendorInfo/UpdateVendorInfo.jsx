import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

class VendorInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    componentWillMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="row">
                        <LeftSidebar></LeftSidebar>
                        <div class="menu-close visible-xs">&nbsp;</div>
                        <div class="main-wrap col-md-12 col-xs-12 pad-r-no">
                            <Topbar></Topbar>
                            <div className="col-md-12 col-xs-12 mar-top visible-xs">
                                <a href="#" className="back">
                                    <img src="../assets/images/back-arrow-blue.svg" alt="back_icon" />
                                </a>
                                <span className="page-title">Add New Customer</span>
                            </div>

                            <div className="content-top col-md-12 col-xs-12">
                                <ul className="nav nav-pills transparent">
                                    <li className="active"><a data-toggle="pill" href="#company-info">Company Info</a></li>
                                    <li><a data-toggle="pill" href="#finance-info">Finance Info</a></li>
                                    <li><a data-toggle="pill" href="#additional-info">Additional Info</a></li>
                                </ul>
                            </div>

                            <div className="main-content col-md-12 col-xs-12">
                                <div className="content-sec col-md-12 col-xs-12 pad-no mar-t-no">
                                    <div className="tab-content">
                                        <div id="company-info" className="tab-pane fade in active">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Customer Name<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Customer Type</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Individual</a></li>
                                                                <li><a href="#">Business</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Open Balance</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>As of</label>
                                                            <i data-toggle="tooltip" data-placement="right" tabindex="0" title="Lipsum - Need short content from GBSC">
                                                                <img src="images/round-info-btn-blue.svg" alt="icon" />
                                                            </i>
                                                            <div className="input-group date mar-t-no" data-date-format="dd/mm/yyyy">
                                                                <input type="text" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <img src="images/calendar-icon.svg" alt="icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Company Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Company Name<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Business Reg No.<span className="astrick">*</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Currency<span className="astrick">*</span></label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">USD</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">USD</a></li>
                                                                <li><a href="#">INR</a></li>
                                                                <li><a href="#">CAD</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Website</label>
                                                        <input type="text" name="website" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Primary Contact</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Contact Person<span className="label label-danger">Primary</span></label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Designation</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Department</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Phone (Work)</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>(Personal)</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Skype</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row bg-add-sec">
                                                    <div className="form-group col-md-12">
                                                        <div className="pull-left">
                                                            <label className="custom-checkbox">
                                                                <input type="checkbox" name="all" />Use as Primary Contact
                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <a href="#" className="pull-right">
                                                            <img src="images/delete-icon.svg" alt="icon" />
                                                        </a>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Contact Person</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Designation</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Department</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4 input-group-cus">
                                                        <div>
                                                            <label>Phone (Work)</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                        <div>
                                                            <label>(Personal)</label>
                                                            <input type="text" name="cus-name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Email</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Skype</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                </div>
                                                <a href="#" className="add-input">Add Another Person</a>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Invoice / Bill To</label>
                                                        <textarea className="form-control"></textarea>
                                                        <a href="#" className="add-input">Copy Billing Address to Shipping</a>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Shipping Address</label>
                                                        <textarea className="form-control"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="row bg-add-sec">
                                                            <div className="form-group col-md-12">
                                                                <div className="pull-left">
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" name="all" />Use as Primary Contact
                                                    <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <a href="#" className="pull-right">
                                                                    <img src="images/delete-icon.svg" alt="icon" />
                                                                </a>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Shipping Address Name</label>
                                                                <input type="text" name="cus-name" className="form-control" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Shipping Address</label>
                                                                <textarea className="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="add-input">Add New Address</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-xs-12 btn-bdr">
                                                    <button className="btn btn-blue">Next</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="finance-info" className="tab-pane fade in">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Bank Account No.</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group exchange-col col-md-4">
                                                        <label>Credit Limit</label>
                                                        <div>
                                                            <input type="text" name="exchangeRate" className="form-control" />
                                                            <span className="label">SGD</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Price Level</label>
                                                        <i data-toggle="tooltip" data-placement="right" tabindex="0" title="Lipsum - Need short content from GBSC">
                                                            <img src="images/round-info-btn-blue.svg" alt="icon" />
                                                        </i>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Payment Terms</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Choose</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">Payment Terms 1</a></li>
                                                                <li><a href="#">Payment Terms 2</a></li>
                                                                <li><a href="#">Payment Terms 3</a></li>
                                                                <li><a href="#">Payment Terms 4</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Preferred Delivery Method</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Mail</a></li>
                                                                <li><a href="#">Courier</a></li>
                                                                <li><a href="#">Post</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Preferred Payment Method</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Choose</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">Cash</a></li>
                                                                <li><a href="#">Cheque</a></li>
                                                                <li><a href="#">Online Transaction</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Sales Information</span>
                                                        <span className="legend-sub">You can also overwrite below default items on individual transactions</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Tax Settings</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Tax Encl</a></li>
                                                                <li><a href="#">Tax Excl</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Default Account</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Choose</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">Chart of Accounts 1</a></li>
                                                                <li><a href="#">Chart of Accounts 2</a></li>
                                                                <li><a href="#">Chart of Accounts 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Purchase Information</span>
                                                        <span className="legend-sub">You can also overwrite below default items on individual transactions</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Tax Settings</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Tax Encl</a></li>
                                                                <li><a href="#">Tax Excl</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Default Account</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Choose</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">Chart of Accounts 1</a></li>
                                                                <li><a href="#">Chart of Accounts 2</a></li>
                                                                <li><a href="#">Chart of Accounts 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Tax Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Tax ID</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Business Reg No.</label>
                                                        <input type="text" name="cus-name" className="form-control" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Default Sales Tax</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Tax Encl</a></li>
                                                                <li><a href="#">Tax Excl</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Default Purchase Tax</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">None</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">None</a></li>
                                                                <li><a href="#">Tax Encl</a></li>
                                                                <li><a href="#">Tax Excl</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-xs-12 btn-bdr">
                                                    <button className="btn btn-blue">Next</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div id="additional-info" className="tab-pane fade in">
                                            <form className="custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no">
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label>Referral From</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Choose</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">Customer</a></li>
                                                                <li><a href="#">Vendor</a></li>
                                                                <li><a href="#">Employee</a></li>
                                                                <li><a href="#">Website</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Rep</label>
                                                        <div className="custom-select-drop dropdown">
                                                            <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                <span id="selected">Rep</span><span className="caret"></span>
                                                            </a>
                                                            <ul className="dropdown-menu">
                                                                <li className="active"><a href="#">Choose</a></li>
                                                                <li><a href="#">John Doe</a></li>
                                                                <li><a href="#">Williams</a></li>
                                                                <li><a href="#">Clark Leonardo</a></li>
                                                                <li><a href="#">Rafel</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Job Information</span>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label>Description</label>
                                                        <textarea className="form-control"></textarea>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label>Type</label>
                                                                <div className="custom-select-drop dropdown">
                                                                    <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                        <span id="selected">Choose</span><span className="caret"></span>
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li className="active"><a href="#">Choose</a></li>
                                                                        <li><a href="#">Software</a></li>
                                                                        <li><a href="#">Accounting</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Status</label>
                                                                <div className="custom-select-drop dropdown">
                                                                    <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle btn form-control" href="#">
                                                                        <span id="selected">Choose</span><span className="caret"></span>
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li className="active"><a href="#">Choose</a></li>
                                                                        <li><a href="#">Approved</a></li>
                                                                        <li><a href="#">Awarded</a></li>
                                                                        <li><a href="#">In-Progress</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-6 input-group-cus">
                                                                <div>
                                                                    <label>Start Date</label>
                                                                    <div className="input-group date mar-t-no" data-date-format="dd/mm/yyyy">
                                                                        <input type="text" className="form-control" />
                                                                        <div className="input-group-addon">
                                                                            <img src="images/calendar-icon.svg" alt="icon" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label>End Date</label>
                                                                    <div className="input-group date mar-t-no" data-date-format="dd/mm/yyyy">
                                                                        <input type="text" className="form-control" />
                                                                        <div className="input-group-addon">
                                                                            <img src="images/calendar-icon.svg" alt="icon" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Project End Date</label>
                                                                <div className="input-group date mar-t-no" data-date-format="dd/mm/yyyy">
                                                                    <input type="text" className="form-control" />
                                                                    <div className="input-group-addon">
                                                                        <img src="images/calendar-icon.svg" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-xs-12 btn-bdr">
                                                    <button className="btn btn-green">Finish</button>
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


export default VendorInfo;