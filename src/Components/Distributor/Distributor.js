import React, { Component } from 'react';
import './Distributor.css';
import '../Admin/Admin.css';

class Distributor extends Component {
  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 class="f3 f2-m f1-l fw4 black-90 mv3">Distributor</h1>
          <hr/>
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
                  <td className="pa3">15.</td>
                  <td className="pa3">
                      For a particular warehouse, group all the foods by food types (and show their count)
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_18"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Location"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="City"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Submit"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">16.</td>
                  <td className="pa3">
                      View food at the warehouse where the distributor works
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_19"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Distributor ID"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Submit"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">17.</td>
                  <td className="pa3">
                      Distributors can query for list of food and food types
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="#dtable"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_20"
                              className="ba b--transparent ph0 mh0"
                          />
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Submit"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">18.</td>
                  <td className="pa3">
                      A distributor could UPDATE the location of a food stored in a certain warehouse to be stored in a different warehouse (relocating all food from one warehouse to another)
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_21"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Warehouse Location"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Warehouse City"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Update"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">19.</td>
                  <td className="pa3">
                      A distributor can UPDATE a transaction
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_22"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction Date"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction Time"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Update"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">20.</td>
                  <td className="pa3">
                      Distributors can INSERT/DELETE/UPDATE food
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_23"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Expiry Date"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food Type ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Donor ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Warehouse Location"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Warehouse City"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Insert"
                              />
                          </div>
                      </form>
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_24"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Expiry Date"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Update"
                              />
                          </div>
                      </form>
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_24"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food ID"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Delete"
                              />
                          </div>
                      </form>
                  </article>
              </tr>

              <tr className="stripe-dark">
                  <td className="pa3">21.</td>
                  <td className="pa3">
                      A distributor can add a transaction by an INSERT of the transaction in the transactions table
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_25"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Food ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Distributor ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Recipient ID"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction Date"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Transaction Time"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Office Location"
                                  />
                              </div>
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Office City"
                                  />
                              </div>
                          </fieldset>
                          <div className="mt3">
                              <input
                                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                  type="submit"
                                  value="Insert"
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
