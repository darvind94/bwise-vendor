import React, { Component } from 'react';
// import jQuery from 'jquery';
import Topbar from '../../layouts/topbar';
import Footer from '../../layouts/footer';
import LeftSidebar from '../../layouts/left_side';
import { addPlayArea } from '../../API/FetchCall';

class Playarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
      type_of_playarea: '',
      playarea_name: '',
      about_playarea: '',
      age_group: '',
      phone_number: '',
      website: '',
      email_id: '',
      price_per_hour: '',
      about_playarea: '',
      price_per_hour: '',
      no_of_support_staff: '',
      entry_fee: '',
      weekday_rate: '',
      weekend_rate: '',
      offers: '',
      packages: '',
      facilities: '',
      bonus_features: '',
      book_requirements: '',
      food: '',
      music: '',
      screen: '',
      kids_friendly: '',
      products_and_service_offered: '',
      branches: '',
      country: 'India',
      state: '',
      location: '',
      pin_code: '',
      images: '',
    };
  }
  componentDidMount() {}
  UNSAFE_componentWillMount() {}
  componentDidUpdate() {
    window.jQuery('.selectpicker').selectpicker('refresh');
    // jQuery("#currency_selected").val(4);
  }

  handleSelect = (e) => {
    const propName = e.target.name;
    const value = [...e.target.selectedOptions].map((item) => item.value);

    this.setState({ [propName]: value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    addPlayArea(this.state).then((res) => {
      if (res.status === 1) {
        this.props.history.push('/playareas');
      }
    });
  };

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
                <span className='page-title'>Add Play Area</span>
              </div>

              <div className='content-top col-md-12 col-xs-12'>
                <h3>Play Area Info</h3>
                {/* <ul className="nav nav-pills transparent">
                                    <li className="active"><a data-toggle="pill" href="#company-info">Play Area Info</a></li>
                                </ul> */}
              </div>

              <div className='main-content col-md-12 col-xs-12'>
                <div className='content-sec col-md-12 col-xs-12 pad-no mar-t-no'>
                  <div className='tab-content'>
                    <div
                      id='company-info'
                      className='tab-pane fade in active'
                      onSubmit={this.handleSubmit}
                    >
                      <form className='custom-form invoice-form col-md-12 col-xs-12 legend-form pad-no'>
                        <div className='row'>
                          <div className='form-group col-md-4'>
                            <label>
                              Name<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='playarea_name'
                              value={this.state.playarea_name}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              About Playarea <span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='textarea'
                              name='about_playarea'
                              value={this.state.about_playarea}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              No. of Support Staff{' '}
                              <span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='number'
                              name='no_of_support_staff'
                              value={this.state.no_of_support_staff}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Age Group<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='age_group'
                              value={this.state.age_group}
                              onChange={this.handleChange}
                              placeholder='3 years to 10 years'
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Price Per Hour<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              value={this.state.price_per_hour}
                              onChange={this.handleChange}
                              name='price_per_hour'
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Entry Fee<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              value={this.state.entry_fee}
                              onChange={this.handleChange}
                              name='entry_fee'
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Week day Rate <span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='weekday_rate'
                              value={this.state.weekday_rate}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Weekend Rate<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='weekend_rate'
                              value={this.state.weekend_rate}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Website<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='website'
                              value={this.state.website}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Email<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='email'
                              name='email_id'
                              value={this.state.email_id}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Offers<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='offers'
                              value={this.state.offers}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Play Area Type<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='type_of_playarea'
                              value={this.state.type_of_playarea}
                              onChange={this.handleChange}
                              className='form-control'
                              placeholder='Ex: International'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Offers<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='offers'
                              value={this.state.offers}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Packages<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='packages'
                              value={this.state.packages}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Facilities</label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                name='facilities'
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option
                                  key='1'
                                  id='1'
                                  data-id='1'
                                  value='Ball Pool'
                                >
                                  Ball Pool
                                </option>
                                <option value='Bridges/Tunnels'>
                                  Bridges/Tunnels
                                </option>
                                <option value='Climbing nets'>
                                  Climbing nets
                                </option>
                                <option value='Kiddie Rides'>
                                  Kiddie Rides
                                </option>
                                <option value='Soft Pay Area'>
                                  Soft Pay Area
                                </option>
                                <option value='Swings/Slides'>
                                  Swings/Slides
                                </option>
                                <option value='Trampoline'>Trampoline</option>
                                <option value='Zip-line'>Zip-line</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Bonus Features</label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option
                                  key='1'
                                  id='1'
                                  data-id='1'
                                  value='Wi-fi'
                                >
                                  Wi-fi
                                </option>
                                <option value='Cafe'>Cafe</option>
                                <option value='Changing station'>
                                  Changing station
                                </option>
                                <option value='Parking'>Parking</option>
                                <option value='CCTV'>CCTV</option>
                              </select>
                            </div>
                          </div>
                          {/* <div className='form-group col-md-4'>
                            <label>Bonus Features</label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                name='bonus_features'
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option key='1' id='1' data-id='1' value='1'>
                                  Indoor
                                </option>
                                <option>Outdoor</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div className='form-group col-md-4'>
                            <label>
                              Packages <span className='astrick'>*</span>
                            </label>
                            <input required
                              type='text'
                              name='cus-name'
                              className='form-control'
                            />
                          </div> */}
                          <div className='form-group col-md-4'>
                            <label>Book Requirement </label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                name='book_requirements'
                                onChange={this.handleSelect}
                                data-live-search='true'
                                multiple
                              >
                                <option
                                  key='1'
                                  id='1'
                                  data-id='1'
                                  value='Id Card'
                                >
                                  Id Card
                                </option>
                                <option value='Residential Proof'>
                                  Residential Proof
                                </option>
                                <option value='Aadhar Card'>Aadhar Card</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Food</label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                name='food'
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option key='1' id='1' data-id='1' value='Veg'>
                                  Veg
                                </option>
                                <option value='Non-Veg'>Non-Veg</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Music<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='music'
                              value={this.state.music}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Screen</label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                name='screen'
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option
                                  key='1'
                                  id='1'
                                  data-id='1'
                                  value='large'
                                >
                                  Large
                                </option>
                                <option value='large'>Small</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Kids Friendly </label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                name='kids_friendly'
                                onChange={this.handleSelect}
                                data-live-search='true'
                              >
                                <option key='1' id='1' data-id='1' value='Yes'>
                                  Yes
                                </option>
                                <option value='No'>No</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group col-md-4'>
                            <label>Product & Services Offered </label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                name='products_and_service_offered'
                                data-live-search='true'
                                onChange={this.handleSelect}
                              >
                                <option key='1' id='1' data-id='1' value='yes'>
                                  Yes
                                </option>
                                <option value='no'>No</option>
                              </select>
                            </div>
                          </div>
                          {/* <div className='form-group col-md-4'>
                            <label>Brances </label>
                            <div className='custom-select-drop dropdown'>
                              <select
                                className='form-control selectpicker'
                                multiple
                                data-live-search='true'
                              >
                                <option key='1' id='1' data-id='1' value='1'>
                                  Yes
                                </option>
                                <option>No</option>
                              </select>
                            </div>
                          </div> */}
                          <div className='form-group col-md-4'>
                            <label>
                              Branches<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='number'
                              name='branches'
                              value={this.state.branches}
                              onChange={this.handleChange}
                              placeholder='Enter No. of Branches'
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              State<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='state'
                              value={this.state.state}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Location<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='location'
                              value={this.state.location}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Pincode<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='pin_code'
                              value={this.state.pin_code}
                              onChange={this.handleChange}
                              className='form-control'
                            />
                          </div>
                          <div className='form-group col-md-4'>
                            <label>
                              Phone Number<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='text'
                              name='phone_number'
                              onChange={this.handleChange}
                              value={this.state.phone_number}
                              className='form-control'
                            />
                          </div>
                          {/* <div className='form-group col-md-4'>
                            <label>
                              Landline Number<span className='astrick'>*</span>
                            </label>
                            <input required
                              type='text'
                              name='cus-name'
                              className='form-control'
                            />
                          </div> */}
                          <div className='form-group col-md-4'>
                            <label>
                              Images<span className='astrick'>*</span>
                            </label>
                            <input
                              required
                              type='file'
                              name='images'
                              className='form-control'
                              onChange={this.handleFile}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          {/* <div className="col-md-12 col-xs-12">
                                                        <span className="form-legend">Address Information</span>
                                                    </div> */}
                          <div className='form-group col-md-4'>
                            <label>Area</label>
                            <textarea
                              className='form-control'
                              value={this.state.area}
                              name='area'
                              onChange={this.handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-md-12 col-xs-12 btn-bdr'>
                          <button type='submit' className='btn btn-blue'>
                            Submit
                          </button>
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
    );
  }
}

export default Playarea;
