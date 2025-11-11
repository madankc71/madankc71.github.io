const Contact = () => (
  <section id="contact" className="py-12">
    <div className="section-card">
      <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
      <p className="text-gray-800 mb-8 max-w-2xl"> I am grateful for chances to learn and contribute. If you are exploring something interesting, in AI/ML or any CS area, I would be glad to hear from you and see where I can help.</p>
      <p className="text-gray-800 mb-8 max-w-2xl">Please feel free to reach out.</p>
      <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl">✉️</span>
        <div>
          <p className="text-gray-600">Email</p>
          <a href="mailto:madankc71@gmail.com" className="text-primary hover:underline font-semibold">
            madankc71@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl">🔗</span>
        <div>
          <p className="text-gray-600">GitHub</p>
          <a 
            href="https://github.com/madankc71" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            github.com/madankc71
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
);
export default Contact;
