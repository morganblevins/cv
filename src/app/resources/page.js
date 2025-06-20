import Header from "../../components/Header";

const bibtexEntries = [
  {
    title: "Photonic Crystals: Molding the Flow of Light",
    author: "John D. Joannopoulos, Steven G. Johnson, Joshua N. Winn, and Robert D. Meade",
    edition: "2nd",
    year: "2008",
    publisher: "Princeton University Press",
    section: "Optics and Photonics"
  },
  {
    title: "Waves and Fields in Optoelectronics",
    author: "Hermann Haus",
    year: "1984",
    publisher: "Prentice Hall",
    section: "Optics and Photonics"
  },
  {
    title: "Optical Waves in Crystals",
    author: "Amnon Yariv and Pochi Yeh",
    year: "1984",
    publisher: "Wiley",
    section: "Optics and Photonics"
  },
  {
    title: "Lecture Notes on Quantum Mechanics MSU PHY 851/852",
    author: "Scott Pratt",
    year: "2000",
    publisher: "Michigan State University",
    section: "Quantum Mechanics"
  },
  {
    title: "Introduction to Quantum Mechanics: A Time-Dependent Perspective",
    author: "David J. Tannor",
    year: "2007",
    publisher: "University Science Books",
    section: "Quantum Mechanics"
  },
  {
    title: "Quantum Theory of Materials",
    author: "Efthimios Kaxiras and John D. Joannopoulos",
    year: "2009",
    publisher: "Cambridge University Press",
    section: "Solid State and Condensed Matter"
  },
  {
    title: "Faraday, Maxwell, and the Electromagnetic Field",
    author: "Nancy Forbes and Basil Mahon",
    year: "2002",
    publisher: "The MIT Press",
    section: "E&M History"
  }
];

export default function Resources() {
  // Group resources by their section
  const groupedResources = bibtexEntries.reduce((acc, entry) => {
    if (!acc[entry.section]) {
      acc[entry.section] = [];
    }
    acc[entry.section].push(entry);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto p-6">
        {/* <h1 className="text-3xl font-bold text-center mb-8 text-black">My notes</h1>
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl text-black mb-4 uppercase">Derivations</h2>
                    <hr className="my-4 border-t border-gray-300" />
                </section>
            </div> */}

        <h1 className="text-3xl font-bold text-center mb-8 text-black">My Favorite Textbooks and Resources</h1>

        <div className="space-y-8">
          {/* Loop over each grouped section */}
          {Object.keys(groupedResources).map((section, index) => (
            <section key={index}>
              {/* Section Title - only display once per section */}
              <h2 className="text-xl text-black mb-4 uppercase">{section}</h2>
              <hr className="my-4 border-t border-gray-300" /> {/* Dividing line */}

              {/* Display resources in this section as a list with bullet points */}
              <ul className="list-disc pl-5 space-y-2">
                {groupedResources[section].map((entry, idx) => (
                  <li key={idx}>
                    {/* MLA Citation Format */}
                    <p className="text-md">
                      <strong>{entry.title}</strong>. <i>{entry.author}</i>. {entry.edition ? entry.edition + " edition, " : ""}{entry.year}. {entry.publisher}.
                    </p>
                  </li>
                ))}
              </ul>

              {/* Optional: Dividing line between sections */}
              {/* <hr className="my-6 border-t border-gray-300" /> */}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
