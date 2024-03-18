import './index.css'

type Props = {}

const Footer = ({ }: Props) => {

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <a
          href="https://web.facebook.com/profile.php?id=100027552104877"
          target="_blank"
          className="btn contact-details"
        ><i className="fab fa-facebook-square"></i> Facebook</a
        >
        <a
          id="profile-link"
          href="https://github.com/nghia45"
          target="_blank"
          className="btn contact-details"
        ><i className="fab fa-github"></i> GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-ngh%C4%A9a-nguy%E1%BB%85n-4a8338281/"
          target="_blank"
          className="btn contact-details"
        ><i className="fab fa-linkedin"></i> Linkedin</a
        >
        <a href="mailto:example@example.com" className="btn contact-details"
        ><i className="fas fa-at"></i> Send a mail</a
        >
        <a href="tel:555-555-5555" className="btn contact-details"
        ><i className="fas fa-mobile-alt"></i> Call me</a
        >
      </div>
    </section>
  )
}

export default Footer