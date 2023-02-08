import React, { useState } from "react";

export default function CheckComponent() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
      {isChecked ? (
        <div className="alert alert-danger" role="alert">
          danger alert
        </div>
      ) : null}
    </div>
  );
}
