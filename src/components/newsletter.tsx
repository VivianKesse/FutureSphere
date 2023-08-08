import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="flex rounded-3xl py-[50%] flex-col bg-[url('./assets/newsletter.png')] bg-no-repeat bg-cover bg-bottom items-center justify-center gap-4">
        <img src="./assets/mail.svg" alt="ícone de novo e-mail" />
        <p className="text-lg text-background font-medium">
          Do cool things with us.
        </p>
        <p className="text-xs text-center text-background px-2 font-normal">
          Stay in the loop with updates from our team and community. Once a
          month.
        </p>
        <input
          className=" inline focus:outline-purple px-5 w-[90%] text-base bg-background p-3 text-grey rounded-xl"
          placeholder="Enter your email"
        />
        <button className="text-center font-bold text-xs text-background rounded-lg w-[70%] bg-purple px-5 py-3">
          Subscribe to newsletter
        </button>
      </div>
    </>
  );
}
