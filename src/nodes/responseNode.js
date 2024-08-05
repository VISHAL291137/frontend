// responseNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const ResponseNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.responseName || id.replace('customresponse-', 'response_'));
  const [responseType, setresponseType] = useState(data.responseType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setresponseType(e.target.value);
  };

 return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div>
        <span>response</span>
      </div>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={responseType} onChange={handleTypeChange}>
            <option value="Text ">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
