/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2">Who I Am</h2>
          <p className="py-2 text-gray-600">I'm not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            perspiciatis porro a ratione possimus quia! Obcaecati, in. Accusamus
            ea sunt ut aliquid aliquam amet odit dolores. Est quidem, delectus
            error ipsam molestias odit autem praesentium quasi aliquid ex non
            aliquam perferendis, tenetur repudiandae, cum laboriosam eligendi
            iusto ea incidunt sint illo. Cum tempore explicabo itaque ipsa
            commodi ea quae facilis repudiandae vel corrupti iure, delectus sit
            omnis voluptatibus quam consectetur suscipit molestias odio, et
            minus. Deleniti voluptates cumque quam sit!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium voluptas doloremque sit eum itaque explicabo commodi
            neque enim dolores amet aut, fugiat dolorem aliquam libero sapiente
            cupiditate dignissimos, aliquid fugit quam, est doloribus vero
            recusandae tempore ab? Atque dolores, suscipit nulla itaque est, nam
            quam perferendis repellat rerum esse pariatur repudiandae delectus
            unde, cum molestias? Autem aliquid incidunt modi exercitationem
            maiores! Doloribus, omnis illum. Sit dolores doloremque ut explicabo
            minus!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest project!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
