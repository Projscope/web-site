export interface LinkedInPost {
  id: string;
  url: string;
  text: string;
  hashtags?: string[];
  date: string;
}

const linkedinPosts: LinkedInPost[] = [
  {
    id: '7437482655136235520',
    url: 'https://www.linkedin.com/posts/viacheslav-blinder_claudecode-anthropic-agenticai-activity-7437482655136235520-OxXr/',
    text: `Anthropic just launched a feature that solves the most predictable problem in the AI era: The PR Bottleneck.\n\nWith AI assistants now generating massive amounts of code, human reviewers have become the system's "governor." We are seeing a flood of "vibe coding" output, and overworked developers are often forced to skim large Pull Requests instead of deeply reviewing them.\n\nAnthropic's solution? Claude Code Review.\n\nThis isn't just a smarter linter. When a PR is opened, Claude launches a coordinated team of AI agents to analyze the changes in parallel — deep inspection for logic errors, security vulnerabilities, and architectural drift. Agents cross-verify findings to reduce false positives (<1% error rate). Average review time: ~20 minutes, regardless of PR size.\n\nBy delegating the meticulously exhausting parts of a review to a machine, we free up senior engineers to focus on the highest-level work: Architecture, Strategy, and Human Mentorship.\n\nKey takeaway: "The AI does not approve the PR. The final 'merge' button still belongs to the human."`,
    hashtags: ['ClaudeCode', 'Anthropic', 'AgenticAI', 'SoftwareEngineering', 'TechLeadership', 'CodeReview', 'SoftwareArchitecture', 'AIReview', 'FutureOfWork'],
    date: 'Mar 2026',
  },
  {
    id: '7433140558275186688',
    url: 'https://www.linkedin.com/posts/viacheslav-blinder_agenticai-futureoftech-ai-activity-7433140558275186688-iOeN/',
    text: `The internet is becoming "invisible" to humans—and it's the biggest paradigm shift since the browser. For decades, we've optimized the web for human eyes: pretty UIs and readable text. But we are moving toward the Agentic Internet, a world where the primary consumers of data aren't people, but AI agents talking to other AI agents.\n\nThe new "plumbing" is being laid right now:\n\n• Model Context Protocol (MCP): The universal "USB-C" for AI. It lets any agent connect to any data source without custom integrations.\n• Agent2Agent (A2A): An open standard for agents from different vendors to find each other and collaborate securely.\n• Agentic Commerce Protocol (ACP): Launched by OpenAI and Stripe, it allows agents to handle the entire "intent-to-purchase" flow independently.\n\nMcKinsey projects this economy could drive $3T to $5T in global revenue by 2030. Success in 2026 isn't about the prettiest website; it's about having the most accessible data foundation for agents to consume.`,
    hashtags: ['AgenticAI', 'FutureOfTech', 'AI', 'SoftwareArchitecture', 'MCP', 'TechLeadership', 'WinnipegTech', 'CTO'],
    date: 'Feb 2026',
  },
  {
    id: '7405245083761098752',
    url: 'https://www.linkedin.com/posts/viacheslav-blinder_softwaredevelopment-techleadership-systemsthinking-activity-7405245083761098752-2EYE',
    text: `"The tactical approach optimizes for speed. The strategic approach optimizes for survival."\n\nEvery new feature is a system-wide risk. Before writing a single line of code, run this six-point strategic assessment:\n\n1. Architectural Alignment — Does this fit the system's current design?\n2. Data Flow & Load — What's the database impact?\n3. Security & Vulnerability Check — Input validation, encryption, access control.\n4. Integration Impact — Which downstream services are affected?\n5. Deployment & Monitoring — Safe rollout mechanisms in place?\n6. Risk & Revert Plan — What's the failure mitigation and recovery procedure?\n\nThe engineers who last aren't the fastest coders — they're the ones who ask the right questions before the first commit.`,
    hashtags: ['SoftwareDevelopment', 'TechLeadership', 'SystemsThinking', 'Security', 'Engineering', 'CleanCode', 'ProductDevelopment'],
    date: 'Dec 2025',
  },
];

export default linkedinPosts;
