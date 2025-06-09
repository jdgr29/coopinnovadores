import React from 'react';
import PropTypes from 'prop-types';
import Styles from './programaDetail.module.css';

const ProgramaDetail = ({ title, executiveSummary, justification }) => {
  return (
    <div className={Styles.programaContainer}>
      {title && <h2 className={Styles.programaTitle}>{title}</h2>}

      {executiveSummary && (
        <>
          <h3 className={Styles.programaSubtitle}>Resumen Ejecutivo</h3>
          <p className={Styles.programaText}>{executiveSummary}</p>
        </>
      )}

      {justification && (
        <>
          <h3 className={Styles.programaSubtitle}>Justificación</h3>
          <p className={Styles.programaText}>{justification}</p>
        </>
      )}
    </div>
  );
};

ProgramaDetail.propTypes = {
  title: PropTypes.string.isRequired,
  executiveSummary: PropTypes.string,
  justification: PropTypes.string,
};

export default ProgramaDetail;
