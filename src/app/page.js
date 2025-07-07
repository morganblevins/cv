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
              In my PhD research I've been interested in the light-matter interaction in topological semimetals, working on both theoretical 
              and experimental projects.
            </p>
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
        During my PhD I've been interested in light-matter interaction in topological materials and I've worked on projects that explore 
        nonreciprocal plasmonics and anomalous photocurrents. 
      </p>

      <p className="text-black mb-4">
        Using semiclassical theory, I derived and showed how current biasing Dirac/Weyl semimetals can unlock a unique 
        nonreciprocal plasmonic response via an effect called "plasmon Fizeau drag":
        <a href="https://pubs.acs.org/doi/10.1021/acsphotonics.3c01416" className="text-blue-600 hover:opacity-70"> ACS Photonics 2024, 11, 2, 537–549. </a>
      </p>

      <img 
        src="/DSM_Fizeau.jpg" 
        alt="Plasmon Fizeau drag in DSMs" 
        className="mx-auto my-6 max-w-lg"
      />

      <p className="text-black mb-4">
        I extended this work to show how this effect can unlock highly tunable near-field heat transfer through the modulation of surface and hyperbolic modes: 
        <a href="https://pubs.acs.org/doi/abs/10.1021/acs.nanolett.5c00655" className="text-blue-600 hover:opacity-70"> Nano Lett. 2025, 25, 22, 8876–8883. </a>
      </p>

      <img 
        src="/DSM_NFRHT.svg" 
        alt="Illustration of NFRHT switching with bias" 
        className="mx-auto my-6 max-w-lg"
      />

      <p className="text-black mb-4">
        I've built a scanning photocurrent microscope from scratch to characterize the local photocurrent response in the visible and infrared. 
        I'm currently probing nonlinear photocurrents in quantum materials to both better fundamentally understand their 
        optoelectronic behavior and enable applications in energy harvesting, sensing, and nonreciprocal transport.
      </p>

      <img 
        src="/ScanningPhotocurrent.jpg" 
        alt="Scanning photocurrent microscope and examples of samples and data outputs" 
        className="mx-auto my-6 max-w-lg"
      />
    </div>
  </div>
</section>

      </main>
    </div>
  );
}