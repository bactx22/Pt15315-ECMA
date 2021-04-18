import AuthApi from "../api/authApi";
import { parseRequestUrl } from "../utils";

const Account = {
    async render() {
        return /*html*/`
            <table>
                <tr>
                    <td>Name</td>
                    <td>${user.name}</td>
                </tr>
            </table>
        `
    }
}
export default Account;