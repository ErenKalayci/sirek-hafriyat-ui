import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="contact-content">
        <span>İLETİŞİM</span>

        <h2>Projeniz için hızlı teklif alın</h2>

        <p>
          Hafriyat, kazı, dolgu, yıkım ve nakliye işleriniz için bizimle
          iletişime geçin.
        </p>

        <div className="contact-buttons">
          <a href="tel:05326531765">0532 653 17 65</a>

          <a
            className="whatsapp"
            href="https://wa.me/905326531765"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp’tan Yaz
          </a>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h4>Adres</h4>

            <p>
              İstanbul Caddesi, Kınalı Kavşağı,
              <br />
              Mezbaha Sokak, No:23
              <br />
              Değirmenköy / Silivri / İstanbul
            </p>
          </div>

          <div className="info-card">
            <h4>E-Posta</h4>
            <p>info@sirekhafriyat.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
