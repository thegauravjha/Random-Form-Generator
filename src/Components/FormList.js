import React, { useState } from 'react'
import { Modal } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import FormBuilder from './FormBuilder'
import { Link } from 'react-router-dom';


const FormList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const items = useSelector((store) => (store.form.items));

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='container'>
            <div className='btn'>
                <button className='create-btn' onClick={showModal}>Create New From</button>
                <Modal
                    title={<><FormOutlined /> New Form</>}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={1000}
                >
                    <FormBuilder />
                </Modal>
            </div>
            <div className="list-container">
                {items.map((item, index) => (
                    <div className="form-list" key={index}>
                        <Link
                            to={"/form/" + item.title}
                            style={{ textDecoration: "none", color: "#fff" }}
                        >
                            <div className="form-name">{item.title}</div>
                        </Link>
                        <div className="action">X</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormList