import React, { useState } from 'react';
import QRCode from 'react-qr-code';
 
function App() {
    const DEFAULTS = {
      value: '',
      back: '#fff',
      fore: '#000',
      size: 256,
    }
    const [value, setValue] = useState<string>(DEFAULTS.value);
    const [back, setBack] = useState<string>(DEFAULTS.back);
    const [fore, setFore] = useState<string>(DEFAULTS.fore);
    const [size, setSize] = useState<number>(DEFAULTS.size);

    const renderController = () => {
      return (
      <>
        <div>
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value || DEFAULTS.value)}  
            placeholder="Value of Qr-code"  
          />
        </div>
        <div>
          <input 
            type="text" 
            value={back}
            onChange={(e) => setBack(e.target.value || DEFAULTS.back)} 
            placeholder="Background color" 
          /> 
        </div>
        <div>
          <input 
            type="text" 
            value={fore}
            onChange={(e) => setFore(e.target.value || DEFAULTS.fore)} 
            placeholder="Foreground color" 
          />
        </div>
        <div>
          <input
            type="number"
            min={DEFAULTS.size}
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value) || DEFAULTS.size)}
            placeholder="Size of Qr-code"
          />
        </div>
      </>);
    }
 
    return (
        <div className="App">
          {renderController()}
          <br />
          {value && (
              <QRCode value={value} bgColor={back} fgColor={fore} size={size} />
          )}
        </div>
    );
}
 
export default App;