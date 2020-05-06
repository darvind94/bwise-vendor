import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { getAllPreSchools } from '../../API/FetchCall';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preSchoolList: [],
    };
  }
  componentDidMount() {
    getAllPreSchools().then((res) => {
      this.setState({ preSchoolList: res.data });
    });
  }
  UNSAFE_componentWillMount() {}
  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // jQuery("#currency_selected").val(4);
  }

  render() {
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
                <span className='page-title'>Pre-School List</span>
              </div>

              <div className='content-top col-md-12 col-xs-12'>
                <div className='custom-form form-inline col-md-12 col-xs-12 h-small pad-top'>
                  <div className='row'>
                    <div className='form-group mar-rgt'>
                      <h4 className='fw-sbold mar-t-no'>Pre-Schools List</h4>
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
                            <a href='/addpreschool'>Add</a>
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
                  <div style={{ overflowX: 'auto' }}>
                    <table
                      id='example1'
                      className='table table-bordered table-striped '
                      role='grid'
                      aria-describedby='example1_info'
                    >
                      <thead>
                        <tr role='row'>
                          <th className='tabledata'>S.No</th>
                          <th className='tabledata'>Country</th>
                          <th className='tabledata'>City</th>

                          <th className='tabledata'>Owner Name</th>
                          <th className='tabledata'>Schools Name</th>
                          <th className='tabledata'>Email Id</th>
                          <th className='tabledata'>Phone Number</th>
                          <th className='tabledata'>Fax Number</th>
                          <th className='tabledata'>Website</th>

                          <th className='tabledata'>Location</th>
                          <th className='tabledata'>Pincode</th>
                          <th className='tabledata'>About School</th>
                          <th className='tabledata'>Google Location</th>
                          <th className='tabledata'>School Type</th>
                          <th className='tabledata'>Board</th>
                          <th className='tabledata'>Open Timing</th>
                          <th className='tabledata'>No. of supporting staff</th>
                          <th className='tabledata'>Other fees</th>
                          <th className='tabledata'>Admission fees</th>
                          <th className='tabledata'>Admission Link</th>

                          <th className='tabledata'>Processing fees</th>
                          <th className='tabledata'>Admission Process</th>

                          <th className='tabledata'>Status</th>
                          <th className='tabledata'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.preSchoolList.map((item, index) => (
                          <tr className='tabledata' key={item._id}>
                            <td>{index + 1}</td>
                            <th>India</th>
                            <td>{item.location}</td>

                            <td>{item.ownerName}</td>

                            <td>{item.schoolName}</td>
                            <td>{item.email_id}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.fax_number}</td>
                            <td>{item.website}</td>

                            <td>{item.location}</td>
                            <td>{item.pincode}</td>
                            <td>{item.about_school}</td>
                            <td>{item.google_location}</td>
                            <td>{item.schoolType}</td>
                            <td>{item.board_of_education}</td>
                            <td>{item.opening_timimg}</td>
                            <td>{item.number_of_teachers}</td>
                            <td>{item.other_fee}</td>
                            <td>{item.addmission_fee}</td>
                            <td>{item.admission_link}</td>

                            <td>{item.processing_fee}</td>
                            <td>{item.admission_process}</td>

                            <td>
                              <span className='label label-danger'>
                                Waiting for Apporve
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <a href='/schooldetails'>
                                {' '}
                                <i
                                  className='eye-button fa fa-eye'
                                  title='View'
                                ></i>
                              </a>{' '}
                              &nbsp;
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
