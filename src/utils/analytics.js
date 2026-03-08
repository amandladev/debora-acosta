/**
 * Meta Pixel analytics helpers.
 * All tracking calls are safely wrapped — they do nothing if the
 * pixel hasn't loaded yet (e.g. blocked by an ad blocker).
 */

export function trackLead() {
  if (typeof fbq === 'function') {
    fbq('track', 'Lead');
  }
}

export function trackContact() {
  if (typeof fbq === 'function') {
    fbq('track', 'Contact');
  }
}
