import AuthApi from '../api/authApi';
import { $ } from '../utils.js';

const Signup = {
     render(){
        return/*html*/`
            <form id="form-signup">
                <div class="input-group1">
							<i class='bx bxs-user'></i>
							<input type="text" id="user-name" placeholder="Username">
						</div>
                <div class="input-group1 ">
                   <i class='bx bx-mail-send'></i>
                    <input type="text"  id="user-email" placeholder="Email"  >
                </div>
                <div class="input-group1 ">
                    <i class='bx bxs-lock-alt'></i>
                    <input type="password"  id="user-password" placeholder="Password"  style="">
                </div>
                <button type="submit" style="margin-bottom:10px">
					Sign up
				</button>
                <div class="x1">
                    
                    <span class="xx" >
                       Already have an account?
                    </span>
                    <a class="x" href="/#/signin">
                        Sign in here
                    </a>	 
                </div>
            </form>
        `
    },
    async afterRender() {
        $('#form-signup').addEventListener('submit',async (e) => {
            e.preventDefault();
            var user = $('#user-name')
            var email = $('#email');
            var password = $('#password')
            
            if (email.value === "" || password.value === "" || user.value ==="") {
                alert("Not true")
            } else {
                const user = {
                name: $('#user-name').value,
                email: $('#user-email').value,
                password: $('#user-password').value
            }
            AuthApi.signup(user);
            alert("Bạn đăng ký thành công")
            window.location.hash = '/signin'
            }
            
      })
    }
}

export default Signup;