import React from "react";

interface officeProps {
  city?: string;
  adress?: string;
  phone?: string;
  img?: string;
  alt?: string;
}
export default function Office(props: officeProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-2">
        <img className="rounded-3xl" src={props.img} alt={props.alt} />
        <p className="text-purple text-lg">{props.city}</p>
        <p className="text-grey text-sm">{props.adress}</p>
        <p className="text-dark text-sm">{props.phone}</p>
      </div>
    </>
  );
}
