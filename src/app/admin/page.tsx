import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard" };

export default function AdminPage() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="panel">
          <div className="eyebrow">Studio management</div>
          <h1 className="page-title">Admin dashboard</h1>
          <p>
            This is the planned workspace for customer accounts, album folders,
            bulk photo uploads, file moves, permissions, and activity logs.
          </p>
          <div className="notice">
            Admin access is not enabled yet. Before production, this route must be
            protected with server-verified admin authorization.
          </div>
        </section>
      </div>
    </main>
  );
}
