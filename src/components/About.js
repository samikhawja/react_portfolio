import React from "react";
import me from "../assets/images/me.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-white">
            Sami Khawja
          </h1>
          <h2 className="sm:text-2xl text-3xl mb-4 font-medium text-white">
            Full Stack Software Engineer
          </h2>
          <p className="mb-8 leading-relaxed">
          Who's Sami, you say? It's not the Monte Vista kicker with the record of most consecutive PATs made and longest punt, is it? It's not the IMG punter that played for the University of Nebraska, is it? Oh, but it is! Football is in the rear-view mirror and I'm now looking to start my career and life itself. Before all that, I grew up in the Bay Area with a combine education made up of public and private school. Summer before 8th grade, I was able to travel to Europe, visiting Spain, France, Monaco, Italy and the Vatican. I was part of 28 kids representing the US as an ambassador and I had the absolute time of my life meeting so many amazing kids! Before high school, my family and I moved to Vietnam and took a gap year where I met lifelong friends and learned about myself. I had a great football career in high school and onto college but decided it was time to put it into rest and explore life. When I moved to Chicago, that's when I decided to join a bootcamp to start my career as a full stack software engineer! I can honestly say, my first 20 years of life have been full of suprises and I feel I accomplished so much but I can't wait to see where these next 20 take me!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src={me}
            alt="Sami Khawja"
          />
        </div>
      </div>
    </section>
  );
}