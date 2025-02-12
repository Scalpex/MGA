import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div style={{ fontFamily: 'Schoensperger Fr, sans-serif' }}>
      <h1>Test de la police personnalisée</h1>
      <p>Si ce texte s'affiche dans la bonne police, c'est bon !</p>
    </div>
  );
}
export default App;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
