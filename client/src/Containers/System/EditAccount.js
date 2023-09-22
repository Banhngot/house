import React, { useState } from "react";
import { InputReadOnly, InputFormV2, Button } from "../../Component";
import logo from "../../assests/logo.png";

const EditAccount = () => {
  const [invalidFields, setInvalidFields] = useState([]);
  return (
    <div className="flex flex-col h-full items-center">
      <h1 className="text-3xl w-full text-start font-medium py-4  border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 flex items-center justify-center flex-auto">
        <div className="py-6 flex flex-col gap-4 w-full">
          <InputReadOnly direction="flex-row" label="Mã thành viên" />
          <InputReadOnly editPhone direction="flex-row" label="Số điện thoại" />

          <InputFormV2
            setValue
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            direction="flex-row"
            label="Tên hiển thị"
          />
          <InputFormV2
            direction="flex-row"
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Email"
          />
          <InputFormV2
            direction="flex-row"
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Zalo"
          />
          <InputFormV2
            direction="flex-row"
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label="Facebook"
          />
          <div className="flex">
            <label className="w-48 flex-none" htmlFor="password">
              Mật khẩu
            </label>
            <small className="flex-auto text-blue-500 h-12 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <img
              src={logo}
              alt="avatar"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
