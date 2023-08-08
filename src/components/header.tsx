import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";
import Button from "./button";

const Links = [
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
  { name: "Blogs", link: "/blogs" },
  { name: "Pricing", link: "/pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center ">
        <div className="shadow-md w-[95%]  bg-dark  rounded-full fixed  top-8 ">
          <div className="flex items-center justify-between  bg-white  py-2 md:px-10 px-2">
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <span>
                <img
                  className="w-28"
                  src="./assets/logoFuture.svg"
                  alt="LogotipoFutureSphere"
                />
              </span>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer md:hidden   text-purple text-2xl m-0"
            >
              {open ? <IoCloseCircleSharp /> : <HiOutlineMenuAlt1 />}
            </div>
            {/* linke items */}
            <ul
              className={`md:flex md:items-center md:pb-0  absolute flex items-start  flex-col md:static bg-dark text-background md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-12" : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li className="md:ml-8 md:my-0 my-5 font-semibold">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-blue-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="md:ml-8 md:my-0 my-5 relative right-5 font-bold ">
                <Button
                  title="Contact"
                  background="#7f56d9"
                  color="#f9fafb"
                  link="/contact"
                />
              </li>
            </ul>
            {/* button */}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
