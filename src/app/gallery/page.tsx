import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Photo Gallery" };

export default function GalleryPage() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="panel">
          <div className="eyebrow">Customer area</div>
          <h1 className="page-title">Your photo albums</h1>
          <p>
            The gallery will list albums assigned to the signed-in customer. We will
            add server-side authorization and private Supabase Storage access before
            displaying any real photos.
          </p>
          <div className="notice">
            Gallery setup is not connected to customer data yet.
          </div>
        </section>
      </div>
    </main>
  );
}
