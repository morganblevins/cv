import Link from "next/link";
import Header from "../../components/Header";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Header />

      {/* About Section */}
      <main className="max-w-5xl mx-auto p-8 px-4">
        <div className="flex justify-between items-center mb-12 gap-12">
          {/* Bio Text Section (left side) */}
          <div className="text-lg text-gray-700 space-y-8 w-3/5">
            <p>
              I'm <strong>Morgan Blevins</strong>, a PhD candidate at MIT in the
              EECS department working in the Metamaterials group, advised by Dr.
              Svetlana Boriskina.
            </p>

            <p>
              I received my Bachelor's degree from Harvey Mudd in 2019 and my
              master's degrees from the MIT-WHOI Joint Program in 2021.
            </p>

            <p>
              I started my PhD work in 2021 and study nanophotonics and light-matter interaction,
               with applications in energy harvesting, photodetection, and nonreciprocal transport. 
               I’m supported by Draper labs as a member of their scholars program.
            </p>

            <p>
              Outside of research, I am a distance runner with Tracksmith’s 
              amateur Boston Hares team. My marathon PR is 3:01 and I'm training now to break
              3:00.


            </p>

          </div>

          {/* Image and Contact Section (right side) */}
          <div className="flex flex-col items-center justify-center w-2/5 text-center">
            {/* Image */}
            <img
              src="/posterPresenting.jpg"
              alt="Morgan Blevins"
              className="w-64 h-64 object-cover mb-4"
            />

            {/* Contact Information */}
            <div className="text-right">
              {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact info
              </h2> */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect with Me
              </h2>
              <p>
              Email: mblevins "at" mit.edu
              </p>
              <p>
              <a
              href="https://www.linkedin.com/in/morgan-blevins-451237106/"
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              LinkedIn
            </a>
              </p>
              <p>
              <a
              href="https://scholar.google.com/citations?user=HfUsZNUAAAAJ&hl=en"
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              Google Scholar
            </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 mb-12" />

      </main>
    </div>
  );
}
