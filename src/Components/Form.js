import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Form = () => {
    const { formName } = useParams();
    const items = useSelector((state) => (state.form.items))
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const filteredData = items.filter(item => item.title === formName);
        setFormData(filteredData.length > 0 ? filteredData[0] : null);
    }, [formName, items]);

    console.log("formData => ", formData);
    return (
        <>
            {
                formData &&
                <>
                    {formData.title} Form
                </>
            }
        </>
    )
}

export default Form