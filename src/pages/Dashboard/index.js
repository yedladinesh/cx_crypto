import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class StarterPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Home", link : "#" },
                { title : "Dashboard", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    
                    
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default StarterPage;