import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import MiniWidgets from "./MiniWidgets";
import TopFiveCoins from "./TopFiveCoins";
import LatestCoins from "./LatestCoins";
import WatchList from "../../components/Common/WatchList";

class StarterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Home", link: "#" },
        { title: "Dashboard", link: "#" },
      ],
      reports: [
        {
          icon: "ri-stack-line",
          title: "Bitcoin",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-stack-line",
          title: "Ethereum",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-stack-line",
          title: "Binance coin",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
      ],
      topFive: [
        {
          icon: "ri-stack-line",
          title: "Bitcoin",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-stack-line",
          title: "Ethereum",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-stack-line",
          title: "Binance coin",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-stack-line",
          title: "Binance coin",
          value: "1452",
          rate: "2.4%",
          desc: "From previous period",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row >
              <Col xl={8}>
                <h2>Index</h2>
              </Col>
              <Col xl={8}>
                <Row>
                  <MiniWidgets reports={this.state.reports} />
                </Row>
                {/* <TopCoins/> */}
                {/* Display top gainer coins */}
              </Col>
        
              <Col xl={4}>
                {/* Display watchlist */}
                <WatchList />
              </Col>
              <Col xl={8}>
                <h2>Top Gainers</h2>
              </Col>
              <Col xl={8}>
                <Row>
                  <TopFiveCoins topFive={this.state.topFive} />
                </Row>
                {/* <TopCoins/> */}
              </Col>

              {/* Display top losers coins */}

              <Col xl={8}>
                <h2>Top Losers</h2>
              </Col>
              <Col xl={8}>
                <Row>
                  <TopFiveCoins topFive={this.state.topFive} />
                </Row>
                {/* <TopCoins/> */}
              </Col>
            </Row>
            <Row>
              <Col xl={8}>
                <h2>Top by Market Cap</h2>
              </Col>
              <Col xl={8}>
                <LatestCoins />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default StarterPage;
