import json
import os
import re

# 1. Tailor-made definitions for all 50 Everyday Life templates
# Format: (id, title, description, tree_type, leaf_node_type, branches_dict)
EVERYDAY_TEMPLATES = [
    ("tpl_free_01", "Master Grocery List", "Organize recurring weekly shopping by store section with reusable Pine Cone items.", "Pine", "pinecone", {
        "Produce & Fruit": ["Bananas & Apples", "Spinach & Salad Greens", "Avocados & Tomatoes", "Onions, Potatoes & Garlic"],
        "Dairy & Eggs": ["Large Eggs (Dozen)", "Milk / Oat Milk", "Shredded & Block Cheese", "Greek Yogurt & Butter"],
        "Meat & Protein": ["Chicken Breasts", "Ground Beef / Turkey", "Salmon Fillets", "Deli Meat & Bacon"],
        "Pantry Staples": ["Olive Oil & Cooking Spray", "Rice, Pasta & Quinoa", "Canned Beans & Broth", "Bread, Bagels & Tortillas"],
        "Cleaning & Household": ["Paper Towels & Napkins", "Trash Bags", "Dish Soap & Sponges", "Laundry Detergent"],
        "Toiletries & Personal Care": ["Toothpaste & Floss", "Body Wash & Bar Soap", "Deodorant", "Shampoo & Conditioner"]
    }),
    ("tpl_free_02", "Weekly Meal Planner", "Plan recurring breakfasts, lunches, dinners, and prep tasks for the week.", "Pine", "pinecone", {
        "Breakfast Lineup": ["Oatmeal with Berries & Nuts", "Eggs, Toast & Avocado", "High-Protein Smoothie", "Greek Yogurt Parfait"],
        "Lunch Prep": ["Grilled Chicken Caesar Wraps", "Turkey & Quinoa Power Bowls", "Mediterranean Chickpea Salad", "Leftover Dinner Portions"],
        "Weeknight Dinners": ["Mon: Sheet-Pan Fajitas", "Tue: Baked Salmon & Asparagus", "Wed: Stir-Fry Beef & Broccoli", "Thu: Pasta Bolognese", "Fri: Homemade Pizza Night"],
        "Snacks & Sides": ["Hummus & Sliced Veggies", "Mixed Nuts & Dried Fruit", "Protein Bars & Rice Cakes", "Sliced Apples & Peanut Butter"]
    }),
    ("tpl_free_03", "Daily Habit Tracker", "Build daily consistency across morning, work, fitness, and evening routines.", "Pine", "pinecone", {
        "Morning Rituals": ["Drink 16oz Water on Waking", "5-Minute Mobility & Stretch", "Make Bed & Tidy Room", "No Phone for First 30 Mins"],
        "Work & Deep Focus": ["Review Top 3 Daily Priorities", "90-Minute Deep Work Block", "Inbox Zero Check-In", "Stand & Walk Every Hour"],
        "Health & Nutrition": ["Hit Daily Calorie & Protein Goal", "Complete Daily Workout / Calisthenics", "Drink 1 Gallon of Water", "Take Daily Vitamins"],
        "Evening Wind-Down": ["10-Minute Nightly Home Reset", "Lay Out Clothes for Tomorrow", "Screens Off 45 Mins Before Bed", "Read 10 Pages"]
    }),
    ("tpl_free_04", "Daily Journal", "A fluid space for daily thoughts, gratitude, reflection, and creative sparks.", "Willow", "leaf", {
        "Morning Gratitude": ["3 Things I Am Grateful For Today", "One Person Who Made a Difference Recently", "What I Am Looking Forward To Today"],
        "Mindset & Brain Dump": ["Current Thoughts & Mental Clutter", "Worries to Let Go Of", "Core Intention for Today"],
        "Evening Reflection": ["What Went Well Today?", "One Lesson or Adjustment for Tomorrow", "Best Moment of the Day"],
        "Ideas & Creative Sparks": ["Project Ideas to Explore", "Quotes & Book Takeaways", "Random Inspiration Log"]
    }),
    ("tpl_free_05", "Morning Routine", "Start every day energized and intentional with a repeatable morning checklist.", "Pine", "pinecone", {
        "Wake & Hydrate": ["Wake Up on First Alarm", "Drink Full Glass of Water + Electrolytes", "Open Blinds for Natural Sunlight"],
        "Movement & Body": ["5-Minute Dynamic Stretching", "Quick Calisthenics / Push-Ups & Squats", "Cold Rinse & Skincare"],
        "Fuel & Coffee": ["Brew Coffee or Tea", "Cook High-Protein Breakfast", "Pack Lunch & Water Bottle"],
        "Mindset & Plan": ["5 Minutes of Quiet Breathing", "Review Calendar & Appointments", "Lock In #1 Must-Do Task"]
    }),
    ("tpl_free_06", "Evening Routine", "Unplug, reset your space, and prepare for deep, restorative sleep.", "Pine", "pinecone", {
        "Digital Sunset": ["Plug Phone in Outside Bedroom", "Turn On Warm/Night Shift Lighting", "Close Open Computer Tabs"],
        "Kitchen & Home Reset": ["Load & Run Dishwasher", "Wipe Down Kitchen Counters", "Clear Living Room Surfaces"],
        "Prep for Tomorrow": ["Set Out Workout & Work Clothes", "Pre-Pack Bag & Keys by Door", "Write Down Tomorrow's Top 3 Tasks"],
        "Relax & Sleep": ["Hot Shower & Brush Teeth", "Light Stretching or Reading", "Lights Out at Target Bedtime"]
    }),
    ("tpl_free_07", "Weekend Chores", "Knock out weekly house cleaning and reset your home efficiently.", "Pine", "pinecone", {
        "Kitchen & Dining": ["Wipe Down Counters, Stove & Microwave", "Toss Expired Fridge Items", "Mop Kitchen Floor", "Take Out Trash & Recycling"],
        "Bathrooms": ["Scrub Toilet, Sink & Shower", "Wipe Mirrors & Fixtures", "Swap Out Hand & Bath Towels"],
        "Living & Bedrooms": ["Wash & Change Bed Sheets", "Dust Shelves, TV & Desk", "Vacuum Rugs & Carpets"],
        "Laundry & Errands": ["Wash, Dry & Fold Clothing Loads", "Restock Household Paper Goods", "Water Indoor & Outdoor Plants"]
    }),
    ("tpl_free_08", "Deep Cleaning Tracker", "Track heavy seasonal cleaning deliverables across every room.", "Apple", "fruit", {
        "Windows & Walls": ["Wash Interior & Exterior Windows", "Dust Blinds & Wash Curtains", "Wipe Baseboards, Doors & Light Switches"],
        "Kitchen Deep Clean": ["Degrease Oven & Range Hood Filter", "Pull Out & Vacuum Behind Fridge", "Sanitize Garbage Disposal & Dishwasher"],
        "Bedrooms & Closets": ["Flip/Rotate Mattresses & Vacuum", "Donate Unused Seasonal Clothes", "Organize Under-Bed Storage"],
        "Utility & Garage": ["Replace HVAC Air Filters", "Sweep Garage & Organize Tool Racks", "Descale Showerheads & Faucets"]
    }),
    ("tpl_free_09", "Fitness Tracker", "Log your weekly training sessions, progressive overload, and recovery.", "Pine", "pinecone", {
        "Upper Body Push & Pull": ["Push-Ups / Bench Press Progression", "Pull-Ups / Rows Progression", "Overhead Press & Shoulder Stability", "Dips & Arm Accessory Work"],
        "Lower Body & Core": ["Squats / Pistol Squat Progression", "Romanian Deadlifts / Hamstrings", "Lunges & Calf Raises", "Hanging Leg Raises & Planks"],
        "Cardio & Conditioning": ["Zone 2 Aerobic Run / Bike (30m)", "HIIT Sprints or Jump Rope", "Hit 10,000 Daily Steps"],
        "Mobility & Recovery": ["15-Minute Hip & Thoracic Mobility", "Foam Rolling & Stretching", "8 Hours Quality Sleep & Hydration"]
    }),
    ("tpl_free_10", "Book Reading List", "Organize books to read, active chapters, key takeaways, and favorites.", "Willow", "leaf", {
        "Up Next (To-Read Queue)": ["Top Non-Fiction Pick", "Next Fiction / Sci-Fi Novel", "Biography or History Book", "Skill / Technical Textbook"],
        "Currently Reading": ["Active Book Title & Current Page", "Key Quotes & Chapter Notes", "Concepts to Apply Immediately"],
        "Completed This Year": ["Finished Book #1 + Rating", "Finished Book #2 + Summary", "Finished Book #3 + Takeaways"],
        "All-Time Favorites": ["Top Mindset / Philosophy Book", "Favorite Story / Novel", "Go-To Reference Book"]
    }),
    ("tpl_free_11", "Movie & TV Watchlist", "Keep track of recommended films, active series, and documentaries.", "Willow", "leaf", {
        "Movies to Watch": ["Comedy Classics & Favorites", "Action / Sci-Fi Picks", "Critically Acclaimed Dramas", "Weekend Movie Night Pick"],
        "TV Series Queue": ["Currently Watching (Season/Episode)", "Upcoming Season Releases", "Mini-Series to Binge"],
        "Documentaries & Specials": ["Sports & Athletic Achievements", "Nature & Science Docs", "History & True Stories"],
        "Watched & Rated": ["5-Star Must-Rewatch List", "Recommended by Friends"]
    }),
    ("tpl_free_12", "Travel Packing List", "Never forget a travel essential with this reusable pre-trip checklist.", "Pine", "pinecone", {
        "Clothing & Footwear": ["Shirts, Pants & Shorts", "Underwear & Socks (+2 Extra)", "Jacket / Rain Layer", "Walking Shoes & Sandals"],
        "Toiletries & Meds": ["Toothbrush, Toothpaste & Deodorant", "Travel Shampoo, Sunscreen & Razor", "First Aid Kit & Personal Medications", "Glasses / Contacts & Solution"],
        "Electronics & Gear": ["Phone + Fast Charger & Cable", "Portable Power Bank", "Headphones / Earbuds", "Laptop / Camera & SD Cards"],
        "Documents & Security": ["Driver's License / Passport", "Boarding Passes & Hotel Confirmations", "Wallet, Credit Cards & Emergency Cash", "Lock Windows & Set Home Thermostat"]
    }),
    ("tpl_free_13", "Monthly Budget", "Map out monthly income streams, fixed bills, variable spending, and savings.", "Oak", "leaf", {
        "Income Streams": ["Primary Job / Business Net Income", "Side Hustle / Freelance Revenue", "Dividends & Interest"],
        "Fixed Monthly Bills": ["Rent / Mortgage Payment", "Electric, Water & Trash Utilities", "High-Speed Internet & Mobile Phone", "Auto & Health Insurance"],
        "Variable Expenses": ["Groceries & Household Supplies", "Fuel & Vehicle Upkeep", "Dining Out & Entertainment", "Personal & Misc Spending"],
        "Savings & Wealth": ["Emergency Fund Transfer", "Retirement / Index Fund Contribution", "Sinking Funds (Repairs / Travel)"]
    }),
    ("tpl_free_14", "Subscription Tracker", "Audit your recurring monthly and annual digital charges.", "Pine", "pinecone", {
        "Video & Music Streaming": ["Spotify / Music Streaming", "YouTube Premium / Netflix / Hulu", "Live Sports / League Pass"],
        "Software & Cloud Tools": ["Cloud Storage (Google Drive / iCloud)", "AI & Developer Subscriptions", "Creative / Editing Suite"],
        "Memberships & Services": ["Gym / Fitness Membership", "Amazon Prime / Wholesale Club", "Domain Names & Web Hosting"],
        "Cancellation Audit": ["Review Unused Trials Before Renewal", "Switch Annual Billing for Core Tools", "Cancel Redundant Services"]
    }),
    ("tpl_free_15", "Debt Snowball", "Attack balances from smallest to largest and track each payoff milestone.", "Apple", "fruit", {
        "Step 1: Smallest Balances": ["Pay Off Card #1 (Smallest Balance)", "Pay Off Store / Retail Balance", "Roll Freed Minimums into Next Debt"],
        "Step 2: Mid-Size Balances": ["Pay Off Credit Card #2", "Pay Off Personal / Medical Loan", "Apply Side Income Windfalls"],
        "Step 3: Major Loans": ["Pay Off Auto Loan Principal", "Pay Off Student Loan Balance"],
        "Debt-Free Safeguards": ["Build $1,000 Starter Emergency Buffer", "Automate All Minimum Payments", "Celebrate 100% Debt Freedom!"]
    }),
    ("tpl_free_16", "SMART Goals", "Turn an ambitious target into Specific, Measurable, Achievable, Relevant, Time-Bound steps.", "Apple", "fruit", {
        "1. Specific & Measurable": ["Define Exact Outcome & Target Number", "Set Weekly Tracking Metric", "Establish Baseline Starting Point"],
        "2. Achievable Action Plan": ["Milestone 1: Setup & Foundation", "Milestone 2: First 30-Day Sprint", "Milestone 3: Midpoint Review & Tweak"],
        "3. Relevance & Resources": ["Core 'Why' Behind This Goal", "Skills, Tools & Support Needed", "Obstacles & How to Beat Them"],
        "4. Time-Bound Deadlines": ["Weekly Check-In Day", "30-Day Target Date", "Final Completion Deadline"]
    }),
    ("tpl_free_17", "5-Year Vision Board", "Design the long-term blueprint for your career, health, relationships, and wealth.", "Oak", "leaf", {
        "Career & Creations": ["Primary Business / Career Milestone", "Digital Products & Creative Portfolio", "Technical Skills Mastered"],
        "Health & Physical Peak": ["Strength & Calisthenics Benchmarks", "Endurance & Outdoor Goals", "Daily Nutrition & Longevity Habits"],
        "Financial Independence": ["Net Worth & Savings Target", "Passive / Recurring Income Streams", "Major Purchases Paid in Cash"],
        "Lifestyle & Adventure": ["Ideal Home & Workshop Setup", "Dream Fishing & Travel Trips", "Family & Community Impact"]
    }),
    ("tpl_free_18", "Gratitude Log", "Cultivate perspective by recording the people, wins, and simple joys in your life.", "Willow", "leaf", {
        "People I Appreciate": ["Family & Old Friends", "Mentors & Collaborators", "Supportive Community Members"],
        "Recent Wins & Growth": ["A Challenge I Recently Overcame", "A Skill I Am Getting Better At", "A Project That Came Together"],
        "Health & Capabilities": ["Strength to Train & Move Daily", "Focus & Creative Energy", "Restful Sleep & Good Food"],
        "Simple Everyday Joys": ["Morning Coffee & Quiet Time", "Time Outdoors / On the Water", "Great Music & Comedy"]
    }),
    ("tpl_free_19", "Project Brainstorm", "Take a raw idea from initial spark to structured phase-by-phase execution.", "Apple", "fruit", {
        "Vision & Core Problem": ["One-Sentence Project Pitch", "Who Is This For / What Problem Does It Solve?", "Success Criteria (What 'Done' Looks Like)"],
        "Tools & Architecture": ["Hardware / Software Stack Needed", "Assets & Templates Required", "Budget & Time Estimate"],
        "Phase 1: Prototype / MVP": ["Build Core Skeleton", "Test Primary Workflow", "Fix Initial Bottlenecks"],
        "Phase 2: Polish & Launch": ["Refine UI / Presentation", "Final QA Check", "Publish & Share"]
    }),
    ("tpl_free_20", "Gift Ideas Tracker", "Keep a running list of thoughtful gift ideas and sizes year-round.", "Oak", "leaf", {
        "Family": ["Parents: Ideas & Sizes", "Siblings: Hobbies & Wishlists", "Extended Family & Kids"],
        "Partner / Significant Other": ["Mentioned Hints & Saved Links", "Anniversary / Experience Ideas", "Favorite Treats & Brands"],
        "Close Friends": ["Birthday Gift Ideas", "Housewarming / Host Gifts", "Custom / Handmade Ideas"],
        "Holiday Prep": ["Set Gift Budget", "Order Online Before Shipping Cutoff", "Wrapping Paper, Bags & Cards"]
    }),
    ("tpl_free_21", "Event & Party Planner", "Coordinate guests, food, music, and setup without the last-minute stress.", "Apple", "fruit", {
        "Guest List & Invites": ["Finalize Guest List", "Send Invites / Group Text", "Confirm Final Headcount & Dietary Needs"],
        "Food & Drinks": ["Plan Main Dish & Appetizers", "Buy Drinks, Ice & Cooler", "Pick Up Plates, Cups & Napkins"],
        "Space, Music & Setup": ["Clean & Arrange Seating Area", "Build Upbeat Party Playlist", "Set Up Lighting & Games"],
        "Day-Of Schedule": ["2 Hours Out: Chill Drinks & Prep Food", "30 Mins Out: Music On & Final Tidy", "Post-Party Cleanup Plan"]
    }),
    ("tpl_free_22", "Emergency Contacts", "Keep vital phone numbers, medical details, and utility shut-offs accessible offline.", "Oak", "leaf", {
        "Immediate Family & ICE": ["Primary ICE Contact (Name & Phone)", "Secondary Family Contact", "Out-of-State Relay Contact"],
        "Medical & Vet Info": ["Primary Care Doctor & Clinic", "Nearest Urgent Care & ER Address", "Blood Type, Allergies & Medications", "Emergency Vet Clinic"],
        "Home & Utilities": ["Electric & Gas Emergency Line", "Water Dept & Plumber", "Locksmith & HVAC Tech"],
        "Insurance & Auto": ["Home / Renters Insurance Policy #", "Auto Insurance & Roadside Assistance", "Trusted Neighbor Contact"]
    }),
    ("tpl_free_23", "Pet Care Schedule", "Stay on top of feeding, preventative meds, vet visits, and grooming.", "Pine", "pinecone", {
        "Daily Feeding & Water": ["Morning Food Portion", "Fresh Water Bowl Wash & Refill", "Evening Food Portion", "Check Food Bin Restock Level"],
        "Preventative Medications": ["Monthly Heartworm Chew", "Monthly Flea & Tick Treatment", "Daily Supplements / Meds"],
        "Vet & Vaccines": ["Annual Wellness Exam", "Rabies & Bordetella Booster Check", "Dental Checkup"],
        "Grooming & Exercise": ["Daily Walk & Play Session", "Brush Coat & Check Paws", "Nail Trim & Bath"]
    }),
    ("tpl_free_24", "Car Maintenance Log", "Keep your vehicle running smoothly with recurring service and inspection items.", "Pine", "pinecone", {
        "Fluids & Filters": ["Engine Oil & Filter Change (Every 5k mi)", "Check Coolant, Brake & Washer Fluid", "Replace Engine & Cabin Air Filters"],
        "Tires & Brakes": ["Check Tire Pressure (PSI) Monthly", "Rotate & Balance Tires", "Inspect Brake Pads & Rotors", "Check Alignment & Tread Depth"],
        "Electrical & Exterior": ["Test Battery Terminals & Voltage", "Replace Wiper Blades (Pre-Monsoon/Winter)", "Check Headlights, Brake Lights & Signals"],
        "Records & Legal": ["Renew Annual Vehicle Registration", "Update Insurance ID Card in Glovebox", "Log Current Mileage & Service Receipt"]
    }),
    ("tpl_free_25", "Home Maintenance", "Protect your home with seasonal filter, safety, plumbing, and exterior checks.", "Pine", "pinecone", {
        "HVAC & Air Quality": ["Replace AC / Furnace Air Filter", "Clean Dryer Vent Hose & Lint Trap", "Vacuum Refrigerator Coils"],
        "Safety & Alarms": ["Test Smoke & Carbon Monoxide Detectors", "Check Fire Extinguisher Pressure Gauge", "Refresh First Aid Kit Supplies"],
        "Plumbing & Water": ["Inspect Under Sinks for Leaks", "Flush Water Heater Sediment", "Clean Faucet Aerators & Drains"],
        "Exterior & Weatherproofing": ["Clear Gutters & Downspouts", "Inspect Weatherstripping on Doors/Windows", "Check Exterior Caulk & Roof Shingles"]
    }),
    ("tpl_free_26", "Digital Recipe Box", "Organize your go-to breakfasts, high-protein mains, sides, and baking recipes.", "Willow", "leaf", {
        "High-Energy Breakfasts": ["Protein Pancakes / Waffles", "Steak & Eggs Skillet", "Overnight Oats Formula"],
        "Go-To Main Courses": ["Cast-Iron Ribeye / Sirloin", "Slow-Cooker Pulled Pork / Chili", "Lemon Herb Roasted Chicken", "Garlic Butter Pasta & Shrimp"],
        "Sides, Sauces & Marinades": ["Crispy Roasted Potatoes", "Homemade Chimichurri / Marinade", "Seasoned Rice & Beans"],
        "Baking & Favorites": ["Custom Banana Bread (0.75c Mashed Bananas)", "Chocolate Chip Cookies", "Homemade Pizza Dough"]
    }),
    ("tpl_free_27", "Language Learning", "Structure vocabulary, grammar patterns, conversation drills, and media immersion.", "Oak", "leaf", {
        "Core Vocabulary": ["Top 500 High-Frequency Words", "Verbs of Motion & Daily Action", "Food, Travel & Directions"],
        "Grammar & Sentence Building": ["Present, Past & Future Tenses", "Pronouns & Connectors", "Question & Negation Patterns"],
        "Speaking & Listening": ["15-Minute Daily Shadowing Drill", "Common Conversational Idioms", "Language Partner Topics"],
        "Immersion Media": ["Target Language Podcasts", "Movies/Shows with Target Subtitles", "Short Articles & Stories"]
    }),
    ("tpl_free_28", "Study & Class Notes", "Map out a subject's core concepts, formulas, questions, and review summaries.", "Oak", "leaf", {
        "Core Concepts & Theory": ["Unit 1 Fundamental Principles", "Unit 2 Cause & Effect Models", "Key Terminology & Definitions"],
        "Formulas & Frameworks": ["Essential Equations & Proofs", "Step-by-Step Problem Solving Method", "Common Pitfalls to Avoid"],
        "Worked Examples & Labs": ["Sample Problem Walkthrough #1", "Sample Problem Walkthrough #2", "Lab / Practical Application Notes"],
        "Review & Questions": ["Topics Needing Clarification", "One-Page Chapter Synthesis"]
    }),
    ("tpl_free_29", "Exam Prep Strategy", "Conquer your next big exam with targeted topic mastery and practice drills.", "Apple", "fruit", {
        "High-Yield Topics": ["Master Core Module 1", "Master Core Module 2", "Master Core Module 3"],
        "Active Recall & Drills": ["Complete Practice Exam #1 (Timed)", "Grade & Review Missed Questions", "Drill Weak-Area Flashcards", "Complete Practice Exam #2"],
        "Formula & Cheat Sheet": ["Write 1-Page Memory Dump Sheet", "Memorize Key Constants & Rules"],
        "Test Day Logistics": ["Pack ID, Calculator & Supplies", "Get 8 Hours Sleep Night Before"]
    }),
    ("tpl_free_30", "Moving Checklist", "Manage packing, utility transfers, address changes, and moving day logistics.", "Apple", "fruit", {
        "Packing & Supplies": ["Buy Boxes, Heavy Tape & Markers", "Pack Out-of-Season Clothes & Books", "Pack Kitchen & Fragile Items", "Pack 48-Hour 'Open First' Essentials Box"],
        "Utilities & Internet": ["Schedule Electric & Water Transfer", "Schedule High-Speed Internet Install", "Return Old Modem / Equipment"],
        "Address & Official Updates": ["Submit USPS Mail Forwarding", "Update Bank, Credit Cards & Payroll", "Update Driver's License & Auto Insurance"],
        "Moving Day & Handover": ["Defrost Fridge & Final Sweep", "Take Dated Photos of Empty Rooms", "Hand Over Keys & Lock Up"]
    }),
    ("tpl_free_31", "Baby / Nursery Checklist", "Prepare the nursery, gear, feeding supplies, and hospital bag for a new arrival.", "Apple", "fruit", {
        "Nursery & Sleep": ["Assemble Crib & Firm Mattress", "Install Blackout Curtains & Sound Machine", "Set Up Changing Pad & Diaper Caddy", "Set Up Baby Monitor"],
        "Clothing & Diapering": ["Wash Newborn & 0-3M Onesies/Sleepers", "Stock Newborn & Size 1 Diapers", "Stock Unscented Wipes & Diaper Cream"],
        "Feeding & Bath": ["Sterilize Bottles, Nipples & Brush", "Burp Cloths & Swaddle Blankets", "Infant Bathtub, Gentle Wash & Thermometer"],
        "Travel & Hospital Bag": ["Install Infant Car Seat & Test Fit", "Pack Mom & Dad Hospital Bags", "Confirm Pediatrician Contact Info"]
    }),
    ("tpl_free_32", "Wedding Planner Overview", "Track venues, vendors, guests, attire, and ceremony details in one visual map.", "Apple", "fruit", {
        "Venue & Catering": ["Lock In Ceremony & Reception Venue", "Approve Catering Menu & Bar Package", "Reserve Tables, Chairs & Linens"],
        "Photo, Video & Music": ["Book Photographer & Videographer", "Book DJ / Live Band", "Finalize Must-Play & Do-Not-Play Songs"],
        "Guests & Invitations": ["Finalize Guest List & Addresses", "Send Save-the-Dates & Invitations", "Build Final Seating Chart"],
        "Attire, Rings & Legal": ["Complete Dress & Suit Fittings", "Purchase Wedding Bands", "Obtain Marriage License"]
    }),
    ("tpl_free_33", "Date Night Ideas", "Keep a ready-to-go collection of fun at-home, outdoor, dining, and day-trip dates.", "Willow", "leaf", {
        "At-Home & Cozy": ["Cook a New 3-Course Recipe Together", "Backyard Stargazing & Firepit", "Board Game / Co-Op Video Game Night", "Double-Feature Comedy Movie Marathon"],
        "Outdoors & Active": ["Sunrise Hike & Coffee Thermos", "Lake / River Fishing & Picnic", "Sunset Walk & Ice Cream", "Kayaking or Paddleboarding"],
        "Food & Live Entertainment": ["Try a New Local Taco / Ramen Spot", "Live Comedy Show or Concert", "Local Trivia Night"],
        "Weekend Day Trips": ["Scenic Mountain Drive & Small Town Lunch", "Camping Under the Stars", "Botanical Garden or Museum Tour"]
    }),
    ("tpl_free_34", "Local Restaurants Map", "Curate your personal directory of go-to takeout, date spots, coffee, and patios.", "Oak", "leaf", {
        "Fast Casual & Takeout": ["Best Burrito / Tacos in Town", "Go-To Burger & Fries Spot", "Favorite Pizza / Wings Pickup", "Healthy Post-Workout Bowl"],
        "Sit-Down & Date Night": ["Favorite Steakhouse / Grill", "Best Italian / Pasta Spot", "Sushi & Ramen Favorite"],
        "Coffee, Breakfast & Bakery": ["Best Morning Diner / Breakfast Burrito", "Quiet Coffee Shop with Good Wi-Fi", "Local Bakery & Donuts"],
        "Want to Try Next": ["New Spot Recommended by Friends", "Hidden Gem to Check Out"]
    }),
    ("tpl_free_35", "Hiking Trails Directory", "Track your favorite casual loops, summit climbs, and daypack essentials.", "Pine", "pinecone", {
        "Easy Scenic Trails": ["Morning Loop Trail (Under 3 Miles)", "Creek / Lakefront Flat Trail", "Sunset Overlook Walk"],
        "Moderate Half-Day Hikes": ["Canyon Rim Trail (4-6 Miles)", "Forest Ridge Loop", "Waterfall Trail"],
        "Challenging Full-Day Summits": ["High Peak Summit Push", "Backcountry Point-to-Point Route"],
        "Daypack 10 Essentials": ["2-3L Water + Electrolytes", "Trail Mix, Jerky & Energy Bars", "First Aid Kit, Knife & Headlamp", "Offline Trail Map & Sun Protection"]
    }),
    ("tpl_free_36", "Camping Gear Checklist", "Pack your shelter, camp kitchen, tools, and layers without forgetting a thing.", "Pine", "pinecone", {
        "Shelter & Sleeping": ["Tent, Footprint, Poles & Stakes", "Sleeping Bag & Insulated Pad", "Camp Pillow & Extra Blanket", "Foldable Camp Chairs"],
        "Camp Kitchen & Cooler": ["Camp Stove, Fuel & Lighter", "Cooler, Ice & Drinking Water Jug", "Cast-Iron Skillet, Pot & Utensils", "Biodegradable Soap, Sponge & Trash Bags"],
        "Tools, Lighting & Safety": ["Headlamps, Lantern & Extra Batteries", "Multi-Tool, Hatchet & Paracord", "First Aid Kit, Bug Spray & Sunscreen"],
        "Clothing & Footwear": ["Moisture-Wicking Base Layers", "Warm Fleece / Down Jacket & Beanie", "Rain Shell & Hiking Boots"]
    }),
    ("tpl_free_37", "Fishing Log & Gear", "Organize your favorite fishing spots, rod setups, tackle inventory, and licenses.", "Pine", "pinecone", {
        "Licenses & Essentials": ["Valid State Fishing License in Wallet", "Check Local Regulations & Bag Limits", "Polarized Sunglasses & Hat", "Needle-Nose Pliers, Clippers & Scale"],
        "Rods, Reels & Line": ["Spinning Rod & Reel (Light/Med)", "Baitcaster Setup (Heavy Cover)", "Check Fluorocarbon / Braided Line & Drag"],
        "Tackle Box Inventory": ["Soft Plastics (Senkos, Craws, Swimbaits)", "Hard Baits (Crankbaits, Jerkbaits, Topwater)", "Jigs, Spinnerbaits & Chatterbaits", "Hooks (EWG, Drop Shot), Weights & Swivels"],
        "Spots & Catch Log": ["Prime Morning Spot & Water Temp", "Structure / Cover Holding Fish", "Best Working Lure & Color Pattern"]
    }),
    ("tpl_free_38", "Gardening Schedule", "Stay on top of soil prep, planting windows, watering, and harvest cycles.", "Pine", "pinecone", {
        "Soil & Bed Prep": ["Clear Weeds & Old Roots", "Mix In Compost & Organic Fertilizer", "Check Drip Irrigation / Soaker Hoses"],
        "Warm-Season Planting": ["Tomatoes, Peppers & Zucchini", "Fresh Basil, Cilantro & Rosemary", "Mulch Around Stems to Retain Moisture"],
        "Cool-Season Planting": ["Spinach, Kale & Lettuce Greens", "Carrots, Radishes & Onions", "Frost Cloth Protection Ready"],
        "Weekly Garden Care": ["Deep Morning Watering", "Prune Suckers & Stake Vines", "Harvest Ripe Produce Daily"]
    }),
    ("tpl_free_39", "DIY Project Planner", "Plan dimensions, materials, tools, and build steps before making the first cut.", "Apple", "fruit", {
        "Design & Measurements": ["Measure Space Twice (Width x Depth x Height)", "Sketch Cut List & Joinery Diagram", "Set Total Material Budget"],
        "Materials & Hardware": ["Select Lumber / Sheet Goods", "Screws, Bolts, Anchors & Glue", "Sandpaper, Stain / Paint & Sealant"],
        "Tools & Safety Prep": ["Saw, Drill/Driver & Clamps Ready", "Tape Measure, Square & Level", "Safety Glasses & Ear Protection"],
        "Build & Finish Steps": ["Cut & Label All Pieces", "Dry-Fit & Assemble Frame", "Sand Smooth & Apply Finish Coat"]
    }),
    ("tpl_free_40", "Wardrobe Inventory", "Keep a clean, functional capsule wardrobe and clear out unworn clutter.", "Oak", "leaf", {
        "Everyday Tops & Layers": ["Fitted T-Shirts & Henleys", "Button-Downs & Flannels", "Hoodies, Jackets & Outerwear"],
        "Bottoms": ["Well-Fitting Jeans & Chinos", "Athletic / Calisthenics Shorts", "Dress Pants / Suit"],
        "Footwear & Accessories": ["Daily Sneakers & Running Shoes", "Boots & Outdoor Footwear", "Belts, Watch & Sunglasses"],
        "Upgrade & Donate Queue": ["Worn-Out Items to Replace", "Unworn Clothes to Donate"]
    }),
    ("tpl_free_41", "Skincare Routine", "Maintain a simple, consistent morning and evening skin care checklist.", "Pine", "pinecone", {
        "Morning (AM) Routine": ["Rinse with Cool/Lukewarm Water or Gentle Cleanser", "Apply Hydrating Moisturizer", "Apply Broad-Spectrum SPF 30+ Sunscreen"],
        "Evening (PM) Routine": ["Wash Face with Gentle Cleanser", "Apply Active Treatment / Retinoid", "Apply Night Moisturizer & Lip Balm"],
        "Weekly Care": ["Exfoliate 1-2x Per Week", "Change Pillowcase Twice a Week", "Clean Beard Trimmer / Razor Blades"],
        "Restock Check": ["Cleanser & Moisturizer Level", "Sunscreen Backup Bottle"]
    }),
    ("tpl_free_42", "Side Hustle Brainstorm", "Validate, price, and launch a profitable new service or digital product.", "Apple", "fruit", {
        "The Offer & Niche": ["Define Specific Problem You Solve", "Identify Ideal Customer Profile", "Package Clear Deliverable & Price"],
        "Infrastructure & Tools": ["Set Up Portfolio / Landing Page", "Connect Payment Link (Stripe / Ko-fi / PayPal)", "Create Intake / Onboarding Template"],
        "First 3 Sales Actions": ["Reach Out to 10 Warm Contacts", "Post Value Showcase / Demo", "Deliver 5-Star Result & Ask for Testimonial"],
        "Growth & Automation": ["Turn Repetitive Steps into Scripts/Templates", "Track Revenue vs. Expenses"]
    }),
    ("tpl_free_43", "Job Hunt Tracker", "Manage target companies, tailored resumes, interview rounds, and offers.", "Apple", "fruit", {
        "Target Roles & Prep": ["Polish Master Resume & Portfolio Links", "List Top 10 Target Companies", "Update LinkedIn & GitHub Profiles"],
        "Applications Submitted": ["Application #1 (Role, Date & Link)", "Application #2 (Role, Date & Link)", "Send Direct Follow-Up Message"],
        "Interview Pipeline": ["Research Company Tech Stack & News", "Prep 5 STAR-Method Project Stories", "Send Post-Interview Thank-You Note"],
        "Offer & Negotiation": ["Compare Base, Bonus & Remote Flexibility", "Negotiate Final Compensation Package"]
    }),
    ("tpl_free_44", "Resume Builder Outline", "Organize your technical skills, measurable achievements, and work history.", "Oak", "leaf", {
        "Header & Summary": ["Contact Info, Portfolio & GitHub URL", "2-Sentence High-Impact Technical Summary"],
        "Core Technical Skills": ["Hardware, OS, BIOS & Network Troubleshooting", "Python Scripting, Automation & Web Dev", "Video/Audio Production (DaVinci Resolve, SEO)"],
        "Work & Project Experience": ["Independent Creator & Developer Achievements", "10+ Years IT & Systems Repair Highlights", "Quantified Results (Time Saved / Growth)"],
        "Education & Certifications": ["Relevant Training & Compliance Certs", "Self-Directed Technical Curricula"]
    }),
    ("tpl_free_45", "Meeting & Call Notes", "Capture agendas, key takeaways, locked-in decisions, and next steps.", "Willow", "leaf", {
        "Pre-Call Agenda": ["Primary Goal of the Call", "3 Questions to Get Answered", "Context & Files to Have Open"],
        "Live Discussion Notes": ["Key Points & Feedback Shared", "Constraints, Timeline & Budget Mentioned"],
        "Decisions Locked In": ["Decision #1 Agreed Upon", "Decision #2 Agreed Upon"],
        "Action Items & Next Steps": ["My Action Items + Due Date", "Their Action Items + Follow-Up Date"]
    }),
    ("tpl_free_46", "Brain Dump Matrix", "Sort everything on your mind into the 4 Eisenhower priority quadrants.", "Apple", "fruit", {
        "1. Do Now (Urgent & Important)": ["Critical Deadline / Launch Blocker", "Immediate Client or Work Deliverable", "High-Impact Fix"],
        "2. Schedule (Important, Not Urgent)": ["Core Product Development & Coding", "Daily Fitness, Meal Prep & Sleep", "Long-Term Skill Study"],
        "3. Delegate / Automate (Urgent, Low Value)": ["Repetitive Media / Editing Tasks", "Routine Admin & Formatting"],
        "4. Eliminate / Park for Later": ["Low-Priority Distractions", "Someday / Maybe Ideas"]
    }),
    ("tpl_free_47", "End of Year Review", "Reflect on your biggest wins, lessons learned, and set your trajectory for the new year.", "Willow", "leaf", {
        "Biggest Wins & Shipped Work": ["Projects Built & Launched", "Personal & Athletic Milestones Hit", "Best Memories Outdoors & With Friends"],
        "Lessons & Bottlenecks": ["What Drained Time or Energy?", "Toughest Problem Solved This Year", "Key Mindset Shift"],
        "What to Leave Behind": ["Habits or Commitments to Drop", "Workflows to Simplify"],
        "Next Year's Big 3": ["#1 Career / Creator Goal", "#2 Physical / Health Target", "#3 Personal / Adventure Goal"]
    }),
    ("tpl_free_48", "Daily To-Do List", "A laser-focused daily execution tree for your top 3 priorities and quick wins.", "Apple", "fruit", {
        "Top 3 Must-Do Priorities": ["#1 Most Important Task Today", "#2 Core Project Deliverable", "#3 Essential Daily Commitment"],
        "Quick 5-Minute Knockouts": ["Reply to Priority Messages", "Quick File Backup / Git Push", "Tidy Desk & Workspace"],
        "Scheduled Blocks": ["Work Shift / Meetings Block", "Training & Calisthenics Session"],
        "End-of-Day Wrap-Up": ["Check Off Completed Fruits", "Set Top Priority for Tomorrow Morning"]
    }),
    ("tpl_free_49", "Weekly Reflection", "Run a 10-minute weekly sync to review progress and lock in next week's focus.", "Pine", "pinecone", {
        "Review This Past Week": ["Celebrate Completed Projects & Workouts", "Check Budget & Calorie/Training Consistency", "Identify Where Time Slipped"],
        "Clear the Decks": ["Process Open Browser Tabs & Notes", "Clear Desktop & Downloads Folder", "Back Up Active Project Files"],
        "Rollover & Prune": ["Move Unfinished Tasks to Next Week", "Delete Tasks That No Longer Matter"],
        "Lock In Next Week": ["Choose #1 Main Objective for the Week", "Block Out Deep Work & Fishing/Recovery Time"]
    }),
    ("tpl_free_50", "Life Bucket List", "Map out your ultimate lifetime adventures, skills, creative works, and milestones.", "Oak", "leaf", {
        "Outdoor & Travel Adventures": ["Dream Backcountry Fishing & Hunting Trips", "Iconic National Parks & Mountains to Visit", "International Destinations to Explore"],
        "Athletic & Physical Feats": ["Advanced Calisthenics Skills (Planche / Front Lever)", "Endurance / Marathon Milestone", "Lifetime Strength Benchmarks"],
        "Creative & Technical Mastery": ["Ship Flagship Apps & Tools", "Master Advanced Guitar Theory & Improvisation", "Grow Channel & Podcast Community"],
        "Financial & Lifestyle": ["Build Dream Workshop & Studio", "Achieve Complete Location & Time Freedom"]
    })
]


