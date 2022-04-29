// functionals components 

import { Fragment } from "react";
import PropTypes from 'prop-types';

const FirstApp = ({saludo,subtitulo}) => {

    return (
        <Fragment>
            <h1> {saludo} </h1>
            <p> {subtitulo}</p>
        </Fragment>
    )}

    FirstApp.propTypes={
        saludo:PropTypes.string.isRequired
    }

export default FirstApp;