import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <section className="counter-card">
        <p className="eyebrow">REACT + VITE</p>
        <h1>Counter App</h1>
        <div className="count" aria-live="polite">{count}</div>
        <div className="actions">
          <button onClick={() => setCount(count - 1)} aria-label="Decrease counter">−</button>
          <button className="reset" onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)} aria-label="Increase counter">+</button>
        </div>
        <p className="hint">Use the buttons to change the count.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
