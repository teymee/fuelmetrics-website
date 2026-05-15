import React, { useEffect, useState } from "react";

const CONSENT_KEY = "fm_cookie_consent";

export default function CookiePolicyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    setIsVisible(!savedConsent);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      role="region"
      aria-labelledby="cookie-policy-banner-title"
      aria-describedby="cookie-policy-banner-description"
      className="fixed bottom-4 left-1/2 z-[120] w-[98%] max-w-4xl -translate-x-1/2 rounded-2xl border border-[#018cb7]/25 bg-white/95 p-5 text-[#053142] shadow-2xl backdrop-blur-sm lg:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3
            id="cookie-policy-banner-title"
            className="text-lg font-extrabold text-[#022534]"
          >
            Cookie policy
          </h3>
          <p
            id="cookie-policy-banner-description"
            className="mt-1 text-sm text-[#476778]"
          >
            Here at Fuelmetrics, we take your privacy very seriously. We use
            cookies to improve your browsing experience, analyze traffic, and
            support product optimization.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="cursor-pointer rounded-lg bg-[#018cb7] px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(1,140,183,0.35)] transition hover:bg-[#01779b]"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
