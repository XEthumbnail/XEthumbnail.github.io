import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link href="/" className="btn btn-outline" style={{ marginBottom: '32px', display: 'inline-flex', padding: '8px 20px' }}>
          ← Back to Home
        </Link>
        
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle" style={{ margin: '0 0 40px 0' }}>Last updated: January 2026</p>
        
        <div style={{ lineHeight: '1.8', color: 'var(--md-on-surface-variant)' }}>
          <p style={{ marginBottom: '24px' }}>
            At XEthumbnail ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our design services.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>1. Information We Collect</h3>
          <p style={{ marginBottom: '16px' }}>
            We collect information that you voluntarily provide to us when you fill out forms on the website or communicate with us via email. This may include:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Name and Contact Information (Email address).</li>
            <li>Project details (Channel niche, video topics, design preferences).</li>
            <li>Any other files or images you provide for the design process.</li>
          </ul>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>2. How We Use Your Information</h3>
          <p style={{ marginBottom: '16px' }}>
            We use the collected information for the following purposes:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li>To provide and deliver the design services you request.</li>
            <li>To communicate with you regarding your order, revisions, and delivery.</li>
            <li>To improve our website and service offerings.</li>
          </ul>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>3. Data Protection</h3>
          <p style={{ marginBottom: '24px' }}>
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We do not sell, trade, or rent your personal information to third parties.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>4. Portfolio Usage</h3>
          <p style={{ marginBottom: '24px' }}>
            Unless a Non-Disclosure Agreement (NDA) is signed, we reserve the right to display completed thumbnails in our portfolio and social media to demonstrate our work quality.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:<br/>
            <strong>Email:</strong> XEthumbnail@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
