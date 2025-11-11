const Resume = () => (
  <section id="resume">
    <div className="section-card">
      <h2 className="text-2xl font-semibold text-primary mb-4">RESUME</h2>
      <p className="text-gray-800 mb-6">
        Download my resume to see information about my professional experience, education, and skills.
      </p>
      <div className="flex gap-4">
      <a
        href="/assets/Resume_Madan_KC.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        download
      >
        📄 Download Resume (PDF)
      </a>
      <a
        href="mailto:madankc71@gmail.com?subject=Resume%20Request"
        className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition font-semibold"
      >
        📧 Request PDF
      </a>
      </div>
    </div>
  </section>
);
export default Resume;
