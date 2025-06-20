import Link from "next/link";
import Header from "../../components/Header";

export default function Publications() {
  // Array of publications (combined: newest to oldest)
  const allPublications = [
    {
      title: "What could we do with a 20 meter tower on the Lunar South Pole? Applications of the Multifunctional Expandable Lunar Lite & Tall Tower (MELLTT).",
      authors: "Robert T. Johanson, Dan Jang, Ekaterina Kononov, Michael Luu, Sarah J. Morgan, Jessica Todd, Morgan Blevins, Mario Contreras, Daniel Erkel, Axel Garcia, et al.",
      year: 2020,
      journal: "ASCEND 2020",
      link: "#",
      category: "Masters",
    },
    {
      title: "Planar nanophotonic structures for intensity based readout refractive index sensing applied to dissolved methane detection",
      authors: "Morgan Blevins, Anna P.M. Michel, Svetlana V. Boriskina",
      year: 2020,
      journal: "OSA Continuum",
      link: "#",
      category: "Masters",
    },
    {
      title: "High contrast probe cleavage detection",
      authors: "Michael Dubrovsky, Morgan Blevins, Svetlana V. Boriskina, Diedrik Vermeulen",
      year: 2020,
      journal: "Frontiers in Optics",
      link: "#",
      category: "Masters",
    },
    {
      title: "Strategies for equitable remote learning communities in graduate STEM classes",
      authors: "Danielle Freeman, Lina Taenzer, Morgan Blevins, EeShan Chetan Bhatt",
      year: 2022,
      journal: "Authorea Preprints",
      link: "#",
      category: "PhD",
    },
    {
      title: "High Contrast Cleavage Detection",
      authors: "Diedrik Vermeulen, Michael Dubrovsky, Morgan Blevins, Svetlana Boriskina",
      year: 2021,
      journal: "OSA Optics Letters",
      link: "#",
      category: "Masters",
    },
    {
      title: "Field-portable microplastic sensing in aqueous environments: A perspective on emerging techniques",
      authors: "Morgan Blevins, Harry L. Allen, Beckett C. Colson, Anna-Marie Cook, Alexandra Z. Greenbaum, Sheila S. Hemami, Joseph Hollmann, Ernest Kim, Ava A. LaRocca, Kenneth A. Markoski, et al.",
      year: 2021,
      journal: "Sensors",
      link: "#",
      category: "Masters",
    },
    {
      title: "Roadmap on Universal Photonic Biosensors for Real-Time Detection of Emerging Pathogens",
      authors: "Morgan Blevins, Alvaro Fernandez-Galiana, Milo J. Hooper, Svetlana V. Boriskina",
      year: 2021,
      journal: "Photonics",
      link: "#",
      category: "Masters",
    },
    {
      title: "Field-Portable Dissolved Gas Sensing and Perspectives in Aqueous Microplastic Detection",
      authors: "Morgan Blevins",
      year: 2021,
      journal: "Massachusetts Institute of Technology",
      link: "#",
      category: "Masters",
    },
    {
      title: "The nonreciprocal adventures of light",
      authors: "Svetlana V. Boriskina, Morgan Blevins, Simo Pajovic",
      year: 2022,
      journal: "Optics and Photonics News",
      link: "#",
      category: "PhD",
    },
    {
      title: "8.5-Micron Infrared Response in Flexoelectric Bi2Te3 Thin Film Cells",
      authors: "Morgan Blevins, Bruno Lorenzi, Remington Sandell, Svetlana Boriskina",
      year: 2022,
      journal: "Laser Science",
      link: "#",
      category: "PhD",
    },
    {
      title: "Plasmon Fizeau drag in 3D Dirac and Weyl semimetals",
      authors: "Morgan Blevins, Svetlana V. Boriskina",
      year: 2024,
      journal: "ACS Photonics",
      link: "#",
      category: "PhD",
    },
    {
      title: "Strain and Defect Contributions towards Photoluminescence in AgScP2S6",
      authors: "Abhishek Mukherjee, Damian Wlodarczyk, Ajeesh Somakumar, Piotr Sybilskirk, Morgan Blevins, Mark Polking, Michael A. Susner, Andrzej Suchocki, Svetlana V. Boriskina",
      year: 2024,
      journal: "CLEO: Science and Innovations",
      link: "#",
      category: "PhD",
    },
    {
      title: "Current-biased Weyl and Dirac Semimetals as Tunable Nonreciprocal Plasmonic Platforms",
      authors: "Morgan Blevins, Svetlana V. Boriskina",
      year: 2024,
      journal: "CLEO: Fundamental Science",
      link: "#",
      category: "PhD",
    },
    {
      title: "Optoelectronic Response of Nodal Line Semimetal PbTaSe₂",
      authors: "Morgan G. Blevins, Vivian Santamaria-Garcia, Svetlana V. Boriskina",
      year: 2024,
      journal: "MRS Conference",
      link: "#",
      category: "PhD",
    },    
    {
      title: "Nonreciprocal Hyperbolic and Surface Modes Enable Tunable Near‑Field Heat Transfer in Current‑Biased Dirac Semimetals",
      authors: "Morgan Blevins, Simo Pajović, Svetlana V. Boriskina",
      year: 2025,
      journal: "Nano Letters",
      link: "https://pubs.acs.org/doi/10.1021/acs.nanolett.5c00655",
      category: "PhD",
    },    
    {
      title: "Nanophotonic Enhanced Nonlinear Photocurrents in Weyl Semimetal TaIrTe₄",
      authors: "Morgan G. Blevins, Sachin Vaidya, Thanh Nguyen, Vivian Santamaria-Garcia, Juan Ferrera, Mingda Li, Marin Soljačić, Svetlana V. Boriskina",
      year: 2025,
      journal: "CLEO: Fundamental Science",
      link: "#",
      category: "PhD",
    },    
    {
      title: "Dynamically-Tunable Nonreciprocal Epsilon-Near-Zero Photonic Platform Enabled by Current-Biased Dirac Semimetals",
      authors: "H. Gold, Morgan Blevins, A. Mukherjee, Simo Pajović, Svetlana V. Boriskina",
      year: 2025,
      journal: "Optical Materials Express",
      link: "https://doi.org/10.1364/OME.486103",
      category: "PhD",
    },    
  ];
  
  // Sort publications by year (newest to oldest)
  const sortedPublications = allPublications.sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Header />

      {/* Publications Section */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <hr className="border-t-2 border-gray-300 w-24 mx-auto" />
        </div>
        {/* PhD Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">PhD</h2>
          <ol className="space-y-6">
            {sortedPublications
              .filter((pub) => pub.category === "PhD")
              .map((pub, index) => {
                const totalIndex = sortedPublications.length - sortedPublications.indexOf(pub);
                const authorsWithBoldName = pub.authors.replace(
                  /Morgan Blevins/g,
                  "<b>Morgan Blevins</b>"
                );

                return (
                  <li
                    key={pub.title}
                    className="text-lg text-gray-800"
                    dangerouslySetInnerHTML={{
                      __html: `${totalIndex}. ${authorsWithBoldName}. "${pub.title}." <i>${pub.journal}</i>, ${pub.year}. <a href="${pub.link}" class="text-blue-600 hover:text-blue-800 underline ml-2">View Paper</a>`,
                    }}
                  />
                );
              })}
          </ol>
        </section>

        {/* Masters Publications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Masters</h2>
          <ol className="space-y-6">
            {sortedPublications
              .filter((pub) => pub.category === "Masters")
              .map((pub, index) => {
                const totalIndex = sortedPublications.length - sortedPublications.indexOf(pub);
                const authorsWithBoldName = pub.authors.replace(
                  /Morgan Blevins/g,
                  "<b>Morgan Blevins</b>"
                );

                return (
                  <li
                    key={pub.title}
                    className="text-lg text-gray-800"
                    dangerouslySetInnerHTML={{
                      __html: `${totalIndex}. ${authorsWithBoldName}. "${pub.title}." <i>${pub.journal}</i>, ${pub.year}. <a href="${pub.link}" class="text-blue-600 hover:text-blue-800 underline ml-2">View Paper</a>`,
                    }}
                  />
                );
              })}
          </ol>
        </section>
      </main>
    </div>
  );
}
