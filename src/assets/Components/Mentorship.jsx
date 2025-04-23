import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar,
  FaRegStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaFilter,
  FaSearch,
  FaSortAmountDown,
  FaBuilding,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaIndustry,
  FaUserGraduate,
  FaThumbsUp,
  FaExternalLinkAlt,
  FaBookmark,
  FaRegBookmark,
  FaBars,
  FaUserTie,
  FaCode,
  FaLocationArrow,
  FaRegClock,
  FaEnvelope,
  FaCheckCircle,
  FaQuestionCircle
} from 'react-icons/fa';

const Mentorship = () => {
  // State management
  const [filters, setFilters] = useState({
    expertise: [],
    duration: [],
    rating: [],
    category: [],
    topics: [],
    posted: ""
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [bookmarked, setBookmarked] = useState([]);
  const [activeView, setActiveView] = useState("all");
  const [loadingMore, setLoadingMore] = useState(false);
  const [expandedMentorship, setExpandedMentorship] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Toggle expanded mentorship details
  const toggleExpandMentorship = (id) => {
    setExpandedMentorship(expandedMentorship === id ? null : id);
  };

  // Toggle bookmark state
  const toggleBookmark = (id) => {
    setBookmarked((prev) => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Toggle filter panel on mobile
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType];
      return {
        ...prev,
        [filterType]: currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
  };

  // Change view (all, bookmarked)
  const changeView = (view) => {
    setActiveView(view);
  };

  // Reset all filters
  const clearFilters = () => {
    setFilters({
      expertise: [],
      duration: [],
      rating: [],
      category: [],
      topics: [],
      posted: ""
    });
    setSearchQuery("");
  };

  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  // Mentorship data
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setMentorships(generateMockMentorships());
    }, 800);
  }, []);

  // Generate mock mentorship data
  const generateMockMentorships = () => {
    return [
      {
        id: 1,
        title: "Software Development Mentorship",
        mentor: "Alex Johnson",
        company: "TechWave Solutions",
        logo: "https://logo.clearbit.com/microsoft.com",
        expertise: "Full Stack Development",
        experience: "10+ years",
        rating: 4.8,
        location: "Remote",
        duration: "3 months",
        commitment: "2 hours/week",
        description: "Get mentored by a senior developer with extensive experience in React, Node.js, and cloud technologies. This mentorship program is designed to help you advance your development skills and prepare for senior roles in tech companies.",
        topics: ["React", "Node.js", "AWS", "System Design"],
        price: "Free",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        postedDate: "2023-04-05"
      },
      {
        id: 2,
        title: "Data Science Career Guidance",
        mentor: "Sarah Miller",
        company: "DataSphere",
        logo: "https://logo.clearbit.com/google.com",
        expertise: "Machine Learning & AI",
        experience: "8 years",
        rating: 4.9,
        location: "Remote",
        duration: "Flexible",
        commitment: "3 hours/week",
        description: "Personalized guidance on breaking into data science, with focus on practical projects and interview preparation. Learn how to build an impressive portfolio and land your dream job in data science and AI.",
        topics: ["Python", "Machine Learning", "Data Visualization", "Statistics"],
        price: "$50/session",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        postedDate: "2023-04-10"
      },
      {
        id: 3,
        title: "UI/UX Design Mentorship",
        mentor: "David Chen",
        company: "InnovateCorp",
        logo: "https://logo.clearbit.com/adobe.com",
        expertise: "Product Design",
        experience: "12 years",
        rating: 4.7,
        location: "Remote",
        duration: "6 months",
        commitment: "2 hours/week",
        description: "Learn design thinking, user research, wireframing, and prototyping from an experienced product designer. This program includes portfolio reviews and mock interviews to prepare you for design roles.",
        topics: ["Figma", "User Research", "Design Systems", "Portfolio Building"],
        price: "$75/session",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        postedDate: "2023-04-15"
      },
      {
        id: 4,
        title: "Product Management Guidance",
        mentor: "Priya Sharma",
        company: "Quantum Dynamics",
        logo: "https://logo.clearbit.com/salesforce.com",
        expertise: "Product Strategy",
        experience: "9 years",
        rating: 4.6,
        location: "Remote",
        duration: "4 months",
        commitment: "2 hours/week",
        description: "Develop your product sense and learn how to manage technical products effectively. This mentorship covers product discovery, roadmapping, stakeholder management, and product metrics.",
        topics: ["Product Strategy", "Roadmapping", "User Stories", "Stakeholder Management"],
        price: "$85/session",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        postedDate: "2023-04-08"
      },
      {
        id: 5,
        title: "Cloud Architecture Mentorship",
        mentor: "Michael Chang",
        company: "Apex Systems",
        logo: "https://logo.clearbit.com/amazon.com",
        expertise: "Cloud Solutions",
        experience: "15 years",
        rating: 4.9,
        location: "Remote",
        duration: "2 months",
        commitment: "4 hours/week",
        description: "Master cloud architecture principles and best practices with guidance from a certified AWS/Azure architect. Learn how to design scalable, secure, and cost-effective cloud solutions.",
        topics: ["AWS", "Azure", "Microservices", "Serverless"],
        price: "$100/session",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        postedDate: "2023-03-25"
      },
      {
        id: 6,
        title: "Cybersecurity Career Coaching",
        mentor: "Elena Rodriguez",
        company: "NexusLink",
        logo: "https://logo.clearbit.com/cisco.com",
        expertise: "Information Security",
        experience: "11 years",
        rating: 4.7,
        location: "Remote",
        duration: "3 months",
        commitment: "2 hours/week",
        description: "Navigate the cybersecurity landscape and advance your career with guidance from a security professional. This program includes certification guidance, hands-on labs, and career planning.",
        topics: ["Ethical Hacking", "Security Compliance", "Threat Analysis", "Certifications"],
        price: "$90/session",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        postedDate: "2023-04-02"
      },
      {
        id: 7,
        title: "Mobile App Development Guidance",
        mentor: "Jason Williams",
        company: "FuturePath Inc.",
        logo: "https://logo.clearbit.com/apple.com",
        expertise: "iOS & Android Development",
        experience: "9 years",
        rating: 4.5,
        location: "Remote",
        duration: "Flexible",
        commitment: "3 hours/week",
        description: "Learn modern mobile development practices and principles to create engaging, performant applications. This mentorship will help you build a portfolio of mobile apps and prepare for technical interviews.",
        topics: ["Swift", "Kotlin", "React Native", "Flutter"],
        price: "$65/session",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        postedDate: "2023-04-12"
      },
      {
        id: 8,
        title: "Tech Leadership Mentorship",
        mentor: "Amara Washington",
        company: "BlueHorizon Group",
        logo: "https://logo.clearbit.com/ibm.com",
        expertise: "Engineering Leadership",
        experience: "14 years",
        rating: 4.9,
        location: "Remote",
        duration: "6 months",
        commitment: "2 hours/week",
        description: "Transition from individual contributor to engineering leader with guidance on team management, communication, and technical leadership. This program focuses on developing the skills needed for engineering management roles.",
        topics: ["Team Management", "Technical Leadership", "Project Planning", "Communication"],
        price: "$120/session",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        postedDate: "2023-03-30"
      }
    ];
  };

  // FAQ data
  const faqData = [
    {
      question: "How does mentorship work on the platform?",
      answer: "Our platform connects you with industry professionals who provide guidance, advice, and career development support. After selecting a mentor, you'll schedule sessions according to their availability, set goals together, and engage in regular meetings to track your progress."
    },
    {
      question: "What's the typical time commitment for a mentorship program?",
      answer: "Most mentorship programs require 1-3 hours per week including the direct mentorship session and any assignments or preparation work. The total duration varies by program, ranging from one-time sessions to relationships spanning several months."
    },
    {
      question: "Are these mentorship programs free?",
      answer: "We offer both free and paid mentorship options. Free programs are typically group-based or have limited time slots, while paid programs offer more personalized attention, longer durations, and additional resources from highly experienced professionals."
    },
    {
      question: "Can I switch mentors if it's not a good fit?",
      answer: "Yes, we understand that mentor-mentee relationships work best with good chemistry. If you feel your current match isn't working, you can request a change within the first two sessions with no penalty or additional charges."
    },
    {
      question: "What should I prepare before my first mentorship session?",
      answer: "Come prepared with specific goals you want to achieve, questions about the mentor's field, and any relevant materials about your work or projects. Being clear about your expectations and what you hope to gain will help make your sessions more productive."
    }
  ];

  // Filter configurations
  const filterConfig = {
    expertise: [
      "Full Stack Development", 
      "Machine Learning & AI", 
      "Product Design", 
      "Product Strategy",
      "Cloud Solutions",
      "Information Security",
      "Mobile Development",
      "Engineering Leadership"
    ],
    duration: ["1-3 months", "3-6 months", "6+ months", "Flexible"],
    rating: ["4.5+", "4.0+", "3.5+"],
    category: ["Technical", "Design", "Product", "Leadership", "Career"],
    posted: ["Last 24 hours", "Last 3 days", "Last week", "Last month"]
  };

  // Filter mentorships based on criteria
  const filteredMentorships = mentorships.filter(mentorship => {
    // Search query filter
    if (searchQuery && !mentorship.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !mentorship.mentor.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !mentorship.expertise.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !mentorship.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }

    // Bookmarked filter
    if (activeView === "bookmarked" && !bookmarked.includes(mentorship.id)) {
      return false;
    }

    // Other filters
    if (filters.expertise.length && !filters.expertise.includes(mentorship.expertise)) return false;
    if (filters.duration.length) {
      const durationMatch = filters.duration.some(d => {
        if (d === "1-3 months" && mentorship.duration.includes("1") || mentorship.duration.includes("2") || mentorship.duration.includes("3 months")) return true;
        if (d === "3-6 months" && (mentorship.duration.includes("4") || mentorship.duration.includes("5") || mentorship.duration.includes("6 months"))) return true;
        if (d === "6+ months" && parseInt(mentorship.duration) > 6) return true;
        if (d === "Flexible" && mentorship.duration.includes("Flexible")) return true;
        return false;
      });
      if (!durationMatch) return false;
    }
    
    if (filters.rating.length) {
      const ratingMatch = filters.rating.some(r => {
        const minRating = parseFloat(r.replace("+", ""));
        return mentorship.rating >= minRating;
      });
      if (!ratingMatch) return false;
    }
    
    // More filters can be added as needed

    return true;
  });

  // Sort mentorships based on criteria
  const sortedMentorships = [...filteredMentorships].sort((a, b) => {
    if (sort === "relevance") return 0;
    if (sort === "recent") return new Date(b.postedDate) - new Date(a.postedDate);
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "duration") {
      if (a.duration === "Flexible") return 1;
      if (b.duration === "Flexible") return -1;
      return parseInt(a.duration) - parseInt(b.duration);
    }
    return 0;
  });

  // Load more mentorships
  const loadMoreMentorships = () => {
    setLoadingMore(true);
    // Simulate loading more data
    setTimeout(() => {
      // In a real app, you'd fetch more data from an API
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 font-bold text-xl">Job Dhundo</span>
              </Link>
              
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/internships" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Internships</Link>
                <Link to="/mentorship" className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Mentorship</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Jobs</Link>
                <Link to="/practice" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Practice</Link>
                <Link to="/competitions" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Competitions</Link>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/business" 
                className="flex items-center gap-1 px-3 py-2 text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              >
                <FaBuilding className="h-4 w-4" />
                <span>For Business</span>
              </Link>
              <button className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300">
                Login
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md">
                Sign Up
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/internships" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Internships
              </Link>
              <Link to="/mentorship" className="block px-3 py-2 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md">
                Mentorship
              </Link>
              <Link to="/jobs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Jobs
              </Link>
              <Link to="/practice" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Practice
              </Link>
              <Link to="/competitions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Competitions
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Link to="/business" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                  For Business
                </Link>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                  Login
                </button>
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Mentor</h1>
            <p className="mt-2 text-gray-600">Connect with industry experts to accelerate your career growth</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button 
              className={`px-4 py-2 rounded-md font-medium ${
                activeView === "all" 
                  ? "bg-indigo-600 text-white" 
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
              onClick={() => changeView("all")}
            >
              All Mentorships
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium flex items-center ${
                activeView === "bookmarked" 
                  ? "bg-indigo-600 text-white" 
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
              onClick={() => changeView("bookmarked")}
            >
              <FaBookmark className="mr-2" />
              Bookmarked
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search mentors, topics, skills..."
              className="w-full p-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex items-center space-x-2">
              <button 
                className="flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                onClick={toggleFilters}
              >
                <FaFilter className="mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
              {(filters.expertise.length > 0 || 
                filters.duration.length > 0 || 
                filters.rating.length > 0 || 
                filters.category.length > 0 || 
                filters.posted.length > 0) && (
                <button 
                  className="text-sm text-gray-600 hover:text-gray-800"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select 
                className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="recent">Most Recent</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-6 border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Expertise Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Expertise</h3>
                  <div className="space-y-2">
                    {filterConfig.expertise.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`expertise-${option}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.expertise.includes(option)}
                          onChange={() => handleFilterChange("expertise", option)}
                        />
                        <label htmlFor={`expertise-${option}`} className="ml-2 text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Duration</h3>
                  <div className="space-y-2">
                    {filterConfig.duration.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`duration-${option}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.duration.includes(option)}
                          onChange={() => handleFilterChange("duration", option)}
                        />
                        <label htmlFor={`duration-${option}`} className="ml-2 text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Rating</h3>
                  <div className="space-y-2">
                    {filterConfig.rating.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${option}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.rating.includes(option)}
                          onChange={() => handleFilterChange("rating", option)}
                        />
                        <label htmlFor={`rating-${option}`} className="ml-2 text-gray-700 flex items-center">
                          {option} <FaStar className="text-yellow-400 ml-1" />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Category</h3>
                  <div className="space-y-2">
                    {filterConfig.category.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${option}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.category.includes(option)}
                          onChange={() => handleFilterChange("category", option)}
                        />
                        <label htmlFor={`category-${option}`} className="ml-2 text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Posted Filter */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Posted</h3>
                <div className="flex flex-wrap gap-2">
                  {filterConfig.posted.map((option) => (
                    <button
                      key={option}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.posted === option
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setFilters(prev => ({...prev, posted: prev.posted === option ? "" : option}))}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mentorship Listings */}
        <div className="space-y-6">
          {sortedMentorships.length > 0 ? (
            <>
              {sortedMentorships.map((mentorship) => (
                <div 
                  key={mentorship.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between">
                      <div className="flex">
                        <img 
                          src={mentorship.image} 
                          alt={mentorship.mentor} 
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900">{mentorship.title}</h2>
                          <div className="flex items-center mt-1">
                            <span className="text-indigo-600 font-medium">{mentorship.mentor}</span>
                            <span className="mx-2 text-gray-500">·</span>
                            <div className="flex items-center">
                              <img 
                                src={mentorship.logo} 
                                alt={mentorship.company} 
                                className="w-4 h-4 mr-1"
                              />
                              <span className="text-gray-600">{mentorship.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center text-yellow-400">
                              <FaStar />
                              <span className="ml-1 text-gray-700">{mentorship.rating}</span>
                            </div>
                            <span className="mx-2 text-gray-400">|</span>
                            <div className="flex items-center text-gray-600">
                              <FaMapMarkerAlt className="mr-1" />
                              {mentorship.location}
                            </div>
                            <span className="mx-2 text-gray-400">|</span>
                            <div className="flex items-center text-gray-600">
                              <FaCalendarAlt className="mr-1" />
                              {mentorship.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleBookmark(mentorship.id)}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        {bookmarked.includes(mentorship.id) ? (
                          <FaBookmark className="text-indigo-600" />
                        ) : (
                          <FaRegBookmark />
                        )}
                      </button>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {mentorship.topics.map((topic, index) => (
                          <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <p className={`text-gray-600 ${expandedMentorship === mentorship.id ? "" : "line-clamp-2"}`}>
                        {mentorship.description}
                      </p>
                      
                      {mentorship.description.length > 150 && (
                        <button 
                          className="text-indigo-600 text-sm mt-1 hover:text-indigo-800"
                          onClick={() => toggleExpandMentorship(mentorship.id)}
                        >
                          {expandedMentorship === mentorship.id ? "Show less" : "Read more"}
                        </button>
                      )}
                    </div>

                    <div className="mt-5 flex flex-wrap justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          <span>{mentorship.commitment}</span>
                        </div>
                        <div className="flex items-center">
                          <FaMoneyBillWave className="mr-1" />
                          <span>{mentorship.price}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-0">
                        <Link
                         to={"/jobsubmit"} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More Button */}
              {sortedMentorships.length >= 5 && (
                <div className="flex justify-center mt-8">
                  <button
                    className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-2 px-6 border border-indigo-600 rounded-md flex items-center"
                    onClick={loadMoreMentorships}
                    disabled={loadingMore}
                  >
                    {loadingMore ? "Loading..." : "Load more mentorships"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No mentorships found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
              {(filters.expertise.length > 0 || 
                filters.duration.length > 0 || 
                filters.rating.length > 0 || 
                filters.category.length > 0 || 
                filters.posted.length > 0 || 
                searchQuery) && (
                <button 
                  className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Newsletter Subscription Section */}
        <div className="bg-indigo-100 rounded-xl p-8 my-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Mentorship Insights</h2>
              <p className="text-gray-600">Subscribe to our newsletter to receive the latest mentorship opportunities, career advice, and expert tips.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-grow">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            
            {isSubscribed && (
              <div className="mt-4 text-center text-green-600 flex items-center justify-center">
                <FaCheckCircle className="mr-2" />
                <span>Thanks for subscribing! Check your inbox soon.</span>
              </div>
            )}
            
            <div className="mt-4 text-center text-gray-500 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-4 bg-white flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800 flex items-center">
                    <FaQuestionCircle className="text-indigo-500 mr-2" />
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Job Dhundo</h3>
              <p className="text-gray-400">Connecting talent with opportunities and mentorship for career growth.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/internships" className="text-gray-400 hover:text-white">Internships</Link></li>
                <li><Link to="/mentorship" className="text-gray-400 hover:text-white">Mentorship</Link></li>
                <li><Link to="/practice" className="text-gray-400 hover:text-white">Practice</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Prep</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Have questions or feedback? Reach out to us.</p>
              <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                Contact
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Job Dhundo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mentorship;