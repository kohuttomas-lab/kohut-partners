"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "@/i18n/navigation";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";
import { GA_ID, ADS_ID, META_PIXEL_ID, pageview } from "@/lib/analytics";

// Loads GA4 + Meta Pixel ONLY after the visitor accepts all cookies.
// Until then nothing is injected (no non-essential cookies/scripts) — EU/SK compliant.
export function Analytics() {
  const [allowed, setAllowed] = useState(false);
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    const update = () => setAllowed(getConsent() === "all");
    update();
    window.addEventListener(CONSENT_EVENT, update);
    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, []);

  // SPA route-change page views. The first view is sent by the init scripts.
  useEffect(() => {
    if (!allowed) return;
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    pageview(window.location.pathname);
  }, [allowed, pathname]);

  if (!allowed) return null;

  return (
    <>
      {GA_ID || ADS_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${GA_ID ? `gtag('config','${GA_ID}');` : ""}${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
          </Script>
        </>
      ) : null}

      {META_PIXEL_ID ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}
