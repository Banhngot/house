import React, { useState } from "react";
import { InputForm, Button } from "../../Component";
import Swal from "sweetalert2";

const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    content: "",
  });
  const handleSubmit = () => {
    Swal.fire("Thanks !", "Phản hồi của bạn đã được ghi nhận", "success").then(
      () => {
        setPayload({
          name: "",
          phone: "",
          content: "",
        });
      }
    );
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-4 h-fit bg-orange-400 rounded-3xl p-4 text-black bg-gradient-to-br from-orange-400 to-cyan-300">
          <h4 className="font-medium">Thông tin liên hệ</h4>
          <span>
            Chúng tôi biết bạn có nhiều sự lựa chọn. Nhưng cảm ơn bạn đã tin
            tưởng chọn Dreamhouse.com
          </span>
          <span>Điện thoại: 0979579939</span>
          <span>Email: CSKH@gmail.com</span>
          <span>Zalo: 0979579939</span>
          <span>Viber: 0979579939</span>
          <span>Địa chỉ liên hệ: Q1, Tp Hồ chí Minh</span>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md p-4 mb-6">
          <h4 className="font-medium text-lg mb-4">Liên hệ trực tuyến</h4>
          <div className="flex flex-col gap-4">
            <InputForm
              label="HỌ VÀ TÊN"
              value={payload.name}
              setValue={setPayload}
              keyPayload="name"
            />
            <InputForm
              label="SỐ ĐIỆN THOẠI"
              value={payload.phone}
              setValue={setPayload}
              keyPayload="phone"
            />
            <div>
              <label htmlFor="desc">NỘI DUNG MÔ TẢ</label>
              <textarea
                className="outline-none bg-[#e8f0fe] p-2  rounded-md w-full"
                id="desc"
                cols="10"
                rows="3"
                value={payload.content}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, content: e.target.value }))
                }
                name="content"
              ></textarea>
            </div>
            <Button
              text="Gửi liên hệ"
              bgColor="bg-blue-500"
              textColor="text-white"
              fullWidth
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
