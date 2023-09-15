import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../Component";
import { useLocation, useNavigate } from "react-router-dom";

import * as actions from "../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validate from "../../Ultils/Common/validateFields";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload, setInvalidFields);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
        <h3 className="font-semibold text-2xl mb-3 flex justify-center">
          {isRegister ? "Register" : "Login"}
        </h3>
        <div className="w-full flex flex-col gap-3">
          {isRegister && (
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label={"Full Name"}
              value={payload.name}
              setValue={setPayload}
              keyPayload={"name"}
            />
          )}
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"Phone"}
            value={payload.phone}
            setValue={setPayload}
            keyPayload={"phone"}
          />
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"Password"}
            value={payload.password}
            setValue={setPayload}
            keyPayload={"password"}
            type="password"
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
              You had a account ?
              <span
                onClick={() => {
                  setRegister(false);
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
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
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
                className="text-[blue] hover:text-[orange] cursor-pointer"
              >
                New Account
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
