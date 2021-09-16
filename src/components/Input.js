function Input() {
  const handleChange = (ev) => {
    console.log("hello", ev.target.value);
  };

  return (
    <div>
      <label htmlFor="name" className="sr-only">
        Enter a Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter a Name"
        className="border-2 border-black my-4 rounded-sm"
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
