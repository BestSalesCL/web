import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogCard } from "./BlogCard";
import {
  BasketballBlog,
  FootballBlog,
  GolfBlog,
  RunningBlog,
  SoccerBlog,
} from "@/constants/featuredBlogData";

const BlogContainer = () => {
  return (
    <Tabs defaultValue="football" className="flex-center-col h-fit w-full">
      {/* This are the tabs that you can switch between on top of the blog articles */}
      <TabsList className="flex-start mb-10 size-fit max-w-[300px] overflow-scroll rounded-[8px] border-2 border-solid border-text_color bg-transparent p-0 sm:max-w-full sm:overflow-hidden">
        <TabsTrigger
          value="football"
          className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
        >
          Football
        </TabsTrigger>
        <TabsTrigger
          value="golf"
          className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
        >
          Golf
        </TabsTrigger>
        <TabsTrigger
          value="running"
          className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
        >
          Running
        </TabsTrigger>
        <TabsTrigger
          value="basketball"
          className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
        >
          Basketball
        </TabsTrigger>
        <TabsTrigger
          value="soccer"
          className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
        >
          Soccer
        </TabsTrigger>
      </TabsList>

      {/* Content for football tab */}
      <TabsContent
        value="football"
        className="flex-center-col sm:flex-center w-full gap-10 sm:gap-6 md:gap-10"
      >
        <BlogCard data={FootballBlog} />
      </TabsContent>

      {/* Content for golf tab */}
      <TabsContent
        value="golf"
        className="flex-center-col sm:flex-center w-full gap-10 sm:gap-6 md:gap-10"
      >
        <BlogCard data={GolfBlog} />
      </TabsContent>

      {/* Content for running tab */}
      <TabsContent
        value="running"
        className="flex-center-col sm:flex-center w-full gap-10 sm:gap-6 md:gap-10"
      >
        <BlogCard data={RunningBlog} />
      </TabsContent>

      {/* Content for basketball tab */}
      <TabsContent
        value="basketball"
        className="flex-center-col sm:flex-center w-full gap-10 sm:gap-6 md:gap-10"
      >
        <BlogCard data={BasketballBlog} />
      </TabsContent>

      {/* Content for soccer tab */}
      <TabsContent
        value="soccer"
        className="flex-center-col sm:flex-center w-full gap-10 sm:gap-6 md:gap-10"
      >
        <BlogCard data={SoccerBlog} />
      </TabsContent>
    </Tabs>
  );
};

export { BlogContainer };
