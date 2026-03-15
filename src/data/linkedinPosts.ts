export interface LinkedInPost {
  id: string;
  url: string;
  text: string;
  hashtags?: string[];
  date: string;
}

const linkedinPosts: LinkedInPost[] = [
  {
    id: '7386038510887161856',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7386038510887161856',
    text: `Let's be honest: Nobody cares if you are a "Senior Developer" or "Lead Developer". What stakeholders, startups, and ambitious teams actually care about is your ability to create a system that outlives the current product cycle. Longevity is the ultimate currency, and you can't buy it with technical brilliance alone.\n\nTrue seniority is the ability to transfer knowledge, not just hold it. It's about writing the documentation that onboarded the next five hires. It's about building a robust testing framework that prevents a 3 AM page.\n\nMost importantly, it's about shifting your mindset from Individual Contributor to Force Multiplier—making the people around you better, faster, and more resilient.`,
    hashtags: ['TechLeadership', 'Mentorship', 'Leadership', 'Development', 'SoftwareDevelopment', 'EngineeringCulture'],
    date: 'Jun 2025',
  },
  {
    id: '7211141998626394113',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7211141998626394113',
    text: `Sharing with my network 🛜\n\nAlina Rozanov — Contact Coordinator, Service\n\n"Hi everyone, I'm currently seeking a new role and would be grateful for your support. If you have any connections, advice, or opportunities to share, please let me know.\n\nThanks in advance for your support!\n#OpenToWork"`,
    hashtags: ['OpenToWork', 'Networking'],
    date: 'Mar 2025',
  },
  {
    id: '7202126560722640896',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7202126560722640896',
    text: `Sharing across my professional network 🛜!\n\nProfessional QA Leader just recently moved to Manitoba, Canada and open for new opportunities!\n\nPlease feel free to reach out directly to him.`,
    hashtags: ['Networking', 'QA', 'Manitoba'],
    date: 'Feb 2025',
  },
];

export default linkedinPosts;
