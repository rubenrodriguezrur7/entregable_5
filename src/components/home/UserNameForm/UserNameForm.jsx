import { useState } from "react";
import { useRef } from "react";
import "./UserNameForm.css";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState('');
  const [nameError, setNameError] = useState('');
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

    if (!nameValue) 
      setNameError('El nombre esta vacio');
    else if (/[^a-z]/i.test(nameValue))
      setNameError("Solo permiten letras y espacios");
    else if (!/^[a-z]{2,} ?$/i.test(nameValue))
     setNameError('El nombre debe tener minimo dos letras');
    else setNameError('');

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
  };

  return (
    <form className="home_form" onSubmit={handleSubmit}>
      {Boolean(nameError) && <p>{nameError}</p>}
      <div className="home_form-aux">
        <input className="input_home" type="text" placeholder="Tu nombre..." value={userNameValue} onChange={handleChange} />
        <button className="home_btn" type="submit">Comenzar</button>
      </div>
    </form>
  );
};

export default UserNameForm;