def build_everyday_template(tpl_tuple):
    tpl_id, title, desc, tree_type, leaf_type, branches = tpl_tuple
    nodes = [{
        "id": "n1",
        "title": title,
        "desc": desc,
        "type": "trunk",
        "parent": None,
        "parentId": None
    }]
    counter = 2
    for b_title, items in branches.items():
        b_id = f"n{counter}"
        counter += 1
        nodes.append({
            "id": b_id,
            "title": b_title,
            "desc": f"{b_title} section for {title}",
            "type": "branch",
            "parent": "n1",
            "parentId": "n1"
        })
        for item_title in items:
            item_id = f"n{counter}"
            counter += 1
            nodes.append({
                "id": item_id,
                "title": item_title,
                "desc": "",
                "type": leaf_type,
                "parent": b_id,
                "parentId": b_id
            })
    return {
        "id": tpl_id,
        "title": title,
        "description": desc,
        "category": "Everyday Life",
        "type": tree_type,
        "tier": "free",
        "price": "free",
        "nodes": nodes
    }


def repair_and_upgrade_template(tpl):
    """Repairs multi-trunk trees, fixes orphan nodes, adds descriptions, and normalizes Pine/Apple leaves."""
    title = tpl.get("title", "Project Template")
    cat = tpl.get("category", "General")
    tree_type = tpl.get("type", "Pine")
    if tree_type == "Fruit Orchard":
        tree_type = "Apple"
    tpl["type"] = tree_type

    tier = tpl.get("tier") or ("free" if tpl.get("price") == "free" else "premium")
    tpl["tier"] = tier
    tpl["price"] = "free" if tier == "free" else "$1"

    raw_nodes = tpl.get("nodes") or (tpl.get("treeData", {}).get("nodes")) or []
    if "treeData" in tpl:
        del tpl["treeData"]

    # Normalize node keys first
    nodes = []
    for idx, n in enumerate(raw_nodes):
        nid = str(n.get("id", f"n{idx+1}"))
        ntype = str(n.get("type", "leaf")).lower()
        if "leaf" in ntype:
            ntype = "leaf"
        elif "branch" in ntype:
            ntype = "branch"
        elif "trunk" in ntype:
            ntype = "trunk"
        parent = n.get("parent") if n.get("parent") is not None else n.get("parentId")
        nodes.append({
            "id": nid,
            "title": n.get("title", "Item"),
            "desc": n.get("desc", ""),
            "type": ntype,
            "parent": parent,
            "parentId": parent
        })

    # Find all trunk nodes
    trunks = [n for n in nodes if n["type"] == "trunk"]

    if len(trunks) == 0 and len(nodes) > 0:
        # Insert a master trunk and connect top-level nodes to it
        master_id = "root_master"
        for n in nodes:
            if not n["parentId"]:
                n["parent"] = master_id
                n["parentId"] = master_id
        nodes.insert(0, {
            "id": master_id,
            "title": title,
            "desc": f"Master structure for {title}",
            "type": "trunk",
            "parent": None,
            "parentId": None
        })
    elif len(trunks) > 1:
        # Multi-trunk fix: create 1 master trunk and convert the multiple trunks into branches under it
        master_id = "root_master"
        for t_node in trunks:
            t_node["type"] = "branch"
            t_node["parent"] = master_id
            t_node["parentId"] = master_id
        nodes.insert(0, {
            "id": master_id,
            "title": title,
            "desc": f"Complete {cat} workflow for {title}",
            "type": "trunk",
            "parent": None,
            "parentId": None
        })
    elif len(trunks) == 1:
        master_id = trunks[0]["id"]
        trunks[0]["parent"] = None
        trunks[0]["parentId"] = None

    # Ensure zero orphan nodes exist
    valid_ids = {n["id"] for n in nodes}
    master_trunk_id = next((n["id"] for n in nodes if n["type"] == "trunk"), nodes[0]["id"])
    for n in nodes:
        if n["id"] != master_trunk_id:
            if not n["parentId"] or n["parentId"] not in valid_ids or n["parentId"] == n["id"]:
                n["parent"] = master_trunk_id
                n["parentId"] = master_trunk_id

    # Make terminal action items interactive for Pine (pinecone) and Apple (fruit) trees if none exist
    parent_ids = {n["parentId"] for n in nodes if n["parentId"]}
    has_action_nodes = any(n["type"] in ("fruit", "pinecone") for n in nodes)
    if tree_type in ("Pine", "Apple") and not has_action_nodes:
        target_action_type = "pinecone" if tree_type == "Pine" else "fruit"
        for n in nodes:
            if n["id"] not in parent_ids and n["type"] == "leaf":
                n["type"] = target_action_type

    # Build a tailored description if missing
    if not tpl.get("description"):
        branch_titles = [n["title"] for n in nodes if n["type"] == "branch"][:3]
        if branch_titles:
            tpl["description"] = f"Includes {', '.join(branch_titles)}, and more."
        else:
            tpl["description"] = f"Structured {tree_type} tree template for {title}."

    tpl["nodes"] = nodes
    return tpl


