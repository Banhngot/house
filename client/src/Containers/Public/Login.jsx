import React, { useState } from "react";
import { InputForm, Button } from "../../Component";

const Login = () => {
  const [isRegister, setRegister] = useState(false);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
      <h3 className="font-semibold text-2xl mb-3 flex justify-center">
        {isRegister ? "Register" : "Login"}
      </h3>
      <div className="w-full flex flex-col gap-3">
        {isRegister && <InputForm lable={"Full Name"} />}
        <InputForm lable={"Phone"} />
        <InputForm lable={"Password"} />
        <Button
          text={isRegister ? "Register" : "Login"}
          bgColor="bg-secondary1"
          textColor="text-black"
          fullWidth
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
