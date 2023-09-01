import React from "react";
import { Sitem } from "./index";

const RelatePost = () => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        <Sitem
          title="Phòng trọ mới 100% chung cư Long Sơn Building mặt tiền Huỳnh Tấn Phát , Quận 7. An ninh- Thoáng mát."
          price="40 triệu/tháng"
          createdAt="Hôm nay"
        />
        <Sitem />
        <Sitem />
      </div>
    </div>
  );
};

export default RelatePost;
