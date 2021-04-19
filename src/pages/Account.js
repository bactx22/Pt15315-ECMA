import AuthApi from "../api/authApi";
import { parseRequestUrl } from "../utils";

const Account = {
    async render() {
        var user = JSON.parse(sessionStorage.getItem("user"));
        return /*html*/`
            <div class=" ">
                <label for="">User Name: </label>
                <input type="text"  id="user-name" value="${user.user.name}" readonly>
            </div>
            <div class=" ">
                <label for="">Email: </label>
                <input type="text"  id="user-email" value="${user.user.email}" readonly>
            </div>
        `
    }
}
export default Account;