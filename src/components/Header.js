import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAddClick, showForm }) => {


    return (
        <div className="header">
            <header> <h1>{title}</h1></header>
            {!showForm ? <Button color='green' text='Add' onClick={onAddClick} /> : <Button color='red' text='close' onClick={onAddClick} />}
        </div>
    )
}


Header.defaultProps = {
    title: 'Taskify'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header
