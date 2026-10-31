window.SYLVA_TEMPLATES = [
  {
    id: 'bus0', title: 'Business Plan', category: 'Business & Startup', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Executive Summary', type: 'branch', parent: null },
      { id: 'n2', title: 'Mission Statement', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Market Analysis', type: 'branch', parent: null },
      { id: 'n4', title: 'Competitor Data', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Launch Business', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus1', title: 'Marketing Strategy', category: 'Business & Startup', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Target Audience', type: 'branch', parent: null },
      { id: 'n2', title: 'Brand Voice', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Content Channels', type: 'branch', parent: null },
      { id: 'n4', title: 'Campaign Launch', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Analyze Metrics', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus2', title: 'Product Launch', category: 'Business & Startup', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Pre-launch Prep', type: 'branch', parent: null },
      { id: 'n2', title: 'Beta Testing', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Go-To-Market', type: 'branch', parent: null },
      { id: 'n4', title: 'Release Day', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Post-launch Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus3', title: 'Market Research', category: 'Business & Startup', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Demographics', type: 'branch', parent: null },
      { id: 'n2', title: 'Competitors', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Market Trends', type: 'branch', parent: null },
      { id: 'n4', title: 'Survey Results', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Final Report', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus4', title: 'Pitch Deck', category: 'Business & Startup', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'The Problem', type: 'branch', parent: null },
      { id: 'n2', title: 'Our Solution', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Market Size', type: 'branch', parent: null },
      { id: 'n4', title: 'Business Model', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'The Ask', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus5', title: 'Competitor Analysis', category: 'Business & Startup', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Identify Competitors', type: 'branch', parent: null },
      { id: 'n2', title: 'SWOT Analysis', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Pricing Strategy', type: 'branch', parent: null },
      { id: 'n4', title: 'Feature Comparison', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Strategic Positioning', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus6', title: 'Sales Funnel', category: 'Business & Startup', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Awareness Phase', type: 'branch', parent: null },
      { id: 'n2', title: 'Interest & Consideration', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Decision Phase', type: 'branch', parent: null },
      { id: 'n4', title: 'Action & Purchase', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Customer Retention', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus7', title: 'Financial Projections', category: 'Business & Startup', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Revenue Model', type: 'branch', parent: null },
      { id: 'n2', title: 'COGS Estimation', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Operating Expenses', type: 'branch', parent: null },
      { id: 'n4', title: 'Cash Flow', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Balance Sheet', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus8', title: 'Brand Identity', category: 'Business & Startup', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Core Values', type: 'branch', parent: null },
      { id: 'n2', title: 'Logo & Design', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Typography', type: 'branch', parent: null },
      { id: 'n4', title: 'Color Palette', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Brand Guidelines', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'bus9', title: 'Customer Onboarding', category: 'Business & Startup', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Welcome Email', type: 'branch', parent: null },
      { id: 'n2', title: 'Product Tour', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Setup Guide', type: 'branch', parent: null },
      { id: 'n4', title: 'Check-in Call', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Feedback Survey', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof0', title: 'App MVP', category: 'Software Development', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Frontend UI', type: 'branch', parent: null },
      { id: 'n2', title: 'Button Styling', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Database Setup', type: 'branch', parent: null },
      { id: 'n4', title: 'Auth Logic', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Deploy App', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof1', title: 'Database Design', category: 'Software Development', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Requirements Gathering', type: 'branch', parent: null },
      { id: 'n2', title: 'Entity Relationship', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Schema Design', type: 'branch', parent: null },
      { id: 'n4', title: 'Normalization', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Data Migration', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof2', title: 'API Integration', category: 'Software Development', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Auth Keys Setup', type: 'branch', parent: null },
      { id: 'n2', title: 'Endpoint Mapping', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Data Parsing', type: 'branch', parent: null },
      { id: 'n4', title: 'Error Handling', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Integration Testing', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof3', title: 'Frontend Styling', category: 'Software Development', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'CSS Variables', type: 'branch', parent: null },
      { id: 'n2', title: 'Layout Architecture', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Typography System', type: 'branch', parent: null },
      { id: 'n4', title: 'UI Components', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Responsiveness Check', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof4', title: 'User Authentication', category: 'Software Development', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Login UI', type: 'branch', parent: null },
      { id: 'n2', title: 'OAuth Setup', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'JWT Integration', type: 'branch', parent: null },
      { id: 'n4', title: 'Password Reset', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Security Audit', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof5', title: 'Bug Squashing', category: 'Software Development', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Reproduce Bug', type: 'branch', parent: null },
      { id: 'n2', title: 'Isolate Code', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Implement Fix', type: 'branch', parent: null },
      { id: 'n4', title: 'Write Unit Test', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Deploy Patch', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof6', title: 'Sprint Planning', category: 'Software Development', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Backlog Grooming', type: 'branch', parent: null },
      { id: 'n2', title: 'Task Estimation', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Team Capacity', type: 'branch', parent: null },
      { id: 'n4', title: 'Sprint Goal', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Assign Tickets', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof7', title: 'DevOps Pipeline', category: 'Software Development', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'CI/CD Configuration', type: 'branch', parent: null },
      { id: 'n2', title: 'Automated Testing', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Staging Environment', type: 'branch', parent: null },
      { id: 'n4', title: 'Production Release', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'System Monitoring', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof8', title: 'Game Design Doc', category: 'Software Development', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Core Gameplay Loop', type: 'branch', parent: null },
      { id: 'n2', title: 'Mechanics & Rules', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Art & Sound Style', type: 'branch', parent: null },
      { id: 'n4', title: 'Story & Lore', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Monetization Strategy', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'sof9', title: 'PWA Setup', category: 'Software Development', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Web Manifest', type: 'branch', parent: null },
      { id: 'n2', title: 'Service Worker', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Offline Support', type: 'branch', parent: null },
      { id: 'n4', title: 'App Icons', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Lighthouse Audit', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea0', title: 'Marathon Prep', category: 'Health & Fitness', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Base Building', type: 'branch', parent: null },
      { id: 'n2', title: 'Speed Workouts', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Long Runs', type: 'branch', parent: null },
      { id: 'n4', title: 'Tapering Phase', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Race Day', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea1', title: 'Hypertrophy Program', category: 'Health & Fitness', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Push Day', type: 'branch', parent: null },
      { id: 'n2', title: 'Pull Day', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Leg Day', type: 'branch', parent: null },
      { id: 'n4', title: 'Active Recovery', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Deload Week', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea2', title: 'Weight Loss Plan', category: 'Health & Fitness', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Caloric Deficit', type: 'branch', parent: null },
      { id: 'n2', title: 'Meal Prep', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Cardio Sessions', type: 'branch', parent: null },
      { id: 'n4', title: 'Resistance Training', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Progress Tracking', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea3', title: 'Yoga Routine', category: 'Health & Fitness', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Warmup Flows', type: 'branch', parent: null },
      { id: 'n2', title: 'Sun Salutations', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Standing Poses', type: 'branch', parent: null },
      { id: 'n4', title: 'Seated Poses', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Savasana', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea4', title: 'Keto Diet Transition', category: 'Health & Fitness', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Clear Pantry', type: 'branch', parent: null },
      { id: 'n2', title: 'Grocery Run', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Electrolyte Balance', type: 'branch', parent: null },
      { id: 'n4', title: 'Meal Planning', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Fat Adaptation', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea5', title: 'Sleep Optimization', category: 'Health & Fitness', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Wind Down Routine', type: 'branch', parent: null },
      { id: 'n2', title: 'Dark Room Setup', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Temperature Control', type: 'branch', parent: null },
      { id: 'n4', title: 'Screen Ban', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Consistent Wake Time', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea6', title: 'Rehab & Recovery', category: 'Health & Fitness', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Injury Assessment', type: 'branch', parent: null },
      { id: 'n2', title: 'Mobility Work', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Strengthening', type: 'branch', parent: null },
      { id: 'n4', title: 'Dynamic Stretching', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Return to Play', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea7', title: 'Flexibility Training', category: 'Health & Fitness', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Dynamic Warmup', type: 'branch', parent: null },
      { id: 'n2', title: 'Static Holds', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'PNF Stretching', type: 'branch', parent: null },
      { id: 'n4', title: 'Foam Rolling', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Cool Down', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea8', title: 'Calisthenics Basics', category: 'Health & Fitness', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Pushup Progressions', type: 'branch', parent: null },
      { id: 'n2', title: 'Pullup Fundamentals', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Dip Variations', type: 'branch', parent: null },
      { id: 'n4', title: 'Bodyweight Squats', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Core Stability', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hea9', title: 'Nutrition Macros', category: 'Health & Fitness', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Calculate TDEE', type: 'branch', parent: null },
      { id: 'n2', title: 'Set Protein Target', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Set Fat Target', type: 'branch', parent: null },
      { id: 'n4', title: 'Set Carb Target', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Track Daily Intake', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per0', title: 'Budget Setup', category: 'Personal Finance', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'List Income', type: 'branch', parent: null },
      { id: 'n2', title: 'Fixed Expenses', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Variable Expenses', type: 'branch', parent: null },
      { id: 'n4', title: 'Savings Goals', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Monthly Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per1', title: 'Debt Payoff', category: 'Personal Finance', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'List All Debts', type: 'branch', parent: null },
      { id: 'n2', title: 'Avalanche/Snowball Method', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Extra Payments', type: 'branch', parent: null },
      { id: 'n4', title: 'Automate Transfers', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Debt Free Date', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per2', title: 'Investment Strategy', category: 'Personal Finance', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Assess Risk Tolerance', type: 'branch', parent: null },
      { id: 'n2', title: 'Asset Allocation', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Index Fund Selection', type: 'branch', parent: null },
      { id: 'n4', title: 'Rebalance Portfolio', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Annual Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per3', title: 'Retirement Planning', category: 'Personal Finance', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Calculate Target Need', type: 'branch', parent: null },
      { id: 'n2', title: '401k/IRA Setup', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Max Contributions', type: 'branch', parent: null },
      { id: 'n4', title: 'Growth Projections', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Withdrawal Strategy', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per4', title: 'Emergency Fund', category: 'Personal Finance', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Calculate 6-Month Target', type: 'branch', parent: null },
      { id: 'n2', title: 'Open High-Yield Account', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Auto-Transfer Setup', type: 'branch', parent: null },
      { id: 'n4', title: 'Hit Milestones', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Fully Funded', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per5', title: 'Tax Prep', category: 'Personal Finance', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Gather W2s/1099s', type: 'branch', parent: null },
      { id: 'n2', title: 'List Deductions', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Filing Software', type: 'branch', parent: null },
      { id: 'n4', title: 'Payment/Refund', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Next Year Plan', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per6', title: 'Side Hustle Setup', category: 'Personal Finance', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Brainstorm Ideas', type: 'branch', parent: null },
      { id: 'n2', title: 'Market Research', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Pricing Strategy', type: 'branch', parent: null },
      { id: 'n4', title: 'Soft Launch', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Scale Up', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per7', title: 'Real Estate Planning', category: 'Personal Finance', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Determine Budget', type: 'branch', parent: null },
      { id: 'n2', title: 'Location Scouting', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Secure Financing', type: 'branch', parent: null },
      { id: 'n4', title: 'House Hunting', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Closing Process', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per8', title: 'Crypto Portfolio', category: 'Personal Finance', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Market Research', type: 'branch', parent: null },
      { id: 'n2', title: 'Exchange Setup', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Security & Passwords', type: 'branch', parent: null },
      { id: 'n4', title: 'Asset Purchases', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Cold Storage Move', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'per9', title: 'Expense Tracking', category: 'Personal Finance', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Choose Tracking App', type: 'branch', parent: null },
      { id: 'n2', title: 'Link Bank Accounts', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Categorize Spending', type: 'branch', parent: null },
      { id: 'n4', title: 'Analyze Trends', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Adjust Budget', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre0', title: 'Podcast Launch', category: 'Creative & Content', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Show Concept', type: 'branch', parent: null },
      { id: 'n2', title: 'Audio Equipment', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Record Episode 1', type: 'branch', parent: null },
      { id: 'n4', title: 'Audio Editing', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Publish to Platforms', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre1', title: 'YouTube Strategy', category: 'Creative & Content', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Channel Niche', type: 'branch', parent: null },
      { id: 'n2', title: 'Camera Equipment', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Filming Schedule', type: 'branch', parent: null },
      { id: 'n4', title: 'Video Editing', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'SEO & Thumbnails', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre2', title: 'Novel Outline', category: 'Creative & Content', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Core Premise', type: 'branch', parent: null },
      { id: 'n2', title: 'Character Profiles', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'World Building', type: 'branch', parent: null },
      { id: 'n4', title: 'Major Plot Points', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Chapter Breakdown', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre3', title: 'Blog Content Calendar', category: 'Creative & Content', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Brainstorm Topics', type: 'branch', parent: null },
      { id: 'n2', title: 'Keyword Research', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Drafting Posts', type: 'branch', parent: null },
      { id: 'n4', title: 'Editing Phase', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Publishing Schedule', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre4', title: 'Album Production', category: 'Creative & Content', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Songwriting', type: 'branch', parent: null },
      { id: 'n2', title: 'Pre-Production', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Studio Recording', type: 'branch', parent: null },
      { id: 'n4', title: 'Mixing Tracks', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Final Mastering', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre5', title: 'Graphic Design Portfolio', category: 'Creative & Content', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Select Best Work', type: 'branch', parent: null },
      { id: 'n2', title: 'Build Case Studies', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Website Layout', type: 'branch', parent: null },
      { id: 'n4', title: 'Peer Review', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Publish Portfolio', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre6', title: 'Social Media Campaign', category: 'Creative & Content', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Campaign Goals', type: 'branch', parent: null },
      { id: 'n2', title: 'Target Audience', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Content Creation', type: 'branch', parent: null },
      { id: 'n4', title: 'Scheduling Posts', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Analyze Analytics', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre7', title: 'Documentary Script', category: 'Creative & Content', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Topic Research', type: 'branch', parent: null },
      { id: 'n2', title: 'Subject Interviews', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Script Outline', type: 'branch', parent: null },
      { id: 'n4', title: 'Drafting Narration', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Final Revisions', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre8', title: 'Photography Shoot', category: 'Creative & Content', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Shoot Concept', type: 'branch', parent: null },
      { id: 'n2', title: 'Location Scouting', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Equipment Check', type: 'branch', parent: null },
      { id: 'n4', title: 'The Shoot', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Post-Processing', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'cre9', title: 'Art Exhibition', category: 'Creative & Content', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Exhibition Theme', type: 'branch', parent: null },
      { id: 'n2', title: 'Create Art Pieces', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Secure Venue', type: 'branch', parent: null },
      { id: 'n4', title: 'Marketing & PR', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Opening Night', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu0', title: 'Learn Python', category: 'Education & Learning', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Variables & Types', type: 'branch', parent: null },
      { id: 'n2', title: 'Loops & Conditionals', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Functions', type: 'branch', parent: null },
      { id: 'n4', title: 'Object Oriented', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Final Project', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu1', title: 'Spanish Fluency', category: 'Education & Learning', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Basic Vocabulary', type: 'branch', parent: null },
      { id: 'n2', title: 'Grammar Rules', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Listening Practice', type: 'branch', parent: null },
      { id: 'n4', title: 'Speaking Sessions', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Full Immersion', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu2', title: 'Guitar Basics', category: 'Education & Learning', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Basic Chords', type: 'branch', parent: null },
      { id: 'n2', title: 'Strumming Patterns', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Major Scales', type: 'branch', parent: null },
      { id: 'n4', title: 'Learn 3 Songs', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Live Performance', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu3', title: 'Data Science Course', category: 'Education & Learning', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Statistics Basics', type: 'branch', parent: null },
      { id: 'n2', title: 'Python/R Syntax', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Machine Learning Intro', type: 'branch', parent: null },
      { id: 'n4', title: 'Data Visualization', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Capstone Project', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu4', title: 'History Study Guide', category: 'Education & Learning', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Timeline Creation', type: 'branch', parent: null },
      { id: 'n2', title: 'Key Figures', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Major Events', type: 'branch', parent: null },
      { id: 'n4', title: 'Cause & Effect Analysis', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Final Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu5', title: 'Calculus Mastery', category: 'Education & Learning', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Limits & Continuity', type: 'branch', parent: null },
      { id: 'n2', title: 'Derivatives', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Integrals', type: 'branch', parent: null },
      { id: 'n4', title: 'Real World Applications', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Exam Prep', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu6', title: 'Speed Reading', category: 'Education & Learning', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Establish Baseline', type: 'branch', parent: null },
      { id: 'n2', title: 'Skimming Techniques', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Daily Practice', type: 'branch', parent: null },
      { id: 'n4', title: 'Comprehension Checks', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Mastery', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu7', title: 'Public Speaking', category: 'Education & Learning', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Choose Topic', type: 'branch', parent: null },
      { id: 'n2', title: 'Speech Outline', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Drafting Content', type: 'branch', parent: null },
      { id: 'n4', title: 'Mirror Practice', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Live Delivery', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu8', title: 'Philosophy Intro', category: 'Education & Learning', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Logic & Reason', type: 'branch', parent: null },
      { id: 'n2', title: 'Ethics', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Epistemology', type: 'branch', parent: null },
      { id: 'n4', title: 'Metaphysics', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Final Summary', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'edu9', title: 'Cooking Masterclass', category: 'Education & Learning', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Knife Skills', type: 'branch', parent: null },
      { id: 'n2', title: 'Mother Sauces', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Meat Preparation', type: 'branch', parent: null },
      { id: 'n4', title: 'Vegetable Roasting', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Final Plating', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom0', title: 'Minimalist Decluttering', category: 'Home & Lifestyle', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Room Assessment', type: 'branch', parent: null },
      { id: 'n2', title: 'Sorting Keep/Discard', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Donation Drop-off', type: 'branch', parent: null },
      { id: 'n4', title: 'Organizing Spaces', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Maintenance Plan', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom1', title: 'Backyard Garden', category: 'Home & Lifestyle', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Garden Planning', type: 'branch', parent: null },
      { id: 'n2', title: 'Soil Preparation', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Seed Planting', type: 'branch', parent: null },
      { id: 'n4', title: 'Watering Schedule', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Harvesting', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom2', title: 'Home Renovation', category: 'Home & Lifestyle', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Set Budget', type: 'branch', parent: null },
      { id: 'n2', title: 'Design & Plans', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Hire Contractors', type: 'branch', parent: null },
      { id: 'n4', title: 'Construction Phase', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Final Reveal', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom3', title: 'Moving Checklist', category: 'Home & Lifestyle', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Sort Belongings', type: 'branch', parent: null },
      { id: 'n2', title: 'Pack Boxes', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Hire Movers', type: 'branch', parent: null },
      { id: 'n4', title: 'Transfer Utilities', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Unpack & Settle', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom4', title: 'Spring Cleaning', category: 'Home & Lifestyle', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'General Declutter', type: 'branch', parent: null },
      { id: 'n2', title: 'Deep Clean Rooms', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Organize Closets', type: 'branch', parent: null },
      { id: 'n4', title: 'Minor Fixes/Repairs', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Home Refresh', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom5', title: 'Smart Home Setup', category: 'Home & Lifestyle', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Choose Hub', type: 'branch', parent: null },
      { id: 'n2', title: 'Install Smart Lights', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Security Cameras', type: 'branch', parent: null },
      { id: 'n4', title: 'Smart Thermostat', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Set Automations', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom6', title: 'Wardrobe Revamp', category: 'Home & Lifestyle', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Closet Audit', type: 'branch', parent: null },
      { id: 'n2', title: 'Find Inspiration', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Targeted Shopping', type: 'branch', parent: null },
      { id: 'n4', title: 'Styling Outfits', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Wardrobe Maintenance', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom7', title: 'DIY Furniture', category: 'Home & Lifestyle', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Design Blueprint', type: 'branch', parent: null },
      { id: 'n2', title: 'Buy Materials', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Cutting & Drilling', type: 'branch', parent: null },
      { id: 'n4', title: 'Assembly', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Finishing & Staining', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom8', title: 'Pet Training', category: 'Home & Lifestyle', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Basic Commands', type: 'branch', parent: null },
      { id: 'n2', title: 'Housebreaking', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Socialization', type: 'branch', parent: null },
      { id: 'n4', title: 'Advanced Tricks', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Consistent Routine', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hom9', title: 'Emergency Preparedness', category: 'Home & Lifestyle', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Build Survival Kit', type: 'branch', parent: null },
      { id: 'n2', title: 'Evacuation Plan', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Communication Strategy', type: 'branch', parent: null },
      { id: 'n4', title: 'Practice Run', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Annual Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve0', title: 'Wedding Planning', category: 'Event Planning', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Set Budget', type: 'branch', parent: null },
      { id: 'n2', title: 'Book Venue', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Finalize Guest List', type: 'branch', parent: null },
      { id: 'n4', title: 'Hire Vendors', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'The Big Day', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve1', title: 'Birthday Party', category: 'Event Planning', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Choose Theme', type: 'branch', parent: null },
      { id: 'n2', title: 'Send Invitations', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Buy Decorations', type: 'branch', parent: null },
      { id: 'n4', title: 'Order Food/Cake', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Party Activities', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve2', title: 'Corporate Retreat', category: 'Event Planning', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Set Objectives', type: 'branch', parent: null },
      { id: 'n2', title: 'Book Location', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Create Itinerary', type: 'branch', parent: null },
      { id: 'n4', title: 'Team Building Exercises', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Gather Feedback', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve3', title: 'Music Festival Trip', category: 'Event Planning', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Buy Tickets', type: 'branch', parent: null },
      { id: 'n2', title: 'Book Travel', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Secure Accommodation', type: 'branch', parent: null },
      { id: 'n4', title: 'Plan Schedule', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Pack Gear', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve4', title: 'Family Vacation', category: 'Event Planning', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Pick Destination', type: 'branch', parent: null },
      { id: 'n2', title: 'Book Flights', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Reserve Hotels', type: 'branch', parent: null },
      { id: 'n4', title: 'Plan Activities', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Make Memories', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve5', title: 'Charity Gala', category: 'Event Planning', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Define Cause', type: 'branch', parent: null },
      { id: 'n2', title: 'Secure Venue', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Find Sponsors', type: 'branch', parent: null },
      { id: 'n4', title: 'Marketing Campaign', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Event Night', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve6', title: 'Hackathon Event', category: 'Event Planning', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Choose Theme', type: 'branch', parent: null },
      { id: 'n2', title: 'Get Sponsors', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Open Registration', type: 'branch', parent: null },
      { id: 'n4', title: 'Judging Panel', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Award Prizes', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve7', title: 'Conference Booth', category: 'Event Planning', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Booth Design', type: 'branch', parent: null },
      { id: 'n2', title: 'Order Swag', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Schedule Staffing', type: 'branch', parent: null },
      { id: 'n4', title: 'Lead Generation Plan', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Post-Event Follow-up', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve8', title: 'Networking Mixer', category: 'Event Planning', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Select Venue', type: 'branch', parent: null },
      { id: 'n2', title: 'Send Invites', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Plan Event Format', type: 'branch', parent: null },
      { id: 'n4', title: 'Prepare Icebreakers', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Follow-up Emails', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'eve9', title: 'Dinner Party', category: 'Event Planning', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Plan Menu', type: 'branch', parent: null },
      { id: 'n2', title: 'Curate Guest List', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Ingredient Prep', type: 'branch', parent: null },
      { id: 'n4', title: 'Cooking', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Hosting Guests', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min0', title: 'Meditation Habit', category: 'Mind & Wellness', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Create Setup', type: 'branch', parent: null },
      { id: 'n2', title: 'Focus Techniques', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Build Consistency', type: 'branch', parent: null },
      { id: 'n4', title: 'Increase Duration', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Daily Integration', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min1', title: 'Stress Management', category: 'Mind & Wellness', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Identify Triggers', type: 'branch', parent: null },
      { id: 'n2', title: 'Develop Coping Mechanisms', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Self-Care Routine', type: 'branch', parent: null },
      { id: 'n4', title: 'Set Boundaries', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Monthly Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min2', title: 'Digital Detox', category: 'Mind & Wellness', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Usage Assessment', type: 'branch', parent: null },
      { id: 'n2', title: 'Set Rules', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Find Analog Alternatives', type: 'branch', parent: null },
      { id: 'n4', title: 'Implementation Phase', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Final Reflection', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min3', title: 'Journaling Practice', category: 'Mind & Wellness', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Choose Medium', type: 'branch', parent: null },
      { id: 'n2', title: 'Find Prompts', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Establish Routine', type: 'branch', parent: null },
      { id: 'n4', title: 'Self-Reflection', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Measure Growth', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min4', title: 'Gratitude Routine', category: 'Mind & Wellness', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Morning Gratitude', type: 'branch', parent: null },
      { id: 'n2', title: 'Evening Reflection', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Verbal Expression', type: 'branch', parent: null },
      { id: 'n4', title: 'Journaling', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Measure Impact', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min5', title: 'Therapy Goals', category: 'Mind & Wellness', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Identify Core Issues', type: 'branch', parent: null },
      { id: 'n2', title: 'Find Therapist', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Attend Sessions', type: 'branch', parent: null },
      { id: 'n4', title: 'Complete Homework', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Track Progress', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min6', title: 'Confidence Building', category: 'Mind & Wellness', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Self-Assessment', type: 'branch', parent: null },
      { id: 'n2', title: 'Daily Affirmations', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Actionable Steps', type: 'branch', parent: null },
      { id: 'n4', title: 'Face Challenges', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Personal Growth', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min7', title: 'Time Blocking', category: 'Mind & Wellness', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Time Audit', type: 'branch', parent: null },
      { id: 'n2', title: 'Prioritize Tasks', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Create Schedule', type: 'branch', parent: null },
      { id: 'n4', title: 'Execute Blocks', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Weekly Review', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min8', title: 'Focus Deep Work', category: 'Mind & Wellness', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Optimize Environment', type: 'branch', parent: null },
      { id: 'n2', title: 'Set Strict Rules', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Deep Work Sprints', type: 'branch', parent: null },
      { id: 'n4', title: 'Scheduled Breaks', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Achieve Mastery', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'min9', title: 'Mindfulness Retreat', category: 'Mind & Wellness', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Select Location', type: 'branch', parent: null },
      { id: 'n2', title: 'Plan Schedule', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Mindfulness Practices', type: 'branch', parent: null },
      { id: 'n4', title: 'Deep Reflection', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Integration into Life', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob0', title: 'D&D Campaign', category: 'Hobbies & Fun', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'World Building', type: 'branch', parent: null },
      { id: 'n2', title: 'Session 0', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Plot Hooks', type: 'branch', parent: null },
      { id: 'n4', title: 'Create NPCs', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Grand Finale', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob1', title: 'Brewing Beer', category: 'Hobbies & Fun', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Buy Equipment', type: 'branch', parent: null },
      { id: 'n2', title: 'Source Ingredients', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Brew Day', type: 'branch', parent: null },
      { id: 'n4', title: 'Fermentation Process', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Bottling & Tasting', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob2', title: 'Aquarium Setup', category: 'Hobbies & Fun', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Buy Tank & Gear', type: 'branch', parent: null },
      { id: 'n2', title: 'Nitrogen Cycling', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Arrange Hardscape', type: 'branch', parent: null },
      { id: 'n4', title: 'Planting', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Add Livestock', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob3', title: 'Woodworking Project', category: 'Hobbies & Fun', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Draw Design', type: 'branch', parent: null },
      { id: 'n2', title: 'Wood Selection', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Cutting Pieces', type: 'branch', parent: null },
      { id: 'n4', title: 'Assembly', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Sanding & Finishing', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob4', title: 'Car Restoration', category: 'Hobbies & Fun', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Condition Assessment', type: 'branch', parent: null },
      { id: 'n2', title: 'Tear Down', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Bodywork & Paint', type: 'branch', parent: null },
      { id: 'n4', title: 'Engine Rebuild', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Final Reassembly', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob5', title: 'Astronomy Basics', category: 'Hobbies & Fun', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Buy Telescope', type: 'branch', parent: null },
      { id: 'n2', title: 'Learn Constellations', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Find Planets', type: 'branch', parent: null },
      { id: 'n4', title: 'Deep Sky Objects', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Astrophotography Intro', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob6', title: 'Chess Strategy', category: 'Hobbies & Fun', type: 'Willow',
    nodes: [
      { id: 'n1', title: 'Learn Openings', type: 'branch', parent: null },
      { id: 'n2', title: 'Midgame Tactics', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Endgame Patterns', type: 'branch', parent: null },
      { id: 'n4', title: 'Solve Puzzles', type: 'leaf', parent: 'n3' },
      { id: 'n5', title: 'Game Analysis', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob7', title: 'Scrapbooking', category: 'Hobbies & Fun', type: 'Pine',
    nodes: [
      { id: 'n1', title: 'Choose Theme', type: 'branch', parent: null },
      { id: 'n2', title: 'Gather Materials', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'Page Layouts', type: 'branch', parent: null },
      { id: 'n4', title: 'Add Journaling', type: 'pinecone', parent: 'n3' },
      { id: 'n5', title: 'Complete Book', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob8', title: 'Language Exchange', category: 'Hobbies & Fun', type: 'Oak',
    nodes: [
      { id: 'n1', title: 'Find Partner', type: 'branch', parent: null },
      { id: 'n2', title: 'Set Schedule', type: 'trunk', parent: 'n1' },
      { id: 'n3', title: 'Choose Topics', type: 'branch', parent: null },
      { id: 'n4', title: 'Correction Method', type: 'acorn', parent: 'n3' },
      { id: 'n5', title: 'Achieve Fluency', type: 'fruit', parent: 'n3' }
    ]
  },
  {
    id: 'hob9', title: 'Drone Photography', category: 'Hobbies & Fun', type: 'Apple',
    nodes: [
      { id: 'n1', title: 'Buy Equipment', type: 'branch', parent: null },
      { id: 'n2', title: 'Learn FAA Rules', type: 'branch', parent: 'n1' },
      { id: 'n3', title: 'First Flight', type: 'branch', parent: null },
      { id: 'n4', title: 'Shooting Techniques', type: 'seed', parent: 'n3' },
      { id: 'n5', title: 'Photo Editing', type: 'fruit', parent: 'n3' }
    ]
  }
];