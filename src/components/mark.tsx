import React from "react";

interface titleProps {
  title?: string;
}
export default function MarkSection(props: titleProps) {
  return (
    <>
      <p className="rounded-full inline-block  w-auto  py-1.5 px-5 text-center text-purple text-base font-medium border-solid bg-gradient-to-l from-white-50 via-neutral-100 to-stone-200 border-[#EEE2FE] border-2  ">
        {props.title}
      </p>
    </>
  );
}
