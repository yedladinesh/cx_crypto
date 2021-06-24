import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import MiniWidgets from "./MiniWidgets";
import TopFiveCoins from "./TopFiveCoins";
import LatestCoins from "./LatestCoins";
import WatchList from "../../components/Common/WatchList";
import axios from 'axios';
import { headers } from "../../config/global";

function StarterPage(){
  
  useEffect(()=>{
    listCoins();
  },[]);

  const listCoins  = async () => {

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d`);
    const json = await response.json();
    console.log(json)

    // const response = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d')
    // console.log(response)
    // .then(res =>
    //   console.log(res.json())
    // )
    // .catch((err)=>{
    //   console.log(err,"error please try again");
    // })

  }

  const staticData = {
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
  
    const [data, setData ] = useState(staticData);

  
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xl={8}>
                <Row>
                  <Col md={12}>
                    <h3>Index</h3>
                  </Col>
                  <MiniWidgets reports={data.reports} />

                  {/* Top gainers*/}
                  <Col md={12}>
                    <h3>Top Gainers</h3>
                  </Col>
                  <TopFiveCoins topFive={data.topFive} />

                  {/* Top losers */}
                  <Col md={12}>
                    <h3>Top Losers</h3>
                  </Col>
                  <TopFiveCoins topFive={data.topFive} />
                </Row>
              </Col>
              {/* Watchlist/ bookmarks */}
              <WatchList />
            </Row>

            <Row>
              {/* Top coins  */}
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

export default StarterPage;
