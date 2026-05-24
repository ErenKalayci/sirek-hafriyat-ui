import "../styles/About.css";

function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="about-left">
        <span className="section-tag">HAKKIMIZDA</span>

        <h2>
          Modern ekipman,
          <br />
          deneyimli kadro
        </h2>

        <p>
          Sirek Hafriyat olarak yıllardır hafriyat, kazı, yıkım ve nakliye
          alanlarında profesyonel çözümler sunuyoruz. Güçlü makina parkurumuz ve
          uzman operatör ekibimizle projeleri zamanında teslim ediyoruz.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <span>✓</span>
            <p>Güçlü makina parkuru</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Uzman saha ekibi</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Zamanında teslim</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>7/24 operasyon desteği</p>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="experience-card">
          <h3>15+</h3>
          <p>Yıllık sektör deneyimi</p>
        </div>

        <div className="mini-card top-card">
          <h4>100+</h4>
          <p>Tamamlanan proje</p>
        </div>

        <div className="mini-card bottom-card">
          <h4>%100</h4>
          <p>Müşteri memnuniyeti</p>
        </div>
      </div>
    </section>
  );
}

export default About;
