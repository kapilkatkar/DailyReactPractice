import { useState } from "react";

const MissigleLaunch = () => {
  const [openTunnel, setOpenTunnle] = useState("OFF");
  const [enablePower, setEnablePower] = useState("OFF");
  const [startCountdown, setStartCountdown] = useState("OFF");
  const [lanuchMissile, setLanuchMissile] = useState("OFF");

  const onOpenTunnle = () => {
    if (openTunnel === "OFF") {
      setOpenTunnle("ON");
    }
    if (openTunnel === "ON") {
      setOpenTunnle("OFF");
      setEnablePower("OFF");
      setStartCountdown("OFF");
      setLanuchMissile("OFF");
      document.getElementById("success").innerText = "please try again";
    }
  };

  //openTunnel === 'ON' ? OnEnablePower() :

  const OnEnablePower = () => {
    //setEnablePower("ON");
    if (enablePower === "OFF") {
      setEnablePower("ON");
    }
    if (enablePower === "ON") {
      setEnablePower("OFF");
      setStartCountdown("OFF");
      setLanuchMissile("OFF");
      document.getElementById("success").innerText = "please try again";
    }
  };
  const onStartCountdown = () => {
    //setStartCountdown("ON");
    if (startCountdown === "OFF") {
      setStartCountdown("ON");
    }
    if (startCountdown === "ON") {
      setStartCountdown("OFF");
      setLanuchMissile("OFF");
      document.getElementById("success").innerText = "please try again";
    }
  };

  const onLanuchMissile = () => {
    setLanuchMissile("ON");
    document.getElementById("success").innerText =
      "Missile Lanuched Successfully.";
  };
  return (
    <div>
      <div>
        <p>on-off : {openTunnel}</p>
        <button value={openTunnel} onClick={onOpenTunnle}>
          Open Tunnle
        </button>
      </div>
      <div>
        <p>on-off : {enablePower}</p>
        <button onClick={OnEnablePower} disabled={openTunnel !== "ON"}>
          Enable Power
        </button>
      </div>
      <div>
        <p>on-off : {startCountdown}</p>
        <button
          onClick={onStartCountdown}
          disabled={enablePower !== "ON" || openTunnel !== "ON"}
        >
          {" "}
          Start Countdown
        </button>
      </div>
      <div>
        <p>on-off :{lanuchMissile}</p>
        <button
          onClick={onLanuchMissile}
          disabled={
            startCountdown !== "ON" ||
            openTunnel !== "ON" ||
            enablePower !== "ON"
          }
        >
          Lanuch Missile
        </button>
      </div>
      <p id="success"></p>
    </div>
  );
};

export default MissigleLaunch;
