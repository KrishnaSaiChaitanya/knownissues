/* Freebies.jsx */
// import { Container2 } from "@/app/components/Container2";

const paragraphClass = "font-[Plus Jakarta Sans] text-xl text-left pb-[1em]";
const h3Class = "text-3xl font-bold pb-8";
// import curatedPreviewImg from '@/app/images/freebies-images/curated-lc.jpeg'
// import destinationsPreviewImg from '@/app/images/freebies-images/destinations-mal.jpeg'

export function Freebies() {
  return (
    <section
      id="join-our-community"
      className="relative overflow-hidden py-8 sm:py-8 max-w-screen"
    >
      <div className="heading_div p-5 text-center m-auto">
        <div className="animation">
          <div className="anm_mod zoomIn">
            <h1 className="text-[#651279]">
              <strong>Bonus </strong> Content
            </h1>
          </div>
        </div>

        <div className="sub_text max-w-[700px] m-auto text-[#1A1D1A] text-lg">
          <span>Available for everyone!</span>
        </div>
      </div>
      <div className="relative flex flex-col items-center font-[Plus Jakarta Sans]">
        <div className="flex flex-col md:flex-row max-w-[1400px] p-8 gap-10">
          <div className="mx-auto sm:w-1/2 sm:text-center courses_outer px-8 py-8 rounded-2xl shadow-xl ring-1 ring-gray-900/10 relative">
            <div className="animation">
              <div className="anm_mod left">
                <h3
                  className={`${h3Class} text-left text-[#F1F1F1] mb-0 pb-0 pt-4`}
                >
                  Curated Content
                </h3>
              </div>
            </div>

            <p
              className={`${paragraphClass} text-[#F1F1F1] text-[16px] font-light`}
            >
              Embark on an extraordinary journey of self-discovery with our
              exclusive collection of over 1,000 hand-selected videos
            </p>

            <div className="preview_thumbnail pt-8 pb-8">
              <div className="animation">
                <div className="anm_mod zoomIn delay">
                  <img
                    className="rounded-2xl"
                    src={
                      "https://www.ambience.life/_next/static/media/curated-lc.95644a82.jpeg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h4
              className="text-center text-[#F1F1F1]"
              style={{ maxWidth: "55%", margin: "0 auto" }}
            >
              Discover, Learn, and Grow
              <br />
              One. Empowering. Video. At A Time
            </h4>
          </div>
          <div className="mx-auto sm:w-1/2 sm:text-center text-[#54005C] px-8 py-8 border-[#54005C] border rounded-2xl shadow-xl ring-1 ring-gray-900/10 relative">
            <div className="animation">
              <div className="anm_mod left">
                <h3
                  className={`${h3Class} text-left text-[#54005C] mb-0 pb-0 pt-4`}
                  style={{
                    background:
                      "linear-gradient(400deg, #520e63, #651279, #b221d2)",
                    WebkitBackgroundClip: "text", // For Safari
                    color: "transparent",
                  }}
                >
                  Destinations
                </h3>
              </div>
            </div>

            <p
              className={`${paragraphClass} text-[#54005C] text-[16px] font-light`}
              style={{
                background:
                  "linear-gradient(400deg, #520e63, #651279, #b221d2)",
                WebkitBackgroundClip: "text", // For Safari
                color: "transparent",
              }}
            >
              A world of wonder awaits with over 500 hand-selected videos
              covering more than 100 unique destinations
            </p>
            <div className="preview_thumbnail pt-8 pb-8">
              <div className="animation">
                <div className="anm_mod zoomIn delay">
                  <img
                    className="rounded-2xl"
                    src={
                      "https://www.ambience.life/_next/static/media/destinations-mal.7f23845c.jpeg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h4
              className="text-center text-[#54005C1]"
              style={{
                background:
                  "linear-gradient(400deg, #520e63, #651279, #b221d2)",
                WebkitBackgroundClip: "text", // For Safari
                color: "transparent",
                maxWidth: "55%",
                margin: "0 auto",
              }}
            >
              Discover the World, Heal Your Soul
              <br />
              With Our Destination Videos
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
