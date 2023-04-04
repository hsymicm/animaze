import { useState } from 'react';
import '@/assets/styles/TextArea.css';

export default function TextArea({ label, getText, defaultVal }) {
  const [text, setText] = useState(defaultVal || '');

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
    if (getText) getText(val);
  };

  return (
    <>
      <h4>{label}</h4>
      <textarea value={text} onChange={handleChange} className="text-area" />
    </>
  );
}
