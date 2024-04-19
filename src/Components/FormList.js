import React, { useState } from 'react'
import { Modal } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import FormBuilder from './FormBuilder'


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
                <div className="form-list">
                    <div className="form-name">Sample Form {items}</div>
                    <div className="action">X</div>
                </div>
                <div className="form-list">
                    <div className="form-name">Sample Form</div>
                    <div className="action">X</div>
                </div>
            </div>
        </div>
    )
}

export default FormList