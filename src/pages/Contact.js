const Contact = {
    render() {
        return/*html*/`
            <div class="row">
            <div class="col-md-12">
                <div class="well ">
                    <h4>Liên hệ với chúng tôi</h4>
                        <form>
                            <div class="form-group">
                            
                            <input type="email" class="form-control" id="email" placeholder="Họ và tên"/>
                            </div>
                            <div class="form-group">
                            
                            <input type="password" class="form-control" id="pwd" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                            
                            <input type="email" class="form-control" id="email" placeholder="Phone"/>
                            </div>
                            <div class="form-group">
                            
                            <input type="password" class="form-control" id="pwd" placeholder="Tiêu đề"/>
                            </div>
                            <div class="form-group">
                            
                            <input type="password" class="form-control" id="pwd" placeholder="Nội dung"/>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-success">Gửi thư</button>
                        </form>
                        <div class="table-responsive">
                        <table class="table edit1">
                            <tr>
                                <td>Địa chỉ</td>
                                <td>Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội, Vietnam</td>
                            </tr>
                            <tr>
                                <td>Điện thoại</td>
                                <td>+84981725836</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td><a href="https://caodang.fpt.edu.vn/">https://caodang.fpt.edu.vn/</a></td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td><a href="https://www.facebook.com/fpt.poly">https://www.facebook.com/fpt.poly</a></td>
                            </tr>
                        </table>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814055!2d105.74459841442656!3d21.038132792835274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1614604818562!5m2!1sen!2s" width="1200" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                </div>
            </div>
        </div>
        `
    }
}
export default Contact;