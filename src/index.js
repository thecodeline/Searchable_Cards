import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import './App.css';
import Out from "./components/out/out";
import Counter from './components/Count';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Counter/>);