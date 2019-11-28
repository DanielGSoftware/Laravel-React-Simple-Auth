import React, {Component} from 'react';
import Layout from "./Layout/Layout";

export default class Home extends Component {
    render() {
        return (
            <Layout history={this.props.history}>
                home page
            </Layout>
        )
    }
}
