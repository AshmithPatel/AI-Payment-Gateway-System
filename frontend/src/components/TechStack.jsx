function TechStack() {
  const technologies = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Razorpay",
    "Tailwind CSS",
    "AI"
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Technologies Used
      </h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-cyan-500 px-6 py-3 rounded-full font-semibold"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;