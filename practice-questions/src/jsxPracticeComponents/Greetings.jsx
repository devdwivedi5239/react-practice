
function greetings() {
  const buttonStyle = {
    backgroundColor: 'blue',
    fontSize: '16px',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle}>Click Me</button>
    </div>
  )
}

export default greetings