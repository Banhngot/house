import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../Component";
import { useLocation } from "react-router-dom";

import * as actions from "../../Store/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setRegister(location.state?.flag);
  }, [location.state?.flag]);

  const handleSubmit = async () => {
    console.log(payload);
    dispatch(actions.register(payload));
    // console.log(response);
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
      <h3 className="font-semibold text-2xl mb-3 flex justify-center">
        {isRegister ? "Register" : "Login"}
      </h3>
      <div className="w-full flex flex-col gap-3">
        {isRegister && (
          <InputForm
            lable={"Full Name"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          />
        )}
        <InputForm
          lable={"Phone"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <InputForm
          lable={"Password"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          text={isRegister ? "Register" : "Login"}
          bgColor="bg-secondary1"
          textColor="text-black"
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            You had a account ?{" "}
            <span
              onClick={() => {
                setRegister(false);
              }}
              className="text-yellow-500 hover:underline"
            >
              Login
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[orange] cursor-pointer">
              Forgot password ?
            </small>
            <small
              onClick={() => {
                setRegister(true);
              }}
              className="text-[blue] hover:text-[orange] cursor-pointer"
            >
              New Account
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
