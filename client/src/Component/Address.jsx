import React, { useEffect, useState } from "react";
import { SelectAddress } from "../Component";
import { apiGetPublicDistricts, apiGetPublicProvinces } from "../Service";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) setProvinces(response?.data.results);
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistricts(province);
      if (response.status === 200) setDistricts(response.data?.results);
    };
    province && fetchPublicDistrict(province);
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <SelectAddress
            type="province"
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh/Thành phố"
          />
          <SelectAddress
            type="district"
            reset={reset}
            value={district}
            setValue={setDistrict}
            options={districts}
            label="Quận/Huyện"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="exactly-address">
            Địa chỉ chính xác
          </label>
          <input
            id="exactly-address"
            type="text"
            readOnly
            className="border border-gray-300 outline-none rounded-md bg-gray-300 p-2 w-full"
            value={`${
              district
                ? `${
                    districts?.find((item) => item.district_id === district)
                      ?.district_name
                  },`
                : ""
            } ${
              province
                ? provinces?.find((item) => item.province_id === province)
                    ?.province_name
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
