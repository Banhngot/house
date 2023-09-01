import React from "react";
import { text } from "../Ultils/datacontact";
import { Button } from "../Component";

const Contact = () => {
  return (
    <div className=" bg-white rounded-md shadow-md p-4 w-[65%] flex flex-col justify-center items-center gap-6">
      <img
        src={text.image}
        alt="contact"
        className="w-full h-48 object-contain"
      />
      <p>{text.content}</p>
      <div className="flex  items-center justify-around w-full">
        {text.contacts.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-orange-500 font-semibold">{item.text}</span>
              <span className="text-blue-700 text-[24px] font-semibold">
                {item.phone}
              </span>
              <span className="text-blue-700 text-[24px] font-semibold">
                {item.zalo}
              </span>
            </div>
          );
        })}
      </div>
      <Button text="Liên hệ" bgColor="bg-blue-500" textColor="text-white" />
    </div>
  );
};

export default Contact;
