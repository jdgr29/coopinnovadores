import React from 'react';
import Styles from './misionVision.module.css';

const MisionVision = () => {
  return (
    <section className={Styles.misionVisionSection}>
      <h2>Misión</h2>
      <p>
        Facilitar el acceso de estudiantes dominicanos a programas de estudios
        de verano en el exterior, promoviendo el ahorro, el compromiso
        comunitario y el desarrollo personal y profesional.
      </p>
      <h2>Visión</h2>
      <p>
        Ser la principal cooperativa en la República Dominicana que apoya a
        estudiantes en su desarrollo académico y cultural a través de
        programas internacionales.
      </p>
    </section>
  );
};

export default MisionVision;
