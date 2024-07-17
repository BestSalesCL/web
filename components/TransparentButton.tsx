"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ButtonProps = {
  title: string;
  link: string;
};

const TransparentButton: React.FC<ButtonProps> = ({ title, link }) => {
  // Button component to reuse accross the app
  return (
    <Button
      asChild
      className="flex-center size-full border-[3px] border-solid border-primary_color bg-transparent px-6 py-3 shadow-base hover:border-primary_200 hover:bg-primary_color"
    >
      <Link
        href={link}
        className="flex-center size-full text-text_color hover:text-background_color"
      >
        <p className="text-20-bold md:subtitle">{title}</p>
      </Link>
    </Button>
  );
};

export { TransparentButton };
