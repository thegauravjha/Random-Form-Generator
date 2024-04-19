export const FIELD_MAPPING = {
    input: ({ label, rules, onChange }) => (
        <input type="text" onChange={onChange} name={label} required={rules.some(rule => rule.required)} />
    ),
    dropdown: ({ label, options, rules, onChange }) => (
        <select name={label} required={rules.some(rule => rule.required)} onChange={onChange}>
            <option value="">Select {label}</option>
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
    radio: ({ label, options, rules, onChange }) => (
        <div>
            {options.map(option => (
                <label key={option} className="radio-label">
                    <input type="radio" name={label} value={option} required={rules.some(rule => rule.required)} onChange={onChange} />
                    {option}
                </label>
            ))}
        </div>
    ),
    upload: ({ label, rules, onChange }) => (
        <input type="file" name={label} required={rules.some(rule => rule.required)} onChange={onChange} accept={rules[0].fileSupport.map(type => `.${type}`).join(',')} />
    )
};
