"use client";

import * as React from "react";

export default function Page() {
  React.useEffect(() => {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1H-RR5L4BkSGbkKD7FmOmlkCdy_mV4zE2WQpflKxGy6w/edit?usp=sharing";
  }, []);
  return null;
}
