import React from 'react';
import Account from './AccountService';

export default class AccountComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
    };
  }

  componentDidMount() {
    Account.getAccounts()
      .then((data) => {
        this.setState({ accounts: data });
        console.log(this.state.data);
      })
      .catch(function (ex) {
        console.log('Response parsing failed. Error: ', ex);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Account Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Account Id</th>
              <th>Account Username</th>
              <th>Account Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map((Account) => (
              <tr key={Account.id}>
                <td>{Account.AccountId}</td>
                <td>{Account.AccountUsername}</td>
                <td>{Account.AccountPassword}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
