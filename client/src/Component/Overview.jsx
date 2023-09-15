import React from "react";
import { SelectAddress, InputReadOnly, InputFormV2 } from "./";
import { useSelector } from "react-redux";

const targets = [
  { code: "Nam", value: "Nam" },
  { code: "Nữ", value: "Nữ" },
  { code: "Tất cả", value: "Tất cả" },
];

const Overview = ({ payload, setPayload, invalidFields, setInvalidFields }) => {
  const { categories } = useSelector((state) => state.app);
  const { currentData } = useSelector((state) => state.user);
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Thông tin mô tả</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="w-1/2">
          <SelectAddress
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.categoryCode}
            setValue={setPayload}
            name="categoryCode"
            options={categories}
            label="Loại chuyên mục"
          />
        </div>
        <InputFormV2
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          value={payload.title}
          setValue={setPayload}
          name="title"
          label="Tiêu đề"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Nội dung mô tả</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            className="w-full rounded-md outline-none border border-gray-300 p-2"
            value={payload.description}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, description: e.target.value }))
            }
            onFocus={() => setInvalidFields([])}
          ></textarea>
          <small className="text-red-500 block w-full">
            {invalidFields?.some((item) => item.name === "description") &&
              invalidFields?.find((item) => item.name === "description")
                ?.message}
          </small>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <InputReadOnly
            label="Thông tin liên hệ"
            value={currentData?.name || currentData?.username}
          />
          <InputReadOnly label="Điện thoại" value={currentData?.phone} />
          <InputFormV2
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.priceNumber}
            setValue={setPayload}
            small="Nhập đầy đủ số, ví dụ 1 triệu thì ghi 1000000"
            label="Giá cho thuê"
            unit="đồng"
            name="priceNumber"
          />
          <InputFormV2
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.areaNumber}
            setValue={setPayload}
            name="areaNumber"
            label="Diện tích"
            unit="m2"
          />
          <SelectAddress
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={payload.target}
            setValue={setPayload}
            name="target"
            options={targets}
            label="Đối tượng cho thuê"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
