/// <reference types="astro/client" />

/** Cookie consent preferences */
type CookieConsent = {
    /// true if the user has passed the cookie banner
    set: boolean;

    /// various permission categories
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
    social: boolean;
}

/** Parameters we track with analysis + marketing consent */
type UtmParams = {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    gclid?: string;
    ref?: string;
}

interface Window {
    cookieConsent: CookieConsent;
    gtag: (command: string, action: string, params?: Record<string, any>) => void;
    updateConsent: () => void;
    posthog?: import("env-imports").Posthog;
}
