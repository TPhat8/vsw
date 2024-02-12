import React from "react";
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>VAA Social Work</h2>
                <p>Đội Công tác Xã hội Học viện Hàng không Việt Nam được thành lập vào ngày 6/12/2009, là một trong những đơn vị dẫn đầu tại Học viện Hàng không Việt Nam trong tổ chức các hoạt động, chương trình thiện nguyện ý nghĩa.</p>
                <br />
                <p>Đến với Đội chúng ta sẽ là một gia đình cùng nhau thực hiện những điều tốt đẹp lan tỏa tình yêu thương đến tất cả mọi người.</p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <a href="https://www.facebook.com/VAA.SocialWork" target="blank"><img src="./assets/images/img01.png" title="Đội Công Tác Xã Hội - Học Viện Hàng Không Việt Nam" /></a>
                    </div>
                    <img className="intro-img" src="./assets/images/img11.png" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                    <a href="https://www.youtube.com/VAAsocialwork" target="blank"><img src="./assets/images/img02.png" title="ĐỘI CTXH VAA" /></a>
                    </div>
                    <div className="tech-icon">
                    <a href="mailto:vaa.socialwork@gmail.com" ><img src="./assets/images/img03.png" title="vaa.socialwork@gmail.com" /></a>
                    </div>
                    <div className="tech-icon">
                    <a href="https://zalo.me/0363142548" target="blank"><img src="./assets/images/img04.png" title="Đội trưởng (Thành Phát) - 0363142548" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero