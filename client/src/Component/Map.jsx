import React, { memo } from "react";
import GoogleMapReact from "google-map-react";
import { CiLocationOn } from "react-icons/ci";

const Position = ({ icon }) => <div>{icon}</div>;
const Map = ({ coords, address }) => {
  return (
    <div className="h-[300px] w-full relative">
      <div className="absolute top-0 z-50 bg-white max-w-[200px] top=[8px] left-[8px] shadow-md p-4 text-xs">
        {address}
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
        defaultCenter={coords}
        defaultZoom={11}
        center={coords}
      >
        <Position
          lat={coords?.lat}
          lng={coords?.lng}
          icon={<CiLocationOn color="red" size={40} />}
          text={address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default memo(Map);
