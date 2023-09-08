import React from "react";

interface titleProps {
  text: string;
  padding?: string;
}
export default function Title(props: titleProps) {
  return (
    <>
      <p
        style={{ padding: props.padding }}
        className="font-bold text-dark  text-xl "
      >
        {props.text}
      </p>
    </>
  );
}
