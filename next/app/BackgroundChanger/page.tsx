"use client";
import React, { useState } from "react";
import ButtonToChangeColor from "@/components/ButtonToChangeColor";

const BackgroundColorChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-xl">

          <ButtonToChangeColor
            label="Red"
            color="red"
            isActive={color === "red"}
            onClick={setColor}
          />

          <ButtonToChangeColor
            label="Blue"
            color="blue"
            isActive={color === "blue"}
            onClick={setColor}
          />

          <ButtonToChangeColor
            label="Green"
            color="green"
            isActive={color === "green"}
            onClick={setColor}
          />

        </div>
      </div>
    </div>
  );
};

export default BackgroundColorChanger;
