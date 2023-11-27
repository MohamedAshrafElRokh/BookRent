"use client";
import { Toaster } from "react-hot-toast";
import React from "react";

const ToasterProvider = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ToasterProvider;
