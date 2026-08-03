import { useState } from 'react';

import { submitContactForm } from '@/services/contactService';
import { isValidEmail, isRequired } from '@/utils/validators';
import { FORM_STATUS } from '@/utils/constants';
import { cn } from '@/utils/helpers';
import './ContactForm.css';

/**
 * Contact form with validation and mock submit.
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(FORM_STATUS.IDLE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!isRequired(formData.name)) nextErrors.name = 'Name is required.';
    if (!isRequired(formData.email)) nextErrors.email = 'Email is required.';
    else if (!isValidEmail(formData.email))
      nextErrors.email = 'Enter a valid email address.';
    if (!isRequired(formData.message))
      nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus(FORM_STATUS.SUBMITTING);
    try {
      await submitContactForm(formData);
      setStatus(FORM_STATUS.SUCCESS);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus(FORM_STATUS.ERROR);
    }
  };

  return (
    <div className="contact-form">
      {status === FORM_STATUS.SUCCESS ? (
        <div className="contact-form__success" role="status">
          <h3>Thank you!</h3>
          <p>
            Your message has been sent. Our team will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="contact-form__grid">
            <div className="contact-form__field">
              <label htmlFor="cf-name">Full Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <span className="contact-form__error">{errors.name}</span>
              )}
            </div>
            <div className="contact-form__field">
              <label htmlFor="cf-email">Email Address</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <span className="contact-form__error">{errors.email}</span>
              )}
            </div>
            <div className="contact-form__field">
              <label htmlFor="cf-phone">Phone (optional)</label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span className="contact-form__error">{errors.message}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={cn(
              'btn btn--primary btn--lg',
              status === FORM_STATUS.SUBMITTING && 'btn--disabled',
            )}
            disabled={status === FORM_STATUS.SUBMITTING}
          >
            {status === FORM_STATUS.SUBMITTING ? 'Sending...' : 'Send Message'}
          </button>
          {status === FORM_STATUS.ERROR && (
            <p className="contact-form__error" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default ContactForm;
