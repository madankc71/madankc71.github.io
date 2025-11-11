const Home = () => (
  <section id="home" className="py-12">
    <div className="md:grid md:grid-cols-[260px_1fr] md:items-start md:gap-10">
      <div className="flex-shrink-0 mb-6 md:mb-0 flex flex-col items-center mt-4">
        {/* Use uploaded profile image if available */}
        <img
          src="/assets/profile.jpeg"
          alt="Madan K C"
          className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover shadow-sm"
        />

        {/* Location */}
  <div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
          <span aria-hidden>📍</span>
          <span>Dallas, USA</span>
        </div>

        {/* Primary actions under image */}
  <div className="mt-4 flex gap-3 justify-center">
          <a
            href="https://github.com/madankc71"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            View GitHub
          </a>
          <a
            href="mailto:madankc71@gmail.com"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="md:flex-1">
        <h1 className="text-5xl font-bold text-primary mb-2">Madan K C</h1>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        <div className="space-y-4">
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            Hi, I am Madan K C. I have come up through steady, hands-on work in computer science, research, teaching, and industry. That path taught me to be careful, clear, and consistent.
          </p>
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            Right now, I work on AI/ML with a strong backend focus. I build retrieval workflows, data/embedding pipelines, and service APIs, and I care about testing, reliability, and clear documentation. I like careful reading, small experiments, and writing things up clearly.
          </p>
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            I am applying for a PhD in Computer Science. I enjoy AI/ML and data-driven work, and I am also open to other core CS areas and interdisciplinary projects where solid methods and clear reasoning matter.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-dark mb-2">Research Interests</h3>
          <ul className="list-disc pl-5 text-gray-800 space-y-2">
            <li>Reliable, well-tested AI/ML systems</li>
            <li>Evaluation and error analysis that lead to real improvements</li>
            <li>Data and retrieval workflows used in practical settings</li>
            <li>Interdisciplinary work that benefits from careful CS methodology</li>
            <li>Open to other CS topics where I can learn and contribute</li>
          </ul>
        </div>
        
      </div>
    </div>
  </section>
);
export default Home;
