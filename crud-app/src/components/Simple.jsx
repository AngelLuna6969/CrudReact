import React from 'react'
import PropTypes from 'prop-types'

const Simple = ({ titulo, subtitulo, nombre }) => {
    return (
        <>
            <h1 data-testid={'test-title'}>{titulo}</h1>
            <h4>{subtitulo}</h4>
            <p>{nombre}</p>
        </>
    )
}

export default Simple;

Simple.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    nombre: PropTypes.string
}