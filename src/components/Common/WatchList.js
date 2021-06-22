import React, { Component } from "react";
import { Col, Card, CardBody, Media, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function WatchList(props) {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div>
            <div className="text-center">
              <p className="mb-2">Total sources</p>
              <h4>$ 7652</h4>
              <div className="text-success">
                <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
              </div>
            </div>

            <div className="table-responsive mt-4">
              <Table hover className=" mb-0 table-centered table-nowrap">
                <tbody>
                  
                  <tr>
                    <td>
                      <div className="avatar-xs">
                        <div className="avatar-title rounded-circle bg-light">
                          {/* <img src={img2} alt="" height="20" /> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5 className="font-size-14 mb-0">Source 2</h5>
                    </td>

                    <td>
                      <div id="spak-chart2"></div>
                    </td>
                    <td>
                      <p className="text-muted mb-0">$ 2625</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar-xs">
                        <div className="avatar-title rounded-circle bg-light">
                          {/* <img src={img3} alt="" height="20" /> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5 className="font-size-14 mb-0">Source 3</h5>
                    </td>
                    <td>
                      <div id="spak-chart3"></div>
                    </td>
                    <td>
                      <p className="text-muted mb-0">$ 2856</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="text-center mt-4">
              <Link to="#" className="btn btn-primary btn-sm">
                View more
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
