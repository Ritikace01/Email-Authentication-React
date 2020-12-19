import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" color="primary" size="large">
                        <Link to="/form">
                            Let's Begin
                        </Link>
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;