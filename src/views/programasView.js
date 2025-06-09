import React from 'react';
import ProgramaDetail from '../components/programas/programaDetail';
import Header from '../components/header/header';
import HeroConfig from '../components/header/hero/heroConfig/heroConfig';

const initialProgram = {
  title: "Alianza Solidaria para el Bienestar Financiero de los Empleados de MIPYMES",
  executiveSummary: "Este proyecto propone una alianza estratégica entre MIPYMES de la República Dominicana y la Cooperativa Coopinnovadores, a fin de brindar a los empleados soluciones financieras solidarias en momentos de emergencia. El modelo establece que las MIPYMES participen mediante la apertura de un certificado de inversión que respalde los préstamos solicitados por sus empleados ante la cooperativa, quienes a su vez garantizan dichos fondos con sus prestaciones laborales.",
  justification: "El acceso limitado al crédito por parte de empleados de pequeñas y medianas empresas genera vulnerabilidad ante situaciones imprevistas. Coopinnovadores, consciente de esta necesidad, propone un esquema solidario y seguro que beneficie a todas las partes involucradas, mediante el respaldo institucional del empleador y el compromiso del empleado, sin comprometer el flujo de caja de la MIPYME."
};
const programs = [initialProgram];

// This component will be passed to the Header component
const ProgramasPageContent = () => (
  <div style={{ padding: '20px', maxWidth: '960px', margin: '20px auto' }}>
    {/* The title "Nuestros Programas" will come from the Hero section via HeroConfig.Programas */}
    {programs.map((program, index) => (
      <ProgramaDetail
        key={index}
        title={program.title}
        executiveSummary={program.executiveSummary}
        justification={program.justification}
      />
    ))}
  </div>
);

const ProgramasView = () => {
  return (
    <Header
      HeroConfig={HeroConfig.Programas} // Use the new Programas config from heroConfig.js
      cooperativaLogo={true} // Consistent with AboutUs and Register views
      // Pass the content for the main section.
      // The Header component uses props like 'AboutUs', 'RegisterSection' etc. to render content.
      // We'll use the 'AboutUs' prop name as a convention for rendering main page content.
      AboutUs={ProgramasPageContent}
    />
  );
};

export default ProgramasView;
