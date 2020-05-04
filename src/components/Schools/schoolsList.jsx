import React, { Component } from 'react';
import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';

import FetchCall from '../../API/FetchCall';

// import $ from 'jquery';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolList: [],
    };
    this.getSchools = this.getSchools.bind(this);
    this.getSchools();
  }
  componentDidMount() {
    window.jQuery('#example1').DataTable({
      paging: false,
      lengthChange: false,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
      oLanguage: {
        sEmptyTable: '',
      },
    });
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

  renderList() {
    if (this.state.schoolList.length != 0) {
      return this.state.schoolList.map((res, i) => {
        return (
          <tr key={res._id} className='tabledata'>
            {/* <td>{i+1}</td>
                            <td>{res.school_name}</td>
                            <td>{res.keyInfo.board_of_education ? res.keyInfo.board_of_education : '---'}</td>
                            <td>{res.address.email_id ? res.address.email_id : '---'}</td>
                            <td>{res.address.phone_no ? res.address.phone_no : '---'}</td>
                            <td>{res.address.location ? res.address.location : '---'}</td>
                            <td><span className='label label-danger'>Waiting for Apporve</span></td>
                            <td style={{ textAlign: 'center' }}><a href={'/schooldetails/' + res._id}> <i className='eye-button fa fa-eye' title='View'></i></a> &nbsp;</td> */}
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
        <div className='container-fluid'>
          <div className='row'>
            <LeftSidebar></LeftSidebar>
            <div className='menu-close visible-xs'>&nbsp;</div>
            <div className='main-wrap col-md-12 col-xs-12 pad-r-no'>
              <Topbar></Topbar>
              <div className='col-md-12 col-xs-12 mar-top visible-xs'>
                <a href='#' className='back'>
                  <img
                    src='../assets/images/back-arrow-blue.svg'
                    alt='back_icon'
                  />
                </a>
                <span className='page-title'>School List</span>
              </div>

              <div className='content-top col-md-12 col-xs-12'>
                <div className='custom-form form-inline col-md-12 col-xs-12 h-small pad-top'>
                  <div className='row'>
                    <div className='form-group mar-rgt'>
                      <h4 className='fw-sbold mar-t-no'>Schools List</h4>
                    </div>
                    <div className='pull-right'>
                      <div className='dropdown menu-item'>
                        <button
                          className='btn btn-green dropdown-toggle btn-arrow'
                          data-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <i className='fa fa-plus' aria-hidden='true'></i> Add
                          <span className='caret'></span>
                        </button>
                        <ul className='dropdown-menu align-right'>
                          <li>
                            <a href='/addschools'>Add</a>
                          </li>
                          <li>
                            <a href='#'>Import</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='main-content col-md-12 col-xs-12'>
                <div className='content-sec col-md-12 col-xs-12 pad-no mar-t-no'>
                  <table
                    id='example1'
                    className='table table-bordered table-striped dataTable'
                    role='grid'
                    aria-describedby='example1_info'
                  >
                    <thead>
                      <tr role='row'>
                        <th className='tabledata'>S.No</th>
                        <th className='tabledata'>Schools Name</th>
                        <th className='tabledata'>Board</th>
                        <th className='tabledata'>Email Id</th>
                        <th className='tabledata'>Phone Number</th>
                        <th className='tabledata'>Location</th>
                        <th className='tabledata'>Status</th>
                        <th className='tabledata'>Action</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderList()}</tbody>
                  </table>
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
