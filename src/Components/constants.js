export const FIELD_TYPES = [
    {
        label: 'input',
        value: 'input',
    },
    {
        label: 'dropdown',
        value: 'dropdown',
    },
    {
        label: 'checkbox',
        value: 'checkbox',
    },
    {
        label: 'radio',
        value: 'radio',
    },
    {
        label: 'upload',
        value: 'upload',
    }
];

export const FORM_BUILDER_MAPPING = {
    input: {
        label: 'Label Name',
        rules: [{ required: true, message: 'Label name is required' }]
    },
    dropdown: {
        label: 'Label Name',
        options: 'Options'
    },
    checkbox: {
        label: 'Label Name',
        options: 'Options'
    },
    radio: {
        label: 'Label Name',
        options: 'Options'
    },
    upload: {
        label: 'Label Name',
        rules: [{ required: true, message: 'Label name is required' }],
        maxFileSize: 'Max File Size (MB)',
        fileSupport: 'Supported File Types'
    }
};


export const FIELD_MAPPING = {
    input: ({ label, rules = [], onChange }) => (
        <input type="text" onChange={onChange} name={label} required={rules.some(rule => rule.required)} />
    ),
    dropdown: ({ label, options, rules, onChange }) => (
        <select name={label} required={rules.some(rule => rule.required)} onChange={onChange}>
            <option value="">Select an option</option>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    ),
    checkbox: ({ label, options, onChange }) => (
        <div>
            {options.map(option => (
                <label key={option} className="checkbox-label">
                    <input type="checkbox" name={`${label}-${option}`} value={option} onChange={onChange} />
                    {option}
                </label>
            ))}
        </div>
    ),
    radio: ({ label, options, rules = [], onChange }) => (
        <div>
            {options.map(option => (
                <label key={option} className="radio-label">
                    <input type="radio" name={label} value={option} required={rules.some(rule => rule.required)} onChange={onChange} />
                    {option}
                </label>
            ))}
        </div>
    ),
    upload: ({ label, rules = [], onChange }) => {
        const fileSupport = rules?.[0]?.fileSupport || [];
        return (
            <input type="file" name={label} required={rules.some(rule => rule.required)} onChange={onChange} accept={fileSupport.map(type => `.${type}`).join(',')} />
        );
    }
};
