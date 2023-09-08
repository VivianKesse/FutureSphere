import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface jobProps {
  title?: string;
  time?: string;
  mode?: string;
  description?: string;
  link?: string;
}
export default function Job(props: jobProps) {
  return (
    <>
      <div className="flex flex-col items-start justify-start text-left gap-3">
        <div className="rounded-full absolute right-5 mt-2 border p-1 text-purple text-lg border-1 border-purple">
          <a href={props.link}>
            <AiOutlineArrowRight />
          </a>
        </div>
        <p className="font-bold text-left text-dark text-lg">{props.title}</p>

        <span className="text-base text-grey font-medium">
          {props.time} -{" "}
          <span className="font-medium text-purple text-base">
            {props.mode}{" "}
          </span>
        </span>
      </div>

      <p className="text-sm text-grey text-left">{props.description}</p>
    </>
  );
}
