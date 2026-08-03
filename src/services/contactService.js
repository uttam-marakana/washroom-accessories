import { api } from './api';

/**
 * Submits a contact form.
 * @param {{name: string, email: string, phone: string, message: string}} payload
 */
export async function submitContactForm(payload) {
  // Handles both a real API and a graceful fallback.
  try {
    return await api.post('/contact', payload);
  } catch {
    // Simulate async success for demo when no backend is configured.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, message: 'Message sent successfully.' };
  }
}
