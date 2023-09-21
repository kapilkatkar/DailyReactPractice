import { useState } from "react";

const RegisterProfile = () => {
  const [uName, setUName] = useState("Gunjan Bajaj");
  const [uEmail, setUEmail] = useState("gunjan12@google.com");
  const [uCity, setUCity] = useState("Pune");

  return (
    <div>
      <p>My Profile</p>
      <div className="form-element">
        <p>Name - {uName}</p>
        <input
          type="text"
          value={uName}
          onChange={(e) => setUName(e.target.value)}
        />
      </div>

      <div className="form-element">
        <p>Email - {uEmail}</p>
        <input
          type="text"
          value={uEmail}
          onChange={(e) => setUEmail(e.target.value)}
        />
      </div>

      <div className="form-element">
        <p>City - {uCity}</p>
        <input
          type="text"
          value={uCity}
          onChange={(e) => setUCity(e.target.value)}
        />
      </div>
    </div>
  );
};
export default RegisterProfile;
