import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../Component";
import { useLocation, useNavigate } from "react-router-dom";

import * as actions from "../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setRegister] = useState(location.state?.flag);
  const [invalidFiels, setInvalidFiels] = useState([]);
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
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));

    console.log(invalids);
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);

    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFiels((prev) => [
          ...prev,
          {
            name: item[0],
            message: "You do not empty",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFiels((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Password must have 6 character",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFiels((prev) => [
              ...prev,
              {
                name: item[0],
                message: "number invalid",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
      <h3 className="font-semibold text-2xl mb-3 flex justify-center">
        {isRegister ? "Register" : "Login"}
      </h3>
      <div className="w-full flex flex-col gap-3">
        {isRegister && (
          <InputForm
            setInvalidFiels={setInvalidFiels}
            invalidFiels={invalidFiels}
            lable={"Full Name"}
            value={payload.name}
            setValue={setPayload}
            keyPayload={"name"}
          />
        )}
        <InputForm
          setInvalidFiels={setInvalidFiels}
          invalidFiels={invalidFiels}
          lable={"Phone"}
          value={payload.phone}
          setValue={setPayload}
          keyPayload={"phone"}
        />
        <InputForm
          setInvalidFiels={setInvalidFiels}
          invalidFiels={invalidFiels}
          lable={"Password"}
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
            You had a account ?{" "}
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
  );
};

export default Login;
