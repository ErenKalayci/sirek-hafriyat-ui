import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <div className="hero-dark"></div>

      <div className="hero-content">
        <p className="hero-top-text">
          GÜÇLÜ EKİPMAN • DENEYİMLİ KADRO • ZAMANINDA TESLİM
        </p>

        <h1>
          Güvenilir Hafriyat
          <span> Sağlam Gelecek</span>
        </h1>

        <p className="hero-description">
          Kazı, dolgu, yıkım ve nakliye hizmetlerinde modern ekipmanlarımız ve
          uzman ekibimizle projelerinize değer katıyoruz.
        </p>

        <div className="hero-buttons">
          <button className="hero-primary">→ TEKLİF AL</button>
          <button className="hero-secondary">HİZMETLERİ İNCELE →</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon">✓</div>
            <div>
              <h3>15+</h3>
              <h4>Yıllık Deneyim</h4>
              <p>Sektörde güven ve istikrarın adresi.</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">🚜</div>
            <div>
              <h3>7/24</h3>
              <h4>Operasyon Desteği</h4>
              <p>İhtiyaç duyduğunuz her an yanınızdayız.</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div>
              <h3>100+</h3>
              <h4>Tamamlanan Proje</h4>
              <p>Başarıyla tamamlanmış yüzlerce proje.</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">★</div>
            <div>
              <h3>%100</h3>
              <h4>Müşteri Memnuniyeti</h4>
              <p>Kaliteli hizmet, mutlu müşteriler.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
