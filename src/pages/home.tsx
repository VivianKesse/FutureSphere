import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import Title from "../components/title";
import MarkSection from "../components/mark";
import Topic from "../components/topic";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Blog from "../components/blog";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <header className="">
        <Header />
      </header>
      <main className="text-center">
        <Title
          text=" Revolutionizing the Future with Cutting-Edge Technology"
          padding="0rem 1rem"
        />

        <h3 className="text-purple font-regular text-center text-base mt-3">
          Empowering Innovation for a Digital Tomorrow
        </h3>
        <div className="flex items-center justify-center gap-5 mt-2 mb-5">
          <Button
            title="Signup"
            background="#1B152b"
            color="#f9fafb"
            width="6rem"
          />
          <Button
            title="Contact Us"
            background="#7f56d9"
            color="#f9fafb"
            width="8rem"
          />
        </div>
        <img
          className="rounded-3xl w-[96%] mx-auto"
          src="./assets/main.png"
          alt="ilustração"
        />
        <div className="flex flex-col items-center justify-center gap-2 text-center text-purple text-lg py-10">
          <p>
            50K <br /> New users per month
          </p>
          <p>
            150K <br /> Active Users
          </p>
          <p>
            98% <br /> Satisfied Customers
          </p>
        </div>
      </main>
      <section className="min-h-screen py-10 text-center">
        <MarkSection title="Features" />
        <Title
          text="Discover the Tools that Drive Success"
          padding="1rem 2rem 2rem 2rem"
        />
        <h3 className="text-grey font-regular text-center text-xs px-0.5">
          Unleash innovation and accelerate growth with our dynamic product.
        </h3>

        <Topic
          img="./assets/cutting.svg"
          title="Cutting-Edge Innovation"
          text="Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work."
        />

        <Topic
          img="./assets/seamless.svg"
          title="Seamless Connectivity"
          text="Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world."
        />

        <Topic
          img="./assets/intuitive.svg"
          title="Intuitive User Interface"
          text="Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity."
        />
      </section>

      <section className="min-h-screen px-4 ">
        <MarkSection title="Our Mission Statement" />
        <img
          src="./assets/group.png"
          alt="Imagem de um grupo de participantes"
          className="rounded-3xl my-4"
        />

        <Title
          text="Empowering the world through transformative technology solutions"
          padding="1rem 0rem"
        />

        <p className="font-regular text-base text-grey">
          We are dedicated to empowering individuals, businesses, and
          communities by providing innovative and cutting-edge technology
          solutions that unlock new possibilities and drive positive change. Our
          mission is to make technology accessible, reliable, and impactful,
          enabling our customers to thrive in the digital era and shape a better
          future for all.
        </p>
        <div className="flex items-center justify-start gap-4 mt-14">
          <p className="text-lg text-purple font-medium">Signup</p>
          <Button
            link="/contact"
            title="Contact Us"
            color="white"
            background="#7f56d9"
            width="8rem"
          />
        </div>
      </section>

      <section className=" px-2 py-14 text-center">
        <div>
          <MarkSection title="Our Clients" />
        </div>
        <Title text="Trusted by Industry Leaders" padding="1rem 2rem" />
        <p className="text-base font-normal text-grey">
          Join our roster of satisfied clients and experience the exceptional
          results and service that have earned us the trust of industry leaders
          worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 pt-10">
          <img src="./assets/descript.svg" alt="Logotipo da Descript" />
          <img src="./assets/shopify.svg" alt="Logotipo da Shopify" />
          <img src="./assets/slack.svg" alt="Logotipo da Slack" />
          <img src="./assets/elastic.svg" alt="Logotipo da Elastic" />
          <img src="./assets/loom.svg" alt="Logotipo da Loom" />
        </div>
      </section>

      <section className="min-h-screen  px-4 text-center">
        <MarkSection title="Testimonials" />
        <Title text="1M+ Global Customers" padding="1rem 0rem 0rem 0rem" />
        <img
          className="py-4"
          src="./assets/woman.png"
          alt="Imagem ilustrativa do rosto de uma mulher visto de perfil"
        />
        <p className="text-base text-grey text-left">
          I am incredibly impressed with the transformative technology solutions
          provided by FutureSphere. Their cutting-edge innovations have
          revolutionized our business operations, streamlining processes and
          boosting productivity. The seamless connectivity and intuitive user
          interface have made a significant impact on our team's efficiency.
          Thanks to their advanced data analytics capabilities, we now make
          data-driven decisions with confidence. I highly recommend FutureSphere
          to any organization seeking to stay ahead in the digital era.
        </p>
        <p className="text-dark py-2 font-bold text-left">
          Sarah Thompson
          <br />
          CEO Thompson Enterprises
        </p>

        <div className="py-4 flex items-center justify-end gap-2">
          <div className="rounded-full  text-purple text-lg border-1 border-purple">
            <AiOutlineArrowLeft />
          </div>
          <div className="rounded-full text-background bg-purple text-lg ">
            <AiOutlineArrowRight />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-grey h-0.5 w-28 "></div>
          <span className="text-grey text-xs">Trusted By</span>
          <div className="bg-grey h-0.5 w-28 "></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 py-10">
          <img
            src="./assets/airwallex.svg"
            className="w-28"
            alt="Logotipo da Airwallex "
          />
          <img
            src="./assets/outreach.svg"
            className="w-28"
            alt="Logotipo da Outreach"
          />
          <img
            src="./assets/razorpay.svg"
            className="w-28"
            alt="Logotipo da Razorpay"
          />
          <img
            src="./assets/discord.svg"
            className="w-28"
            alt="Logotipo do Discord"
          />
          <img
            src="./assets/dropbox.svg"
            className="w-28"
            alt="Logotipo do Dropbox"
          />
        </div>
      </section>

      <section className="min-h-screen px-2 text-center">
        <MarkSection title="Blogs" />
        <Title text="From our Latest Blogs" padding="1rem 0rem" />
        <div className="flex flex-col items-center justify-center gap-10">
          <Blog
            image="./assets/blog.jpg"
            title="The Future of AI in Healthcare: Transforming Patient Care"
            category="Healthcare"
            link="/blogs-single"
            resume=" Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
          />
          <Blog
            image="./assets/blog.jpg"
            title="The Future of AI in Healthcare: Transforming Patient Care"
            category="Healthcare"
            link="/blogs-single"
            resume=" Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
          />{" "}
          <Blog
            image="./assets/blog.jpg"
            title="The Future of AI in Healthcare: Transforming Patient Care"
            category="Healthcare"
            link="/blogs-single"
            resume=" Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
          />
        </div>

        <div className="flex items-center justify-center gap-4 py-5">
          <Button
            title="Contact Us"
            width="8rem"
            background="#7f56d9"
            color="#f9fafb"
          />
          <p className="text-dark text-base font-medium flex items-center justify-center gap-2">
            View All <MdKeyboardArrowRight />
          </p>
        </div>
      </section>
      <section className=" px-2 py-14">
        <Newsletter />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
