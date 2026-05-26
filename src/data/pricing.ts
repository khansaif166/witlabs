export const websitePlans = [
  {
    name: 'Starter',
    label: 'Basic Website',
    price: '₹11,999',
    tone: 'blue',
    delivery: '3 Day Delivery',
    featured: false,
    items: ['5 Page Website', '1 Year Domain Free', '1 Year Hosting Free', 'Mobile Responsive Design', 'WhatsApp Button', 'Contact Form', 'Basic SEO Setup', 'SSL Setup Support', 'Basic Speed Optimization', 'Social Media Links', '15 Days Free Changes After Going Live', 'Future changes charged as per scope'],
  },
  {
    name: 'Standard',
    label: 'Business Website',
    price: '₹19,999',
    tone: 'green',
    delivery: '7 Day Delivery',
    featured: true,
    items: ['Everything in Basic Website', '7-8 Page Website', '1 Year Domain Free', '1 Year Hosting Free', 'Mobile + Speed Optimized', 'WhatsApp + Inquiry Form', 'Google Business Profile', 'On-Page SEO All Pages', 'Google Analytics Setup', 'Search Console Setup', 'Basic Security Setup', 'Business Email Setup Support', '30 Days Free Support After Going Live', 'Future changes charged as per scope'],
  },
  {
    name: 'Premium',
    label: 'Growth Website',
    price: '₹29,999',
    tone: 'warm',
    delivery: '15 Day Delivery',
    featured: false,
    items: ['Everything in Business Website', '10-12 Page Custom Website', '1 Year Domain Free', '1 Year Hosting Free', 'Premium Design Quality', 'Full SEO Infrastructure', 'Google Business Profile', 'Analytics + Search Console', 'WhatsApp Automation', 'Lead Capture System', 'Conversion Tracking Setup', 'Speed + Security Optimization', '45 Days Free Support After Going Live', '1 Month SEO Report', 'SEO: ₹7,000/month', 'First month SEO free', 'Future changes charged as per scope'],
  },
];

export const marketingPlans = [
  {
    name: 'Starter Ads',
    price: '₹17,999',
    suffix: '/month',
    tone: 'blue',
    badge: 'One Platform Only',
    featured: false,
    items: ['Meta Ads or Google Ads', 'Campaign Setup', 'Audience / Keyword Research', 'Ad Copywriting', 'Weekly Optimization', 'Monthly Report', 'Basic Tracking', 'WhatsApp Leads'],
  },
  {
    name: 'Growth Ads',
    price: '₹29,999',
    suffix: '/month',
    tone: 'green',
    badge: 'Google Ads + Meta Ads',
    featured: true,
    items: ['Campaign Setup', 'Keyword + Audience Research', 'Retargeting Campaigns', 'WhatsApp Lead Routing', 'Lead Tracking Sheet', 'Weekly Optimization', 'Monthly Report', '1 Strategy Call / Month'],
  },
  {
    name: 'Performance Plus',
    price: '₹44,999',
    suffix: '/month',
    tone: 'warm',
    badge: 'Google Ads + Meta Ads',
    featured: false,
    items: ['Advanced Strategy', 'Landing Page Review', 'Conversion Tracking', 'Creative Testing', 'Competitor Research', 'Bi-Weekly Review', 'Detailed Report', '2 Strategy Calls / Month'],
  },
];

export const appPlans = [
  {
    name: 'Business Dashboard',
    price: '₹49,999',
    tone: 'green',
    items: ['Leads, sales, and reports', 'Centralized visibility', 'Real-time insights'],
  },
  {
    name: 'Booking / Appointment System',
    price: '₹59,999',
    tone: 'green',
    items: ['Online booking flow', 'Admin panel', 'Notifications & reminders'],
  },
  {
    name: 'CRM & Lead System',
    price: '₹74,999',
    tone: 'green',
    items: ['Lead tracking', 'Follow-up reminders', 'Team assignment'],
  },
  {
    name: 'LMS / Education Platform',
    price: '₹1,49,999',
    tone: 'green',
    items: ['Students & courses', 'Tests and attendance', 'Admin management'],
  },
];

export const launchPackage = [
  {
    name: 'Website Development',
    price: '₹11,999',
    suffix: 'Only',
    note: 'One-Time',
    items: ['5 Page Professional Website', 'Mobile Responsive Design', 'WhatsApp Button', 'Contact Form', 'Basic SEO Setup', '1 Year Domain + Hosting Included', 'Delivery in 3 Days'],
  },
  {
    name: 'Post-Launch Digital Setup',
    price: '₹4,999',
    note: 'One-Time Setup',
    items: ['Google Business Profile Setup', 'Google Search Console Setup', 'Google Analytics Setup', 'Google Website Indexing', 'Social Media Account Setup', 'Required Business Profile Configuration', 'Basic Local SEO Foundation'],
  },
  {
    name: 'Monthly SEO & Organic Growth',
    price: '₹5,999',
    suffix: '/month',
    note: 'Organic Foundation',
    items: ['Full Website SEO', 'Google Profile Optimization', '4-5 Social Media Posts Per Week', 'Organic Audience Building', 'Content Planning for Solar Business', 'Improve Google Visibility'],
  },
  {
    name: 'Digital Marketing',
    price: '₹17,999',
    suffix: '/month',
    note: 'Paid Growth',
    items: ['Start from next month after organic foundation', 'Google Ads or Meta Ads', 'Campaign Setup', 'Audience / Keyword Research', 'Ad Copywriting', 'Weekly Optimization', 'Monthly Report'],
  },
];

export const homepageStarterPlans = [
  {
    service: 'Website Design',
    name: websitePlans[0].label,
    price: websitePlans[0].price,
    suffix: '',
    href: '/pricing/#website-pricing',
    items: websitePlans[0].items.slice(0, 4),
  },
  {
    service: 'Digital Marketing',
    name: marketingPlans[0].name,
    price: marketingPlans[0].price,
    suffix: marketingPlans[0].suffix,
    href: '/pricing/#marketing-pricing',
    items: marketingPlans[0].items.slice(0, 4),
  },
  {
    service: 'App Development',
    name: appPlans[0].name,
    price: appPlans[0].price,
    suffix: 'starts from',
    href: '/pricing/#app-pricing',
    items: appPlans[0].items,
  },
];
