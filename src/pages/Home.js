import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Home | M8 Documents</title>
        </Helmet>
        <div>Home</div>
      </Layout>
    );
  }
}

export default Home;
