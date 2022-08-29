import './styles.css'

export const Button = ({ value, color, bgColor }) => {
    return (
        <button
            className="button"
            style={{ color, backgroundColor: bgColor }}
        >
            {value}
        </button>
    )
}