import React, { useEffect, useState } from "react";

import "./Home.css";
function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // You can adjust these values as needed for the desired effect
      const minScale = 1;
      const maxScale = 1.2;

      const newScale =
        minScale + (maxScale - minScale) * (scrollPosition / 1000);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <section
        id="home"
        className="px-4 bg-no-repeat bg-cover relative -z-10 active"
        style={{ backgroundImage: "url('assets/images/heros/hero-5-bg.png')" }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl/snug text-3xl font-semibold mt-7">
              <span className="text-[#671277]">A Happier, Healthier, </span>More
              Fulfilling Life Is Within Reach
            </h1>
            <p className="text-base font-normal text-gray-500 mt-5">
              It's time to make mental, emotional, and physical well-being a
              priority. Break old, destructive patterns. Develop new, empowering
              habits. Create life-long improvements.
            </p>

            <div className="inline-block mt-10 mb-10">
              <a className="flex items-center justify-center gap-2 py-3 px-7 rounded-md text-lg font-normal text-white bg-gradient-to-r from-[#671277] to-[#d04fdf] focus:text-gray-800 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-5">
        <img
          id="hero-image"
          src="./hero.svg"
          className="mx-auto"
          alt=""
          style={{
            border: "30px",
            width: "50%",
            marginBottom: "5%",
            transform: `scale(${scale})`,
            transition: "transform 0.2s",
            zIndex: "100",
          }}
        />
      </div>

      {/* <section
        id="home"
        class="pt-32 pb-20"
        // style="background-image: url('assets/images/heros/hero-2-bg.png');"
      >
        <div class="container">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <div class="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center">
                <i class="mdi mdi-rocket-launch text-3xl text-blue-600"></i>
              </div>
              <h1 class="md:text-5xl/snug text-3xl font-semibold mt-7">
                Manage Your Activity With{" "}
                <span class="text-blue-600">Appexy</span>
              </h1>
              <p class="text-base font-normal text-gray-500 mt-5">
                Maecenas tempus, tellus eget condimentum rhoncus quam semper
                libero sit amet adipiscing sem neque sed ipsum nam quam nunc
                blandit vel luctus pulvinar.
              </p>
              <div class="mt-16 flex flex-wrap items-center gap-2">
                <a
                  href="#"
                  class="py-3 px-7 rounded-md text-base font-normal text-white border border-transparent bg-gradient-to-r from-primary to-blue-400 focus:text-black transition-all duration-500"
                >
                  Get Started Today
                </a>
                <a
                  href="#"
                  class="py-3 px-7 rounded-md text-base font-normal border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white hover:shadow-lg focus:text-black transition-all duration-500"
                >
                  Download App
                </a>
              </div>
            </div>

            <div class="relative">
              <img
                src="assets/images/heros/hero-2-img.png"
                class="md:h-[700px] lg:ms-auto mx-auto"
                alt=""
              />

              <div class="hidden sm:block">
                <div class="after:w-32 after:h-32 after:absolute after:-bottom-8 after:-left-12 after:-z-10 "></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        class="bg-[#54005C]"
        style={{ border: "1px solid white", position: "relative", top: "-10%" }}
      >
        <div className="" style={{ position: "initial", marginTop: "-6%" }}>
          <img src="./banner-shape.svg" />
        </div>
        <div
          class="container py-5 bg-[#54005C]"
          style={{ maxWidth: "100%", padding: "20px" }}
        >
          <div class="text-center  mx-auto">
            <h6 class="font-normal uppercase mb-2 text-white">
              How it <span class="font-semibold">Work</span>
            </h6>
            <h2 class="text-4xl font-semibold mb-3 text-[#00A7E1]">
              Choose your level of interactivity and personalization
            </h2>
          </div>
          <div className="flex justify-center">
            <p
              class="text-center font-normal text-white "
              id="middle-text"
              style={{ maxWidth: "50%" }}
            >
              Life is a journey of experiences, choices, and beliefs about
              what's possible. Access non-personalized resources, gamified
              tools, and fully personalized (and, private) activities at your
              preference.
            </p>
          </div>

          <div class="mt-20">
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div>
                <div class="relative">
                  <div class="text-center">
                    <span
                      class="inline-flex relative z-0 bg-blue-500/10 dark:bg-blue-100/5 h-24 w-24 items-center justify-center"
                      // style="border-radius: 28% 72% 50% 50%/26% 20% 80% 74%;"
                    >
                      <svg
                        class="w-12 h-12 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"
                        />
                      </svg>
                      <i class="mdi mdi-format-list-bulleted text-5xl"></i>
                    </span>
                    <h5 class="text-xl font-semibold mb-3 mt-5">1. Freebies</h5>
                    <p class="text-base font-normal text-white">
                      Semi-interactive, non-personalized features available for
                      everyone at no cost! Includes our Curated Content and
                      Destinations features.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div class="relative">
                  <div class="text-center">
                    <span
                      class="inline-flex relative z-0 bg-emerald-500/10 dark:bg-emerald-100/5 h-24 w-24 items-center justify-center"
                      // style="border-radius: 28% 72% 50% 50%/26% 20% 80% 74%;"
                    >
                      <svg
                        class="w-12 h-12 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 11.5V1s3 1 3 4m-7-3H1m9 4H1m4 4H1m13 2.4c0 1.325-1.343 2.4-3 2.4s-3-1.075-3-2.4S9.343 10 11 10s3 1.075 3 2.4Z"
                        />
                      </svg>
                      <i class="mdi mdi-palette-outline text-5xl"></i>
                    </span>
                    <h5 class="text-xl font-semibold mb-3 mt-5">
                      2. Xclusives
                    </h5>
                    <p class=" text-white">
                      Gamified, interactive, non-personalized features which
                      help reiterate empowering phrases.
                    </p>

                    <div class="hidden lg:block"></div>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-center">
                  <span
                    class="inline-flex relative z-0 bg-amber-500/10 dark:bg-amber-100/5 h-24 w-24 items-center justify-center"
                    // style="border-radius: 28% 72% 50% 50%/26% 20% 80% 74%;"
                  >
                    <svg
                      class="w-12 h-12 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M12.356 5.435 1.938 16.384a.5.5 0 0 0 .018.707l2.9 2.757a.5.5 0 0 0 .706-.018L15.978 8.882l-3.622-3.447Zm7.681-.819a.5.5 0 0 0-.018-.706l-2.9-2.757a.5.5 0 0 0-.707.017l-2.68 2.817 3.622 3.446 2.683-2.817Zm-2.89 12.233-1 .025-.024-1a1 1 0 1 0-2 .05l.025 1-1 .024a1 1 0 0 0 .05 2l1-.025.025 1a1 1 0 1 0 2-.05l-.025-1 1-.024a1 1 0 1 0-.05-2h-.001ZM2.953 9.2l.025 1a1 1 0 1 0 2-.05l-.025-1 1-.025a1 1 0 1 0-.05-2l-1 .025-.025-1a1 1 0 0 0-2 .049l.025 1-1 .025a1 1 0 0 0 .05 2l1-.024Zm15.07 2.626-2 .05.05 1.999 2-.05-.05-1.999ZM11.752.978l-2 .05.05 2 2-.05-.05-2Zm-2.95 2.075-2 .05.05 1.999 2-.05-.05-2ZM5.753 1.127l-1.999.05.05 2 1.999-.05-.05-2Zm15.194 7.625-2 .05.05 2 2-.05-.05-2Zm.125 4.998-2 .05.05 2 2-.05-.05-2Z" />
                    </svg>
                    <i class="mdi mdi-layers-triple text-5xl"></i>
                  </span>
                  <h5 class="text-xl font-semibold mb-3 mt-5">
                    3. Life Design
                  </h5>
                  <p class="text-white ">
                    Premium features which offer an interactive and personalized
                    experience, including Boards & Journals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="features" class="py-20 bg-gray-50">
        <div class="container">
          <div class="text-center max-w-xl mx-auto">
            <h6 class="font-normal uppercase mb-2">
              Our <span class="font-semibold">Features</span>
            </h6>
            <h2 class="text-3xl font-semibold mb-3">
              Smart Solutions For Buys People
            </h2>
            <p class="text-base font-normal text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 items-center">
            <div>
              <img src="assets/images/features-1.png" class="mx-auto" alt="" />
            </div>

            <div class="lg:ms-24">
              <h1 class="text-4xl font-semibold">Discover your destination</h1>
              <p class="text-base font-normal text-gray-500 mt-8">
                On the other hand, we denounce with righteous indignation so
                blinded that they cannot.
              </p>

              <div class="flex items-center gap-5 mt-5">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-check text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  <span class="font-bold text-gray-900">
                    The wise a therefore always holds
                  </span>{" "}
                  in us matters to this principle a selection a rejects
                  pleasures.
                </p>
              </div>

              <div class="flex items-center gap-5 mt-8">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-layers-outline text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  Sed perspiciatis omnis a{" "}
                  <span class="font-bold text-gray-900">
                    natus error accusantium doloremque
                  </span>{" "}
                  laudantium tota rem aperiam eaque ipsa quae illo inventore.
                </p>
              </div>

              <div class="flex items-center gap-5 mt-8">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-lock-outline text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  <span class="font-bold text-gray-900">
                    The wise a therefore always holds
                  </span>{" "}
                  in us matters to this principle a selection a rejects
                  pleasures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        class="py-20 bg-gray-50 relative bg-no-repeat bg-cover"
        style="background-image: url('assets/images/features-bg.png');"
      >
        <div class="container">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 items-center">
            <div class="lg:me-24">
              <h1 class="text-4xl font-semibold">Connecting people, Places</h1>
              <p class="text-base font-normal text-gray-500 mt-8">
                On the other hand, we denounce with righteous indignation so
                blinded that they cannot.
              </p>

              <div class="flex items-center gap-5 mt-5">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-check text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  <span class="font-bold text-gray-900">
                    The wise a therefore always holds
                  </span>{" "}
                  in us matters to this principle a selection a rejects
                  pleasures.
                </p>
              </div>

              <div class="flex items-center gap-5 mt-8">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-layers-outline text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  Sed perspiciatis omnis a{" "}
                  <span class="font-bold text-gray-900">
                    natus error accusantium doloremque
                  </span>{" "}
                  laudantium tota rem aperiam eaque ipsa quae illo inventore.
                </p>
              </div>

              <div class="flex items-center gap-5 mt-8">
                <div>
                  <div class="w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
                    <i class="mdi mdi-lock-outline text-base text-blue-600"></i>
                  </div>
                </div>
                <p class="text-base font-normal text-gray-500">
                  <span class="font-bold text-gray-900">
                    The wise a therefore always holds
                  </span>{" "}
                  in us matters to this principle a selection a rejects
                  pleasures.
                </p>
              </div>
            </div>

            <div>
              <img src="assets/images/features-2.png" class="mx-auto" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        class="relative py-28 bg-cover bg-no-repeat bg-center"
        style="background-image: url('assets/images/counter-bg.jpg'); background-attachment: fixed;"
      >
        <div class="absolute inset-0 w-full h-full bg-gray-900/70"></div>

        <div class="container relative">
          <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <div class="border border-gray-500 rounded-lg text-white bg-gray-500/40 p-5">
              <div class="flex items-center gap-6">
                <i class="mdi mdi-web text-5xl"></i>
                <div>
                  <h1 class="text-4xl">
                    <span class="counter_value" data-target="825">
                      0
                    </span>
                  </h1>
                  <p class="text-lg font-medium uppercase mt-3">
                    Global Brands
                  </p>
                </div>
              </div>
            </div>

            <div class="border border-gray-500 rounded-lg text-white bg-gray-500/40 p-5">
              <div class="flex items-center gap-6">
                <i class="mdi mdi-emoticon-happy text-5xl"></i>
                <div>
                  <h1 class="text-4xl">
                    <span class="counter_value" data-target="1800">
                      0
                    </span>
                    +
                  </h1>
                  <p class="text-lg font-medium uppercase mt-3">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>

            <div class="border border-gray-500 rounded-lg text-white bg-gray-500/40 p-5">
              <div class="flex items-center gap-6">
                <i class="mdi mdi-lightbulb-on text-5xl"></i>
                <div>
                  <h1 class="text-4xl">
                    <span class="counter_value" data-target="599">
                      0
                    </span>
                    +
                  </h1>
                  <p class="text-lg font-medium uppercase mt-3">
                    Global Brands
                  </p>
                </div>
              </div>
            </div>

            <div class="border border-gray-500 rounded-lg text-white bg-gray-500/40 p-5">
              <div class="flex items-center gap-6">
                <i class="mdi mdi-account-multiple text-5xl"></i>
                <div>
                  <h1 class="text-4xl">
                    <span class="counter_value" data-target="2000">
                      0
                    </span>
                    +
                  </h1>
                  <p class="text-lg font-medium uppercase mt-3">User clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="screenshots" class="py-20">
        <div class="container">
          <div class="text-center max-w-xl mx-auto">
            <h6 class="font-normal uppercase mb-2">
              App <span class="font-semibold">Screens </span>
            </h6>
            <h2 class="text-3xl font-semibold mb-3">Awesome Screenshot</h2>
            <p class="text-base font-normal text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>

          <div class="mySwiper swiper swiper-1 relative mt-16">
            <div class="swiper-wrapper py-10 mb-14">
              <div class="swiper-slide mx-auto">
                <img
                  src="assets/images/screen-shot/1.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="assets/images/screen-shot/2.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="assets/images/screen-shot/3.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="assets/images/screen-shot/4.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="assets/images/screen-shot/5.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="assets/images/screen-shot/6.jpg"
                  class="rounded-md border mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section> */}

      {/* <section id="testimonial" class="py-20 bg-gray-50">
        <div class="container">
          <div class="text-center max-w-xl mx-auto">
            <h6 class="font-normal uppercase mb-2">
              Our <span class="font-semibold">Testimonial </span>
            </h6>
            <h2 class="text-3xl font-semibold mb-3">What Our Customers Say</h2>
            <p class="text-base font-normal text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>

          <div class="text-center mt-16">
            <p class="text-base font-normal text-gray-500">
              “Itaque earum us tenetur sapiente delectus asperiores repellat.”
            </p>
            <div class="max-w-3xl mx-auto mt-4 mb-10">
              <h5 class="text-lg font-medium">
                At vero eos et accusamus iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atqued corrupti as
                quos dolores quas molestias excepturi occaecati provident.
              </h5>
            </div>
            <img
              src="assets/images/users/user-1.jpg"
              class="mx-auto rounded-full h-16"
              alt=""
            />
            <h5 class="text-base font-medium mt-6">Mayra Vasquez</h5>
            <p class="text-sm font-normal text-gray-500 mt-1">
              Web Development, USA
            </p>
          </div>

          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-20">
            <div>
              <img
                src="assets/images/brand-logo/dribbble.png"
                class="h-10 mx-auto"
                alt=""
              />
            </div>

            <div>
              <img
                src="assets/images/brand-logo/insta.png"
                class="h-10 mx-auto"
                alt=""
              />
            </div>

            <div>
              <img
                src="assets/images/brand-logo/bootstrap.png"
                class="h-10 mx-auto"
                alt=""
              />
            </div>

            <div>
              <img
                src="assets/images/brand-logo/jquery.png"
                class="h-10 mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="pricing" class="py-20 flex justify-center">
        <div class="container">
          <div class="text-center max-w-xl mx-auto">
            <h6 class="font-normal uppercase mb-2">
              Our <span class="font-semibold">Pricing </span>
            </h6>
            <h2 class="text-3xl font-semibold mb-3">Pricing Plan</h2>
            <p class="text-base font-normal text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>

          
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center mt-16">
            <div>
              <div class="p-10 rounded-md shadow-lg relative">
                <div class="p-7 rounded-md text-center bg-gray-50">
                  <h5 class="text-lg font-medium pb-2">
                    GLOW by ambience.LIFE
                  </h5>
                  <h1 class="text-4xl font-semibold text-[#671277]">
                    $22.00
                    <span class="text-base font-normal text-gray-500">
                      /Yearly
                    </span>
                  </h1>
                </div>
                <div class="grid gap-y-4 mt-8">
                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Seeds (easy empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Typer (semi-easy empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Cards (moderate empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Scramble (challenging empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      ... and, more features coming soon!
                    </p>
                  </div>
                </div>

                <div class="mt-14">
                  <a
                    href="#"
                    class="py-2 px-6 flex items-center justify-center rounded-md text-base font-normal text-white bg-gradient-to-r from-[#671277] to-[#d04fdf] focus:text-black transition-all duration-500"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="p-10 rounded-md shadow-lg relative overflow-hidden">
                <div class="absolute right-0 top-0 h-16 w-16 z-10">
                  <div class="absolute rotate-45 bg-red-600 text-center text-white font-normal text-sm py-0.5 right-[-35px] top-[32px] w-[170px] shadow-lg">
                    Most Popular
                  </div>
                </div>
                <div class="p-7 rounded-md text-center bg-gray-50">
                  <h5 class="text-lg font-medium">Standard</h5>
                  <h1 class="text-4xl font-semibold text-[#671277]">
                    $44.00
                    <span class="text-base font-normal text-gray-500">
                      /Lifetime
                    </span>
                  </h1>
                </div>
                <div class="grid gap-y-4 mt-8">
                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Seeds (easy empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Typer (semi-easy empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Cards (moderate empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      Scramble (challenging empowering phrase game)
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    <i class="mdi mdi-check text-lg text-gray-500"></i>
                    <p class="text-base font-normal text-gray-500">
                      ... and, more features coming soon!
                    </p>
                  </div>
                </div>

                <div class="mt-14">
                  <a
                    href="#"
                    class="py-2 px-6 flex items-center justify-center rounded-md text-base font-normal text-white bg-gradient-to-r from-[#671277] to-[#d04fdf] focus:text-black transition-all duration-500"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="p-5 py-10 bg-gray-50 flex justify-center">
        <div className="container ">
          <div className="text-center max-w-xl mx-auto">
            <h6 className="font-normal uppercase mb-2">
              Our <span className="font-semibold">FAQs</span>
            </h6>
            <h2 className="text-3xl font-semibold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-normal text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque rem aperiam.
            </p>
          </div>
          <div className="flex justify-center py-5">
            <div id="faq-text" style={{ width: "80%" }}>
              <div
                data-fc-type="accordion"
                id="faq-text"
                className="space-y-4"
                style={{ maxWidth: "100%" }}
              >
                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base px-5 py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    How to install App?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet consectetur adipisci velit sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base px-5 py-3 inline-flex items-cener gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    How do I get the Mobile App for my phone?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="hidden w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base p-5 py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    What’s special about Appexy?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="hidden w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base p-5 py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    How much does Appexy cost?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="hidden w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base p-5 py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    How do I disable installed apps?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="hidden w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    className="fc-collapse-open:bg-gray-200 bg-white rounded fc-collapse-open:rounded-b-none text-base p-5 py-3 inline-flex items-center gap-x-3 w-full font-medium text-left text-gray-800 transition hover:text-gray-500"
                    data-fc-type="collapse"
                  >
                    What about the security of my payments?
                    <span className="mdi mdi-chevron-down ms-auto text-2xl transition-all fc-collapse-open:-rotate-180"></span>
                  </button>
                  <div className="hidden w-full overflow-hidden transition-[height] duration-300 bg-white rounded-b-md">
                    <p className="text-sm font-normal text-gray-500 p-5">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
