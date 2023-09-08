import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import Button from "../components/button";
import MarkSection from "../components/mark";
import Topic from "../components/topic";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Team from "../components/team";
import Office from "../components/office";
import Job from "../components/job";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <header className="block ">
        <Header />
      </header>
      <main className="text-center">
        <Title
          text="To revolutionize industries through innovative technology solutions, driving positive change and empowering individuals and businesses"
          padding=" 0.5rem"
        />

        <h3 className="text-grey font-regular text-center text-base ">
          At FutureSphere our mission is to empower individuals and businesses
          through innovative technology solutions that enrich lives, foster
          growth, and drive positive change. We are dedicated to pushing the
          boundaries of what's possible, creating transformative experiences
          that make a lasting impact in a rapidly evolving digital landscape.
        </h3>

        <div className="flex items-center justify-center gap-5 py-5">
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
          src="./assets/aboutMain.png"
          alt="Ilustração com leds coloridos"
          className="w-full px-2 rounded-3xl"
        />
      </main>

      <section className="text-left px-1 py-10">
        <MarkSection title="Our Story" />
        <p className="text-grey text-base py-2 px-1">
          In 2010, our founder, Vasily, faced a daunting challenge - preparing
          for the Law School Admission Test (LSAT) while juggling an internship
          and evening classes in different cities. The lack of time and a
          conducive study environment made it incredibly difficult for him to
          achieve his dream of becoming a lawyer.
          <br />
          <br />
          During a train ride, a moment of inspiration struck Vasily. He wished
          for a convenient study tool on his phone to help him prepare for the
          LSAT. However, such an app didn't exist at the time. Determined to
          overcome this hurdle, Vasily took matters into his own hands and
          developed one of the earliest and most comprehensive LSAT apps on the
          market. The app quickly gained popularity, becoming the #1 paid LSAT
          app for over a year.
        </p>

        <img
          src="./assets/group.png"
          alt="Imagem de um grupo de participantes"
          className="rounded-3xl my-4"
        />

        <p className="text-grey text-base py-2 px-1">
          This success prompted Vasily to establish FutureSphere, an app
          development company with a strong focus on creating profitable and
          impactful applications. Building on their initial achievement,
          FutureSphere expanded their educational app portfolio to include exams
          such as SAT, GMAT, MCAT, and more, catering to the needs of a broader
          audience.
          <br />
          <br />
          As time went on, it became evident that the industry had much more to
          offer than just exam-focused applications. People began approaching
          FutureSphere, seeking guidance on how to develop their own apps, what
          it takes to succeed, and how to navigate the complex world of mobile
          applications. In response to this growing demand for expertise and
          support, FutureSphere expanded its services and evolved into a
          comprehensive resource for aspiring app creators - a company known as
          FutureSphere.
        </p>
        <img
          src="./assets/group.png"
          alt="Imagem de um grupo de participantes"
          className="rounded-3xl my-4"
        />
      </section>

      <section className=" px-2  text-center">
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

      <section className="min-h-screen py-10 text-center">
        <MarkSection title="Our Values" />
        <Title
          text="Guided by Integrity and Purpose"
          padding="1rem 2rem 2rem 2rem"
        />
        <h3 className="text-grey font-regular text-center text-xs px-0.5">
          At FutureSphere, we are driven by a strong set of values that shape
          every aspect of our business, ensuring transparency, ethical
          practices, and a shared commitment to making a positive impact.
        </h3>

        <Topic
          img="./assets/integrity.svg"
          title="Cutting-Edge Innovation"
          text="Upholding honesty and ethical conduct in everything we do, building trust with our stakeholders."
        />

        <Topic
          img="./assets/inovation.svg"
          title="Innovation"
          text="Embracing a culture of creativity and continuous improvement to drive groundbreaking solutions."
        />

        <Topic
          img="./assets/collaboration.svg"
          title="Collaboration"
          text="Fostering a collaborative environment that encourages teamwork, diversity, and shared success."
        />

        <Topic
          img="./assets/customer.svg"
          title="Customer-centric"
          text=" Putting our customers at the heart of everything we do, delivering exceptional experiences and exceeding their expectations."
        />

        <Topic
          img="./assets/sustainability.svg"
          title="Sustainability"
          text=" Operating with a focus on environmental and social responsibility, striving for a more sustainable future."
        />

        <Topic
          img="./assets/excellence.svg"
          title="Excellence"
          text="Pursuing excellence in all aspects of our work, setting high standards and striving for continuous growth and improvement."
        />
      </section>
      <section className="text-center">
        <MarkSection title="Our Team" />
        <Title text="Meet our team" padding="1rem 2rem" />
        <h3 className="text-grey font-regular text-center text-xs px-0.5">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </h3>
        <p className="text-grey font-regular text-center text-xs px-0.5 my-5">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </p>

        <div className="flex justify-center items-center gap-2 flex-col text-center">
          <p className="font-bold text-purple ">John Wick</p>
          <p className="text-grey font-medium">CEO FutureSphere</p>
          <div className="flex justify-center items-center gap-4 text-purple text-xl">
            <BsTwitter />
            <AiFillFacebook />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="pt-10">
          <Team />
        </div>
      </section>

      <section className="min-h-screen  px-2 py-10 text-center">
        <MarkSection title="Our Offices" />
        <Title
          text="Discover Our Global Network of Offices"
          padding="1rem 2rem"
        />
        <p className="text-grey font-medium">
          Experience our expansive network of offices across the world,
          connecting you to our exceptional services wherever you are.
        </p>
        <div className="flex flex-col items-center justify-center gap-5 py-8 px-2">
          <Office
            img="./assets/sanfrancisco.png"
            alt="Imagem do escritório de São Francisco"
            city="San Francisco"
            adress="123 Main Street, Suite 200"
            phone="(555) 123-4567"
          />

          <Office
            img="./assets/newmexico.png"
            alt="Imagem do escritório em New Mexico"
            city="New Mexico"
            adress="789 Canyon Road"
            phone="(555) 555-1234"
          />

          <Office
            img="./assets/london.png"
            alt="Imagem do escritório em London"
            city="London"
            adress="789 Oak Street, 4th Floor, Suite 402"
            phone="+44 20 1234 5678"
          />
        </div>

        <div className="flex items-center justify-center gap-5 mt-2">
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
      </section>

      <section className="min-h-screen px-2  text-center ">
        <MarkSection title="Careers" />
        <Title text="New job opportunities" padding="1rem 2rem" />
        <p className="text-grey font-medium">
          Browse through vacancies. internships and job postings at FutureSphere
        </p>
        <div className="flex flex-col items-start justify-center gap-8  px-5">
          <Job
            title="Product Manager"
            time="Full Time"
            mode="On site"
            link="#"
            description="FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector."
          />

          <Job
            title="Human Resources"
            time="Full Time"
            mode="On site"
            link="#"
            description="FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector."
          />

          <Job
            title="UI/UX Designer"
            time="Full Time"
            mode="Remote"
            link="#"
            description="FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector."
          />
        </div>
      </section>
      <section className="px-3 py-10">
        <Newsletter />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
