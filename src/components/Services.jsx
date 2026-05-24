import "../styles/Services.css";

function Services() {
  return (
    <section className="services" id="hizmetler">
      <div className="services-header">
        <span>HİZMETLERİMİZ</span>
        <h2>Saha ihtiyaçlarınıza güçlü çözümler</h2>
        <p>
          Hafriyat, kazı, dolgu, yıkım ve nakliye işlerinizde güvenilir ve hızlı
          hizmet sunuyoruz.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h3>Kazı Çalışmaları</h3>
          <p>Temel kazısı, kanal açma ve arazi düzenleme hizmetleri.</p>
        </div>

        <div className="service-card">
          <h3>Hafriyat Taşıma</h3>
          <p>Şantiye alanlarından çıkan malzemelerin güvenli nakliyesi.</p>
        </div>

        <div className="service-card">
          <h3>Yıkım İşleri</h3>
          <p>Kontrollü, güvenli ve planlı yapı yıkım çalışmaları.</p>
        </div>

        <div className="service-card">
          <h3>Dolgu & Tesviye</h3>
          <p>Zemin düzeltme, dolgu ve saha hazırlık işlemleri.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
