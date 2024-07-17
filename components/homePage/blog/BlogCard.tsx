import React from "react";
import { DataProps } from "@/constants/featuredBlogData";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }: DataProps) => {
  return (
    <>
      {data.map((card, i) => {
        return (
          // Blog card, here goes the content for the blog article preview
          <article
            key={i}
            className="flex-start-col h-fit w-full max-w-[340px] gap-4 rounded-md bg-white p-6"
          >
            <Image
              src={card.image}
              alt={card.alt}
              className="h-auto w-full rounded-sm"
            />
            <div className="flex-start-col w-full gap-3">
              <div className="flex-start-col w-full gap-[4px]">
                <h5 className="subtitle text-background_color">{card.title}</h5>
                <p className="text-13 text-text_900">{card.subtitle}</p>
              </div>
              <p className="text-16 line-clamp-4 h-[80px] w-full text-text_900">
                {card.description}
              </p>
              <Link
                href={card.link}
                className="text-16 flex-start group size-fit gap-[4px] text-text_800 underline transition-all duration-300 ease-in-out hover:text-primary_color"
              >
                Visit
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12.1978H19"
                    className="stroke-text_800 transition-all duration-300 ease-in-out group-hover:stroke-primary_color"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.19775L19 12.1978L12 19.1978"
                    className="stroke-text_800 transition-all duration-300 ease-in-out group-hover:stroke-primary_color"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export { BlogCard };
