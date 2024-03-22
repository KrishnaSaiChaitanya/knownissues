// import { CheckIcon } from "@heroicons/react/20/solid";

// import { WaveWhite } from "./WaveWhite";
import { useEffect } from "react";

const tiersGlow = [
  {
    membershipName: "AWAKE",
    id: "RORORA",
    href: "/signup",
    handler: "GRTPQ",
    priceSubscription: "Free!",
    notPriceSubscription: "$49",
    payTimePeriod: "Absolutely FREE to access our Bonus Content",
    description:
      "Semi-interactive, non-personalized features available for everyone!",
    features: [
      "Curated Content — Over 1,000 hand-selected and topic-based videos within 60+ topics",
      "Destinations — Over 500 hand-selected destination-based videos covering more than 100 destinations worldwide",
      "Progress unlocks more content!",
    ],
  },
  {
    membershipName: "GLOW",
    id: "ROROR",
    href: "/upgrade/memberships/subscriptions-g/GlowLifetimeOTP/checkout",
    handler: "GRTPTQ",
    priceSubscription: "$22",
    notPriceSubscription: "$199",
    payTimePeriod: "Pay Once For LIFETIME access",
    description:
      "Powerful, interactive features for redefining and refining life",
    features: [
      "4 Fully Private & Secure Journaling Features",
      "4 Interactive Self-Empowering Phrase Games",
      "Human Harmony — Our inagural life-improvement course",
      "Bonus Content Fully Unlocked",
    ],
  },
];

export default function LifetimeSubscriptions2023() {
  return (
    <div
      className="isolate overflow-hidden fade_in_div3"
      style={{
        background: "linear-gradient(400deg, #520e63, #651279, #b221d2)",
      }}
    >
      <div className="animation_container mx-auto max-w-7xl px-6 pb-96 pt-12 text-center sm:pt-12 lg:px-8">
        <p className="anm_mod full font-[Plus Jakarta Sans] pt-4 mb-2 italic text-lg leading-8 text-white/90">
          For a limited time, we're offering founding members...
        </p>
        <h2 className="anm_mod zoomIn delay font-[Plus Jakarta Sans] text-4xl font-bold tracking-tight text-[#00A7E1] sm:text-4xl">
          LIFETIME ACCESS
        </h2>
      </div>
      {/* <WaveWhite /> */}
      <div className="flow-root bg-white pb-20 sm:pb-20">
        <div className="-mt-96">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 pt-8 gap-8 lg:max-w-5xl lg:grid-cols-2">
              {tiersGlow.map((tier, index) => (
                <div
                  key={tier.id}
                  style={{ zIndex: 99 }}
                  className={`flex flex-col justify-between rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8 ${
                    index === 0
                      ? "bg-white shadow-xl components_animation animate_right"
                      : "bg-gradient-to-r from-[#00A7E1] via-[#7FDEFF] to-[#00A7E1] shadow-2xl components_animation animate_left"
                  } hover:scale-[1.01] hover:transition-transform duration-2200`}
                >
                  <div>
                    <div className="animation_container">
                      <h3
                        id={tier.id}
                        className="anm_mod left delay font-[prata] text-2xl text-center font-extrabold leading-7 text-[#651279]/80"
                      >
                        {tier.membershipName}
                      </h3>
                    </div>
                    <div className="animation_container mt-2 text-center items-baseline gap-x-2">
                      <p
                        className={`anm_mod zoomIn delay font-[Plus Jakarta Sans] text-4xl font-bold text-center tracking-tight ${
                          index === 1 ? "text-white" : "text-[#00A7E1]"
                        }`}
                      >
                        <span className="line-through text-[#651279]/80">
                          {tier.notPriceSubscription}
                        </span>{" "}
                        {tier.priceSubscription}
                      </p>
                      <p className="font-[Plus Jakarta Sans] text-sm pt-2 pb-4 font-normal text-[#54005C]/90">
                        {tier.payTimePeriod}
                      </p>
                    </div>
                    <ul
                      role="list"
                      className="animation_container text-left font-[Plus Jakarta Sans] mt-4 text-lg space-y-4 leading-6 text-[#1A1D1A]"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="anm_mod full flex gap-x-3">
                          {/* <CheckIcon
                            className="h-6 w-5 flex-none text-[#54005C]"
                            aria-hidden="true"
                          /> */}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://my.ambience.life/signup"
                    aria-describedby={tier.id}
                    className="signupBtn2 font-[Plus Jakarta Sans] mt-8 block rounded-xl bg-[#651279] pt-3 pb-2 text-center text-lg"
                  >
                    Get started!
                  </a>
                  <p className="mt-6 text-xs leading-5 text-left text-gray-600">
                    * Includes 15-Day Money-Back Gurantee
                  </p>
                  <div className="flex justify-end">
                    <p
                      className={`mt-4 -mb-4 text-xs leading-5 opacity-80 filter ${
                        index !== 1 && "brightness-50"
                      }`}
                    >
                      <img
                        src={
                          index === 1
                            ? "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_outside%2Fsales_funnels%2F3rd-party%2Fstripe-white.webp?alt=media&token=a6ce2703-976c-4b9c-916b-5a69fe59c62a"
                            : "https://firebasestorage.googleapis.com/v0/b/ambiencelife.appspot.com/o/images%2Fimages_global%2Fimages_outside%2Fsales_funnels%2F3rd-party%2Fstripe-blpurple.webp?alt=media&token=ba9534e8-2d4a-4462-ba40-2789be72cdf1"
                        }
                        className="max-h-[22px]"
                        aria-label="Powered by Stripe"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
