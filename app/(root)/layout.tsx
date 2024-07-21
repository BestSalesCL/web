"use client";
import React, { useEffect } from "react";
import { Navbar } from "../../components/shared/navbar/Navbar";
import { Footer } from "../../components/shared/footer/Footer";
import Script from 'next/script';
import { useRouter } from 'next/router';
import { FB_PIXEL_ID, pageview } from '@/lib/fbpixel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleRouteChange = () => {
      pageview();
    };

    const router = useRouter();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-start bg-background_color">
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FB_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />
      <Navbar />
      <section className="flex min-h-screen w-screen flex-1 flex-col pt-[72px]">
        <div className="mx-auto w-full">{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
