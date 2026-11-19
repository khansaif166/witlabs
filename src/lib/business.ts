// Single source of truth for WitLabs location details.
// WitLabs is a service-area business (no public street address), so only the
// city is shown. Keep these in sync with the Google Business Profile.

export const business = {
  city: 'Bengaluru',
  region: 'Karnataka',
  country: 'IN',
  locationLabel: 'Based in Bengaluru, Karnataka',
  servingLabel: 'Serving clients across India',
  // Must match the service areas listed on the Google Business Profile.
  serviceAreas: [
    'Bengaluru',
    'Whitefield',
    'Koramangala',
    'HSR Layout',
    'Indiranagar',
    'Jayanagar',
    'Electronic City',
  ],
  // Paste the Google Business Profile share link here (Profile → Share).
  // When set, it appears as a "Google reviews" link in the footer and contact
  // page, and is added to the structured data sameAs list.
  googleBusinessProfileUrl: '',
};
