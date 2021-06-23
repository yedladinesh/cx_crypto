import React, { Component } from "react";
import { Col, Card, CardBody, Media, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

export default function WatchList(props) {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card>
          <CardBody>
          <h4 className="card-title mb-4">WatchList</h4>
            <SimpleBar style={{ maxHeight: "330px" }}>
              <ul className="list-unstyled activity-wid">
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className="ri-edit-2-fill"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        28 Apr, 2020{" "}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className="ri-user-2-fill"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        21 Apr, 2020{" "}
                        <small className="text-muted">08:01 pm</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        Added an interest “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
}
