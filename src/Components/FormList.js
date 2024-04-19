import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import FormBuilder from './FormBuilder'
import { Link } from 'react-router-dom';
import { deleteForm } from '../redux/Slices/formSlice';

const FormList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const items = useSelector((store) => (store.form.items));
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const handleDeleteForm = (formName) => {
        dispatch(deleteForm(formName));
    };

    return (
        <div className='container'>
            <div className='btn'>
                <button className='create-btn' onClick={showModal}>Create New Form</button>
                <Modal
                    title={<><FormOutlined /> New Form</>}
                    open={isModalOpen}
                    onCancel={handleCancel}
                    width={1000}
                    destroyOnClose
                    footer={null}
                >
                    <FormBuilder form={form} setIsModalOpen={setIsModalOpen} />
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
                        <div className="action" onClick={() => handleDeleteForm(item.title)}>X</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormList;
