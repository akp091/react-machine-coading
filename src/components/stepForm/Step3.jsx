import React from "react";

const Step3 = ({ value, update }) => {
  return (
    <div className="step3">
      <div>
        <label htmlFor="phoneNo">Phone Number</label>
        <input type="text" name="phoneNo" id="phoneNo" value={value.phoneNo} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={value.email} />
      </div>
    </div>
  );
};

export default Step3;
