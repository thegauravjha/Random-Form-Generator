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

    return (
        <div className='container'>
            <div className='btn'>
                <button className='create-btn' onClick={showModal}>Create New From</button>
                <Modal
                    title={<><FormOutlined /> New Form</>}
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    width={1000}
                    destroyOnClose
                    footer={null}
                >
                    <FormBuilder form={form} setIsModalOpen={setIsModalOpen} /> {/* Pass form instance to FormBuilder */}
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
