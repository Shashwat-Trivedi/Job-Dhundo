import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBars, FaTimes, FaSearch, FaBriefcase, FaLaptopCode, FaTrophy, FaGraduationCap, FaHandshake, FaEllipsisH, FaBuilding } from 'react-icons/fa';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('internships');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search functionality
    // In a real application, this would be an API call
    setTimeout(() => {
      // Mock results based on the search query
      const mockResults = [];
      
      // Add results based on the active tab and search query
      const opportunityTitles = {
        internships: [
          "Software Development Intern",
          "Marketing Intern",
          "Data Science Intern",
          "Design Intern",
          "Business Analyst Intern",
          "Research Intern"
        ],
        mentorships: [
          "Career Growth Mentorship",
          "Technical Leadership Program",
          "Women in Tech Mentorship",
          "Startup Founder Mentorship",
          "Industry Expert Connect",
          "Management Skills Mentorship"
        ],
        jobs: [
          "Senior Software Engineer",
          "Product Manager",
          "UX/UI Designer",
          "Data Scientist",
          "DevOps Engineer",
          "Marketing Specialist"
        ],
        practice: [
          "Coding Challenge Series",
          "System Design Practice",
          "Algorithm Master Class",
          "Interview Prep Workshop",
          "Competitive Programming",
          "Mock Interviews"
        ],
        competitions: [
          "Hackathon: Build for Future",
          "AI Challenge 2025",
          "Design Sprint Competition",
          "Business Case Competition",
          "Coding Championship",
          "Innovation Contest"
        ],
        more: [
          "Tech Conference 2025",
          "Scholarship Program",
          "Startup Incubation",
          "Research Grant",
          "Fellowship Program",
          "Exchange Program"
        ]
      };
      
      // Filter results by search query
      Object.entries(opportunityTitles).forEach(([category, titles]) => {
        const filteredTitles = titles.filter(title => 
          title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        filteredTitles.forEach(title => {
          mockResults.push({
            title,
            category,
            company: companyNames[Math.floor(Math.random() * companyNames.length)]
          });
        });
      });
      
      // Add company results
      const filteredCompanies = companyNames.filter(company => 
        company.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      filteredCompanies.forEach(company => {
        mockResults.push({
          title: `${company} Careers`,
          category: 'company',
          company
        });
      });
      
      setSearchResults(mockResults);
      setIsSearching(false);
      
      // If search query matches a category exactly, switch to that tab
      const categoriesLower = ['internships', 'mentorships', 'jobs', 'practice', 'competitions', 'more'];
      if (categoriesLower.includes(searchQuery.toLowerCase())) {
        setActiveTab(searchQuery.toLowerCase());
      }
    }, 500);
  };

  // Career categories data with their respective colors
  const categories = [
    { 
      name: 'Internships', 
      color: '#9be6c1',
      icon: <FaGraduationCap className="h-10 w-10 mb-3" />,
      description: "Gain valuable industry experience with top companies",
      count: "5,400+ opportunities"
    },
    { 
      name: 'Mentorships', 
      color: '#fec192',
      icon: <FaHandshake className="h-10 w-10 mb-3" />,
      description: "Connect with industry experts for career guidance",
      count: "2,100+ mentors"
    },
    { 
      name: 'Jobs', 
      color: '#9bc9ff',
      icon: <FaBriefcase className="h-10 w-10 mb-3" />,
      description: "Find your dream job with leading organizations",
      count: "8,300+ openings"
    },
    { 
      name: 'Practice', 
      color: '#c8bbff',
      icon: <FaLaptopCode className="h-10 w-10 mb-3" />,
      description: "Sharpen your skills with practice problems",
      count: "10,000+ questions"
    },
    { 
      name: 'Competitions', 
      color: '#ffdd80',
      icon: <FaTrophy className="h-10 w-10 mb-3" />,
      description: "Showcase your talent and win exciting prizes",
      count: "500+ competitions"
    },
    { 
      name: 'More', 
      color: '#ffb1cc',
      icon: <FaEllipsisH className="h-10 w-10 mb-3" />,
      description: "Discover scholarships, workshops and more",
      count: "1,000+ opportunities"
    }
  ];

  // Random company names
  const companyNames = [
    'TechWave Solutions', 
    'InnovateCorp', 
    'Quantum Dynamics', 
    'FuturePath Inc.', 
    'DataSphere', 
    'NexusLink', 
    'Apex Systems', 
    'BlueHorizon Group',
    'GlobalMinds', 
    'DigitalPulse'
  ];

  // Random people data
  const people = [
    { name: 'Aditya Sharma', position: 'Software Engineer at TechWave' },
    { name: 'Priya Patel', position: 'Data Scientist at Quantum Dynamics' },
    { name: 'Raj Verma', position: 'Product Manager at InnovateCorp' },
    { name: 'Ananya Singh', position: 'UX Designer at FuturePath' },
    { name: 'Nikhil Kapoor', position: 'Full Stack Developer at NexusLink' },
    { name: 'Kavita Desai', position: 'ML Engineer at DataSphere' }
  ];

  // For resources section
  const resourceSections = [
    {
      title: "Resume Building",
      description: "Learn how to craft a professional resume that stands out to recruiters and hiring managers.",
      color: categories[0].color
    },
    {
      title: "Interview Preparation",
      description: "Master the art of interviewing with our comprehensive guides and mock interview sessions.",
      color: categories[1].color
    },
    {
      title: "Technical Skills",
      description: "Enhance your technical skills with our curated learning paths and practice exercises.",
      color: categories[2].color
    },
    {
      title: "Career Path Guidance",
      description: "Explore various career paths and find the right fit for your skills and interests.",
      color: categories[3].color
    },
    {
      title: "Networking Strategy",
      description: "Build a strong professional network to unlock hidden job opportunities and collaborations.",
      color: categories[4].color
    },
    {
      title: "Industry Insights",
      description: "Stay updated with the latest trends and developments in your industry of interest.",
      color: categories[5].color
    }
  ];

  // Get category color by index (will cycle through the colors)
  const getCategoryColor = (index) => {
    return categories[index % categories.length].color;
  };

  // Get a lighter version of the color for cards background
  const getLighterColor = (color, opacity = 0.2) => {
    // Convert hex to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/placeholder-logo.png" alt="Job Dhundo" />
              </Link>
              
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link to="/internships" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Internships</Link>
                <Link to="/mentorships" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Mentorships</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Jobs</Link>
                <Link to="/practice" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Practice</Link>
                <Link to="/competitions" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Competitions</Link>
                <Link to="/more" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300">More</Link>
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
              <Link 
                to="/business" 
                className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
               
                <span>SignUp
                </span>
              </Link>
              <Link 
                to="/business" 
               className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
               
                <span>SignIn</span>
              </Link>
           
            </div>
            

      



            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
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
              <Link to="/internships" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                Internships
              </Link>
              <Link to="/mentorships" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                Mentorships
              </Link>
              <Link to="/jobs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                Jobs
              </Link>
              <Link to="/practice" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                Practice
              </Link>
              <Link to="/competitions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                Competitions
              </Link>
              <Link to="/more" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                More
              </Link>
              <Link to="/business" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <FaBuilding className="h-4 w-4" />
                  <span>For Business</span>
                </div>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 px-4">
                <button className="w-full px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 transform active:scale-95">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md active:scale-95">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Unlock Your Career</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            
            <div className="mt-8 max-w-lg mx-auto relative">
              <form onSubmit={handleSearch}>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    className="w-full h-12 pl-4 pr-10 text-sm bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Search opportunities, companies, courses..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button 
                    type="submit"
                    className="h-12 px-6 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
                  >
                    {isSearching ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <FaSearch className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>
              
              {/* Search Results */}
              {searchResults.length > 0 && searchQuery && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                  <div className="py-2">
                    <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Results</h3>
                    {searchResults.map((result, index) => (
                      <Link 
                        key={index} 
                        to={`/${result.category}/${encodeURIComponent(result.title)}`}
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors duration-200"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                            <div 
                              className="h-full w-full flex items-center justify-center"
                              style={{ backgroundColor: getLighterColor(getCategoryColor(index), 0.3) }}
                            >
                              {result.category === 'company' ? (
                                <FaBuilding className="h-4 w-4 text-gray-700" />
                              ) : (
                                <FaSearch className="h-4 w-4 text-gray-700" />
                              )}
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{result.title}</p>
                            <p className="text-xs text-gray-500">
                              {result.category === 'company' ? 'Company' : result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                              {result.category !== 'company' && ` • ${result.company}`}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12">
            {categories.map((category, index) => (
              <Link to={`/${category.name.toLowerCase()}`} key={index}>
                <div 
                  style={{ backgroundColor: category.color }} 
                  className="rounded-lg shadow-md p-6 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:-translate-y-1 text-center"
                >
                  <div className="text-gray-900">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-800">{category.description}</p>
                  <div className="mt-2 text-xs font-medium bg-white bg-opacity-50 px-2 py-1 rounded-full">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-x-6 sm:gap-x-8 justify-center max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 animate-pulse">500+</p>
              <p className="text-sm text-gray-500">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 animate-pulse">10,000+</p>
              <p className="text-sm text-gray-500">Opportunities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 animate-pulse">1M+</p>
              <p className="text-sm text-gray-500">Registered Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-gray-200">
            <div className="flex space-x-8 -mb-px overflow-x-auto">
              {['internships', 'mentorships', 'jobs', 'practice', 'competitions', 'more'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array(6).fill().map((_, index) => {
              const currentCategoryIndex = categories.findIndex(cat => 
                cat.name.toLowerCase() === activeTab);
              const categoryColor = categories[currentCategoryIndex >= 0 ? currentCategoryIndex : 0].color;
              const currentCategory = categories[currentCategoryIndex >= 0 ? currentCategoryIndex : 0];
              const company = companyNames[index % companyNames.length];
              
              // Generate random job titles based on category
              const opportunityTitles = {
                internships: [
                  "Software Development Intern",
                  "Marketing Intern",
                  "Data Science Intern",
                  "Design Intern",
                  "Business Analyst Intern",
                  "Research Intern"
                ],
                mentorships: [
                  "Career Growth Mentorship",
                  "Technical Leadership Program",
                  "Women in Tech Mentorship",
                  "Startup Founder Mentorship",
                  "Industry Expert Connect",
                  "Management Skills Mentorship"
                ],
                jobs: [
                  "Senior Software Engineer",
                  "Product Manager",
                  "UX/UI Designer",
                  "Data Scientist",
                  "DevOps Engineer",
                  "Marketing Specialist"
                ],
                practice: [
                  "Coding Challenge Series",
                  "System Design Practice",
                  "Algorithm Master Class",
                  "Interview Prep Workshop",
                  "Competitive Programming",
                  "Mock Interviews"
                ],
                competitions: [
                  "Hackathon: Build for Future",
                  "AI Challenge 2025",
                  "Design Sprint Competition",
                  "Business Case Competition",
                  "Coding Championship",
                  "Innovation Contest"
                ],
                more: [
                  "Tech Conference 2025",
                  "Scholarship Program",
                  "Startup Incubation",
                  "Research Grant",
                  "Fellowship Program",
                  "Exchange Program"
                ]
              };
              
              const titles = opportunityTitles[activeTab] || opportunityTitles.internships;
              const title = titles[index % titles.length];
              
              // Location and deadline
              const locations = ["Remote", "Bangalore", "Mumbai", "Delhi", "Hybrid", "Pune"];
              const location = locations[index % locations.length];
              
              // Random dates for deadlines
              const randomMonth = Math.floor(Math.random() * 12) + 1;
              const randomDay = Math.floor(Math.random() * 28) + 1;
              const deadline = `${randomDay < 10 ? '0' + randomDay : randomDay}/${randomMonth < 10 ? '0' + randomMonth : randomMonth}/2025`;
              
              // More reliable image sources based on category
              const getImageForCard = () => {
                // Reliable stock images that match the categories
                const categoryImages = {
                  internships: [
                    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ],
                  mentorships: [
                    "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ],
                  jobs: [
                    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ],
                  practice: [
                    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ],
                  competitions: [
                    "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ],
                  more: [
                    "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://images.pexels.com/photos/6325949/pexels-photo-6325949.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ]
                };
                
                const images = categoryImages[activeTab] || categoryImages.internships;
                return images[index % images.length];
              };
              
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderTop: `4px solid ${categoryColor}` }}
                >
                  <div className="h-48 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={getImageForCard()}
                      alt={`${activeTab} opportunity`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback to a solid color with text if image fails
                        e.target.parentNode.innerHTML = `
                          <div class="h-full w-full flex items-center justify-center p-4 text-center" 
                               style="background-color: ${getLighterColor(categoryColor, 0.3)}">
                            <span class="font-medium" style="color: ${categoryColor.replace('ff', '99')}">
                              ${title}
                            </span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div 
                      className="inline-block px-2 py-1 mb-3 text-xs font-semibold rounded-full"
                      style={{ 
                        backgroundColor: getLighterColor(categoryColor, 0.3),
                        color: categoryColor.replace('ff', '99') 
                      }}
                    >
                      {activeTab === "jobs" ? "Featured Job" : 
                       activeTab === "internships" ? "Top Internship" : 
                       activeTab === "competitions" ? "Hot Competition" :
                       "Featured"}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{company}</p>
                    <div className="flex justify-between text-xs text-gray-500 mb-4">
                      <span>Location: {location}</span>
                      <span>Deadline: {deadline}</span>
                    </div>
                    <button 
                      className="w-full px-4 py-2 text-white font-medium rounded-md transition-all duration-300 hover:opacity-90 transform hover:scale-102 active:scale-98 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {activeTab === "jobs" || activeTab === "internships" ? "Apply Now" : 
                       activeTab === "competitions" ? "Register" : 
                       activeTab === "practice" ? "Start Practice" :
                       activeTab === "mentorships" ? "Connect" : "Learn More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 text-center">
            <button 
              className="px-6 py-3 font-medium border rounded-md transition-all duration-300 hover:shadow-md transform hover:scale-105 active:scale-95"
              style={{ 
                color: categories.find(cat => cat.name.toLowerCase() === activeTab)?.color || '#9be6c1',
                borderColor: categories.find(cat => cat.name.toLowerCase() === activeTab)?.color || '#9be6c1',
                backgroundColor: getLighterColor(categories.find(cat => cat.name.toLowerCase() === activeTab)?.color || '#9be6c1', 0.1)
              }}
            >
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </button>
          </div>
        </div>
      </section>

      {/* Resources & Learning Section (2x3 Cards with headings and paragraphs) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Career Resources
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Discover tools and guides to help you navigate your career journey successfully
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceSections.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div 
                  className="h-3" 
                  style={{ backgroundColor: resource.color }}
                ></div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: resource.color }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">
                    {resource.description}
                  </p>
                  <button 
                    className="mt-4 px-4 py-2 text-sm rounded transition-all duration-300 transform hover:scale-105 active:scale-95"
                    style={{ 
                      backgroundColor: getLighterColor(resource.color, 0.2),
                      color: resource.color.replace('ff', '44')
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Top Companies Hiring
          </h2>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {companyNames.slice(0, 8).map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
                style={{ borderLeft: `4px solid ${getCategoryColor(index)}` }}
              >
                <div 
                  className="h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: getLighterColor(getCategoryColor(index), 0.3) }}
                >
                  <img 
                    src={`https://logo.clearbit.com/${company.split(' ')[0].toLowerCase()}.com`} 
                    alt={company}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${company}&background=${getCategoryColor(index).substring(1)}&color=fff`;
                    }}
                    className="h-10 w-10 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{company}</h3>
                <p className="text-sm text-gray-500">{Math.floor(Math.random() * 20) + 5} open positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {people.slice(0, 3).map((person, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                style={{ borderBottom: `4px solid ${getCategoryColor(index)}` }}
              >
                <div 
                  className="h-24 w-24 rounded-full overflow-hidden mb-6 transition-transform duration-300 hover:scale-105"
                  style={{ border: `3px solid ${getCategoryColor(index)}` }}
                >
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`} 
                    alt={person.name} 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${person.name}&background=${getCategoryColor(index).substring(1)}&color=fff`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h3>
                <p 
                  className="font-medium mb-4"
                  style={{ color: getCategoryColor(index) }}
                >
                  {person.position}
                </p>
                <p className="text-gray-600 text-center italic">
                  "This platform helped me connect with my dream company and showcase my skills through various competitions."
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className="px-4 py-2 text-white font-medium rounded-md transition-all duration-300 hover:opacity-90 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              style={{ backgroundColor: getCategoryColor(0) }}
            >
              Previous
            </button>
            <button 
              className="px-4 py-2 text-white font-medium rounded-md transition-all duration-300 hover:opacity-90 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              style={{ backgroundColor: getCategoryColor(1) }}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with like-minded professionals, participate in discussions, and stay updated with the latest opportunities.
              </p>
              <button 
                className="px-6 py-3 text-white font-medium rounded-md transition-all duration-300 text-lg hover:opacity-90 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(90deg, ${getCategoryColor(0)}, ${getCategoryColor(2)})` 
                }}
              >
                Join Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Community" 
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img className="h-10 mb-4" src="/placeholder-logo-white.png" alt="Job Dhundo" />
              <p className="text-gray-400 mb-6">
                Your gateway to career opportunities and professional growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
              <ul className="space-y-2">
                <li><Link to="/internships" className="text-gray-400 hover:text-white transition-colors duration-300">Internships</Link></li>
                <li><Link to="/mentorships" className="text-gray-400 hover:text-white transition-colors duration-300">Mentorships</Link></li>
                <li><Link to="/jobs" className="text-gray-400 hover:text-white transition-colors duration-300">Jobs</Link></li>
                <li><Link to="/practice" className="text-gray-400 hover:text-white transition-colors duration-300">Practice</Link></li>
                <li><Link to="/competitions" className="text-gray-400 hover:text-white transition-colors duration-300">Competitions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li><Link to="/post-job" className="text-gray-400 hover:text-white transition-colors duration-300">Post a Job</Link></li>
                <li><Link to="/hire-talent" className="text-gray-400 hover:text-white transition-colors duration-300">Hire Talent</Link></li>
                <li><Link to="/host-competition" className="text-gray-400 hover:text-white transition-colors duration-300">Host Competition</Link></li>
                <li><Link to="/employer-branding" className="text-gray-400 hover:text-white transition-colors duration-300">Employer Branding</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                {categories.slice(0, 4).map((category, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-80 transform hover:scale-110 hover:rotate-6"
                    style={{ backgroundColor: category.color }}
                  >
                    {index === 0 && <FaFacebook className="h-5 w-5 text-gray-900" />}
                    {index === 1 && <FaTwitter className="h-5 w-5 text-gray-900" />}
                    {index === 2 && <FaLinkedin className="h-5 w-5 text-gray-900" />}
                    {index === 3 && <FaInstagram className="h-5 w-5 text-gray-900" />}
                  </a>
                ))}
              </div>
              <p className="text-gray-400">Email: contact@jobdhundo.com</p>
              <p className="text-gray-400">Phone: +91 1234567890</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 JobDhundo. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;