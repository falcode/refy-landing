import React from "react";

const Container = ({
  children,
  bgColor,
  classes,
}: {
  children: React.ReactNode;
  bgColor: string;
  classes?: string;
}) => (
  <div className={`bg-${bgColor} w-full px-5 py-12`}>
    <div className={`max-w-7xl mx-auto ${classes}`}>{children}</div>
  </div>
);

export default Container;
