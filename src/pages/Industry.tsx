const Industry = () => (
  <section id="industry">
    <div className="section-card">
      <h2 className="text-2xl font-semibold text-primary mb-4">INDUSTRY EXPERIENCE</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-lg font-semibold text-dark">Software Engineer, S3 Technical Solutions</h3>
          <p className="text-gray-600 text-sm">Current Role</p>
          <p className="text-gray-800 mt-2">
            I work at the intersection of backend development and applied ML/AI. Recently, I led development of an internal RAG assistant: implemented document ingestion and embedding, similarity search over a vector store, and prompt/context construction, with logging for error analysis and quality monitoring.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-lg font-semibold text-dark">Data Analyst, Calcgen Solutions</h3>
          <p className="text-gray-600 text-sm">Previous Experience</p>
          <p className="text-gray-800 mt-2">
            Designed data cleaning and preprocessing workflows, built predictive models, and communicated results through reports/dashboards for decision support. Work here strengthened my habits in evaluation and careful interpretation of results.
          </p>
        </div>
        <div className="border-l-4 border-primary pl-4">
          <h3 className="text-lg font-semibold text-dark">Software Developer, SmartSites Nepal</h3>
          <p className="text-gray-600 text-sm">Previous Experience</p>
          <p className="text-gray-800 mt-2">
            Developed and maintained client-facing web applications, collaborated with cross-functional teams, and delivered performance and usability improvements. This period sharpened my engineering discipline and communication with non-technical stakeholders.
          </p>        
        </div>
      </div>
    </div>
  </section>
);
export default Industry;
