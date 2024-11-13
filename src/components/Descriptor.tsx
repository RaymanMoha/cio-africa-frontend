import React, { FC } from "react";

interface DescriptorProps {
  title: string;
}

const Descriptor: FC<DescriptorProps> = ({ title }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-md">
      <p className="text-gray-600 text-sm leading-5 font-medium">
        {title}
      </p>
    </div>
  );
};

export default Descriptor;
