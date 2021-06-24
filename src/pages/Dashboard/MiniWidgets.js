import React, { Component } from "react";
import { Col, Card, CardBody, Media, Row } from "reactstrap";

export default function MiniWidgets(props) {
  const noOfCoinsDisplay = 0;
  return (
    
    <React.Fragment>
      {props.reports.map((report, key) => (
        (report.market_cap_rank <= 3 &&
        <Col key={key} md={4}>
          <Card>
            <CardBody>
              <Media>
                <Media body className="overflow-hidden">
                  <p className="text-truncate font-size-14 mb-2">
                    {report.name}
                  </p>
                  <h4 className="mb-0">${report.current_price}</h4>
                </Media>
                <div className="text-primary">
                  <img src={report.image} className="img-fluid mx-auto d-block tab-img rounded" alt="" style={{ "height": '25px', 'width':'25px' }}/>
                </div>
              </Media>
            </CardBody>

            <CardBody className="border-top py-3">
              <div className="text-truncate">
                <span className={"badge badge-soft-"+ (report.high_24h > report.low_24h ? 'success' : 'danger' )+" font-size-11 mr-1"}>
                  <i className={(report.high_24h > report.low_24h ? "mdi mdi-menu-up" : "mdi-menu-down")+" font-size-14 " }> </i> ${report.current_price}
                </span>
                
                <span className="text-muted ml-2">{"("+report.price_change_percentage_24h+")"}</span>
                <span className="text-muted ml-2">{report.symbol.toUpperCase()}</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        )
      ))}
    </React.Fragment>
  );
}
