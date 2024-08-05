import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const ResponseNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.responseName || id.replace('customresponse-', 'response_'));
  const [responseType, setResponseType] = useState(data?.responseType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setResponseType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', padding: 10 }}>
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
            style={{ marginLeft: 5 }}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={responseType} onChange={handleTypeChange} style={{ marginLeft: 5 }}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ResponseNode;
