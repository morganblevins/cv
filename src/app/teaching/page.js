import Link from "next/link";
import Header from "../../components/Header";


export default function Teaching() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Header />
      

      {/* Teaching Section */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Teaching</h1>
          <hr className="border-t-2 border-gray-300 w-24 mx-auto" />
        </div>

        {/* Course 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Photonic Metamaterials (2.719)
          </h2>
          <hr className="border-t border-gray-300 mb-4" />
          <p className="text-lg text-gray-700 mb-4">
            <b>Course Development & Teaching Assistant</b>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <b>Graduate course, MIT, Mechanical Engineering, 2023 & 2024</b>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Created 5 problem sets, contributed to course development, and provided Teaching Assistant duties for MIT Mechanical Engineering graduate-level nanophotonics and metamaterials class with Prof. Svetlana Boriskina.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            “Provides a review of Maxwell’s equations and the Helmholtz wave equation. Optical devices: waveguides and cavities, phase and group velocity, causality, and scattering. Light-matter interaction in bulk, surface, and subwavelength-structured matter. Effective media, dispersion relationships, wavefronts and rays, eikonal description of light propagation, phase singularities. Transformation optics, gradient effective media. Includes description of the experimental tools for realization and measurement of photonic materials and effects. Students taking graduate version complete additional assignments.”
          </blockquote>
        </section>

        {/* Course 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Optics and Photonics (6.6310)
          </h2>
          <hr className="border-t border-gray-300 mb-4" />
          <p className="text-lg text-gray-700 mb-4">
            <b>Teaching Assistant</b>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <b>Graduate course, MIT, Electrical Engineering and Computer Science, 2022</b>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Teaching Assistant for MIT EECS graduate-level Optics and Photonics with Prof. James Fujimoto.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            “Introduction to fundamental concepts and techniques of optics, photonics, and fiber optics, aimed at developing skills for independent research. Topics include: Review of Maxwell’s equations, light propagation, reflection and transmission, dielectric mirrors and filters. Scattering matrices, interferometers, and interferometric measurement. Fresnel and Fraunhofer diffraction theory. Lenses, optical imaging systems, and software design tools. Gaussian beams, propagation and resonator design. Optical waveguides, optical fibers, and photonic devices for encoding and detection. Discussion of research operations / funding and professional development topics. The course reviews and introduces mathematical methods and techniques, which are fundamental in optics and photonics, but also useful in many other engineering specialties.”
          </blockquote>
        </section>
      </main>
    </div>
  );
}
