import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  FaGraduationCap,
  FaIndustry,
  FaUserGraduate,
  FaThumbsUp,
  FaExternalLinkAlt,
  FaBookmark,
  FaRegBookmark,
  FaBars,
} from "react-icons/fa";

const Internship = () => {
  const [filters, setFilters] = useState({
    location: [],
    duration: [],
    stipend: [],
    category: [],
    skills: [],
    posted: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    };

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [bookmarked, setBookmarked] = useState([]);
  const [activeView, setActiveView] = useState("all");
  const [loadingMore, setLoadingMore] = useState(false);
  const [expandedInternship, setExpandedInternship] = useState(null);

  // Mock internship data
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setInternships(generateMockInternships(20));
    }, 800);
  }, []);

  // Generate mock internship data
  const generateMockInternships = (count) => {
    const companies = [
      {
        name: "TechWave Solutions",
        logo: "https://logo.clearbit.com/techwave.com",
        rating: 4.7,
      },
      {
        name: "InnovateCorp",
        logo: "https://logo.clearbit.com/innovate.com",
        rating: 4.5,
      },
      {
        name: "Quantum Dynamics",
        logo: "https://logo.clearbit.com/quantum.com",
        rating: 4.8,
      },
      {
        name: "FuturePath Inc.",
        logo: "https://logo.clearbit.com/futurepath.com",
        rating: 4.3,
      },
      {
        name: "DataSphere",
        logo: "https://logo.clearbit.com/datasphere.com",
        rating: 4.6,
      },
      {
        name: "NexusLink",
        logo: "https://logo.clearbit.com/nexuslink.com",
        rating: 4.2,
      },
      {
        name: "Apex Systems",
        logo: "https://logo.clearbit.com/apex.com",
        rating: 4.4,
      },
      {
        name: "BlueHorizon Group",
        logo: "https://logo.clearbit.com/bluehorizon.com",
        rating: 4.9,
      },
    ];

    const titles = [
      "Software Development Intern",
      "Data Science Intern",
      "Marketing Intern",
      "UX/UI Design Intern",
      "Business Analyst Intern",
      "Machine Learning Intern",
      "Frontend Development Intern",
      "Backend Development Intern",
      "Product Management Intern",
      "Research Intern",
    ];

    const locations = [
      "Remote",
      "Bangalore",
      "Mumbai",
      "Delhi",
      "Pune",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Hybrid",
    ];

    const durations = [
      "1 Month",
      "2 Months",
      "3 Months",
      "6 Months",
      "Summer Internship",
    ];

    const stipendRanges = [
      "₹5,000 - ₹10,000 /month",
      "₹10,000 - ₹15,000 /month",
      "₹15,000 - ₹20,000 /month",
      "₹20,000 - ₹25,000 /month",
      "₹25,000+ /month",
      "Unpaid",
    ];

    const skillSets = [
      ["Python", "Data Analysis", "Machine Learning", "SQL"],
      ["React", "JavaScript", "HTML", "CSS"],
      ["Java", "Spring Boot", "Microservices", "SQL"],
      ["UI/UX Design", "Figma", "Adobe XD", "User Research"],
      ["Marketing", "Social Media", "Content Writing", "SEO"],
      ["Data Science", "R", "Python", "Statistics"],
      ["Product Management", "Agile", "Market Research", "UX"],
      ["Cloud Computing", "AWS", "Azure", "DevOps"],
    ];

    const descriptions = [
      "Join our team to work on exciting projects and gain hands-on experience in a fast-paced environment. You'll collaborate with experienced professionals and contribute to real-world solutions.",
      "Looking for passionate interns to join our growing team. This internship offers a unique opportunity to learn from industry experts and build your portfolio with meaningful work.",
      "We're seeking motivated interns to be part of our innovative team. You'll have the chance to work on cutting-edge projects and develop valuable skills for your future career.",
      "This internship provides hands-on experience with the latest tools and technologies. You'll be mentored by experienced professionals and work on projects that make a real impact.",
      "Excellent opportunity for students looking to gain practical experience. You'll work alongside our talented team and contribute to projects that solve real business challenges.",
    ];

    const postedDays = [2, 5, 7, 10, 14, 21, 30];
    const applicationDeadlines = [7, 14, 21, 30, 45];
    const openPositions = [1, 2, 3, 5, 8, 10];

    return Array(count)
      .fill()
      .map((_, index) => {
        const company = companies[index % companies.length];
        const skillSet = skillSets[index % skillSets.length];
        const postedDay = postedDays[index % postedDays.length];
        const deadline =
          applicationDeadlines[index % applicationDeadlines.length];
        const positions = openPositions[index % openPositions.length];

        // Random date for start date
        const startDate = new Date();
        startDate.setDate(
          startDate.getDate() + Math.floor(Math.random() * 60) + 15
        );

        return {
          id: index + 1,
          title: titles[index % titles.length],
          company: company.name,
          companyLogo: company.logo,
          companyRating: company.rating,
          location: locations[index % locations.length],
          duration: durations[index % durations.length],
          stipend: stipendRanges[index % stipendRanges.length],
          postedDaysAgo: postedDay,
          applicationDeadline: deadline,
          startDate: startDate.toLocaleDateString("en-GB"),
          openPositions: positions,
          appliedCount: Math.floor(Math.random() * 300) + 20,
          skills: skillSet,
          description: descriptions[index % descriptions.length],
          responsibilities: [
            "Collaborate with cross-functional teams on project development",
            "Participate in design and code reviews",
            "Research and implement new technologies",
            "Create documentation for projects and processes",
            "Present findings and solutions to team members",
          ],
          requirements: [
            "Currently pursuing a degree in a relevant field",
            "Strong understanding of core concepts",
            "Good communication and teamwork skills",
            "Ability to learn quickly and adapt to new challenges",
            "Passion for innovation and problem-solving",
          ],
          perks: [
            "Certificate of completion",
            "Letter of recommendation",
            "Flexible working hours",
            "Mentorship from industry experts",
            "Networking opportunities",
          ],
        };
      });
  };

  // Toggle bookmark
  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((item) => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  // Toggle filter
  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (category === "posted") {
        // For radio button type filters
        return { ...prevFilters, [category]: value };
      } else {
        // For checkbox type filters
        if (updatedFilters[category].includes(value)) {
          updatedFilters[category] = updatedFilters[category].filter(
            (item) => item !== value
          );
        } else {
          updatedFilters[category] = [...updatedFilters[category], value];
        }
        return updatedFilters;
      }
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter internships based on search query and filters
  const filteredInternships = internships.filter((internship) => {
    // Search filter
    if (
      searchQuery &&
      !internship.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !internship.company.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by location
    if (
      filters.location.length > 0 &&
      !filters.location.includes(internship.location)
    ) {
      return false;
    }

    // Filter by duration
    if (
      filters.duration.length > 0 &&
      !filters.duration.includes(internship.duration)
    ) {
      return false;
    }

    // Filter by stipend (simplistic approach)
    if (filters.stipend.length > 0) {
      let stipendMatch = false;
      for (const stipendRange of filters.stipend) {
        if (internship.stipend.includes(stipendRange)) {
          stipendMatch = true;
          break;
        }
      }
      if (!stipendMatch) return false;
    }

    // Filter by category (using title as proxy for category)
    if (filters.category.length > 0) {
      let categoryMatch = false;
      for (const category of filters.category) {
        if (internship.title.toLowerCase().includes(category.toLowerCase())) {
          categoryMatch = true;
          break;
        }
      }
      if (!categoryMatch) return false;
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      let skillMatch = false;
      for (const skill of filters.skills) {
        if (
          internship.skills.some((s) =>
            s.toLowerCase().includes(skill.toLowerCase())
          )
        ) {
          skillMatch = true;
          break;
        }
      }
      if (!skillMatch) return false;
    }

    // Filter by posted time
    if (filters.posted) {
      const days = parseInt(filters.posted);
      if (internship.postedDaysAgo > days) {
        return false;
      }
    }

    // View by bookmarked
    if (activeView === "bookmarked" && !bookmarked.includes(internship.id)) {
      return false;
    }

    return true;
  });

  // Sort filtered internships
  const sortedInternships = [...filteredInternships].sort((a, b) => {
    switch (sort) {
      case "newest":
        return a.postedDaysAgo - b.postedDaysAgo;
      case "deadline":
        return a.applicationDeadline - b.applicationDeadline;
      case "stipend_high":
        // Simplistic approach - would need better logic for actual implementation
        return b.stipend.includes("Unpaid")
          ? -1
          : a.stipend.includes("Unpaid")
          ? 1
          : parseInt(b.stipend.match(/\d+/)[0]) -
            parseInt(a.stipend.match(/\d+/)[0]);
      case "duration_short":
        return parseInt(a.duration) - parseInt(b.duration);
      case "duration_long":
        return parseInt(b.duration) - parseInt(a.duration);
      default: // relevance
        return b.companyRating * 10 - a.companyRating * 10;
    }
  });

  // Load more internships
  const handleLoadMore = () => {
    setLoadingMore(true);

    // Simulate loading delay
    setTimeout(() => {
      setInternships([...internships, ...generateMockInternships(8)]);
      setLoadingMore(false);
    }, 1000);
  };

  // Expand internship details
  const toggleExpandInternship = (id) => {
    if (expandedInternship === id) {
      setExpandedInternship(null);
    } else {
      setExpandedInternship(id);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      location: [],
      duration: [],
      stipend: [],
      category: [],
      skills: [],
      posted: "",
    });
    setSearchQuery("");
  };

  // Get internship color based on ID for consistency
  const getInternshipColor = (id) => {
    const colors = [
      "#9be6c1",
      "#fec192",
      "#9bc9ff",
      "#c8bbff",
      "#ffdd80",
      "#ffb1cc",
    ];
    return colors[id % colors.length];
  };

  // Get a lighter version of the color for backgrounds
  const getLighterColor = (color, opacity = 0.2) => {
    // Convert hex to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
        
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/placeholder-logo.png"
                  alt="Job Dhundo"
                />
              </Link>

              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                  to="/internships"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Internships
                </Link>
                <Link
                  to="/mentorships"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Mentorships
                </Link>
                <Link
                  to="/jobs"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Jobs
                </Link>
                <Link
                  to="/practice"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Practice
                </Link>
                <Link
                  to="/competitions"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Competitions
                </Link>
                <Link
                  to="/more"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  More
                </Link>
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
              <button className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Login
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/internships"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Internships
              </Link>
              <Link
                to="/mentorships"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Mentorships
              </Link>
              <Link
                to="/jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Jobs
              </Link>
              <Link
                to="/practice"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Practice
              </Link>
              <Link
                to="/competitions"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                Competitions
              </Link>
              <Link
                to="/more"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                More
              </Link>
              <Link
                to="/business"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
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
      {/* Header Section with Search & Filters */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Find Your Dream Internship
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-indigo-100 mb-8">
              Discover opportunities to learn, grow, and build your career with
              leading companies
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    className="w-full h-12 pl-12 pr-4 text-gray-800 bg-white border-2 border-transparent rounded-l-lg focus:outline-none focus:border-indigo-300 transition-all duration-300"
                    placeholder="Search internships by title, company, or skill..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <FaSearch className="absolute left-4 top-4 text-gray-500" />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-12 px-6 bg-indigo-800 hover:bg-indigo-900 border-2 border-indigo-800 text-white rounded-r-lg transition-colors duration-300 flex items-center"
                >
                  <FaFilter className="mr-2" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <div
                onClick={() => setActiveView("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeView === "all"
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                All Internships
              </div>
              <div
                onClick={() => setActiveView("bookmarked")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeView === "bookmarked"
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                Bookmarked
              </div>
              <div
                onClick={() => toggleFilter("location", "Remote")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filters.location.includes("Remote")
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                Remote
              </div>
              <div
                onClick={() => toggleFilter("posted", "7")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filters.posted === "7"
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                Last 7 days
              </div>
              <div
                onClick={() => toggleFilter("category", "Software")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filters.category.includes("Software")
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                Software
              </div>
              <div
                onClick={() => toggleFilter("category", "Data Science")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filters.category.includes("Data Science")
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                Data Science
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-indigo-100">
              <div>
                <span className="font-bold text-white">
                  {internships.length}
                </span>{" "}
                internships available
              </div>
              <div>
                <span className="font-bold text-white">
                  {internships.reduce(
                    (acc, curr) => acc + curr.openPositions,
                    0
                  )}
                </span>{" "}
                open positions
              </div>
              <div>
                <span className="font-bold text-white">
                  {Math.floor(internships.length * 0.7)}
                </span>{" "}
                companies hiring
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel (Hidden by default) */}
      {showFilters && (
        <div className="bg-white shadow-md border-t border-gray-200 py-6 mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Advanced Filters
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={clearAllFilters}
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-300"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaTimes className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                  Location
                </h3>
                <div className="space-y-2">
                  {["Remote", "Bangalore", "Mumbai", "Delhi", "Hybrid"].map(
                    (location) => (
                      <div key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`location-${location}`}
                          checked={filters.location.includes(location)}
                          onChange={() => toggleFilter("location", location)}
                          className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`location-${location}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {location}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaClock className="mr-2 text-indigo-500" />
                  Duration
                </h3>
                <div className="space-y-2">
                  {[
                    "1 Month",
                    "2 Months",
                    "3 Months",
                    "6 Months",
                    "Summer Internship",
                  ].map((duration) => (
                    <div key={duration} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`duration-${duration}`}
                        checked={filters.duration.includes(duration)}
                        onChange={() => toggleFilter("duration", duration)}
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`duration-${duration}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {duration}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stipend Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaMoneyBillWave className="mr-2 text-indigo-500" />
                  Stipend
                </h3>
                <div className="space-y-2">
                  {[
                    "₹5,000 - ₹10,000",
                    "₹10,000 - ₹15,000",
                    "₹15,000 - ₹20,000",
                    "₹20,000+",
                    "Unpaid",
                  ].map((stipend) => (
                    <div key={stipend} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`stipend-${stipend}`}
                        checked={filters.stipend.includes(stipend)}
                        onChange={() => toggleFilter("stipend", stipend)}
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`stipend-${stipend}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {stipend}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaIndustry className="mr-2 text-indigo-500" />
                  Category
                </h3>
                <div className="space-y-2">
                  {[
                    "Software",
                    "Data Science",
                    "Marketing",
                    "Design",
                    "Business",
                    "Research",
                  ].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={filters.category.includes(category)}
                        onChange={() => toggleFilter("category", category)}
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaUserGraduate className="mr-2 text-indigo-500" />
                  Skills
                </h3>
                <div className="space-y-2">
                  {[
                    "Python",
                    "React",
                    "JavaScript",
                    "UI/UX",
                    "Marketing",
                    "Java",
                    "SQL",
                    "Data Analysis",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`skill-${skill}`}
                        checked={filters.skills.includes(skill)}
                        onChange={() => toggleFilter("skills", skill)}
                        className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`skill-${skill}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Posted Filter */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3 flex items-center">
                  <FaCalendarAlt className="mr-2 text-indigo-500" />
                  Posted
                </h3>
                <div className="space-y-2">
                  {[
                    { value: "1", label: "Last 24 hours" },
                    { value: "3", label: "Last 3 days" },
                    { value: "7", label: "Last week" },
                    { value: "14", label: "Last 2 weeks" },
                    { value: "30", label: "Last month" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`posted-${option.value}`}
                        checked={filters.posted === option.value}
                        onChange={() => toggleFilter("posted", option.value)}
                        className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                        name="posted"
                      />
                      <label
                        htmlFor={`posted-${option.value}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredInternships.length}{" "}
              {filteredInternships.length === 1 ? "Internship" : "Internships"}{" "}
              Available
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {Object.values(filters).flat().filter(Boolean).length > 0 &&
                `Filtered by ${
                  Object.values(filters).flat().filter(Boolean).length
                } criteria`}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest First</option>
                <option value="deadline">Application Deadline</option>
                <option value="stipend_high">Highest Stipend</option>
                <option value="duration_short">Shortest Duration</option>
                <option value="duration_long">Longest Duration</option>
              </select>
              <FaChevronDown className="absolute right-3 top-3 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        {/* Results Section */}
        {internships.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading internships...</p>
          </div>
        ) : filteredInternships.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No internships found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {sortedInternships.map((internship) => {
              const isExpanded = expandedInternship === internship.id;
              const isBookmarked = bookmarked.includes(internship.id);
              const internshipColor = getInternshipColor(internship.id);

              return (
                <div
                  key={internship.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                    isExpanded ? "shadow-lg" : "hover:shadow-lg"
                  }`}
                  style={{ borderLeft: `4px solid ${internshipColor}` }}
                >
                  {/* Basic Information */}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="h-14 w-14 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                              <img
                                src={internship.companyLogo}
                                alt={internship.company}
                                className="h-10 w-10 object-contain"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = `https://ui-avatars.com/api/?name=${
                                    internship.company
                                  }&background=${internshipColor.substring(
                                    1
                                  )}&color=fff`;
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1 flex justify-between">
                              <span>{internship.title}</span>
                              <button
                                onClick={() => toggleBookmark(internship.id)}
                                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 md:hidden"
                              >
                                {isBookmarked ? (
                                  <FaBookmark />
                                ) : (
                                  <FaRegBookmark />
                                )}
                              </button>
                            </h3>
                            <div className="flex items-center mb-2">
                              <Link
                                to={`/company/${internship.company}`}
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                              >
                                {internship.company}
                              </Link>
                              <span className="mx-2 text-gray-300">•</span>
                              <div className="flex items-center">
                                <span className="text-amber-500 mr-1">
                                  {internship.companyRating}
                                </span>
                                <div className="flex items-center">
                                  {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                      <span key={i}>
                                        {i <
                                        Math.floor(internship.companyRating) ? (
                                          <FaStar className="h-3 w-3 text-amber-500" />
                                        ) : (
                                          <FaRegStar className="h-3 w-3 text-amber-500" />
                                        )}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-1 text-gray-400" />
                                {internship.location}
                              </div>
                              <div className="flex items-center">
                                <FaClock className="mr-1 text-gray-400" />
                                {internship.duration}
                              </div>
                              <div className="flex items-center">
                                <FaMoneyBillWave className="mr-1 text-gray-400" />
                                {internship.stipend}
                              </div>
                              <div className="flex items-center">
                                <FaCalendarAlt className="mr-1 text-gray-400" />
                                Start: {internship.startDate}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {internship.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 text-xs rounded-md"
                                  style={{
                                    backgroundColor: getLighterColor(
                                      internshipColor,
                                      0.15
                                    ),
                                    color: internshipColor.replace("ff", "99"),
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3">
                        <button
                          onClick={() => toggleBookmark(internship.id)}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 hidden md:block"
                        >
                          {isBookmarked ? (
                            <FaBookmark className="h-5 w-5" />
                          ) : (
                            <FaRegBookmark className="h-5 w-5" />
                          )}
                        </button>
                        <div className="flex flex-col items-end text-sm">
                          <div className="text-gray-500">
                            Posted {internship.postedDaysAgo} days ago
                          </div>
                          <div className="text-gray-500">
                            Apply by {internship.applicationDeadline} days
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {internship.appliedCount}+ applicants
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() => toggleExpandInternship(internship.id)}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-300"
                      >
                        {isExpanded ? "Show Less" : "View Details"}
                      </button>

                      <div className="flex gap-3">
                        <button className="px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                          Save
                        </button>
                        <Link to={"/jobsubmit"} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div
                      className="p-6 border-t border-gray-100"
                      style={{
                        backgroundColor: getLighterColor(internshipColor, 0.05),
                      }}
                    >
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          About the Internship
                        </h4>
                        <p className="text-gray-700 mb-4">
                          {internship.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              Key Responsibilities
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {internship.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              Requirements
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {internship.requirements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Perks & Benefits
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {internship.perks.map((perk, i) => (
                            <div
                              key={i}
                              className="px-3 py-2 rounded-md flex items-center"
                              style={{
                                backgroundColor: getLighterColor(
                                  internshipColor,
                                  0.15
                                ),
                                color: internshipColor.replace("ff", "99"),
                              }}
                            >
                              <FaThumbsUp className="mr-2" />
                              {perk}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-4">
                          <span className="text-gray-600">
                            <strong>{internship.openPositions}</strong> open
                            positions
                          </span>
                          <span className="text-gray-600">
                            <strong>{internship.appliedCount}</strong>{" "}
                            applicants
                          </span>
                        </div>

                        <Link
                          to={`/internship/${internship.id}`}
                          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                        >
                          <span>View Full Details</span>
                          <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Load More Button */}
            {filteredInternships.length > 0 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-48"
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I apply for an internship?
              </h3>
              <p className="text-gray-700">
                Click on the "Apply Now" button for the internship you're
                interested in. You'll need to create an account if you don't
                have one already, then follow the application steps which
                typically include submitting your resume and answering any
                screening questions.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are these internships paid?
              </h3>
              <p className="text-gray-700">
                Many internships on our platform offer stipends, but some may be
                unpaid. You can use our filters to find internships that match
                your compensation requirements. Each listing clearly indicates
                the stipend information.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I apply for multiple internships?
              </h3>
              <p className="text-gray-700">
                Yes, you can apply for as many internships as you'd like.
                However, we recommend focusing on opportunities that align with
                your skills and career goals for the best chances of success.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens after I submit my application?
              </h3>
              <p className="text-gray-700">
                After submitting your application, the company will review your
                profile. If they're interested, they'll contact you for the next
                steps, which may include interviews or assessments. You can
                track your application status in your dashboard.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need experience to apply?
              </h3>
              <p className="text-gray-700">
                While some internships may require specific skills or
                experience, many are designed for beginners and students. Read
                the requirements carefully to find opportunities that match your
                current skill level.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions about internships?
            </p>
            <Link
              to="/faq"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Resources for Internship Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <FaGraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Resume & Cover Letter Tips
              </h3>
              <p className="text-gray-700 mb-4">
                Learn how to craft compelling resumes and cover letters that
                highlight your skills and passion to stand out to employers.
              </p>
              <Link
                to="/resources/resume-tips"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <span>Read Guide</span>
                <FaExternalLinkAlt className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Internship Interview Preparation
              </h3>
              <p className="text-gray-700 mb-4">
                Prepare for common interview questions and learn techniques to
                showcase your abilities and fit for the role.
              </p>
              <Link
                to="/resources/interview-prep"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <span>Read Guide</span>
                <FaExternalLinkAlt className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <FaThumbsUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Making the Most of Your Internship
              </h3>
              <p className="text-gray-700 mb-4">
                Discover strategies to maximize your learning, build
                connections, and turn your internship into future career
                opportunities.
              </p>
              <Link
                to="/resources/internship-success"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <span>Read Guide</span>
                <FaExternalLinkAlt className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Internship Alerts in Your Inbox
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest opportunities that match your interests
            and skills
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                className="flex-grow px-4 py-3 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="bg-indigo-900 px-6 py-3 rounded-r-md font-medium hover:bg-indigo-800 transition-colors duration-300 transform hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-indigo-200 mt-3">
              By subscribing, you agree to our privacy policy and terms of
              service.
            </p>
          </form>
        </div>
      </section>
      
    </div>
  );
  
};

export default Internship;
