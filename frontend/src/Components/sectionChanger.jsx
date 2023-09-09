import React from "react";
import { useType } from "../Utils/contextProvider";

const SectionChanger = ({ type }) => {
  const { selectType } = useType(); 

  const handleSectionChange = () => {
    try {
      selectType(type);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <a onClick={handleSectionChange} className="text-sm">
      {type}
    </a>
  );
};

export default SectionChanger;
