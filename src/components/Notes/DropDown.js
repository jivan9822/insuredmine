import { useState, useRef, useEffect } from 'react';

function Dropdown({ classChange, onSelect }) {
  const options = [
    'Gina Williams',
    'Jake Williams',
    'Jamie John',
    'John Doe',
    'Jeff Stewart',
    'Paula M. Keith',
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOptionChange = (event) => {
    const newIndex = event.target.selectedIndex;
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 38) {
      // Up arrow
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? options.length - 1 : prevIndex - 1
      );
      event.preventDefault();
    } else if (event.keyCode === 40) {
      // Down arrow
      setSelectedIndex((prevIndex) =>
        prevIndex === options.length - 1 ? 0 : prevIndex + 1
      );
      event.preventDefault();
    } else if (event.keyCode === 13) {
      // Enter key
      onSelect(options[selectedIndex]);
    }
  };

  const selectRef = useRef(null);

  useEffect(() => {
    selectRef.current.focus();
  }, []);

  return (
    <select
      ref={selectRef}
      value={options[selectedIndex]}
      onChange={handleOptionChange}
      onKeyDown={handleKeyDown}
      size={options.length}
      style={{ border: 'none', outline: 'none', overflow: 'hidden' }}
      onBlur={() => onSelect(options[selectedIndex])}
    >
      {options.map((option, ind) => (
        <option key={ind} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
