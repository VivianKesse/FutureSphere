import React from "react";

interface buttonProps {
  title?: string;
  background?: string;
  width?: string;
  link?: string;
  color?: string;
}
export default function Button(props: buttonProps) {
  return (
    <>
      <a href={props.link}>
        <button
          className="rounded-full py-2 px-4 text-center"
          style={{
            color: props.color,
            backgroundColor: props.background,
            width: props.width,
          }}
        >
          {props.title}
        </button>
      </a>
    </>
  );
}
