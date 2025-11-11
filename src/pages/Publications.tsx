const Publications = () => (
  <section id="publications">
    <div className="section-card">
      <h2 className="text-2xl font-semibold text-primary mb-4">Selected Publications</h2>

  <p className="text-gray-800 mb-4">Below are selected peer-reviewed papers and preprints. Replace these placeholders with your real publications (title, authors, venue, year, links).</p>

      <ol className="list-decimal pl-6 text-gray-700 space-y-4">
        <li className="pb-2 border-b last:border-b-0">
          <div className="font-semibold text-dark">M. K. C., A. Researcher, B. Scientist. "Interpretable Models for Reliable AI." <span className="text-sm text-gray-600">Proceedings of Important Conference</span> (2024). <a href="#" className="text-primary underline ml-2">PDF</a>
          </div>
          <div className="text-sm text-gray-600">Short note: contribution or highlight (e.g., new interpretability method, dataset, or results).</div>
        </li>

        <li className="pb-2 border-b last:border-b-0">
          <div className="font-semibold text-dark">M. K. C., C. Collaborator. "Robust Feature Attribution." <span className="text-sm text-gray-600">Journal of ML Research</span> (2023). <a href="#" className="text-primary underline ml-2">DOI</a>
          </div>
          <div className="text-sm text-gray-600">Short note: what this paper shows and why it matters.</div>
        </li>

        <li className="pb-2 border-b last:border-b-0">
          <div className="font-semibold text-dark">M. K. C. "A Practical Guide to Explainable AI." <span className="text-sm text-gray-600">arXiv preprint</span> (2022). <a href="#" className="text-primary underline ml-2">arXiv</a>
          </div>
          <div className="text-sm text-gray-600">Short note: preprint that motivated follow-up work or code release.</div>
        </li>
      </ol>

      <div className="mt-6">
        <a href="#" className="text-primary underline">Full publication list (Google Scholar / ORCID)</a>
      </div>
    </div>
  </section>
);

export default Publications;
