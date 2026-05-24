import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Villa Temel Kazısı",
      location: "Şanlıurfa",
    },
    {
      title: "Şantiye Hafriyat Çalışması",
      location: "Gaziantep",
    },
    {
      title: "Yıkım ve Moloz Taşıma",
      location: "Diyarbakır",
    },
  ];

  return (
    <section className="projects" id="projeler">
      <div className="projects-header">
        <span>PROJELERİMİZ</span>

        <h2>Tamamlanan saha çalışmaları</h2>

        <p>
          Profesyonel ekipmanlarımız ve uzman kadromuz ile tamamladığımız
          projelerden bazıları.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-overlay">
              <span>{project.location}</span>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