def main():
    filepath = "templates.js"
    if not os.path.exists(filepath):
        print("Error: templates.js not found in the current folder.")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract the first 148 JSON templates (bus0 through hob147)
    pattern = re.compile(r'\{\s*"id"\s*:\s*"(?:bus|sof|fit|fin|cre|edu|hom|eve|min|hob)\d+".*?\}\s*\]\s*\}', re.DOTALL)
    matches = pattern.findall(content)

    upgraded_templates = []
    for m in matches:
        try:
            obj = json.loads(m)
            upgraded_templates.append(repair_and_upgrade_template(obj))
        except Exception as e:
            print(f"Skipped malformed entry: {e}")

    # Append all 50 rich, tailor-made Everyday Life templates
    for tpl_tuple in EVERYDAY_TEMPLATES:
        upgraded_templates.append(build_everyday_template(tpl_tuple))

    # Write clean, valid JavaScript out to templates.js
    out_lines = ["window.SYLVA_TEMPLATES = [\n"]
    for i, tpl in enumerate(upgraded_templates):
        comma = "," if i < len(upgraded_templates) - 1 else ""
        out_lines.append("  " + json.dumps(tpl, ensure_ascii=False) + comma + "\n")
    out_lines.append("];\n")

    with open(filepath, "w", encoding="utf-8") as f:
        f.writelines(out_lines)

    print(f"SUCCESS: Upgraded and wrote {len(upgraded_templates)} complete, single-trunk templates to templates.js!")


if __name__ == "__main__":
    main()