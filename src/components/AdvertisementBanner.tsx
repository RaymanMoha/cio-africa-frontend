import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AdvertisementBanner: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div style={{ minHeight: "700px", minWidth: "300px", backgroundColor: "lightblue", border: "2px solid darkblue", borderRadius: "10px", padding: "20px" }}>
      <h2 style={{ color: "darkblue", marginBottom: "20px" }}>Advertisement Banner</h2>
      {children}
    </div>
  );
};

export default AdvertisementBanner;
