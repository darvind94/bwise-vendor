import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { getAllPlayareas } from '../../API/FetchCall';

class PlayAreas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playareaList: [],
      error: false,
    };
  }
  componentDidMount() {
    getAllPlayareas()
      .then((res) => this.setState({ playareaList: res.data, error: false }))
      .catch((error) => {
        this.setState({ error });
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
                <span className='page-title'>Play Areas List</span>
              </div>

              <div className='content-top col-md-12 col-xs-12'>
                <div className='custom-form form-inline col-md-12 col-xs-12 h-small pad-top'>
                  <div className='row'>
                    <div className='form-group mar-rgt'>
                      <h4 className='fw-sbold mar-t-no'>Play Areas List</h4>
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
                            <a href='/addplayarea'>Add</a>
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
                <div
                  className='content-sec col-md-12 col-xs-12 pad-no mar-t-no'
                  style={{ overflowX: 'auto' }}
                >
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
                        <th className='tabledata'>Area</th>
                        <th className='tabledata'>Type</th>

                        <th className='tabledata'>Name of Play Area</th>
                        <th className='tabledata'>Age group</th>
                        <th className='tabledata'>Phone Number</th>
                        <th className='tabledata'>Website</th>
                        <th className='tabledata'>Address of Play area</th>

                        <th className='tabledata'>Email Id</th>
                        <th className='tabledata'>Price/Hour</th>
                        <th className='tabledata'>No of Support Staff</th>
                        <th className='tabledata'>Organization Name</th>
                        <th className='tabledata'>Entry Fee</th>

                        <th className='tabledata'>Week Day Rate</th>
                        <th className='tabledata'>Weekend Rate</th>
                        <th className='tabledata'>Offers</th>
                        <th className='tabledata'>Facilities</th>

                        <th className='tabledata'>Bonus Features</th>
                        <th className='tabledata'>Packages</th>
                        <th className='tabledata'>Book Requirement</th>
                        <th className='tabledata'>Food</th>

                        <th className='tabledata'>Music</th>
                        <th className='tabledata'>Screen</th>
                        <th className='tabledata'>Kids Friendly</th>
                        <th className='tabledata'>
                          Products & Services Offered
                        </th>

                        <th className='tabledata'>Branches</th>
                        <th className='tabledata'>Landline number</th>
                        {/* <th className='tabledata'>Images </th> */}

                        {/* <th className='tabledata'>Location</th>
                        <th className='tabledata'>Status</th>
                        <th className='tabledata'>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.playareaList.map((item, index) => (
                        <tr className='tabledata'>
                          <td>{index + 1}</td>
                          <td>India</td>
                          <td>{item.location}</td>
                          <td>{item.area}</td>
                          <td>{item.type_of_playarea}</td>

                          <td>{item.playarea_name}</td>
                          <td>{item.age_group}</td>
                          <td>{item.phone_number}</td>
                          <td>{item.website}</td>
                          <td>{item.address}</td>

                          <td>{item.email_id}</td>
                          <td>{item.price_per_hour}</td>
                          <td>{item.no_of_support_staff}</td>
                          <td>{item.organisation_name}</td>
                          <td>{item.entry_fee}</td>

                          <td>{item.weekday_rate}</td>
                          <td>{item.weekend_rate}</td>
                          <td>{item.offers}</td>
                          <td>{item.facilities}</td>

                          <td>{item.bonus_features}</td>
                          <td>{item.packages}</td>
                          <td>{item.book_requirements}</td>
                          <td>{item.food}</td>

                          <td>{item.music}</td>
                          <td>{item.screen}</td>
                          <td>{item.kids_friendly}</td>
                          <td>{item.products_and_service_offered}</td>

                          <td>{item.branches}</td>
                          <td>{item.landline_number}</td>
                          {/* <td>{item.book_requirements}</td>
                          <td>{item.food}</td> */}

                          {/* <td>
                            <span className='label label-primary'>
                              Apporved
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
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
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

export default PlayAreas;
