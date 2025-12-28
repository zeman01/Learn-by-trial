"use client";
import React, { FC } from "react";

type IProps = {
  color: string;
  label: string;
  isActive: boolean;
  onClick: (color: string) => void;
};

const ButtonToChangeColor: FC<IProps> = ({ label, color, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: isActive ? color : "white" }}
    >
      {label}
    </button>
  );
};

export default ButtonToChangeColor;
