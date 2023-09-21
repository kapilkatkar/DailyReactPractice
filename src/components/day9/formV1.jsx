import { useState } from "react";

const FormV1 = () => {
  const [profile, setProfile] = useState({ name: "", email: "", gender: "" });

  const onInputChange = (e) => {
    //console.log(e);
    const { name, value } = e.target;
    console.log({ name, value });

    // First Way - Normal way
    setProfile({ ...profile, [name]: value });
  };
  return (
    <div>
      <div className="form-elem">
        <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={profile.name}
          onChange={onInputChange}
        />
      </div>
      <div className="form-elem">
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={profile.email}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default FormV1;
