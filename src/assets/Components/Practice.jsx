import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar,
  FaRegStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFilter,
  FaSearch,
  FaBuilding,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaCode,
  FaExternalLinkAlt,
  FaBookmark,
  FaRegBookmark,
  FaBars,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
  FaClock,
  FaCheck
} from 'react-icons/fa';

const Practice = () => {
  // State variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [bookmarked, setBookmarked] = useState([]);
  const [activeView, setActiveView] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [activeTab, setActiveTab] = useState('problems');
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [filters, setFilters] = useState({
    topics: [],
    difficulty: [],
    companies: [],
    tags: []
  });
  
  // Mock practice problems data
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setProblems(generateMockProblems());
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
      topics: [],
      difficulty: [],
      companies: [],
      tags: []
    });
    setSearchQuery('');
  };

  // Change view type
  const changeView = (view) => {
    setActiveView(view);
  };

  // Change difficulty filter
  const changeDifficulty = (difficulty) => {
    setActiveDifficulty(difficulty);
  };

  // Toggle problem expansion
  const toggleExpandProblem = (id) => {
    setExpandedProblem(expandedProblem === id ? null : id);
  };

  // Generate mock problems data
  const generateMockProblems = () => {
    const topics = ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting', 'Searching', 'Math', 'Bit Manipulation'];
    const companies = ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple', 'Netflix', 'Adobe', 'Twitter'];
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const tags = ['Top 100', 'Frequently Asked', 'Algorithms', 'Data Structures', 'Recursion', 'Divide and Conquer'];
    
    return Array(30).fill().map((_, i) => {
      const id = i + 1;
      const difficultyIndex = i % 3;
      const difficulty = difficulties[difficultyIndex];
      const difficultyColor = difficultyIndex === 0 ? 'text-green-600' : difficultyIndex === 1 ? 'text-yellow-600' : 'text-red-600';
      const bgColor = difficultyIndex === 0 ? 'bg-green-100' : difficultyIndex === 1 ? 'bg-yellow-100' : 'bg-red-100';
      
      // Create a list of randomly selected topics for this problem
      const problemTopics = [];
      const numTopics = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numTopics; j++) {
        const topic = topics[Math.floor(Math.random() * topics.length)];
        if (!problemTopics.includes(topic)) {
          problemTopics.push(topic);
        }
      }
      
      // Create a list of randomly selected companies for this problem
      const problemCompanies = [];
      const numCompanies = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numCompanies; j++) {
        const company = companies[Math.floor(Math.random() * companies.length)];
        if (!problemCompanies.includes(company)) {
          problemCompanies.push(company);
        }
      }
      
      // Create a list of randomly selected tags for this problem
      const problemTags = [];
      const numTags = Math.floor(Math.random() * 2) + 1;
      for (let j = 0; j < numTags; j++) {
        const tag = tags[Math.floor(Math.random() * tags.length)];
        if (!problemTags.includes(tag)) {
          problemTags.push(tag);
        }
      }
      
      return {
        id,
        title: `Problem ${id}: ${['Two Sum', 'Reverse String', 'Linked List Cycle', 'Valid Parentheses', 'Maximum Subarray', 'Binary Tree Traversal', 'Merge Intervals', 'LRU Cache', 'Word Search', 'Palindrome Pairs'][i % 10]}`,
        difficulty,
        difficultyColor,
        bgColor,
        description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
        topics: problemTopics,
        companies: problemCompanies,
        tags: problemTags,
        solvedCount: Math.floor(Math.random() * 10000) + 1000,
        successRate: Math.floor(Math.random() * 40) + 60,
        hints: [
          'Consider using a hash map to store values you\'ve seen.',
          'Think about what you need to find for each element in the array.',
          'Can you solve this in a single pass?'
        ],
        examples: [
          {
            input: 'nums = [2,7,11,15], target = 9',
            output: '[0,1]',
            explanation: 'Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].'
          }
        ],
        constraints: [
          '2 <= nums.length <= 10^3',
          '-10^9 <= nums[i] <= 10^9',
          '-10^9 <= target <= 10^9',
          'Only one valid answer exists.'
        ]
      };
    });
  };

  // Filter problems based on criteria
  const filteredProblems = problems.filter(problem => {
    // Search query filter
    if (searchQuery && !problem.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Bookmarked filter
    if (activeView === 'bookmarked' && !bookmarked.includes(problem.id)) {
      return false;
    }

    // Difficulty filter
    if (activeDifficulty !== 'all' && problem.difficulty.toLowerCase() !== activeDifficulty.toLowerCase()) {
      return false;
    }

    // Topic filter
    if (filters.topics.length > 0 && !problem.topics.some(topic => filters.topics.includes(topic))) {
      return false;
    }

    // Company filter
    if (filters.companies.length > 0 && !problem.companies.some(company => filters.companies.includes(company))) {
      return false;
    }

    // Tags filter
    if (filters.tags.length > 0 && !problem.tags.some(tag => filters.tags.includes(tag))) {
      return false;
    }

    return true;
  });

  // Sort problems based on criteria
  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sort === 'popular') return b.solvedCount - a.solvedCount;
    if (sort === 'success') return b.successRate - a.successRate;
    if (sort === 'id') return a.id - b.id;
    return 0;
  });

  // Filter config for sidebar
  const filterConfig = {
    topics: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting', 'Searching'],
    companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple', 'Netflix'],
    tags: ['Top 100', 'Frequently Asked', 'Algorithms', 'Data Structures']
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
                <Link to="/mentorship" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Mentorship</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Jobs</Link>
                <Link to="/practice" className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Practice</Link>
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
              <Link to="/mentorship" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Mentorship
              </Link>
              <Link to="/jobs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Jobs
              </Link>
              <Link to="/practice" className="block px-3 py-2 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md">
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

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-white">Coding Practice</h1>
              <p className="mt-2 text-indigo-100">Improve your coding skills with our curated collection of programming problems</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-white">{problems.length}+</div>
                <div className="text-xs text-indigo-100">Practice Problems</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-indigo-100">Topics Covered</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-xs text-indigo-100">Difficulty Levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            <button 
              className={`py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'problems' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('problems')}
            >
              <div className="flex items-center">
                <FaCode className="mr-2" />
                Problems
              </div>
            </button>
            <button 
              className={`py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'contests' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('contests')}
            >
              <div className="flex items-center">
                <FaTrophy className="mr-2" />
                Contests
              </div>
            </button>
            <button 
              className={`py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'learn' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('learn')}
            >
              <div className="flex items-center">
                <FaGraduationCap className="mr-2" />
                Learn
              </div>
            </button>
            <button 
              className={`py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'discuss' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('discuss')}
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                Discuss
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {Object.values(filters).some(arr => arr.length > 0) && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* View filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">View</h4>
                <div className="flex space-x-2">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeView === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => changeView('all')}
                  >
                    All Problems
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeView === 'bookmarked' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => changeView('bookmarked')}
                  >
                    Bookmarked
                  </button>
                </div>
              </div>

              {/* Difficulty filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Difficulty</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeDifficulty === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => changeDifficulty('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeDifficulty === 'easy' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                    onClick={() => changeDifficulty('easy')}
                  >
                    Easy
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeDifficulty === 'medium' ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'}`}
                    onClick={() => changeDifficulty('medium')}
                  >
                    Medium
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md ${activeDifficulty === 'hard' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}
                    onClick={() => changeDifficulty('hard')}
                  >
                    Hard
                  </button>
                </div>
              </div>

              {/* Topics filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Topics</h4>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                  {filterConfig.topics.map((topic) => (
                    <div key={topic} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`topic-${topic}`}
                        className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        checked={filters.topics.includes(topic)}
                        onChange={() => handleFilterChange('topics', topic)}
                      />
                      <label htmlFor={`topic-${topic}`} className="ml-2 text-sm text-gray-700">
                        {topic}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Companies filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Companies</h4>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                  {filterConfig.companies.map((company) => (
                    <div key={company} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`company-${company}`}
                        className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        checked={filters.companies.includes(company)}
                        onChange={() => handleFilterChange('companies', company)}
                      />
                      <label htmlFor={`company-${company}`} className="ml-2 text-sm text-gray-700">
                        {company}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags filter */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Tags</h4>
                <div className="space-y-2">
                  {filterConfig.tags.map((tag) => (
                    <div key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`tag-${tag}`}
                        className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        checked={filters.tags.includes(tag)}
                        onChange={() => handleFilterChange('tags', tag)}
                      />
                      <label htmlFor={`tag-${tag}`} className="ml-2 text-sm text-gray-700">
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problems List */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search problems..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
                </div>

                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="popular">Most Solved</option>
                    <option value="success">Success Rate</option>
                    <option value="id">Problem ID</option>
                  </select>
                </div>
              </div>

              {/* Problems table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Difficulty
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Solved By
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Success
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedProblems.map((problem) => (
                      <React.Fragment key={problem.id}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {problem.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <button 
                              className="text-indigo-600 hover:text-indigo-900 text-left font-medium"
                              onClick={() => toggleExpandProblem(problem.id)}
                            >
                              {problem.title}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${problem.bgColor} ${problem.difficultyColor}`}>
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {problem.solvedCount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {problem.successRate}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-3">
                              <button 
                                onClick={() => toggleBookmark(problem.id)}
                                className="text-gray-400 hover:text-indigo-600 transition-colors"
                              >
                                {bookmarked.includes(problem.id) ? <FaBookmark className="text-indigo-600" /> : <FaRegBookmark />}
                              </button>
                              <Link to={`/practice/problem/${problem.id}`} className="text-indigo-600 hover:text-indigo-900">
                                Solve
                              </Link>
                            </div>
                          </td>
                        </tr>
                        
                        {/* Expanded problem details */}
                        {expandedProblem === problem.id && (
                          <tr>
                            <td colSpan="6" className="px-6 py-4 bg-gray-50">
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                                  <p className="text-gray-700">{problem.description}</p>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                                  {problem.examples.map((example, index) => (
                                    <div key={index} className="bg-gray-100 p-4 rounded-md space-y-2">
                                      <div className="text-sm">
                                        <span className="font-medium">Input:</span> {example.input}
                                      </div>
                                      <div className="text-sm">
                                        <span className="font-medium">Output:</span> {example.output}
                                      </div>
                                      {example.explanation && (
                                        <div className="text-sm">
                                          <span className="font-medium">Explanation:</span> {example.explanation}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Constraints:</h4>
                                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    {problem.constraints.map((constraint, index) => (
                                      <li key={index}>{constraint}</li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  {problem.companies.map((company) => (
                                    <span key={company} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                      {company}
                                    </span>
                                  ))}
                                  {problem.topics.map((topic) => (
                                    <span key={topic} className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                                
                                <div className="flex justify-end">
                                  <Link
                                    to={`/practice/problem/${problem.id}`}
                                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
                                  >
                                    Solve Problem
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Empty state */}
              {sortedProblems.length === 0 && (
                <div className="text-center py-12">
                  <FaLaptopCode className="h-12 w-12 text-indigo-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {sortedProblems.length > 0 && (
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">{sortedProblems.length}</span> of <span className="font-medium">{problems.length}</span> problems
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Resources section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                    <FaGraduationCap className="text-indigo-600 mr-2" />
                    Data Structures Fundamentals
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn the essential data structures used in coding interviews and competitive programming.
                  </p>
                  <Link to="/practice/learn/data-structures" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Start Learning
                    <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                    <FaCode className="text-indigo-600 mr-2" />
                    Algorithm Techniques
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Master common algorithmic patterns and techniques to solve complex problems efficiently.
                  </p>
                  <Link to="/practice/learn/algorithms" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Start Learning
                    <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                    <FaUsers className="text-indigo-600 mr-2" />
                    Interview Preparation
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Prepare for technical interviews with curated problem sets from top tech companies.
                  </p>
                  <Link to="/practice/learn/interview-prep" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Start Learning
                    <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                    <FaClock className="text-indigo-600 mr-2" />
                    Weekly Challenges
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Join our weekly coding challenges to test your skills and compete with other developers.
                  </p>
                  <Link to="/practice/challenges" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    View Challenges
                    <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Progress Section */}
      <div className="bg-indigo-700 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-10">Track Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Problems Solved</h3>
                <span className="text-3xl font-bold">0/300</span>
              </div>
              <div className="w-full bg-indigo-900 rounded-full h-2.5">
                <div className="bg-indigo-300 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-indigo-200">
                <span>Easy: 0/100</span>
                <span>Medium: 0/150</span>
                <span>Hard: 0/50</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Daily Streak</h3>
                <span className="text-3xl font-bold">0 days</span>
              </div>
              <div className="text-center py-4">
                <div className="grid grid-cols-7 gap-2">
                  {Array(7).fill().map((_, index) => (
                    <div key={index} className="w-full aspect-square rounded-md bg-indigo-900 flex items-center justify-center text-xs">
                      {['M','T','W','T','F','S','S'][index]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-center text-indigo-200 text-sm">
                Solve at least one problem daily to build your streak!
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Your Ranking</h3>
                <div className="flex flex-col items-end">
                  <span className="text-3xl font-bold">--</span>
                  <span className="text-xs text-indigo-200">Sign in to see ranking</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-32">
                <button className="px-6 py-2 bg-white text-indigo-700 font-medium rounded-md hover:bg-indigo-100 transition-colors duration-300">
                  Sign In to Track Progress
                </button>
                <p className="mt-4 text-sm text-indigo-200">
                  Compete with others and track your improvement
                </p>
              </div>
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

export default Practice;