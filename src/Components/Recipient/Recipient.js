import React, { Component } from 'react';
import './Recipient.css';
import '../Admin/Admin.css';

class Recipient extends Component {
  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 class="f3 f2-m f1-l fw4 black-90 mv3">Recipient</h1>
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
                  <td className="pa3">22.</td>
                  <td className="pa3">
                      View previous transactions with relevant fields
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_26"
                              className="ba b--transparent ph0 mh0"
                          >
                              <div className="mt3">
                                  <input
                                      className="pa2 input-reset ba bg-transparent"
                                      type="text"
                                      placeholder="Recipient ID"
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
                  <td className="pa3">23.</td>
                  <td className="pa3">
                      View available food at certain locations
                  </td>
                  <article className="pa4 black-80">
                      <form
                          action="sign-up_submit"
                          method="get"
                          accept-charset="utf-8"
                      >
                          <fieldset
                              id="query_27"
                              className="ba b--transparent ph0 mh0"
                          >
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
                                  value="Submit"
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
