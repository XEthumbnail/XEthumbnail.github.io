'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    // ----------------------------------------------------------------------
    // TODO: Paste your Cloudflare Worker URL inside the quotes below
    // ----------------------------------------------------------------------
    const WORKER_URL = "https://api.xethumbnail.workers.dev";

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult('Success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setResult('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResult('Error connecting to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to boost your channel? Send me a message.</p>
        </div>
        
        <div className={styles.contactWrapper}>
          {result === 'Success' ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              color: 'var(--md-primary)',
              fontWeight: 'bold' 
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚡</div>
              <h3>Sent Successfully!</h3>
              <p style={{ color: 'var(--md-on-surface-variant)', marginTop: '8px' }}>
                I have received your message instantly on Telegram.
              </p>
              <button 
                onClick={() => setResult(null)} 
                className="btn btn-outline" 
                style={{ marginTop: '24px' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Your name" 
                  required 
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="name@example.com" 
                  required 
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  rows={4} 
                  id="message"
                  name="message"
                  placeholder="I’m looking for a YouTube thumbnail for a video about [topic]. Channel niche: [niche]. Preferred style: [describe]."
                  required 
                  className={styles.input}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {result && result !== 'Success' && (
                <p style={{ color: '#ff4444', marginTop: '16px', textAlign: 'center' }}>
                  {result}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
