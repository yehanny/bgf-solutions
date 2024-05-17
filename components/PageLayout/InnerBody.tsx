import React, { ReactNode } from "react";

interface InnerBodyProps {
  children: ReactNode;
}

const InnerBody: React.FC<InnerBodyProps> = ({ children }) => {
  return <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto space-y-16 md:space-y-24 p-10">{children}</div>;
};

export default InnerBody;
