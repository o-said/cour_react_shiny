import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import de 'react-router-dom' au lieu de 'react-router'

function Survey() {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  );
}

export default Survey;
