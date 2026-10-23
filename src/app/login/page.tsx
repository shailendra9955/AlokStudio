import type { Metadata } from "next";

export const metadata: Metadata = { title: "Customer Login" };

export default function LoginPage() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="panel">
          <div className="eyebrow">Private client area</div>
          <h1 className="page-title">Customer login</h1>
          <p>
            Your private photo gallery will be available here after we connect
            Supabase Authentication and implement secure session handling.
          </p>
          <div className="notice">
            Setup page only: sign-in is not active yet. Do not enter passwords here.
          </div>
        </section>
      </div>
    </main>
  );
}
