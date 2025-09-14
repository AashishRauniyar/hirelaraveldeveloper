'use client'

import { sendGAEvent } from '@next/third-parties/google'

/**
 * Track custom events in Google Analytics 4
 * @param name - The event name (e.g., 'hire_click', 'cta_click')
 * @param params - Optional event parameters (e.g., { location: 'hero', button_text: 'Get Started' })
 */
export function trackEvent(name: string, params?: Record<string, any>) {
  // Runtime guard to prevent errors in development if GA_ID is not set
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    console.warn('GA4 tracking ID not found. Event not sent:', name, params)
    return
  }

  try {
    sendGAEvent({
      event: name,
      ...params,
    })
    
    // Optional: Log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4 Event tracked:', { event: name, ...params })
    }
  } catch (error) {
    console.error('Failed to track GA4 event:', error)
  }
}

/**
 * Common event tracking functions for typical website actions
 */
export const gaEvents = {
  /**
   * Track when user clicks hire/CTA buttons
   */
  trackHireClick: (location: string, buttonText?: string) => {
    trackEvent('hire_click', {
      location,
      button_text: buttonText,
      timestamp: Date.now(),
    })
  },

  /**
   * Track contact form submissions
   */
  trackContactSubmit: (formType: string) => {
    trackEvent('contact_submit', {
      form_type: formType,
      timestamp: Date.now(),
    })
  },

  /**
   * Track when users view developer profiles
   */
  trackDeveloperView: (developerId?: string, section?: string) => {
    trackEvent('developer_view', {
      developer_id: developerId,
      section,
      timestamp: Date.now(),
    })
  },

  /**
   * Track pricing plan views/interactions
   */
  trackPricingView: (planType: string, action: 'view' | 'select') => {
    trackEvent('pricing_interaction', {
      plan_type: planType,
      action,
      timestamp: Date.now(),
    })
  },

  /**
   * Track blog post engagement
   */
  trackBlogEngagement: (action: 'view' | 'share' | 'scroll', postSlug?: string) => {
    trackEvent('blog_engagement', {
      action,
      post_slug: postSlug,
      timestamp: Date.now(),
    })
  },
}