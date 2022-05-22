import { Component } from 'react';
import Layout from '../layouts/Layout';
import { Card, Form, Breadcrumb } from 'react-bootstrap';
import BDButton from '../components/BDButton';
import BDInput from '../components/BDInput';
import Dashboard from '../assets/images/dashboard.png';
import '../assets/scss/EditPromo.scss';

export default class DashboardAdmin extends Component {
  render () {
    return (
      <Layout>
        {/* <div className="container-xxl flex-grow-1 container-p-y"> */}
              <div className="row mt-5">
                <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                  <div className="card">
                    {/* <div className="row row-bordered g-0"> */}
                      <div className="col-md-12">
                        <h5 className="card-header m-0 me-2 pb-3">Monthly Report</h5>
                        <div id="totalRevenueChart" className="px-2">Last 6 months</div>
                        <img src={Dashboard} className="img-fluid text-center" alt="product" />
                      {/* </div> */}
                    <div className="d-grid gap-2 mt-4">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Download Report</BDButton>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                  <div className="row">
                    {/* <!-- </div>
    <div className="row"> --> */}
                    <div className="col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                              <div className="card-title">
                                <h5 className="text-nowrap mb-2">Best Staff of the Month</h5>
                                <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                              </div>
                              <div className="mt-sm-auto">
                                <p>Achieved 3.5M of total 5M 478 Customer</p>
                              </div>
                            </div>
                            <div id="profileReportChart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                              <div className="card-title">
                                <h5 className="text-nowrap mb-2">Goals</h5>
                                <p>Your goals is still on 76%. Keep up the good work!</p>
                                <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                              </div>
                            </div>
                            <div id="profileReportChart"></div>
                          </div>
                        </div>
                        <div className="d-grid gap-2 mt-4">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Share Report</BDButton>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </Layout>
    );
  }
}
