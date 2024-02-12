import React from "react";
import './BanDieuHanh.css';

const BanDieuHanh = () => {
    const members = [
        { id: 1, name: "Đội trưởng", image: "./assets/images/bdh-1.jpg" },
        { id: 2, name: "Kế hoạch", image: "./assets/images/bdh-2.jpg" },
        { id: 3, name: "Tài Chính", image: "./assets/images/bdh-3.jpg" },
        { id: 4, name: "Hậu cần", image: "./assets/images/bdh-4.jpg" },
        { id: 5, name: "Truyền thông", image: "./assets/images/bdh-5.jpg" },
        { id: 6, name: "Văn nghệ", image: "./assets/images/bdh-6.jpg" },
    ];

    return (
        <section className="bdh-container">
            <div className="bdh-content">
                <h2>Ban Điều Hành</h2>
                <h3>Nhiệm kỳ XIV</h3>
            </div>

            <div className="bdh-img">
                <div className="bdh-members">
                    {members.map(member => (
                        <div key={member.id} className="bdh-member">
                            <img src={member.image} width="200px" height="200px" alt={member.name} />
                            <p>{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BanDieuHanh;