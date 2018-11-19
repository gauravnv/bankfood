import React, { Component } from "react";
import "../Admin/Admin.css";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
class Recipient extends Component {
  constructor() {
    super();
    this.state = {
      recipientId: 0,
      warehouseLocation: "",
      warehouseCity: "",
      rows: [],
      cols: [],
      showTable: false
    };
  }

  handleRecipientIdChange(event) {
    this.setState({ recipientId: event.target.value });
  }

  handleWarehouseLocationChange(event) {
    this.setState({ warehouseLocation: event.target.value });
  }

  handleWarehouseCityChange(event) {
    this.setState({ warehouseCity: event.target.value });
  }

  handleQ1() {
    const url = "https://jx7hv5lg7d.execute-api.ca-central-1.amazonaws.com/qa/";
    let self = this;
    let id = "'" + self.state.recipientId + "'";

    $.get(url + "?" + "id=" + id, function(data, status) {
      if (data.rows.length > 0) {
        var columns = Object.keys(data.rows[0]).map((key, id) => {
          return {
            Header: key,
            accessor: key
          };
        });

        self.setState({
          rows: data.rows,
          cols: columns,
          showTable: true
        });
      } else {
        alert("No results found");
        self.setState({
          showTable: false
        });
      }
    });
  }

  handleQ2() {
    const url = "https://oyt2ffwabh.execute-api.ca-central-1.amazonaws.com/qa/";

    let self = this;
    let loc = "'" + self.state.warehouseLocation + "'";
    let city = "'" + self.state.warehouseCity + "'";

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

          self.setState({
            rows: data.rows,
            cols: columns,
            showTable: true
          });
        } else {
          alert("No results found");
          self.setState({
            showTable: false
          });
        }
      }
    );
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
          <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw4 black-90 mv3">Output Table</h1>
            <hr />
          </header>
          <div className="pa4 overflow-auto">
            <div className="contain">
              <p
                onClick={this.closeModal.bind(this)}
                className="float-right span"
              >
                &#10005;
              </p>
            </div>
            <ReactTable
              data={this.state.rows}
              columns={this.state.cols}
              defaultPageSize={10}
              filterable={true}
              className="-striped -highlight"
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <header className="tc ph4">
          <h1 className="f3 f2-m f1-l fw4 black-90 mv3">Recipient</h1>
          <hr />
        </header>
        <div className="pa4">
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
                    View previous transactions with relevant fields
                  </td>
                  <article className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_1"
                        className="ba b--transparent ph0 mh0"
                      >
                        <div className="mt3">
                          <input
                            className="pa2 input-reset ba bg-transparent"
                            type="text"
                            placeholder="Recipient ID"
                            onChange={this.handleRecipientIdChange.bind(this)}
                          />
                        </div>
                      </fieldset>
                      <div className="mt3">
                        <input
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                          type="button"
                          value="Submit"
                          onClick={this.handleQ1.bind(this)}
                        />
                      </div>
                    </form>
                  </article>
                </tr>

                <tr className="stripe-dark">
                  <td className="pa3">2.</td>
                  <td className="pa3">
                    View available food at certain locations
                  </td>
                  <article className="pa4 black-80">
                    <form acceptCharset="utf-8">
                      <fieldset
                        id="query_2"
                        className="ba b--transparent ph0 mh0"
                      >
                        <div className="mt3">
                          <input
                            className="pa2 input-reset ba bg-transparent"
                            type="text"
                            placeholder="Warehouse Location"
                            onChange={this.handleWarehouseLocationChange.bind(
                              this
                            )}
                          />
                        </div>
                        <div className="mt3">
                          <input
                            className="pa2 input-reset ba bg-transparent"
                            type="text"
                            placeholder="Warehouse City"
                            onChange={this.handleWarehouseCityChange.bind(this)}
                          />
                        </div>
                      </fieldset>
                      <div className="mt3">
                        <input
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                          type="button"
                          value="Submit"
                          onClick={this.handleQ2.bind(this)}
                        />
                      </div>
                    </form>
                  </article>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipient;
