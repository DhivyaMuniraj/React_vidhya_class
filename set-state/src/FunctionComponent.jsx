import { useState } from "react";

const Function1 = () => {
  const [userName, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {userName}</p>
    </div>
  );
};

export default Function1;
