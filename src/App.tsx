import { useState, useRef, useEffect } from 'react';
import { 
  BarChart3, 
  Brain, 
  Database, 
  LineChart, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Download,
  Terminal,
  Layers,
  MapPin,
  Calendar,
  X,
  Send,
  Award,
  BookOpen,
  Feather,
  ExternalLink,
  Coffee,
  Github,
  Maximize2,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

// --- CONFIGURATION & DATA ---

const PERSONAL_INFO = {
  name: "Lihong GAO", 
  title: "Data Analyst | Specializing in Machine Learning & Business Intelligence",
  tagline: "Translating complex datasets into clear, actionable stories that solve real-world business challenges.",
  email: "lgao28@jh.edu",
  github: "github.com/Epiphany-Leon",
  githubUrl: "https://github.com/Epiphany-Leon",
  linkedin: "linkedin.com/in/lihong-gao",
  location: "Washington DC-Baltimore Area",
  
  heroPhotoUrl: "/images/me.jpg", 
  
  resumeUrl: "/files/Lihong_Gao_Resume.pdf", 
  
  blogUrl: "https://epiphany-leon.github.io/site_lih/",
  about: "I am a Business Analytics and Artificial Intelligence graduate student at Johns Hopkins University (GPA 3.81). My dual bachelor's degrees in Finance and Business Administration provide me with a strong framework for understanding the 'why' behind the data. I thrive on delivering measurable results and have hands-on experience in financial analysis, predictive modeling, and operational optimization."
};

const CORE_SKILLS_DETAILS = [
  {
    id: 'ai',
    title: "AI & Machine Learning",
    icon: Brain,
    color: "blue",
    shortDesc: "Building AI credit models, LLM agents, and predictive frameworks using Python and Azure.",
    certifications: [
      { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", date: "2025" },
      { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", date: "2026" }
    ],
    coursework: [
      { name: "Practical Machine Learning", grade: "In Progress", stack: ["Python", "Scikit-learn", "Google Colab"] },
      { name: "Artificial Intelligence", grade: "A", stack: ["AI Concepts", "Algorithms"] },
      { name: "Python for Data Analysis", grade: "A", stack: ["Pandas", "NumPy", "Scipy"] }
    ]
  },
  {
    id: 'bi',
    title: "Business Intelligence",
    icon: BarChart3,
    color: "purple",
    shortDesc: "Visualizing KPIs, sales funnels, and operational metrics via Tableau and Excel Dashboards.",
    certifications: [
      { name: "Presenting Data Effectively", issuer: "LinkedIn", date: "2025" },
      { name: "Business Problem Framing", issuer: "INFORMS", date: "2026" }
    ],
    coursework: [
      { name: "Data Visualization", grade: "A", stack: ["Tableau", "Storytelling"] },
      { name: "Business Analytics", grade: "A", stack: ["Optimization", "Risk Modeling", "Simulation"] },
      { name: "Financial Investment Simulation", grade: "A", stack: ["Simulation", "Strategy"] }
    ]
  },
  {
    id: 'data',
    title: "Data Engineering & SQL",
    icon: Database,
    color: "indigo",
    shortDesc: "Designing dynamic data pipelines and optimizing SQL queries for real-time analytics.",
    certifications: [
      { name: "SAS SQL Essentials Badge", issuer: "SAS", date: "2025" },
      { name: "Azure DevOps Services", issuer: "Microsoft", date: "2025" }
    ],
    coursework: [
      { name: "Database Management", grade: "In Progress", stack: ["SQL", "Relational DB"] },
      { name: "Data Analytics", grade: "A", stack: ["R", "Supervised Learning", "Unsupervised Learning"] },
      { name: "Statistical Analysis", grade: "A", stack: ["R", "Hypothesis Testing"] },
      { name: "Investment & Experiment Based on R", grade: "A", stack: ["R", "Quant Finance"] }
    ]
  }
];

const PROJECTS = [
  {
    id: 9, 
    title: "SnapHomz Rental Data Pipeline",
    category: "AI & Automation",
    summary: "Built a full-stack data pipeline using FastAPI and Selenium to scrape, clean, and serve rental listing data.",
    context: "The rental market lacks a unified API for real-time property data. Manual aggregation is slow and error-prone, requiring an automated engineering solution to ingest and normalize dynamic web listings.",
    methodology: "1. Data Acquisition: Engineered Selenium scripts to automate the web scraping of dynamic property listings, bypassing anti-bot measures.\n2. Data Engineering: Designed a Python (Pandas) pipeline for data cleansing, normalization, and handling missing values.\n3. Database Architecture: Designed a normalized PostgreSQL schema and implemented upsert logic to manage daily updates without duplicates.\n4. API Development: Built a RESTful backend using FastAPI to serve processed data to frontend clients with ultra-low latency.",
    results: [
      "Reduced manual data entry time by 90% through automated scraping.",
      "Established a normalized database schema supporting scalable property records.",
      "Deployed RESTful APIs with <100ms response time for frontend queries."
    ],
    tools: ["Python (FastAPI)", "Selenium", "PostgreSQL", "Data Engineering"],
    impact: "Automated the aggregation of rental listings, enabling real-time property search capabilities.",
    githubLink: "https://github.com/Epiphany-Leon/snaphomz-trial-LihongGao",
    styles: {
      strip: "bg-purple-600",
      impactBox: "border-purple-600 bg-purple-50",
      text: "text-purple-600",
      bg: "bg-purple-50"
    }
  },
  {
    id: 10, 
    title: "Global Supply Chain Network Optimization",
    category: "Quantitative Analysis",
    summary: "Modeled a multi-echelon supply chain using Mixed-Integer Linear Programming (MILP) in Python.",
    context: "PrecisionLink needed to expand production capacity to serve 5 global markets (USA, Germany, Japan, Brazil, India) but faced severe uncertainty in future demand, requiring a mathematically robust expansion strategy.",
    methodology: "1. Optimization Modeling: Formulated a Mixed-Integer Linear Programming (MILP) model in Python (PuLP) to minimize fixed setup and variable transportation costs, subject to strict capacity and demand constraints.\n2. Monte Carlo Simulation: Simulated 500 stochastic demand scenarios across the 5 global markets using Normal distributions based on historical variances.\n3. Robustness Analysis: Evaluated the probability of facility utilization across all simulations to identify highly robust network nodes vs. sensitive/risky nodes.",
    results: [
      "Identified that High-Capacity factories in USA and Japan have a 100% robustness score (opening probability).",
      "Quantified financial risk with a Mean Total Cost of $92.6M and a Standard Deviation of $6.0M.",
      "Provided data-driven recommendations to prioritize expansion in stable markets."
    ],
    tools: ["Python (PuLP)", "Monte Carlo Simulation", "Optimization", "Sensitivity Analysis"],
    impact: "Identified optimal facility configurations with 100% robustness and quantified cost risks to guide strategic investment.",
    githubLink: "https://github.com/Epiphany-Leon/BA-SupplyChainOptimizationAndSimulation",
    pdfUrl: "/files/BA_Group10_Project.pdf",
    styles: {
      strip: "bg-cyan-600",
      impactBox: "border-cyan-600 bg-cyan-50",
      text: "text-cyan-600",
      bg: "bg-cyan-50"
    }
  },
  {
    id: 8,
    title: "Fuel Inventory & Investment Analysis",
    category: "Quantitative Analysis",
    summary: "Analyzed gas station inventory data and developed a financial model (NPV/ROI) for investment assessment.",
    context: "A gas station faced recurring fuel shortages during peak demand. Management needed to decide whether a massive capital expenditure (installing a new underground tank) was financially justified by the recovered lost sales.",
    methodology: "1. Data Integration & EDA: Merged disparate daily transaction, delivery, and inventory logs into a unified time-series dataset using Python Pandas.\n2. Shortage Detection: Developed algorithms to flag timestamps where inventory levels dropped below critical demand thresholds.\n3. Operational Optimization: Calculated dynamic safety stock levels and reorder points to mitigate stockout risks.\n4. Financial Modeling: Constructed a Discounted Cash Flow (DCF) model to compute the Net Present Value (NPV) and Return on Investment (ROI) over a 5-year horizon.",
    results: [
      "Calculated a positive NPV Return on Investment of 30.6% for new tank investments.",
      "Identified optimal reorder points that reduce stockout events by approximately 40%.",
      "Developed an automated shortage detection algorithm to flag operational risks."
    ],
    tools: ["Python (Pandas/NumPy)", "Financial Modeling (NPV/ROI)", "Inventory Optimization"],
    impact: "Determined a positive ROI (30.6% NPV) for new tank investments and established optimal reorder thresholds.",
    githubLink: "https://github.com/Epiphany-Leon/DA-FuelInventory-InvestmentAnalysis",
    styles: {
      strip: "bg-teal-500",
      impactBox: "border-teal-500 bg-teal-50",
      text: "text-teal-600",
      bg: "bg-teal-50"
    }
  },
  {
    id: 6, 
    title: "Digital Wellness & Lifestyle Analysis",
    category: "Quantitative Analysis", 
    summary: "Analyzed 5,000+ survey responses using R to decouple the effects of screen time vs. lifestyle on mental health.",
    context: "Public discourse often generalizes 'screen time' as harmful. We sought to investigate which specific digital behaviors actually correlate with high stress levels, analyzing a dataset of 5,000 user responses.",
    methodology: "1. Exploratory Data Analysis: Conducted correlation analysis (heatmaps) and Linear Regression to quantify the impact of sleep quality versus sleep duration on overall mental health scores.\n2. Supervised Learning: Implemented Decision Tree and Random Forest algorithms to classify users into stress categories and pinpoint critical usage thresholds (e.g., 3.85 hours).\n3. Unsupervised Learning: Applied K-Means Clustering, utilizing the Elbow Method to determine the optimal k=3, successfully segmenting the participant base into distinct behavioral personas.",
    results: [
      "Identified 3.85 hours/day of social media usage as a critical tipping point for high stress.",
      "Segmented users into 3 clusters: 'Balanced Users', 'Gamers', and 'Heavy Social Users'.",
      "Proved that sleep quality is a statistically stronger predictor of mental health than total screen duration."
    ],
    tools: ["R", "Machine Learning (KNN/Trees)", "K-Means Clustering", "Regression"],
    impact: "Segmented users into 3 personas, proving digital modality matters more than total duration.",
    githubLink: "https://github.com/Epiphany-Leon/DA-DigitalWellnessAndLifestyleAnalysis",
    pdfUrl: "/files/Team_Viper_Project_Report.pdf",
    styles: {
      strip: "bg-indigo-500", 
      impactBox: "border-indigo-500 bg-indigo-50",
      text: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  },
  {
    id: 1,
    title: "Local LLM Deployment & Agentic AI",
    category: "AI & Automation",
    summary: "Engineered autonomous AI agents using AnythingLLM/RAG to automate research workflows.",
    context: "Processing sensitive internal documents required an advanced AI reasoning solution that strictly adhered to privacy protocols by not sending data to external cloud providers (like OpenAI).",
    methodology: "1. Environment Setup: Deployed local, open-source Large Language Models (Llama 3, Mistral) using Ollama to ensure complete data privacy.\n2. RAG Pipeline Construction: Integrated a Retrieval-Augmented Generation architecture with vector databases to process, chunk, and index sensitive internal PDFs.\n3. Agent Engineering: Developed AI agents capable of autonomous multi-document reasoning, contextual querying, and generating heavily cited responses.",
    results: [
      "Achieved 100% data privacy by running all inference locally (air-gapped).",
      "Reduced document search time by approximately 70% for the research team.",
      "Successfully handled multi-document reasoning for complex due diligence queries."
    ],
    tools: ["Python", "LLM", "RAG", "Ollama", "NotebookLM"],
    impact: "Automated triage of complex inquiries and optimized inference performance for secure data processing.",
    styles: {
      strip: "bg-purple-500",
      impactBox: "border-purple-500 bg-purple-50",
      text: "text-purple-600",
      bg: "bg-purple-50"
    }
  },
  {
    id: 0,
    title: "Customer Shopping Behavior Analysis",
    category: "Business Intelligence", 
    summary: "Analyzed transactional data using Tableau to decode shopping patterns and profile core demographics.",
    context: "The retail business needed to understand why sales fluctuated and identify their most valuable customer segments in order to optimize marketing spend and inventory planning.",
    methodology: "1. Data Aggregation: Cleaned and structured internal retail transactional data.\n2. Analytic Framework: Adopted a strategic '4Ws' approach (When, Where, What, Who) to systematically decode purchasing patterns.\n3. Visual Analytics: Developed interactive Tableau dashboards utilizing geospatial mapping, seasonal trend lines, and demographic segmentation charts to translate raw records into actionable marketing strategies.",
    results: [
      "Identified 'Fall' as the dominant sales season, contrary to the expected Holiday season peak.",
      "Profiled the highest value customer segment: Males aged 30-59.",
      "Revealed that while 'Clothing' drives volume, 'Accessories' drive higher profit margins."
    ],
    tools: ["Tableau", "Data Storytelling", "Consumer Profiling"],
    impact: "Formulated 4 strategic recommendations for inventory planning and geo-targeted campaigns.",
    githubLink: "https://github.com/Epiphany-Leon/Datavisualization-CustomerShoppingBehaviorAnalysis",
    pdfUrl: "/files/DV_Group223.pdf",
    styles: {
      strip: "bg-orange-500",
      impactBox: "border-orange-500 bg-orange-50",
      text: "text-orange-600",
      bg: "bg-orange-50"
    }
  },
  {
    id: 2,
    title: "SME Financing Statistical Modeling",
    category: "Quantitative Analysis",
    summary: "Orchestrated full-cycle research in R to optimize credit risk assessment frameworks on 50,000+ records.",
    context: "Small and Medium Enterprise (SME) lending carries inherently high risk. The financial institution sought to improve the predictive accuracy of its default forecasting models.",
    methodology: "1. Data Preprocessing: Cleansed a massive dataset of 50,000+ transaction records, addressing missing values and treating outliers.\n2. Feature Engineering: Extracted and transformed key financial indicators relevant to corporate credit health.\n3. Predictive Modeling: Trained and evaluated multiple classification models (Logistic Regression, Random Forest) to forecast default probabilities.\n4. Strategic Evaluation: Assessed the model's business value by comparing the efficiency gain against baseline credit assessment frameworks.",
    results: [
      "Achieved a 25% efficiency gain in the proposed financing strategy.",
      "Identified key risk factors that were previously underweighted in the credit scorecard.",
      "Delivered a reproducible R markdown report for stakeholder review."
    ],
    tools: ["R", "Machine Learning", "Big Data"],
    impact: "Validated a 25% efficiency gain in SME financing strategies through full-cycle research.",
    styles: {
      strip: "bg-indigo-500",
      impactBox: "border-indigo-500 bg-indigo-50",
      text: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  },
  {
    id: 3,
    title: "Overseas Investment Risk Assessment",
    category: "Risk Management",
    summary: "Verified 37 risk indicators across five dimensions using Random Forest algorithms.",
    context: "Investors needed a robust, data-driven methodology to assess macro-level risks across emerging global markets prior to allocating significant capital.",
    methodology: "1. Dimensionality Reduction: Applied Principal Component Analysis (PCA) to synthesize 37 complex risk indicators spanning political, economic, and social dimensions.\n2. Feature Importance: Utilized Random Forest algorithms to mathematically validate the weight and significance of each individual risk factor.\n3. Market Segmentation: Performed K-Means clustering analysis to group countries into 6 distinct risk profiles, enabling customized portfolio diversification strategies.",
    results: [
      "Segmented regional markets into six distinct risk clusters.",
      "Defined specific investor risk profiles for each cluster.",
      "Provided empirical evidence to support a diversified portfolio strategy."
    ],
    tools: ["Random Forest", "Clustering", "Python/R"],
    impact: "Formulated data-driven enterprise investment strategies by pinpointing distinct investor risk profiles.",
    styles: {
      strip: "bg-blue-500",
      impactBox: "border-blue-500 bg-blue-50",
      text: "text-blue-600",
      bg: "bg-blue-50"
    }
  },
  {
    id: 4,
    title: "Bank Sales Operations Dashboard",
    category: "Business Intelligence",
    summary: "Built dynamic Excel dashboards to visualize real-time KPIs, sales funnels, and branch quota attainment.",
    context: "Regional banking managers lacked a real-time, consolidated view of branch performance, previously relying on static, time-consuming weekly reports.",
    methodology: "1. Data Consolidation: Extracted and merged fragmented daily branch reports using advanced Power Query and VLOOKUP functions.\n2. Process Automation: Wrote custom VBA macros to eliminate manual data entry and streamline the daily reporting pipeline.\n3. Interactive Visualization: Built dynamic Excel PivotTables and visual slicers to provide managers with a real-time, consolidated view of sales funnels and quota attainment.",
    results: [
      "Reduced manual data reconciliation time by 15% per week.",
      "Enabled early identification of underperforming branches, allowing for faster intervention.",
      "Standardized the reporting format across 10+ branches."
    ],
    tools: ["Excel Advanced", "VBA", "PivotTables"],
    impact: "Reduced manual reconciliation time by 15% and enabled early identification of performance anomalies.",
    styles: {
      strip: "bg-emerald-500",
      impactBox: "border-emerald-500 bg-emerald-50",
      text: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  },
  {
    id: 5,
    title: "AIA International Finance Research",
    category: "Quantitative Analysis", 
    summary: "Modeled HK offshore market dynamics by regressing macro-indicators like RMB index.",
    context: "Academic and business stakeholders required empirical research investigating the complex factors driving the liquidity and growth of the offshore RMB market in Hong Kong.",
    methodology: "1. Data Collection: Aggregated rigorous time-series macroeconomic data including historical exchange rates, the RMB index, and offshore trade volumes.\n2. Econometric Modeling: Conducted Granger Causality tests to determine the directional flow and predictive relationships between variables.\n3. Regression Analysis: Applied multivariate regression models to mathematically quantify the impact of exchange rate volatility and policy liberalization on offshore market liquidity.",
    results: [
      "Substantiated a positive correlation between policy liberalization and market development.",
      "Identified lag effects in how exchange rate volatility impacts offshore deposits.",
      "Published findings in an internal research paper."
    ],
    tools: ["Regression Analysis", "Econometrics", "Macro-indicators"],
    impact: "Substantiated the correlation between RMB internationalization and market development.",
    styles: {
      strip: "bg-slate-500",
      impactBox: "border-slate-500 bg-slate-50",
      text: "text-slate-600",
      bg: "bg-slate-50"
    }
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "M.S. in Business Analytics & AI",
    school: "Johns Hopkins Carey Business School",
    period: "Expected Aug 2026",
    location: "Washington DC, USA",
    desc: "Courses: Database Management (SQL), Data Visualization, Python for Data Analysis, Statistical Analysis"
  },
  {
    id: 2,
    degree: "Dual Bachelor's Degree",
    school: "SUIBE & Douglas College",
    period: "Sept 2021 - Jun 2025",
    location: "Shanghai, China",
    desc: "Shanghai University of International Business and Economics (BE) & Douglas College (BBA)"
  },
  {
    id: 3,
    degree: "Minor in Law",
    school: "FDU & SUIBE",
    period: "Sept 2022 - Mar 2024",
    location: "Shanghai, China",
    desc: "Completed minor coursework in Law both in Fudan University and Shanghai University of International Business and Economics alongside major studies."
  }
];

const EXPERIENCE = [
  {
    id: 1,
    role: "Data Specialist",
    company: "Deloitte IBond (Shanghai) Co., Ltd.",
    period: "Mar 2025 - May 2025",
    location: "Shanghai, China",
    desc: "Spearheaded an AI credit model reducing rating deviation by 50%. Led a dynamic SQL/Python pipeline project boosting processing efficiency by 30%. Scripted algorithms to parse millions of judicial records, uncovering a 15% coverage gap."
  },
  {
    id: 2,
    role: "Industry Researcher",
    company: "China Fortune Securities Co., Ltd.",
    period: "Jul 2023 - Oct 2023",
    location: "Shanghai, China",
    desc: "Authored 15 equity research reports on semiconductor sectors. Assessed 5-year market datasets to identify trends and performed DCF/PE valuation modeling for major electronics industry leaders."
  },
  {
    id: 3,
    role: "Sales Operations Analyst", 
    company: "Shanghai Rural Commercial Bank",
    period: "Aug 2022 - Sep 2022",
    location: "Shanghai, China",
    desc: "Built Excel-based daily performance dashboards for real-time insights. Diagnosed sales funnel bottlenecks and implemented SOPs boosting inter-departmental efficiency by 15%."
  }
];

const SKILLS = [
  { name: "Python / R", level: 95, icon: Code2 },
  { name: "SQL / SAS", level: 85, icon: Database },
  { name: "Tableau / BI", level: 85, icon: BarChart3 },
  { name: "Azure Machine Learning", level: 80, icon: Brain },
  { name: "Financial Modeling", level: 95, icon: LineChart },
  { name: "Excel (VBA)", level: 90, icon: Layers },
];

const GALLERY_PHOTOS = [
  {
    id: 1,
    date: "Jun 2021",
    title: "Shanghai High School",
    location: "Shanghai, China",
    url: "/images/G_SHS.jpg" 
  },
  {
    id: 2,
    date: "Aug 2021",
    title: "Qinghai-Gansu Grand Ring Road Self-driving Tour",
    location: "Qinghai & Gansu, China",
    url: "/images/G_Travel_Qinggan.jpg" 
  },
  {
    id: 3,
    date: "Sep 2021",
    title: "Youth League Committee of SUIBE",
    location: "Shanghai, China",
    url: "/images/G_SUIBE_youth.jpg" 
  },
  {
    id: 4,
    date: "Jan 2022",
    title: "Musical: The Bad Kids",
    location: "Shanghai, China",
    url: "/images/G_Musical_BadKids.jpg" 
  },
  {
    id: 5,
    date: "Jul 2022",
    title: "Summer Field Research",
    location: "Shanghai, China",
    url: "/images/G_SUIBE_SummerFieldResearch.png" 
  },
  {
    id: 6,
    date: "Sep 2022",
    title: "SRCB Internship",
    location: "Shanghai, China",
    url: "/images/G_SRCB.jpg" 
  },
  {
    id: 7,
    date: "May 2023",
    title: "Holiday Travel - Jeju Island",
    location: "Jeju, South Korea",
    url: "/images/G_Travel_Jeju.jpg" 
  },
  {
    id: 8,
    date: "May 2023",
    title: "Student Leadership Council - SUIBE",
    location: "Shanghai, China",
    url: "/images/G_SUIBE_StudentLeadershipCouncil.jpg" 
  },
  {
    id: 9,
    date: "Jul 2023",
    title: "Vacation Travel - Tibet",
    location: "Tibet, China",
    url: "/images/G_Travel_Tibet.jpeg" 
  },
  {
    id: 10,
    date: "Mar 2024",
    title: "Fudan Univ. (Minor Law)",
    location: "Shanghai, China",
    url: "/images/G_FDU.jpeg" 
  },
  {
    id: 11,
    date: "Apr 2024",
    title: "Concert - GEM",
    location: "Changsha, China",
    url: "/images/G_Concert_GEM.jpg" 
  },
  {
    id: 12,
    date: "Apr 2024",
    title: "Travel - Changsha",
    location: "Changsha, China",
    url: "/images/G_Travel_Changsha.jpg" 
  },
  {
    id: 13,
    date: "May 2024",
    title: "Concert - GEM",
    location: "Shanghai, China",
    url: "/images/G_Concert_GEM2.jpg" 
  },
  {
    id: 13,
    date: "Mar 2025",
    title: "Concert - Chen Chusheng",
    location: "Hangzhou, China",
    url: "/images/G_Concert_ChenChusheng.jpg" 
  },
  {
    id: 14,
    date: "May 2025",
    title: "Holiday Travel - Zhoushan",
    location: "Zhoushan, China",
    url: "/images/G_Travel_Zhoushan.jpg" 
  },
  {
    id: 15,
    date: "Jun 2025",
    title: "Dual Bachelor Graduation",
    location: "SUIBE & Douglas College",
    url: "/images/G_SUIBE_grad.jpg" 
  },
  {
    id: 16,
    date: "Jun 2025",
    title: "Graduation Travel - Chongqing",
    location: "Chongqing, China",
    url: "/images/G_Travel_Chongqing_grad.jpg" 
  },
  {
    id: 17,
    date: "Aug 2025",
    title: "Connecting Flight - Dubai",
    location: "Dubai, UAE",
    url: "/images/G_Flight_Dubai.jpg" 
  },
  {
    id: 18,
    date: "Aug 2026",
    title: "JHU - Master's Journey",
    location: "Washington DC, USA",
    url: "/images/G_JHU_start.jpg" 
  },
  {
    id: 19,
    date: "Nov 2026",
    title: "Travel - New York City",
    location: "New York, USA",
    url: "/images/G_Travel_NYC.jpg" 
  },
  {
    id: 20,
    date: "Dec 2026",
    title: "Travel - Philadelphia",
    location: "Philadelphia, Pennsylvania, USA",
    url: "/images/G_Travel_Philadelphia.jpg" 
  },
  {
    id: 21,
    date: "Jan 2026",
    title: "Travel - Tampa",
    location: "Tampa, Florida, USA",
    url: "/images/G_Travel_Tampa.jpg" 
  }
];

// --- COMPONENTS ---

// Full-Page Project Detail View
const ProjectDetailView = ({ project, onBack }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Header / Navigation */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <div className="p-1 rounded-full group-hover:bg-slate-200/50 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Projects</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${project.styles.strip.replace('bg-', 'text-').replace('text-', 'bg-opacity-10 bg-') + ' bg-opacity-10'}`}>
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* Title Area */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className={`text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight`}>
            {project.title}
          </h1>
        </div>

        {/* 3. Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Context, Methodology, Results, Gallery */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Context */}
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className={project.styles.text} size={24} />
                Context & Objective
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {project.context || project.details || project.summary}
              </p>
            </section>

            {/* Methodology */}
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className={project.styles.text} size={24} />
                Methodology
              </h3>
              <div className="text-slate-600 leading-relaxed text-lg space-y-3">
                {project.methodology 
                  ? project.methodology.split('\n').map((para: string, idx: number) => (
                      <p key={idx}>{para}</p>
                    ))
                  : <p>Details on the analytical approach and technical implementation are available in the repository.</p>
                }
              </div>
            </section>

            {/* Key Outcomes Box (Moved to Left) */}
            <section className={`p-8 rounded-2xl ${project.styles.bg} bg-opacity-40 border border-slate-100 shadow-sm`}>
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Award className={project.styles.text} size={24} />
                Key Results
              </h3>
              <ul className="space-y-4">
                {project.results && project.results.length > 0 ? (
                  project.results.map((result: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${project.styles.text}`} />
                      <span className="text-slate-700 text-base leading-relaxed">{result}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start gap-4">
                     <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${project.styles.text}`} />
                     <span className="text-slate-700 text-base leading-relaxed">{project.impact}</span>
                  </li>
                )}
              </ul>
            </section>

             {/* Visuals / Gallery (Single Image per Row) */}
             <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <ImageIcon className={project.styles.text} size={24} />
                Project Gallery
              </h3>
              <div className="w-full aspect-[16/9] bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 overflow-hidden">
                 <ImageIcon size={48} className="opacity-20 mb-3" />
                 <span className="text-sm font-medium">Visual Presentation (Coming Soon)</span>
              </div>
            </section>

          </div>

          {/* Right Column: Tech Stack & Resources (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Tech Stack (Moved to Right Top) */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Terminal className={project.styles.text} size={20} />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string) => (
                    <span key={tool} className="text-sm bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Download className={project.styles.text} size={20} />
                  Resources
                </h3>
                
                <div className="space-y-4">
                  {/* GitHub Button */}
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all ${project.styles.strip}`}
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  ) : (
                    <button disabled className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-400 rounded-lg border border-slate-200 cursor-not-allowed">
                      <Github size={18} />
                      GitHub (Unavailable)
                    </button>
                  )}

                  {/* PDF Report Button */}
                  {project.pdfUrl ? (
                    <a 
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg border border-slate-200 font-medium transition-colors shadow-sm"
                    >
                      <FileText size={18} className="text-red-500" />
                      Project Report (PDF)
                    </a>
                  ) : (
                    <button disabled className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-400 rounded-lg border border-slate-200 cursor-not-allowed">
                      <FileText size={18} />
                      Report (Unavailable)
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Bottom Footer Area */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center pb-12">
          <p className="text-slate-500 mb-4">Interested in discussing this project?</p>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 font-bold hover:underline text-lg">
            Contact me at {PERSONAL_INFO.email}
          </a>
        </div>

      </div>
    </div>
  );
};

// Project Card (Cleaned up, Tech Stack ONLY)
const ProjectCard = ({ project, onClick }: any) => (
  <div 
    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in-95 duration-300 hover:-translate-y-1 relative group cursor-pointer"
    onClick={() => onClick(project)}
  >
    {/* Colored Header Strip */}
    <div className={`h-2 w-full ${project.styles.strip}`}></div>

    {/* Top Right Expand Icon */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       <div className="bg-slate-900/5 hover:bg-slate-900/10 text-slate-500 p-1.5 rounded-lg backdrop-blur-sm">
         <Maximize2 size={16} />
       </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      {/* Header: Clean Gray Category */}
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
          {project.category}
        </span>
      </div>
      
      {/* Title & Summary */}
      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors pr-6">{project.title}</h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{project.summary}</p>
      
      <div className="mt-auto pt-4 border-t border-slate-50">
        {/* Tools Section ONLY */}
        <div>
          <h4 className="text-[10px] uppercase tracking-wide text-slate-400 font-bold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool: string) => (
              <span key={tool} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100 font-medium">
                {tool}
              </span>
            ))}
            {project.tools.length > 4 && (
               <span className="text-[10px] text-slate-400 px-1 py-1">+{project.tools.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkillModalContent = ({ skill, onClose }: any) => {
  if (!skill) return null;
  const Icon = skill.icon;
  
  const colorMap: any = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-800' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-800' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-800' },
  };
  const theme = colorMap[skill.color];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className={`p-6 border-b border-slate-100 flex justify-between items-start ${theme.bg}`}>
          <div className="flex gap-4">
            <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${theme.text}`}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{skill.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{skill.shortDesc}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shadow-sm">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          <div className="mb-8">
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
              <Award className="text-amber-500" size={20} /> Certifications & Tools
            </h4>
            <div className="grid gap-3">
              {skill.certifications.map((cert: any, idx: number) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 text-sm">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 border border-slate-200 px-2 py-0.5 rounded">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
              <BookOpen className={theme.text} size={20} /> Academic Coursework
            </h4>
            <div className="space-y-3">
              {skill.coursework.map((course: any, idx: number) => (
                <div key={idx} className="group p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-slate-900">{course.name}</h5>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${theme.badge} border ${theme.border}`}>
                      Grade: {course.grade}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.stack.map((tech: string) => (
                      <span key={tech} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isOpen ? 'bg-blue-100 text-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
        <Mail size={16} /> <span>Get in Touch</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-800">Contact Options</h3>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={14} /></button>
          </div>
          <div className="space-y-2">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 group transition-colors border border-transparent hover:border-blue-100">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Send size={16} /></div>
              <div className="flex flex-col"><span className="text-xs text-slate-500 font-medium">Email Me</span><span className="text-sm text-slate-800 font-bold">{PERSONAL_INFO.email}</span></div>
            </a>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 group transition-colors border border-transparent hover:border-blue-100">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Linkedin size={16} /></div>
              <div className="flex flex-col"><span className="text-xs text-slate-500 font-medium">LinkedIn</span><span className="text-sm text-slate-800 font-bold">Connect Profile</span></div>
            </a>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 group transition-colors border border-transparent hover:border-blue-100">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Github size={16} /></div>
              <div className="flex flex-col"><span className="text-xs text-slate-500 font-medium">GitHub</span><span className="text-sm text-slate-800 font-bold">Check Code</span></div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillBar = ({ name, level, icon: Icon }: any) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2 text-slate-700 font-medium"><Icon size={16} className="text-blue-600" />{name}</div>
      <span className="text-sm text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const NavItem = ({ section, activeSection, onClick, label, icon: Icon }: any) => (
  <button onClick={() => onClick(section)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${activeSection === section ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
    <Icon size={16} />
    <span className="hidden md:inline">{label}</span>
  </button>
);

const Gallery = () => {
  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-end mb-4 px-1">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Calendar size={18} className="text-blue-600" /> Life & Academic Journey</h3>
        <span className="text-xs text-slate-400">Scroll to explore &rarr;</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-6 snap-x cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {GALLERY_PHOTOS.map((photo) => (
          <div key={photo.id} className="snap-center shrink-0 w-64 md:w-72 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 w-full rounded-lg overflow-hidden bg-slate-100 mb-3 relative group">
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-medium">{photo.date}</div>
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">{photo.title}</h4>
            <div className="flex items-center gap-1 text-slate-500 text-xs"><MapPin size={10} />{photo.location}</div>
          </div>
        ))}
        <div className="w-2 shrink-0"></div>
      </div>
    </div>
  );
}

const ProjectFilter = ({ activeCategory, onFilter }: any) => {
  const categories = ["All", "AI & Automation", "Quantitative Analysis", "Business Intelligence", "Risk Management"];
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeCategory === cat 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projectCategory, setProjectCategory] = useState("All");

  const filteredProjects = projectCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectCategory || (projectCategory === "Risk Management" && p.category === "Financial Modeling"));

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section className="relative bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Database size={300} /></div>
              <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6"><Terminal size={12} /><span>Open to Work</span></div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    Driving Decisions with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Data & Business Analytics
                    </span>.
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">Hi, I'm <strong>{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.tagline}<br className="hidden md:block" />{PERSONAL_INFO.title}</p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <button onClick={() => setActiveSection('projects')} className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200">View Projects <ChevronRight size={18} /></button>
                    <a 
                      href={PERSONAL_INFO.resumeUrl} 
                      download="Lihong_Gao_Data_Analyst.pdf"
                      className="w-full sm:w-auto bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={18} /> Resume / CV
                    </a>
                  </div>
                </div>
                <div 
                  className="shrink-0 relative group cursor-pointer"
                  onClick={() => setActiveSection('about')}
                  title="View About Me"
                >
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] opacity-20 blur group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-[1.8rem] overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={PERSONAL_INFO.heroPhotoUrl} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-4">
                 <h2 className="text-xl font-bold text-slate-900">Core Competencies</h2>
                 <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full font-medium animate-pulse">Click cards for details</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CORE_SKILLS_DETAILS.map((skill) => {
                  const Icon = skill.icon;
                  const styleMap: any = {
                    blue: { bg: 'bg-white', iconBg: 'bg-blue-100', iconText: 'text-blue-600', hoverBorder: 'hover:border-blue-300' },
                    purple: { bg: 'bg-white', iconBg: 'bg-purple-100', iconText: 'text-purple-600', hoverBorder: 'hover:border-purple-300' },
                    indigo: { bg: 'bg-white', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', hoverBorder: 'hover:border-indigo-300' },
                  };
                  const style = styleMap[skill.color];
                  return (
                    <div key={skill.id} onClick={() => setSelectedSkill(skill)} className={`${style.bg} p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 cursor-pointer group ${style.hoverBorder} hover:shadow-lg hover:-translate-y-1 relative overflow-hidden`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className={`${style.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center ${style.iconText} transition-transform group-hover:scale-110 duration-300`}><Icon size={24} /></div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400"><ChevronRight size={20} /></div>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{skill.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">{skill.shortDesc}</p>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">{skill.certifications.length} Certs</span>
                         <span className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">{skill.coursework.length} Courses</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        );
      case 'projects':
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
              <p className="text-slate-500 text-lg mb-4">A comprehensive collection of my work in Analytics, Strategy, and Ops.</p>
              <ProjectFilter activeCategory={projectCategory} onFilter={setProjectCategory} />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredProjects.map(project => (
                 <ProjectCard 
                   key={project.id} 
                   project={project} 
                   onClick={(p: any) => setSelectedProject(p)} 
                 />
               ))}
             </div>
          </div>
        );
      case 'about':
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 space-y-8">
                <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><GraduationCap className="text-blue-600" /> Education</h2>
                  <div className="space-y-0">
                    {EDUCATION.map(edu => (
                      <div key={edu.id} className="relative border-l-2 border-slate-200 pl-8 pb-10 last:pb-0 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-100 group-hover:border-blue-400 transition-colors">
                           <div className="w-full h-full rounded-full bg-blue-600"></div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-bold text-lg text-slate-900">{edu.degree}</h3>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">{edu.period}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                           <p className="text-sm text-slate-500 font-bold">{edu.school}</p>
                           <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 sm:mt-0">
                             <MapPin size={12} />
                             <span>{edu.location}</span>
                           </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{edu.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Briefcase className="text-blue-600" /> Professional Experience</h2>
                  <div className="space-y-0">
                    {EXPERIENCE.map(exp => (
                      <div key={exp.id} className="relative border-l-2 border-slate-200 pl-8 pb-10 last:pb-0 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-100 group-hover:border-blue-400 transition-colors">
                           <div className="w-full h-full rounded-full bg-blue-600"></div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                          <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">{exp.period}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                           <p className="text-sm text-slate-500 font-bold">{exp.company}</p>
                           <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 sm:mt-0">
                             <MapPin size={12} />
                             <span>{exp.location}</span>
                           </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="space-y-6">
                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Technical Skills</h2>
                  <div className="space-y-1">
                    {SKILLS.map(skill => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </section>
                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                     <Feather className="text-blue-600" /> Beyond Data
                   </h2>
                   <p className="text-sm text-slate-500 mb-4">When I'm not analyzing data, I explore the world through literature and creative writing.</p>
                   <a 
                     href={PERSONAL_INFO.blogUrl}
                     target="_blank" 
                     rel="noreferrer"
                     className="block bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                   >
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <Coffee size={16} className="text-slate-400" />
                           <span className="font-bold text-slate-800 text-sm">Personal Blog (Chinese)</span>
                        </div>
                        <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                     </div>
                     <p className="text-xs text-slate-500 leading-relaxed">
                       A collection of my essays, book reviews, and literary thoughts hosted on Hexo.
                     </p>
                   </a>
                </section>
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white shadow-lg">
                  <div className="mb-4 text-blue-300"><MapPin size={24} /></div>
                  <h2 className="text-xl font-bold mb-2">Open to Relocation</h2>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Currently based in {PERSONAL_INFO.location}. Open to opportunities in Data Analysis, Credit Risk, or Strategy.</p>
                </section>
              </div>
            </div>
            <section className="bg-slate-50 border-t border-slate-200 pt-8">
               <Gallery />
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 pb-24 md:pb-0 relative">
      {/* Modals */}
      {selectedSkill && (<SkillModalContent skill={selectedSkill} onClose={() => setSelectedSkill(null)} />)}

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
            <img 
              src={PERSONAL_INFO.heroPhotoUrl} 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm"
            />
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <nav className="flex items-center gap-2">
            <NavItem section="home" activeSection={activeSection} onClick={setActiveSection} label="Home" icon={Layers} />
            <NavItem section="projects" activeSection={activeSection} onClick={setActiveSection} label="Projects" icon={Briefcase} />
            <NavItem section="about" activeSection={activeSection} onClick={setActiveSection} label="About" icon={Brain} />
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <ContactDropdown />
          </nav>
        </div>
      </header>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-2 flex justify-around md:hidden pb-safe safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button onClick={() => setActiveSection('home')} className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${activeSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-slate-400'}`}><Layers size={20} /><span className="text-[10px] font-medium">Home</span></button>
        <button onClick={() => setActiveSection('projects')} className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${activeSection === 'projects' ? 'text-blue-600 bg-blue-50' : 'text-slate-400'}`}><Briefcase size={20} /><span className="text-[10px] font-medium">Work</span></button>
        <button onClick={() => setActiveSection('about')} className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-colors ${activeSection === 'about' ? 'text-blue-600 bg-blue-50' : 'text-slate-400'}`}><Brain size={20} /><span className="text-[10px] font-medium">About</span></button>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {renderContent()}
      </main>
      {selectedProject && (<ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />)}
    </div>
  );
}