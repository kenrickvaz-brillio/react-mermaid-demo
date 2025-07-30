import './App.css';
import Mermaid from './mermaid';
import { useState } from 'react';

function App() {
  // create a state for the mermaid chart text in textarea
  const [chartText, setChartText] = useState('graph TD; A-->B;');

  const handleTextChange = (event) => {
    setChartText(event.target.value);
  };
  return (
    <div className="App">
      <h1 style={{height: '50px'}}>React Mermaid Example</h1>
      <div style={{marginLeft: '20px', marginRight: '20px'}}>
        <div style={{ display: 'flex', height: 'calc(100vh - 100px)'}}>
          <textarea
            style={{
              flex: 1,
              resize: 'none',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
            value={chartText}
            onChange={handleTextChange}
            placeholder="Enter Mermaid diagram code here..."
          />
          <div
            className="mermaid-container"
            style={{
              flex: 1,
              overflow: 'auto',
              borderLeft: '1px solid #ccc',
              padding: '10px',
              boxSizing: 'border-box',
            }}
            key={chartText} // Adding a key to force re-render
          >
            <Mermaid chart={chartText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
