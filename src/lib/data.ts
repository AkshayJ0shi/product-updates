import { ProductUpdate, UserInteraction, Stat, InfoCard } from '@/types';

export const productUpdates: ProductUpdate[] = [
  {
    id: 'pu-001',
    feature: 'Real-time Collaboration',
    status: 'Done',
    priority: 'High',
    date: '2025-11-10',
  },
  {
    id: 'pu-002',
    feature: 'Data Export for Large Datasets',
    status: 'Done',
    priority: 'Medium',
    date: '2025-11-08',
  },
  {
    id: 'pu-003',
    feature: 'Dark Mode Support',
    status: 'Pending',
    priority: 'High',
    date: '',
  },
  {
    id: 'pu-004',
    feature: 'OAuth 2.0 Authentication',
    status: 'Done',
    priority: 'High',
    date: '2025-11-03',
  },
  {
    id: 'pu-005',
    feature: 'Dashboard Performance Optimization',
    status: 'Pending',
    priority: 'Low',
    date: '',
  },
  {
    id: 'pu-006',
    feature: 'Custom Report Builder',
    status: 'Pending',
    priority: 'Medium',
    date: '',
  },
];

export const userInteractions: UserInteraction[] = [
  {
    id: 'ui-001',
    question: 'How do I enable real-time collaboration?',
    answer: 'Navigate to Settings > Collaboration and toggle the feature on.',
    feature: 'Real-time Collaboration',
    featureStatus: 'Done',
  },
  {
    id: 'ui-002',
    question: 'Can I export more than 100k rows?',
    answer: 'Yes, the latest update supports exporting datasets of any size.',
    feature: 'Data Export for Large Datasets',
    featureStatus: 'Done',
  },
  {
    id: 'ui-003',
    question: 'When will dark mode be available?',
    answer: 'Dark mode is currently in development and will be released soon.',
    feature: 'Dark Mode Support',
    featureStatus: 'Pending',
  },
  {
    id: 'ui-004',
    question: 'Is OAuth 2.0 supported?',
    answer: 'Yes, OAuth 2.0 authentication is now fully supported.',
    feature: 'OAuth 2.0 Authentication',
    featureStatus: 'Done',
  },
  {
    id: 'ui-005',
    question: 'Why is the dashboard loading slowly?',
    answer: 'We are working on performance optimizations to improve loading times.',
    feature: 'Dashboard Performance Optimization',
    featureStatus: 'Pending',
  },
  {
    id: 'ui-006',
    question: 'How do I create custom reports?',
    answer: 'The custom report builder is coming soon with drag-and-drop functionality.',
    feature: 'Custom Report Builder',
    featureStatus: 'Pending',
  },
];

export const stats: Stat[] = [
  {
    id: 'stat-001',
    label: 'Total Active Users',
    value: '12,543',
    source: 'Analytics Dashboard - Last 30 days',
  },
  {
    id: 'stat-002',
    label: 'Features Shipped',
    value: 47,
    source: 'Product Roadmap - Q4 2024',
  },
  {
    id: 'stat-003',
    label: 'Customer Satisfaction',
    value: '94%',
    source: 'User Survey - November 2024',
  },
  {
    id: 'stat-004',
    label: 'Average Response Time',
    value: '2.3 hours',
    source: 'Support Tickets - Last 7 days',
  },
];

export const infoCards: InfoCard[] = [
  {
    id: 'info-001',
    title: 'Getting Started',
    content: 'Welcome to our product tracking app! This dashboard helps you stay updated with the latest product features, user interactions, and key metrics. Navigate through the tabs to explore different sections.',
  },
  {
    id: 'info-002',
    title: 'Feature Updates',
    content: 'We regularly ship new features and improvements. Check the Product Updates page to see what\'s been released and what\'s coming soon. All updates are prioritized based on user feedback.',
  },
  {
    id: 'info-003',
    title: 'User Support',
    content: 'Have questions? Visit the User Interactions page to see common questions and answers from our community. Our support team is always ready to help with any issues you encounter.',
  },
  {
    id: 'info-004',
    title: 'Data Privacy',
    content: 'Your data security is our top priority. All information is encrypted and stored securely. We comply with GDPR and other international data protection regulations.',
  },
  {
    id: 'info-005',
    title: 'Performance Monitoring',
    content: 'We continuously monitor system performance to ensure optimal user experience. Our infrastructure is designed for 99.9% uptime with automatic scaling during peak usage.',
  },
  {
    id: 'info-006',
    title: 'Feedback & Suggestions',
    content: 'Your feedback drives our product development. Share your ideas and suggestions through our feedback portal. We review all submissions and prioritize based on impact and feasibility.',
  },
];
