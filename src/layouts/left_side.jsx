import React from 'react';
import jQuery from 'jquery';

class left_sidebar extends React.Component {
  constructor(props) {
    super(props);
    //const { history } = this.props;
    this.state = {};
  }

  componentDidMount() {
    jQuery(document).ready(function () {
      jQuery('.left-navmenu .has-sub').click(function () {
        jQuery('.left-navmenu li a').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.left-navmenu li a:not(.active)')
          .siblings('.sub-menu')
          .slideUp();
        jQuery(this).siblings('.sub-menu').slideToggle();
      });
      jQuery('.left-navmenu .sub-menu li a').click(function () {
        jQuery('.left-navmenu .sub-menu li a').removeClass('active');
        jQuery(this).addClass('active');
      });
    });
    require('jquery-mousewheel');
    require('malihu-custom-scrollbar-plugin');
    jQuery(window).on('load', function () {
      jQuery('.mscroll-y').mCustomScrollbar({
        axis: 'y',
        scrollEasing: 'linear',
        scrollInertia: 600,
        autoHideScrollbar: 'true',
        autoExpandScrollbar: 'true',
      });

      jQuery('.ib-scroll').mCustomScrollbar({
        scrollEasing: 'linear',
        scrollInertia: 600,
        scrollbarPosition: 'outside',
      });
    });

    // jQuery('.mscroll-y').mCustomScrollbar({
    //     axis: 'y',
    //     scrollEasing: 'linear',
    //     scrollInertia: 600,
    //     autoHideScrollbar: 'true',
    //     autoExpandScrollbar: 'true'
    // })
  }

  UNSAFE_componentWillMount() {
    var currentLocation = window.location.pathname;
    this.setState({
      currentLocation: currentLocation,
    });
  }

  routedUrl(page_url) {
    this.props.pageSubmit(page_url);
  }

  render() {
    var creativeActivitiesOption =
      this.state.currentLocation === '/addtution' ||
      this.state.currentLocation === '/addspiritual' ||
      this.state.currentLocation === '/addsports' ||
      this.state.currentLocation === '/addmusic' ||
      this.state.currentLocation === '/adddance' ||
      this.state.currentLocation === '/addyoga' ||
      this.state.currentLocation === '/adddrawing';

    var SeasonalCamp =
      this.state.currentLocation === '/seasonalcamp' ||
      this.state.currentLocation === '/addcamp';

    var playAreas =
      this.state.currentLocation === '/playareas' ||
      this.state.currentLocation === '/addplayarea';

    var events =
      this.state.currentLocation === '/events' ||
      this.state.currentLocation === '/addpartyhall';

    if (
      this.state.currentLocation === '/schoolsList' ||
      SeasonalCamp ||
      events ||
      playAreas ||
      creativeActivitiesOption ||
      this.state.currentLocation === '/addschools' ||
      this.state.currentLocation === '/creativeactivities' ||
      this.state.currentLocation === '/seasonalcamp' ||
      this.state.currentLocation === '/addpreschool' ||
      this.state.currentLocation === '/preschoolslist' ||
      this.state.currentLocation === '/schooldetails' ||
      this.state.currentLocation === '/addplayarea'
    ) {
      var ShowCategory = 'block';
    }

    if (
      this.state.currentLocation === '/userlist' ||
      this.state.currentLocation === '/userdetails' ||
      this.state.currentLocation === '/vendorlist' ||
      this.state.currentLocation === '/vendordetails' ||
      this.state.currentLocation === '/updatevendor'
    ) {
      var UserCategory = 'block';
    }
    return (
      <div>
        <div className='left-navbar'>
          <h3>Be'Wise</h3>
          <div className='mscroll-y'>
            <div className='nav-brand text-center hidden-xs'>
              <img
                src='../assets/images/user-img-1.png'
                alt='logo'
                className='profile-round mCS_img_loaded'
              />
              <p className='user-name'>Hi Vendor</p>
            </div>
            <hr />
            <ul className='left-navmenu list-unstyled'>
              <li>
                <a
                  href='/dashboard'
                  className={this.state.currentLocation === '/' ? 'active' : ''}
                >
                  &nbsp;&nbsp;
                  <img
                    src='../assets/icons/dashboard.png'
                    className='menu-icons'
                    alt='icon'
                  />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={
                    UserCategory === 'block' ? 'has-sub active' : 'has-sub'
                  }
                >
                  &nbsp;
                  <img
                    src='../assets/icons/use-management.png'
                    className='menu-icons'
                    alt='icon'
                  />
                  User Management
                </a>
                <ul
                  className='list-unstyled sub-menu'
                  style={{ display: UserCategory }}
                >
                  <li>
                    <a
                      href='/userlist'
                      className={
                        this.state.currentLocation === '/userlist' ||
                        this.state.currentLocation === '/userdetails'
                          ? 'active'
                          : ''
                      }
                    >
                      Users
                    </a>
                  </li>
                  <li>
                    <a
                      href='/vendorlist'
                      className={
                        this.state.currentLocation === '/vendorlist' ||
                        this.state.currentLocation === '/vendordetails' ||
                        this.state.currentLocation === '/updatevendor'
                          ? 'active'
                          : ''
                      }
                    >
                      Vendors
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href='#'
                  className={
                    ShowCategory === 'block' ? 'has-sub active' : 'has-sub'
                  }
                >
                  &nbsp;&nbsp;
                  <img
                    src='../assets/icons/company-info.png'
                    className='menu-icons'
                    alt='icon'
                  />
                  Vendor Info
                </a>
                <ul
                  className='list-unstyled sub-menu'
                  style={{ display: ShowCategory }}
                >
                  <li>
                    <a
                      href='/schoolsList'
                      className={
                        this.state.currentLocation === '/schoolsList' ||
                        this.state.currentLocation === '/addschools' ||
                        this.state.currentLocation === '/schooldetails'
                          ? 'active'
                          : ''
                      }
                    >
                      Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href='/preschoolslist'
                      className={
                        this.state.currentLocation === '/preschoolslist' ||
                        this.state.currentLocation === '/addpreschool'
                          ? 'active'
                          : ''
                      }
                    >
                      Pre-Schools
                    </a>
                  </li>
                  <li>
                    <a href='/events' className={events ? 'active' : ''}>
                      Events
                    </a>
                  </li>
                  <li>
                    <a href='/playareas' className={playAreas ? 'active' : ''}>
                      Play Areas
                    </a>
                  </li>
                  {/* <li><a href="/seasonalcamp"
                                        className={SeasonalCamp ? 'active' : ''}
                                    >Seasonal Camps</a></li>*/}
                                    <li><a href="/creativeactivities"
                                        className={(this.state.currentLocation === '/creativeactivities') || creativeActivitiesOption ? 'active' : ''}
                                    >Creative Activities</a></li>
                </ul>
              </li>
              {/* <li><a href="/finance"
                                className={(this.state.currentLocation === '/finance') ? 'active' : ''}><img src="../assets/icons/finance.png" className="menu-icons" alt="icon" />Finance</a></li>
                            <li><a href="#"
                                className={(this.state.currentLocation === '/accounts') ? 'active' : ''}><img src="../assets/icons/accounts.png" className="menu-icons" alt="icon" />Accounts</a></li>
                            <li ><a href="#"
                                className={(this.state.currentLocation === '/enquiries') ? 'active' : ''}><img src="../assets/icons/enquiries.png" className="menu-icons" alt="icon" />Enquiries</a></li> */}
            </ul>
          </div>
        </div>
        <div className='menu-close visible-xs'>&nbsp;</div>
      </div>
    );
  }
}
export default left_sidebar;
