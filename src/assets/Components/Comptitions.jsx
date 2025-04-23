import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaTrophy,
  FaFilter,
  FaSearch,
  FaBuilding,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaUserGraduate,
  FaExternalLinkAlt,
  FaBookmark,
  FaRegBookmark,
  FaBars,
  FaUsers,
  FaGlobeAmericas,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaMedal
} from 'react-icons/fa';

const Competitions = () => {
  // State variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('upcoming');
  const [bookmarked, setBookmarked] = useState([]);
  const [activeView, setActiveView] = useState('all');
  const [expandedCompetition, setExpandedCompetition] = useState(null);
  const [filters, setFilters] = useState({
    type: [],
    difficulty: [],
    platform: [],
    eligibility: []
  });
  
  // Mock competitions data
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setCompetitions(generateMockCompetitions());
    }, 800);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle filters visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Toggle bookmark state
  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  // Handle filter change
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

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      type: [],
      difficulty: [],
      platform: [],
      eligibility: []
    });
    setSearchQuery('');
  };

  // Change view type
  const changeView = (view) => {
    setActiveView(view);
  };

  // Toggle competition expansion
  const toggleExpandCompetition = (id) => {
    setExpandedCompetition(expandedCompetition === id ? null : id);
  };

  // Generate mock competitions data
  const generateMockCompetitions = () => {
    const types = ['Hackathon', 'Coding Challenge', 'Data Science', 'UI/UX Design', 'Project Competition'];
    const platforms = ['HackerRank', 'Kaggle', 'Devfolio', 'CodeChef', 'Topcoder', 'LeetCode', 'Unstop', 'HackerEarth'];
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    const eligibilities = ['Open for All', 'Students Only', 'Professionals', 'Teams Only'];
    const durations = ['24 Hours', '48 Hours', '1 Week', '2 Weeks', '1 Month'];
    
    const mockData = [];
    
    for (let i = 1; i <= 15; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const platform = platforms[Math.floor(Math.random() * platforms.length)];
      const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
      const eligibility = eligibilities[Math.floor(Math.random() * eligibilities.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      
      // Create random dates for registration and competition
      const today = new Date();
      const regDaysFromNow = Math.floor(Math.random() * 30);
      const regEndDate = new Date(today);
      regEndDate.setDate(today.getDate() + regDaysFromNow);
      
      const startDaysFromReg = Math.floor(Math.random() * 10) + 1;
      const startDate = new Date(regEndDate);
      startDate.setDate(regEndDate.getDate() + startDaysFromReg);
      
      const prizeAmount = ['₹50,000', '₹1,00,000', '₹2,50,000', '$5,000', '$10,000', 'Internship Opportunities'][Math.floor(Math.random() * 6)];
      
      mockData.push({
        id: i,
        title: `${type === 'Hackathon' ? 'Hack' : type === 'Coding Challenge' ? 'Code' : type === 'Data Science' ? 'Data' : type === 'UI/UX Design' ? 'Design' : 'Build'}${platform.substring(0, 4)} ${2023 + Math.floor(i/5)}`,
        type,
        platform,
        difficulty,
        eligibility,
        registrationEndDate: regEndDate,
        startDate,
        duration,
        teamSize: Math.floor(Math.random() * 3) + 1, // 1-3 team members
        participants: Math.floor(Math.random() * 1000) + 100,
        prizePool: prizeAmount,
        description: `This ${type.toLowerCase()} challenges participants to create innovative solutions for real-world problems. Join to showcase your skills, collaborate with peers, and win exciting prizes.`,
        image: `https://source.unsplash.com/random/300x200?technology=${i}`,
        logo: `https://logo.clearbit.com/${platform.toLowerCase()}.com`,
        skills: ['Problem Solving', 'Teamwork', 'Creativity', 'Technical Skills'].slice(0, Math.floor(Math.random() * 3) + 2),
        registrationUrl: '#',
        isVirtual: Math.random() > 0.3, // 70% chance of being virtual
        location: Math.random() > 0.3 ? 'Virtual' : ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai'][Math.floor(Math.random() * 5)]
      });
    }
    
    return mockData;
  };

  // Filter competitions based on criteria
  const filteredCompetitions = competitions.filter(competition => {
    // Search query filter
    if (searchQuery && !competition.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !competition.platform.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !competition.type.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Bookmarked filter
    if (activeView === 'bookmarked' && !bookmarked.includes(competition.id)) {
      return false;
    }

    // Type filter
    if (filters.type.length > 0 && !filters.type.includes(competition.type)) {
      return false;
    }

    // Difficulty filter
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(competition.difficulty)) {
      return false;
    }

    // Platform filter
    if (filters.platform.length > 0 && !filters.platform.includes(competition.platform)) {
      return false;
    }

    // Eligibility filter
    if (filters.eligibility.length > 0 && !filters.eligibility.includes(competition.eligibility)) {
      return false;
    }

    return true;
  });

  // Sort competitions based on criteria
  const sortedCompetitions = [...filteredCompetitions].sort((a, b) => {
    if (sort === 'upcoming') return a.startDate - b.startDate;
    if (sort === 'closing') return a.registrationEndDate - b.registrationEndDate;
    if (sort === 'popular') return b.participants - a.participants;
    if (sort === 'prize') {
      // Simple prize comparison (not precise for different currencies)
      const aValue = a.prizePool.replace(/[₹$,]/g, '');
      const bValue = b.prizePool.replace(/[₹$,]/g, '');
      return parseInt(bValue) - parseInt(aValue);
    }
    return 0;
  });

  // Filter configs
  const filterConfig = {
    type: ['Hackathon', 'Coding Challenge', 'Data Science', 'UI/UX Design', 'Project Competition'],
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    platform: ['HackerRank', 'Kaggle', 'Devfolio', 'CodeChef', 'Topcoder', 'LeetCode', 'Unstop', 'HackerEarth'],
    eligibility: ['Open for All', 'Students Only', 'Professionals', 'Teams Only']
  };

  // Format date function
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 font-bold text-xl">Job Dhundo</span>
              </Link>
              
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/internships" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Internships</Link>
                <Link to="/mentorships" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Mentorship</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Jobs</Link>
                <Link to="/practice" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Practice</Link>
                <Link to="/competitions" className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Competitions</Link>
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
              <Link to="/mentorships" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Mentorship
              </Link>
              <Link to="/jobs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Jobs
              </Link>
              <Link to="/practice" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Practice
              </Link>
              <Link to="/competitions" className="block px-3 py-2 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md">
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

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Showcase Your Skills in Competitions</h1>
              <p className="text-lg text-indigo-100 mb-6">
                Participate in hackathons, coding contests, and challenges to learn, build, and win exciting prizes
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-md hover:bg-indigo-50 transition-colors duration-300 shadow-md">
                  Find Competitions
                </button>
                <button className="px-6 py-3 bg-indigo-800 text-white font-bold rounded-md hover:bg-indigo-700 transition-colors duration-300 border border-indigo-300 shadow-md">
                  Host a Competition
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://source.unsplash.com/random/600x400?programming,competition" 
                alt="Competitions" 
                className="rounded-lg shadow-xl max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search competitions by name, platform, or type..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                className="flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                onClick={toggleFilters}
              >
                <FaFilter className="mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
              
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="upcoming">Upcoming First</option>
                <option value="closing">Registration Closing Soon</option>
                <option value="popular">Most Popular</option>
                <option value="prize">Highest Prize</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeView === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeView('all')}
            >
              All Competitions
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeView === 'bookmarked' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeView('bookmarked')}
            >
              Bookmarked
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Type Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Type</h3>
                  <div className="space-y-2">
                    {filterConfig.type.map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Difficulty</h3>
                  <div className="space-y-2">
                    {filterConfig.difficulty.map((level) => (
                      <div key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`difficulty-${level}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.difficulty.includes(level)}
                          onChange={() => handleFilterChange('difficulty', level)}
                        />
                        <label htmlFor={`difficulty-${level}`} className="ml-2 text-sm text-gray-700">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Platform</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {filterConfig.platform.map((platform) => (
                      <div key={platform} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`platform-${platform}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.platform.includes(platform)}
                          onChange={() => handleFilterChange('platform', platform)}
                        />
                        <label htmlFor={`platform-${platform}`} className="ml-2 text-sm text-gray-700">
                          {platform}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Eligibility</h3>
                  <div className="space-y-2">
                    {filterConfig.eligibility.map((eligibility) => (
                      <div key={eligibility} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`eligibility-${eligibility}`}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                          checked={filters.eligibility.includes(eligibility)}
                          onChange={() => handleFilterChange('eligibility', eligibility)}
                        />
                        <label htmlFor={`eligibility-${eligibility}`} className="ml-2 text-sm text-gray-700">
                          {eligibility}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              {Object.values(filters).some(array => array.length > 0) && (
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={clearFilters}
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Competitions Grid */}
        {sortedCompetitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCompetitions.map((competition) => (
              <div 
                key={competition.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={competition.image} 
                    alt={competition.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-0 left-0 p-2 bg-indigo-600 text-white text-xs font-bold rounded-br-lg">
                    {competition.type}
                  </div>
                  <button 
                    onClick={() => toggleBookmark(competition.id)}
                    className="absolute top-2 right-2 text-white hover:text-yellow-300 transition-colors duration-200"
                  >
                    {bookmarked.includes(competition.id) ? (
                      <FaBookmark className="h-5 w-5 text-yellow-300" />
                    ) : (
                      <FaRegBookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <img 
                      src={competition.logo} 
                      alt={competition.platform} 
                      className="h-6 w-6 mr-2 rounded-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${competition.platform}&background=random`;
                      }}
                    />
                    <span className="text-sm text-gray-500">{competition.platform}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{competition.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {competition.difficulty}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {competition.eligibility}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      <FaUsers className="mr-1" /> {competition.teamSize} {competition.teamSize === 1 ? 'Member' : 'Members'}
                    </span>
                  </div>
                  
                  <div className="mb-4 text-sm">
                    <div className="flex items-center mb-1">
                      <FaCalendarAlt className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">
                        Registration ends: <span className="font-medium">{formatDate(competition.registrationEndDate)}</span>
                      </span>
                    </div>
                    <div className="flex items-center mb-1">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">
                        Starts: <span className="font-medium">{formatDate(competition.startDate)}</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">
                        {competition.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FaTrophy className="text-yellow-500 mr-2" />
                      <span className="font-bold text-indigo-600">{competition.prizePool}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {competition.participants}+ participants
                    </div>
                  </div>
                  
                  <button 
                    className="w-full text-left text-indigo-600 text-sm font-medium hover:text-indigo-800 mb-4"
                    onClick={() => toggleExpandCompetition(competition.id)}
                  >
                    {expandedCompetition === competition.id ? 'Show Less' : 'View Details'}
                  </button>
                  
                  {/* Expanded Details */}
                  {expandedCompetition === competition.id && (
                    <div className="mt-2 mb-4 space-y-3">
                      <p className="text-gray-700 text-sm">{competition.description}</p>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Required Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {competition.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Duration:</h4>
                        <div className="text-gray-700 text-sm">{competition.duration}</div>
                      </div>
                    </div>
                  )}
                  
                  <a 
                    href={"/jobsubmit"}  
                    // target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No competitions found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Why Participate Section */}
      <div className="bg-indigo-50 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Participate in Competitions?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaLaptopCode className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhance Your Skills</h3>
              <p className="text-gray-600">
                Apply your knowledge to real-world problems and learn new technologies in practical scenarios.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaUsers className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expand Your Network</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals, potential mentors, and recruiters from top companies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaMedal className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Win Great Prizes</h3>
              <p className="text-gray-600">
                Earn recognition, cash rewards, internships, and job opportunities through your achievements.
              </p>
            </div>
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
                <li><Link to="/mentorships" className="text-gray-400 hover:text-white">Mentorship</Link></li>
                <li><Link to="/competitions" className="text-gray-400 hover:text-white">Competitions</Link></li>
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

export default Competitions;