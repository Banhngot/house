import React from "react";
import { InputForm, Button } from "../../Component";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
      <h3 className="font-semibold text-2xl mb-3 flex justify-center">Login</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm lable={"Phone"} />
        <InputForm lable={"Password"} />
        <Button
          text="Login"
          bgColor="bg-secondary1"
          textColor="text-black"
          fullWidth
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-[blue] hover:text-[orange] cursor-pointer">
          Forgot password ?
        </small>
        <small className="text-[blue] hover:text-[orange] cursor-pointer">
          New Account
        </small>
      </div>
    </div>
  );
};

export default Login;
