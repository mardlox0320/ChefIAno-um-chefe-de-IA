import type React from 'react'
import "../App.css";
import { PencilIcon } from './Pencil'; 

interface Props {
  items: string[];
  children?: React.ReactNode;
}
const novaconversa = () => {
  window.location.reload();
}
 const Examples = ({ items, children }: Props) => {
  return (
    <div id="examples-container">
      <div id="examples-header">
      <button id='new-conversation' onClick={novaconversa}>
        <PencilIcon size={16} color="#1a64d3" /> Nova receita
      </button>
      <h1 id="h1-EX">Receitas</h1>
      </div>
      <ul id="example-list">
        {items.map((item, index) => (
          <li key={index}>
            <button className="btn btn-dark" id="example-button">
              {item}
            </button>
          </li>
        ))}
      </ul>
      {children}
    </div>
    
  );
 }

export default Examples;