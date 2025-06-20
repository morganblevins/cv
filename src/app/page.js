import Link from 'next/link'
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Include the header here */}
      <Header />

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto p-8">
        <div className="flex gap-12 items-start mb-16">
          <div>
          <p className="mb-4 text-black">
              Hi there! I'm Morgan Blevins, a PhD candidate at MIT in the EECS department working in the Metamaterials group, 
              advised by Dr. Svetlana Boriskina. 
            </p>
            <p className="mb-4 text-black">
              I recieved my Bachelors degree from Harvey Mudd in 2019 and my masters degrees
              from the MIT-WHOI Joint Program in 2021. I started working on my PhD in 2021.
            </p>
            <div className="flex gap-6">
              {/* <a href="#" className="text-black hover:opacity-70">CV</a> */}
              <a href="/about" className="text-black hover:opacity-70">Contact info</a>
            </div>
          </div>
          <img 
            src="/Morgan Blevins.jpg" 
            alt="Profile" 
            className="w-64 h-64 rounded-lg object-cover"
          />
        </div>

        {/* Research Section */}
        <section id="research" className="mb-16">
          {/* <h2 className="text-3xl font-bold mb-8 text-black">Research</h2> */}
          <div className="space-y-8">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-black">PhD Research Projects</h3>
              <p className="text-black mb-4">
                During my PhD I've been intersted in light-matter interaction in topological materials and I've worked on projects that explore 
                nonreciprocal plasmonics and anomalous photocurrent. I've investigated how current biasing Dirac/Weyl semimetals can unlock a unique 
                nonreciprocal plasmonic response
                <a href="https://pubs.acs.org/doi/10.1021/acsphotonics.3c01416" className="text-blue-600 hover:opacity-70"> ACS Photonics 11.2 (2024): 537-549. </a>
                I'm currently experimentally probing nonlinear photocurrents (the bulk photovoltaic effect) in quantum materials to both better fundamentally understand their 
                optoelectronic behavior and unlock applications in energy harvesting, sensing, and nonreciprocal transport.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}