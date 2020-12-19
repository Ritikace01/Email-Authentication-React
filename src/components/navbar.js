import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <div style={{ heigh: "10rem", padding: "2rem" }}>
                <Grid container spacing={3} style={{ justifyContent: "flex-end", backgroundColor: "aliceblue" }}>
                    <Grid item xs={1}>First</Grid>
                    <Grid item xs={1}>Second</Grid>
                    <Grid item xs={1}>Third</Grid>
                    <Grid item xs={1}>Four</Grid>
                </Grid>
            </div>
        );
    }
}

export default Navbar;