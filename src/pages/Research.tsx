const Research = () => (
  <section id="research">
    <div className="section-card">
      <h2 className="text-2xl font-semibold text-primary mb-4">RESEARCH & TEACHING EXPERIENCE</h2>
      
      {/* <p className="text-gray-800 leading-relaxed mb-6">
        I am broadly interested in AI/ML methods and systems that work reliably in real-world settings. I value the full research process: literature review, hypothesis framing, experiment design, metric-driven analysis, and writing structured reports. I enjoy exploring new technologies when they help answer concrete questions, and I am open to interdisciplinary directions that benefit from solid methodology.
      </p> */}

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-dark mb-2">Graduate Research Assistant, Grand Valley State University</h3>
          <p className="text-gray-800">
            Explored deep learning models for image classification, conducted literature reviews, designed and tuned experiments, analyzed results with standard metrics, and documented findings in structured reports to support faculty research.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-dark mb-2">Graduate Teaching Assistant, Grand Valley State University</h3>
          <p className="text-gray-800">
            Graduate Teaching Assistant for undergraduate C programming (EGR 112) labs. Supported students during labs, clarified core programming concepts, and provided written feedback on assignments and exams to help improve code quality and problem-solving.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Research;
