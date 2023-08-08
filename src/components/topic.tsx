import React from "react";

interface topicProps {
  title?: string;
  text?: string;
  img?: string;
}
export default function Topic(props: topicProps) {
  return (
    <>
      <div className=" py-5 mx-auto text-center w-60  flex flex-col items-center justify-center gap-2">
        <img src={props.img} alt="ícone do tópico" />
        <p className="font-bold text-dark text-xl">{props.title}</p>
        <p className="text-sm text-grey font-normal">{props.text}</p>
      </div>
    </>
  );
}
