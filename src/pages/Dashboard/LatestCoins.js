import React, { Component, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const expandRow = {
  renderer: (row) => (
    <>
      Action :
      <Link to="#" className="mr-3 text-primary">
        <i className="mdi mdi-pencil font-size-18"></i>
      </Link>
      <Link to="#" className="text-danger">
        <i className="mdi mdi-trash-can font-size-18"></i>
      </Link>
    </>
  ),
  showExpandColumn: true,
  expandByColumnOnly: true,
};

function LatestTransactions(){
  const [menu, setMenu] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menu: false,
  //   };
  // }

   
    const data = {
      columns: [
        {
          dataField: "id",
          text: "No.",
        },
        {
          dataField: "billingName",
          text: "Billing Name",
        },
        {
          dataField: "total",
          text: "Total",
        },
        {
          dataField: "status",
          text: "Payment Status",
        },
      ],
      rows: [
        {
          id: 1,
         
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 2,
          
          billingName: "Jimmy Barker",
          total: "$165",
          status: (
            <div className="badge badge-soft-warning font-size-12">unpaid</div>
          ),
        },
        {
          id: 3,
         
          billingName: "Donald Bailey",
          total: "$146",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 4,
         
          billingName: "Paul Jones",
          total: "$183",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 5,
          
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-danger font-size-12">
              Chargeback
            </div>
          ),
        },
        {
          id: 6,
         
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-warning font-size-12">unpaid</div>
          ),
        },
        {
          id: 7,
          
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 8,
         
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 9,
          
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
        {
          id: 10,
         
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-warning font-size-12">unpaid</div>
          ),
        },
        {
          id: 11,
         
          billingName: "Walter Brown",
          total: "$172",
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
        },
      ],
    };

    const options = {
      // pageStartIndex: 0,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: false,
      sizePerPageList: [
        {
          text: "10th",
          value: 10,
        },
        {
          text: "All",
          value: data.rows.length,
        },
      ],
    };

    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
    };

    return (
      <React.Fragment>
        
          <Card>
            <CardBody>
              {/* <Dropdown
                isOpen={this.state.menu}
                toggle={() => this.setState({ menu: !this.state.menu })}
                className="float-right"
              >
                <DropdownToggle tag="i" className="arrow-none card-drop">
                  <i className="mdi mdi-dots-vertical"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Sales Report</DropdownItem>

                  <DropdownItem>Export Report</DropdownItem>

                  <DropdownItem>Profit</DropdownItem>

                  <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}


              <BootstrapTable
                keyField="id"
                data={data.rows}
                columns={data.columns}
                expandRow={expandRow}
                pagination={paginationFactory(options)}
                selectRow={selectRow}
              />
            </CardBody>
          </Card>
        
      </React.Fragment>
    );
  }


export default LatestTransactions;
