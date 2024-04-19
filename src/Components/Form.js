import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FIELD_MAPPING } from './constants';

const Form = () => {
    const { formName } = useParams();
    const items = useSelector((state) => state.form.items);
    const [formData, setFormData] = useState(null);
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const filteredData = items.filter(item => item.title === formName);
        setFormData(filteredData.length > 0 ? filteredData[0] : null);
    }, [formName, items]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Values:", formValues);
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: newValue
        }));
    };

    return (
        <div className="form-main-container">
            {formData && (
                <>
                    <h3 className='form-title'>{formData.title}</h3>
                    <form className="form-container" onSubmit={handleSubmit}>
                        {formData.fields.map((field, index) => (
                            <div className='field' key={index}>
                                <div className="filed-label">{field.label}</div>
                                <div className="field-type">
                                    {FIELD_MAPPING[field.type]({
                                        ...field,
                                        key: index,
                                        onChange: handleChange
                                    })}
                                </div>
                            </div>
                        ))}
                        <div className='submit-btn'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default Form;
