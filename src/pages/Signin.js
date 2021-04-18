import AuthApi from '../api/authApi';
import { $ } from '../utils.js';
import SessionStorage from '../Session/index'

const Signin = {
    render(){
        return/*html*/`
            <form id="form-signin"> 
                <div class="input-group1 ">
                   <i class='bx bx-mail-send'></i>
                    <input type="text"  id="email" placeholder="Email"  >
                </div>
                <div class="input-group1 ">
                    <i class='bx bxs-lock-alt'></i>
                    <input type="text"  id="password" placeholder="Password"  style="">
                </div>
                <button type="submit">
					Sign in
				</button>
                <div class="x1">
                    <p class="x">						
					Forgot password?
				    </p>
                    <span class="xx">
                        Don't have an account?
                    </span>
                    <a class="x" href="/#/signup">
                        Sign up here
                    </a>	 
                </div>
            </form>
        `
    },
    async afterRender() {
        $('#form-signin').addEventListener('submit',async (e) => {
            e.preventDefault();
            var email = $('#email');
            var password = $('#password')
            
            if (email.value === "" || password.value === "") {
                alert("Email or Password not true")
            } else {
                var body = {
                    email: $('#email').value,
                    password: $('#password').value
                }
                // console.log(body)
                try {
                    const response = await AuthApi.signin(body);
                    // console.log(response);
                    SessionStorage.setSession('user', response.data);
                    alert("Đăng nhập thành công")
                    window.location.hash = '/'
                } catch (error) {
                    const { data } = error.response;
                    alert("Acout underfine")
                }
            }
      })
    }
}
export default Signin;