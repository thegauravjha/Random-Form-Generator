import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import FormBuilder from './FormBuilder'
import { Link } from 'react-router-dom';

const FormList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm(); // Initialize form instance
    const items = useSelector((store) => (store.form.items));

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const formValues = form.getFieldsValue(); // Get form field values
        console.log("Form Values:", formValues); // Log form field values
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
                    <FormBuilder form={form} /> {/* Pass form instance to FormBuilder */}
                </Modal>
            </div>
            <div className="list-container">
                {items.map((item, index) => (
                    <div className="form-list" key={index}>
                        <Link
                            to={"/form/" + item.title}
                            style={{ textDecoration: "none", color: "#000" }}
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
