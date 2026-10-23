import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Photography · Stories · Memories</div>
          <h1>Your moments deserve to be remembered beautifully.</h1>
          <p>
            Welcome to Alok Studio. Explore our photography services and securely
            access your personal photo gallery when your album is ready.
          </p>
          <div className="actions">
            <Link className="button" href="/login">Open customer gallery</Link>
            <Link className="button secondary" href="/contact">Contact the studio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Photography for your special moments</h2>
          <p className="section-intro">
            This starter page will grow into your studio website. Services, portfolio
            photographs, prices, and testimonials can be added through later steps.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Wedding Photography</h3>
              <p>Preserve the emotion, people, and details of your special day.</p>
            </article>
            <article className="card">
              <h3>Portraits & Events</h3>
              <p>Thoughtful photography for families, celebrations, and milestones.</p>
            </article>
            <article className="card">
              <h3>Private Photo Gallery</h3>
              <p>Sign in to view the albums that have been shared securely with you.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
