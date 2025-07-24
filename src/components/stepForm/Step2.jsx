import React from "react";

const Step2 = ({ value, update }) => {
  return (
    <div className="step2">
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" value={value.address}/>
      </div>
      <div>
        <label htmlFor="pinCode">Pin Code</label>
        <input type="text" name="pinCode" id="pinCode" value={value.pinCode} />
      </div>
    </div>
  );
};

export default Step2;
