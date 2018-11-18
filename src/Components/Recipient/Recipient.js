import React, { Component } from "react";
import "./Recipient.css";
import "../Admin/Admin.css";

class Recipient extends Component {
  constructor() {
    super();
    this.state = {
      RecipientId: 0,
      warehouseLocation: "",
      warehouseCity: "",
      rows: []
    };
  }

  handleRecipientIdChange(event) {
    this.setState({ RecipientId: event.target.value });
  }

  handleWarehouseLocationChange(event) {
    this.setState({ warehouseLocation: event.target.value });
  }

  handleWarehouseCityChange(event) {
    this.setState({ warehouseCity: event.target.value });
  }

  handleQ1() {}

  handleQ2() {}

  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 class="f3 f2-m f1-l fw4 black-90 mv3">Recipient</h1>
          <hr />
        </header>
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
                  <fieldset id="query_1" className="ba b--transparent ph0 mh0">
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
                      type="submit"
                      value="Submit"
                      onClick={this.handleQ1.bind(this)}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">2.</td>
              <td className="pa3">View available food at certain locations</td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_2" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Warehouse Location"
                        onChange={this.handleWarehouseLocationChange.bind(this)}
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
                      type="submit"
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
    );
  }
}

export default Recipient;
