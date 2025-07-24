import React from "react";

const Step1 = ({ value, update }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("name,value :>> ", id, e.target);
    update({ type: id, value: value });
  };
  return (
    <div className="step1">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={value.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={value.lastName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Step1;
