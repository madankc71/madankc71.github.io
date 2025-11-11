const Projects = () => (
  <section id="projects">
  <h2 className="text-2xl font-semibold text-primary mb-4">PROJECTS</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">Coral Reef Image Classification</h3>
        <p className="text-gray-800 mb-3">Trained a custom CNN to classify coral vs. non-coral images. Implemented convolutional layers, dropout, data augmentation, and validation/testing with GPU support.</p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong> PyTorch, CNN, ReLU, Adam optimizer, DataLoader, GPU training, data augmentation</p>
      </div>
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">Analysis of World Development Indicators</h3>
        <p className="text-gray-800 mb-3"> Explored global trends in education, energy, emissions, and health and presented findings in a structured, research-style report. </p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong> R, Python (pandas), Tableau</p>
      </div>
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">MNIST Digit Classification (from scratch)</h3>
        <p className="text-gray-800 mb-3">Built a MultiLayer Perceptron (MLP) in R to classify MNIST, implementing ReLU, softmax, He init, backprop, and a manual training loop.</p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong> R, custom MLP, ReLU, softmax, He initialization, gradient descent</p>
      </div>
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">CITE-seq Prediction (Multivariate Regression)</h3>
        <p className="text-gray-800 mb-3">Predicted ADT values from RNA data using a custom multivariate regression approach with normalization, matrix cross-products.</p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong> R, matrix operations, normalization, multivariate regression, Gauss–Seidel iteration</p>
      </div>
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">Species Recommendation</h3>
        <p className="text-gray-800 mb-3">Built a simple KNN-based recommender and optimized normalization and distance calculations</p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong>R, KNN, normalization techniques, distance metrics</p>
      </div>
      <div className="section-card">
        <h3 className="text-lg font-semibold text-dark mb-2">California Unemployment Data Analysis</h3>
        <p className="text-gray-800 mb-3">Cleaned and analyzed California unemployment data and visualized it to identify regional and temporal patterns.</p>
        <p className="text-sm text-gray-600"><strong>Tech Stack:</strong> Python (Pandas, Matplotlib), Tableau, Data Cleaning, EDA</p>
      </div>
    </div>
  </section>
);
export default Projects;
