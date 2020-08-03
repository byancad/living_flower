import React from "react";

const PlantSearchForm = props => {
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <label>
          Plant Search
          <input
            type="text"
            value={inputValue}
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PlantSearchForm;
