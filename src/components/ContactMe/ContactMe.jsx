import React from "react";
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Liên Hệ Đội</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                        iconUrl="./assets/images/email-icon.svg"
                        text="vaa.socialwork@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/logo-Doi-contact.svg"
                        text="Đội trưởng: Trần Thành Phát"
                    />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;