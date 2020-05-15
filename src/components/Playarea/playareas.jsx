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
    this.getData();
  }
  getData() {
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

  renderList() {
    if (this.state.playareaList.length != 0) {
      return this.state.playareaList.map((item, i) => {
        return (
          <tr key={item._id} className="tabledata">
            <td>{i + 1}</td>
            <td>{item.playarea_name}</td>
            {/* <td>{item.board_of_education ? item.board_of_education : '---'}</td> */}
            <td>{item.email_id ? item.email_id : '---'}</td>
            <td>{item.phone_number ? item.phone_number : '---'}</td>
            <td>{item.location ? item.location : '---'}</td>
            <td>
              <span className="label label-danger">Waiting for Apporve</span>
            </td>
            <td><button className="btn btn-info">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
            <td style={{ textAlign: 'center' }}>
              <a href={'/playareadetails/' + item.vender}>
                {' '}
                <i className="eye-button fa fa-eye" title="View"></i>
              </a>{' '}
              &nbsp;
            </td>
          </tr>
        );
      });
    } else {
      return null;
    }
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
                  <img
                    src="../assets/images/back-arrow-blue.svg"
                    alt="back_icon"
                  />
                </a>
                <span className="page-title">Play Areas List</span>
              </div>

              <div className="content-top col-md-12 col-xs-12">
                <div className="custom-form form-inline col-md-12 col-xs-12 h-small pad-top">
                  <div className="row">
                    <div className="form-group mar-rgt">
                      <h4 className="fw-sbold mar-t-no">Play Areas List</h4>
                    </div>
                    <div className="pull-right">
                      <div className="dropdown menu-item">
                        <button
                          className="btn btn-green dropdown-toggle btn-arrow"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i> Add
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu align-right">
                          <li>
                            <a href="/addplayarea">Add</a>
                          </li>
                          <li>
                            <a href="#">Import</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-content col-md-12 col-xs-12">
                <div
                  className="content-sec col-md-12 col-xs-12 pad-no mar-t-no"
                  style={{ overflowX: 'auto' }}
                >
                  <table
                    id="example1"
                    className="table table-bordered table-striped dataTable"
                    role="grid"
                    aria-describedby="example1_info"
                  >
                    <thead>
                      <tr role="row">
                        {/* <th className="tabledata">S.No</th>
                        <th className="tabledata">Schools Name</th>
                        <th className="tabledata">Board</th>
                        <th className="tabledata">Email Id</th>
                        <th className="tabledata">Phone Number</th>
                        <th className="tabledata">Location</th>
                        <th className="tabledata">Status</th>
                        <th className="tabledata">Action</th> */}
                             <th className="tabledata">S.No</th>
                        <th className="tabledata">Playarea Name</th>
                        <th className="tabledata">Email Id</th>
                        <th className="tabledata">Phone Number</th>
                        <th className="tabledata">Location</th>
                        <th className="tabledata">Status</th>
                        
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

export default PlayAreas;
