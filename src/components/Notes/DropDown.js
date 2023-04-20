function Dropdown({ classChange, onSelect }) {
  const options = [
    'Gina Williams',
    'Jake Williams',
    'Jamie John',
    'John Doe',
    'Jeff Stewart',
    'Paula M. Keith',
  ];

  const handleSelect = (value) => {
    onSelect(value);
  };

  return (
    <div className='dropdown-list'>
      {options.map((option, index) => (
        <div
          key={index}
          className='dropdown-item'
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
