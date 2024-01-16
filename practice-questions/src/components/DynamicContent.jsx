function DynamicContent() {
  const handleClick = () => console.log("Clicked");

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default DynamicContent;
