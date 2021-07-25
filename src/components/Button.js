import PropTypes from 'prop-types';


const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
        </div>
    )
}

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
    color: 'steelBlue',
    onClick: () => { },
    text: 'Button'
}

export default Button;