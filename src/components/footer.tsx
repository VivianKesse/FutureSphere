import React from "react";

export default function Footer() {
  return (
    <>
      <div className="px-4 py-10 flex flex-col bg-[url('./assets/Footer.svg')] ">
        <div className="  border-y-2 border-background py-4">
          <img
            src="./assets/logoFuture.svg"
            alt="Logo FutureSphrere"
            className="w-40 mb-2"
          />
          <div className="flex items-center  gap-4 text-background">
            <a href="/about">
              <span>About</span>
            </a>
            <a href="/careers">
              <span>Careers</span>
            </a>
            <a href="/blogs">
              <span>Blogs</span>
            </a>
            <a href="/pricing">
              <span>Pricing</span>
            </a>
          </div>
        </div>
        <p className="font-thin mt-4 text-xs text-background">
          © 2023 FutureSphere. All rights reserved.
        </p>
      </div>
    </>
  );
}
