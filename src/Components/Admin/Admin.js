import React, { Component } from "react";
import $ from "jquery";
import "react-table/react-table.css";
import "./Admin.css";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      city: "",
      distributorId: 0,
      officeLocation: "",
      officeCity: "",
      transactionId: 0,
      transactionDate: null,
      transactionTime: null,
      tableName: "",
      email: 0,
      volunteerId: 0,
      fromTransactionTime: null,
      toTransactionTime: null,
      outreachId: 0,
      rows: [],
      cols: [],
      showTable: false
    };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handleDistributorIdChange(event) {
    this.setState({ distributorId: event.target.value });
  }

  handleOfficeLocationChange(event) {
    this.setState({ officeLocation: event.target.value });
  }

  handleOfficeCityChange(event) {
    this.setState({ officeCity: event.target.value });
  }

  handleTransactionIdChange(event) {
    this.setState({ transactionId: event.target.value });
  }

  handleTransactionDateChange(event) {
    this.setState({ transactionDate: event.target.value });
  }

  handleTransactionTimeChange(event) {
    this.setState({ transactionTime: event.target.value });
  }

  handleTableNameChange(event) {
    this.setState({ tableName: event.target.value });
  }

  handleVolunteerIdChange(event) {
    this.setState({ volunteerId: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleFromTransactionTimeChange(event) {
    this.setState({ fromTransactionTime: event.target.value });
  }

  handleToTransactionTimeChange(event) {
    this.setState({ toTransactionTime: event.target.value });
  }

  handleOutreachIdChange(event) {
    this.setState({ outreachId: event.target.value });
  }

  // HANDLE ONLICK QUERIES HERE

  handleQ1() {
    const url =
      "https://bc9u74qar4.execute-api.ca-central-1.amazonaws.com/qa/admin/list-foods";
    let self = this;
    let foodType = "'" + self.state.name + "'";
    let loc = "'" + self.state.location + "'";
    let city = "'" + self.state.city + "'";

    $.get(
      url +
        "?" +
        "foodTypeName=" +
        foodType +
        "&warehouse_location=" +
        loc +
        "&warehouse_city=" +
        city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ2() {
    const url = "https://85djup4mk6.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.location + "'";
    let city = "'" + self.state.city + "'";

    $.get(
      url + "?" + "warehouse_location=" + loc + "&warehouse_city=" + city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ3() {
    const url = "https://jydd6l3csg.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.distributorId + "'";
    $.get(url + "?" + "id=" + id, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ4() {
    const url = "https://fnfvxu0qnb.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.officeLocation + "'";
    let city = "'" + self.state.officeCity + "'";

    $.get(
      url + "?" + "office_location=" + loc + "&office_city=" + city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ5() {
    const url = "https://ntkimy6t50.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.officeLocation + "'";
    let city = "'" + self.state.officeCity + "'";

    $.get(
      url + "?" + "office_location=" + loc + "&office_city=" + city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ6() {
    const url = "https://cuou3t9qoi.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.transactionId + "'";
    let loc = "'" + self.state.officeLocation + "'";
    let city = "'" + self.state.officeCity + "'";

    $.get(
      url +
        "?" +
        "id=" +
        id +
        "&office_city=" +
        city +
        "&office_location=" +
        loc,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ7() {
    const url = "https://enaxvtwxta.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.transactionId + "'";
    let date = "'" + self.state.transactionDate + "'";
    let time = "'" + self.state.transactionTime + "'";

    $.get(url + "?" + "id=" + id + "&date=" + date + "&time=" + time, function(
      data,
      status
    ) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ8() {
    const url = "https://0xk6iacc1e.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.transactionId + "'";

    $.get(url + "?" + "id=" + id, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ9() {
    const url = "https://c5svbrzs98.execute-api.ca-central-1.amazonaws.com/qa/";
    let self = this;
    let from = self.state.tableName;

    $.get(url + "?" + "table=" + from, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ10() {
    const url = "https://avhky3sfwb.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let volunteer_id = "'" + self.state.volunteerId + "'";
    let name = "'" + self.state.name + "'";
    let email = "'" + self.state.email + "'";
    let table =  "" + self.state.tableName + "";
    let city = "'" + self.state.city + "'";
    let locn = "'" + self.state.location + "'";

    $.get(
      url +
        "?" +
        "table=" +
        table +
        "&locn=" +
        locn +
        "&city=" +
        city +
        "&vemail_address=" +
        email +
        "&vname=" +
        name +
        "&volunteer_id=" +
        volunteer_id,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ105() {
    const url = "https://1ri3o5y1me.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let volunteer_id = "'" + self.state.volunteerId + "'";
    let name = "'" + self.state.name + "'";
    let email = "'" + self.state.email + "'";
    $.get(
      url +
        "?" +
        "email=" +
        email +
        "&name=" +
        name +
        "&volunteer_id=" +
        volunteer_id,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ11() {
    const url = "https://jyed8mqryf.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.location + "'";
    let city = "'" + self.state.city + "'";

    $.get(
      url + "?" + "warehouse_location=" + loc + "&warehouse_city=" + city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ12() {
    const url = "https://iua8jiau20.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.volunteerId + "'";

    $.get(url + "?" + "id=" + id, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ13() {
    const url =
      "https://fhbd8zysxk.execute-api.ca-central-1.amazonaws.com/QA/admin/outreach";

    let self = this;
    $.get(url, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ14() {
    const url = "https://4mcapjbhx2.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.officeLocation + "'";
    let city = "'" + self.state.officeCity + "'";
    let date = "'" + self.state.transactionDate + "'";
    let time = "'" + self.state.transactionTime + "'";

    $.get(
      url +
        "?" +
        "office_location=" +
        loc +
        "&office_city=" +
        city +
        "&date=" +
        date +
        "&time=" +
        time,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ15() {
    const url = "https://p3qdzl69pi.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    $.get(url, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ16() {
    const url = "https://79cce3elw7.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let from = "'" + self.state.fromTransactionTime + "'";
    let to = "'" + self.state.toTransactionTime + "'";

    $.get(url + "?" + "from=" + from + "&to=" + to, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  handleQ17() {
    const url = "https://j948s9iktl.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let outreach_id = "'" + self.state.outreachId + "'";
    let volunteer_id = "'" + self.state.volunteerId + "'";

    $.get(
      url +
        "?" +
        "outreach_id=" +
        outreach_id +
        "&volunteer_id=" +
        volunteer_id,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ18() {
    const url = "https://mou23mohgg.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.location + "'";
    let city = "'" + self.state.city + "'";

    $.get(
      url + "?" + "warehouse_location=" + loc + "&warehouse_city=" + city,
      function(data, status) {
        if (data.rows.length > 0) {
          var columns = Object.keys(data.rows[0]).map((key, id) => {
            return {
              Header: key,
              accessor: key
            };
          });
        } else {
          alert("No results found");
        }
        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      }
    );
  }

  handleQ19() {
    const url = "https://d1sue73n0k.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let id = "'" + self.state.distributorId + "'";

    $.get(url + "?" + "id=" + id, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });
      } else {
        alert("No results found");
      }
      self.setState({
        rows: data.rows,
        cols: columns,
        showTable: true
      });
    });
  }

  closeModal() {
    this.setState({
      showTable: false
    });
  }

  render() {
    if (this.state.showTable) {
      return (
        <div>
          <div className="contain">
            <p onClick={this.closeModal.bind(this)} className="float-right">&#10005;</p>
          </div>
          <ReactTable 
            data={this.state.rows} 
            columns={this.state.cols} 
            defaultPageSize={10} 
            filterable={true} 
            className="-striped -highlight"
          />
        </div>
      );
    }

    return (
      <div>
        <header className="tc">
          <h1 className="f3 f2-m f1-l fw4 black-90 mv3">Admin</h1>
          <hr />
        </header>
        <div>
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">Query Number</th>
                  <th className="fw6 tl pa3 bg-white">Query Description</th>
                  <th className="fw6 tl pa3 bg-white">Parameter List</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                <tr className="stripe-dark">
                  <td className="pa3">1.</td>
                  <td className="pa3">
                    Administrator could get a list of foods with a certain food
                    type found at a certain warehouse (to get a detailed
                    understanding of the food’s availability).
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_1"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Name" onChange={this.handleNameChange.bind(this)} />
                        <Input placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
                        <Input placeholder="City" onChange={this.handleCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ1.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">2.</td>
                  <td className="pa3">
                    Find names of the administrators who manage the office that
                    oversees transactions logged in by a distributor working in
                    a particular warehouse (in case a recipient complains about
                    food found at a particular warehouse)
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_2"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
                        <Input placeholder="City" onChange={this.handleCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ2.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">3.</td>
                  <td className="pa3">
                    View previous transactions with relevant fields
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_3"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Distributor ID" onChange={this.handleDistributorIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ3.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">4.</td>
                  <td className="pa3">
                    Administrator can INSERT/DELETE an office
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_4"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Office Location" onChange={this.handleOfficeLocationChange.bind(this)} />
                        <Input placeholder="Office City" onChange={this.handleOfficeCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Insert" onClick={this.handleQ4.bind(this)} />
                    </form>
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_5"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Office Location" onChange={this.handleOfficeLocationChange.bind(this)} />
                        <Input placeholder="Office City" onChange={this.handleOfficeCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Delete" onClick={this.handleQ5.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">5.</td>
                  <td className="pa3">
                    Administrator can UPDATE/DELETE transactions
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_6"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Office Location" onChange={this.handleOfficeLocationChange.bind(this)} />
                        <Input placeholder="Office City" onChange={this.handleOfficeCityChange.bind(this)} />
                        <Input placeholder="Transaction ID" onChange={this.handleTransactionIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Update" onClick={this.handleQ6.bind(this)} />
                    </form>
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_7"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Transaction Date" onChange={this.handleTransactionDateChange.bind(this)} />
                        <Input placeholder="Transaction Time" onChange={this.handleTransactionTimeChange.bind(this)} />
                        <Input placeholder="Transaction ID" onChange={this.handleTransactionIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Update" onClick={this.handleQ7.bind(this)} />
                    </form>
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_8"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Transaction ID" onChange={this.handleTransactionIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Delete" onClick={this.handleQ8.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">6.</td>
                  <td className="pa3">
                    Admin could get a list of volunteers, distributors,
                    recipients, donors, offices, outreach, food, food types, and
                    warehouses
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_9"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Table Name" onChange={this.handleTableNameChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ9.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">7.</td>
                  <td className="pa3">
                    An administrator can add a volunteer by an INSERT of the
                    volunteer in the distributor or administrator table.
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_10"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Table Name" onChange={this.handleTableNameChange.bind(this)} />
                        <Input placeholder="Volunteer ID" onChange={this.handleVolunteerIdChange.bind(this)} />
                        <Input placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
                        <Input placeholder="City" onChange={this.handleCityChange.bind(this)} />
                        <Input placeholder="Volunteer Name" onChange={this.handleNameChange.bind(this)} />
                        <Input placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Insert" onClick={this.handleQ10.bind(this)} />
                    </form>
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_10.5"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Volunteer Name" onChange={this.handleNameChange.bind(this)} />
                        <Input placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
                        <Input placeholder="Volunteer ID" onChange={this.handleVolunteerIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Insert" onClick={this.handleQ105.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">8.</td>
                  <td className="pa3">
                    An administrator can DELETE distributors that worked at a
                    certain warehouse (when the warehouse shuts downs)
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_11"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
                        <Input placeholder="City" onChange={this.handleCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Delete" onClick={this.handleQ11.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">9.</td>
                  <td className="pa3">
                    An administrator can delete a volunteer by a DELETE of the
                    volunteer in the distributor or administrator table
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_12"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Volunteer ID" onChange={this.handleVolunteerIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Delete" onClick={this.handleQ12.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">10.</td>
                  <td className="pa3">
                    Group the volunteers by the outreach event they signed up
                    for ( and show count). In other words, show number of
                    volunteers per event
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_13"
                        className="ba b--transparent ph0 mh0"
                      />
                      <SubmitButton placeholder="Submit" onClick={this.handleQ13.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">11.</td>
                  <td className="pa3">
                    An administrator can subset a transaction, specifically the
                    office_city, office_location and the transaction_date and
                    transaction_time to determine if the information was
                    correctly entered or to track down the office that was
                    overseeing a transaction and when the transaction occurred
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_14"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Office Location" onChange={this.handleOfficeLocationChange.bind(this)} />
                        <Input placeholder="Office City" onChange={this.handleOfficeCityChange.bind(this)} />
                        <Input placeholder="Transaction Date" onChange={this.handleTransactionDateChange.bind(this)} />
                        <Input placeholder="Transaction Time" onChange={this.handleTransactionTimeChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ14.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">12.</td>
                  <td className="pa3">
                    (Division) An admin could get name and id’s of volunteers
                    who signed up for all outreach events
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_15"
                        className="ba b--transparent ph0 mh0"
                      />
                      <SubmitButton placeholder="Submit" onClick={this.handleQ15.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">13.</td>
                  <td className="pa3">
                    Admin can observe which warehouses were involved in the most
                    transactions for a given time period
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_16"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="From Transaction Time" onChange={this.handleFromTransactionTimeChange.bind(this)} />
                        <Input placeholder="To Transaction Time" onChange={this.handleToTransactionTimeChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ16.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">14.</td>
                  <td className="pa3">Signup for outreach event</td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_17"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Volunteer ID" onChange={this.handleVolunteerIdChange.bind(this)} />
                        <Input placeholder="Outreach ID" onChange={this.handleOutreachIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ17.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">15.</td>
                  <td className="pa3">
                    For a particular warehouse, group all the foods by food
                    types (and show their count)
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_18"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Location" onChange={this.handleLocationChange.bind(this)} />
                        <Input placeholder="City" onChange={this.handleCityChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ18.bind(this)} />
                    </form>
                  </div>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">16.</td>
                  <td className="pa3">
                    View food at the warehouse where the distributor works
                  </td>
                  <div className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_19"
                        className="ba b--transparent ph0 mh0"
                      >
                        <Input placeholder="Distributor ID" onChange={this.handleDistributorIdChange.bind(this)} />
                      </fieldset>
                      <SubmitButton placeholder="Submit" onClick={this.handleQ19.bind(this)} />
                    </form>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
