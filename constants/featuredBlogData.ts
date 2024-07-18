import { StaticImageData } from "next/image";
import rectangle from "@/public/assets/images/rectangle-sample.jpg";

export type BlogData = {
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
  link: string;
};

export interface DataProps {
  data: BlogData[];
}

export const FootballBlog: BlogData[] = [
  {
    title: "Football Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Football Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Football Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
];

export const GolfBlog: BlogData[] = [
  {
    title: "Golf Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Golf Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Golf Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
];

export const RunningBlog: BlogData[] = [
  {
    title: "Running Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Running Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Running Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
];

export const BasketballBlog: BlogData[] = [
  {
    title: "Basketball Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Basketball Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Basketball Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
];

export const SoccerBlog: BlogData[] = [
  {
    title: "Soccer Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Soccer Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
  {
    title: "Soccer Title of the post",
    subtitle: "Small subtitle",
    description:
      "Some text that explains and goes in line with the content of the blog. If it is too large then it will have ellipsis. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    image: rectangle,
    alt: "sample image",
    link: "/blog",
  },
];
