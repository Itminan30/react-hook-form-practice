
const NumberInput = ({value, onChange, ...rest}) => {
    const handleChange = (event) => {
        const value = event.target.valueAsNumber || 0;
        onChange(value);
    }
    return (
        <input 
        type="number"
        min={0}
        onChange={handleChange}
        value={value}
        {...rest}
        />
    );
};
export default NumberInput;