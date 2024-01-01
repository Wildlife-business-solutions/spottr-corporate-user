import React from "react";
import Form from "react-bootstrap/Form";

const TaskActive = ({ setActiveInput, activeInput }) => {
  const handleChange = (e) => {
    setActiveInput({
      ...activeInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onChange={handleChange} className="text-center">
      <div className="mb-3">
        <Form.Check
          inline
          label="Yes"
          value="yes"
          name="radioInput"
          type={"radio"}
          id={`inline-${"radio"}-1`}
        />
        <Form.Check
          inline
          label="No"
          name="radioInput"
          value="no"
          type={"radio"}
          id={`inline-${"radio"}-2`}
        />
      </div>
    </Form>
  );
};

export default TaskActive;
