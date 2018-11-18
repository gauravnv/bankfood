import React, { Component } from "react";
import "./Distributor.css";
import "../Admin/Admin.css";

class Distributor extends Component {
  constructor() {
    super();
    this.state = {
      foodId: 0,
      foodTypeId: 0,
      officeLocation: "",
      officeCity: "",
      location: "",
      donorId: 0,
      distributorId: 0,
      city: "",
      transactionId: 0,
      transactionDate: null,
      transactionTime: null,
      warehouseLocation: "",
      warehouseCity: "",
      expiryDate: null,
      rows: [],
      isPortalOpen: false
    };
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handleFoodIdChange(event) {
    this.setState({ foodId: event.target.value });
  }

  handleFoodTypeIdChange(event) {
    this.setState({ foodTypeId: event.target.value });
  }

  handleExpiryDateChange(event) {
    this.setState({ expiryDate: event.target.value });
  }

  handleOfficeLocationChange(event) {
    this.setState({ officeLocation: event.target.value });
  }

  handleOfficeCityChange(event) {
    this.setState({ officeCity: event.target.value });
  }

  handleDonorIdChange(event) {
    this.setState({ donorId: event.target.value });
  }

  handleDistributorIdChange(event) {
    this.setState({ distributorId: event.target.value });
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

  handleWarehouseLocationChange(event) {
    this.setState({ warehouseLocation: event.target.value });
  }

  handleWarehouseCityChange(event) {
    this.setState({ warehouseCity: event.target.value });
  }

  handleQ1() {}

  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 class="f3 f2-m f1-l fw4 black-90 mv3">Distributor</h1>
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
                For a particular warehouse, group all the foods by food types
                (and show their count)
              </td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_1" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Location"
                        onChange={this.handleLocationChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="City"
                        onChange={this.handleCityChange.bind(this)}
                      />
                    </div>
                  </fieldset>
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Submit"
                      onClick={this.handleQ1}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">2.</td>
              <td className="pa3">
                View food at the warehouse where the distributor works
              </td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_2" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Distributor ID"
                        onChange={this.handleDistributorIdChange.bind(this)}
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

            <tr className="stripe-dark">
              <td className="pa3">3.</td>
              <td className="pa3">
                Distributors can query for list of food and food types
              </td>
              <article className="pa4 black-80">
                <form action="#dtable" acceptCharset="utf-8">
                  <fieldset
                    id="query_3"
                    className="ba b--transparent ph0 mh0"
                  />
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Submit"
                      onClick={this.handleQ3.bind(this)}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">4.</td>
              <td className="pa3">
                A distributor could UPDATE the location of a food stored in a
                certain warehouse to be stored in a different warehouse
                (relocating all food from one warehouse to another)
              </td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_4" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food ID"
                        onChange={this.handleFoodIdChange.bind(this)}
                      />
                    </div>
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
                      value="Update"
                      onClick={this.handleQ4.bind(this)}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">5.</td>
              <td className="pa3">A distributor can UPDATE a transaction</td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_5" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction ID"
                        onChange={this.handleTransactionIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction Date"
                        onChange={this.handleTransactionDateChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction Time"
                        onChange={this.handleTransactionTimeChange.bind(this)}
                      />
                    </div>
                  </fieldset>
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Update"
                      onClick={this.handleQ5.bind(this)}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">6.</td>
              <td className="pa3">
                Distributors can INSERT/DELETE/UPDATE food
              </td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_6" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food ID"
                        onChange={this.handleFoodIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Expiry Date"
                        onChange={this.handleExpiryDateChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food Type ID"
                        onChange={this.handleFoodTypeIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Donor ID"
                        onChange={this.handleDonorIdChange.bind(this)}
                      />
                    </div>
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
                      value="Insert"
                      onClick={this.handleQ6.bind(this)}
                    />
                  </div>
                </form>
                <form acceptCharset="utf-8">
                  <fieldset id="query_24" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food ID"
                        onChange={this.handleFoodIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Expiry Date"
                        onChange={this.handleExpiryDateChange.bind(this)}
                      />
                    </div>
                  </fieldset>
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Update"
                      onClick={this.handleQ7.bind(this)}
                    />
                  </div>
                </form>
                <form acceptCharset="utf-8">
                  <fieldset id="query_7" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food ID"
                        onChange={this.handleFoodIdChange.bind(this)}
                      />
                    </div>
                  </fieldset>
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Delete"
                      onClick={this.handleQ8.bind(this)}
                    />
                  </div>
                </form>
              </article>
            </tr>

            <tr className="stripe-dark">
              <td className="pa3">7.</td>
              <td className="pa3">
                A distributor can add a transaction by an INSERT of the
                transaction in the transactions table
              </td>
              <article className="pa4 black-80">
                <form acceptCharset="utf-8">
                  <fieldset id="query_8" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction ID"
                        onChange={this.handleTransactionIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Food ID"
                        onChange={this.handleFoodIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Distributor ID"
                        onChange={this.handleDistributorIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Recipient ID"
                        onChange={this.handleRecipientIdChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction Date"
                        onChange={this.handleTransactionDateChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Transaction Time"
                        onChange={this.handleTransactionTimeChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Office Location"
                        onChange={this.handleOfficeLocationChange.bind(this)}
                      />
                    </div>
                    <div className="mt3">
                      <input
                        className="pa2 input-reset ba bg-transparent"
                        type="text"
                        placeholder="Office City"
                        onChange={this.handleOfficeCityChange.bind(this)}
                      />
                    </div>
                  </fieldset>
                  <div className="mt3">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                      type="submit"
                      value="Insert"
                      onClick={this.handleQ9.bind(this)}
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

export default Distributor;
