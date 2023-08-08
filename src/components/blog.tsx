import React from "react";

interface BlogProps {
  image: string;
  category: string;
  title: string;
  resume: string;
  link: string;
}

export default function Blog(props: BlogProps) {
  return (
    <>
      <div className="text-left px-3">
        <img src={props.image} className="w-96 block rounded-lg m-auto" />

        <p className="rounded-full inline-block mt-4 bg-light-purple py-1 px-3 text-background   text-lg">
          {props.category}
        </p>

        <p className="text-xl py-5 text-left font-bold text-dark">
          {props.title}
        </p>
        <p className="text-grey text-left font-normal text-base ">
          {props.resume}
        </p>
        <a href={props.link}>
          <p className="underline text-grey text-right">Read more</p>
        </a>
      </div>
    </>
  );
}
