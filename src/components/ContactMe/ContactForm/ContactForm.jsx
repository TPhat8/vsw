import React from "react";
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form action="">
                <div className="name-container">
                    <input type="text" name="fulltname" placeholder="Họ và Tên" />
                    <input type="text" name="mssv" placeholder="MSSV" />
                </div>
                <input type="text" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Lời nhắn" rows={3}></textarea>
                <button>Gửi</button>
            </form>
        </div>
    );
};

export default ContactForm;