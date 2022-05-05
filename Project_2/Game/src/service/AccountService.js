import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:5432/api/v1/accounts";

class AccountService {
  saveAccount(Account) {
    return axios.post(ACCOUNT_API_BASE_URL, account);
  }

  getAccounts() {
    return axios.get(ACCOUNT_API_BASE_URL);
  }

  deleteAccount(id) {
    return axios.delete(ACCOUNT_API_BASE_URL + "/" + id);
  }

  getAccountById(id) {
    return axios.get(ACCOUNT_API_BASE_URL + "/" + id);
  }

  updateAccount(account, id) {
    return axios.put(ACCOUNT_API_BASE_URL + "/" + id, account);
  }
}

export default new AccountService();