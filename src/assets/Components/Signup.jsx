import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaBuilding, 
  FaGoogle, 
  FaLinkedin, 
  FaGithub, 
  FaArrowRight, 
  FaEye, 
  FaEyeSlash,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
  FaChevronRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('signin'); // 'signin', 'signup', 'business'
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Switch between auth modes (sign in, sign up, business)
  const switchMode = (mode) => {
    setActiveTab(mode);
    setFormErrors({});
  };

  // Validate form based on active tab
  const validateForm = () => {
    const errors = {};

    if (activeTab === 'signin' || activeTab === 'business') {
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.password) errors.password = 'Password is required';
    }

    if (activeTab === 'signup') {
      if (!formData.firstName) errors.firstName = 'First name is required';
      if (!formData.lastName) errors.lastName = 'Last name is required';
      if (!formData.email) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.password) errors.password = 'Password is required';
      else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters';
      if (!formData.confirmPassword) errors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
      if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    if (activeTab === 'business') {
      if (!formData.companyName) errors.companyName = 'Company name is required';
      if (!formData.companySize) errors.companySize = 'Company size is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Redirect to appropriate page based on active tab
        if (activeTab === 'signin') {
          navigate('/');
        } else if (activeTab === 'signup') {
          navigate('/onboarding');
        } else if (activeTab === 'business') {
          navigate('/business/dashboard');
        }
      }, 2000);
    }
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for children
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
              <button 
                className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => switchMode('signin')}
              >
                Login
              </button>
              <button 
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                onClick={() => switchMode('signup')}
              >
                Sign Up
              </button>
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
              <Link to="/business" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <FaBuilding className="h-4 w-4" />
                  <span>For Business</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-indigo-600 to-purple-700 py-16 min-h-[92vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Message */}
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 text-white lg:pr-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              {activeTab === 'signin' ? 'Welcome Back!' : 
               activeTab === 'signup' ? 'Join Our Community' : 
               'Grow Your Business'}
            </motion.h1>
            
            <motion.p 
              className="text-indigo-100 text-lg mb-8"
              variants={itemVariants}
            >
              {activeTab === 'signin' ? 'Sign in to access your personalized dashboard, saved opportunities, and continue your career journey.' : 
               activeTab === 'signup' ? 'Create an account to explore thousands of opportunities, connect with mentors, and showcase your skills.' : 
               'Connect with top talent, post job opportunities, and build your employer brand with our business solutions.'}
            </motion.p>
            
            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-lg mb-8 border border-indigo-300 border-opacity-30"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-3">
                {activeTab === 'business' ? 'Why businesses choose us:' : 'Why join Job Dhundo?'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 bg-opacity-30 flex items-center justify-center mt-0.5">
                    <FaChevronRight className="h-3 w-3" />
                  </div>
                  <span className="ml-3">
                    {activeTab === 'business' ? 
                     'Access to pre-screened talent pool' : 
                     'Access to exclusive opportunities'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 bg-opacity-30 flex items-center justify-center mt-0.5">
                    <FaChevronRight className="h-3 w-3" />
                  </div>
                  <span className="ml-3">
                    {activeTab === 'business' ? 
                     'Powerful hiring analytics and insights' : 
                     'Personalized recommendations'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 bg-opacity-30 flex items-center justify-center mt-0.5">
                    <FaChevronRight className="h-3 w-3" />
                  </div>
                  <span className="ml-3">
                    {activeTab === 'business' ? 
                     'Employer branding solutions' : 
                     'Career resources and mentorship'}
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              {activeTab === 'signin' ? (
                <div>
                  <p className="mb-4">New to Job Dhundo?</p>
                  <button 
                    onClick={() => switchMode('signup')}
                    className="flex items-center font-medium text-white border-b border-white pb-1 hover:text-indigo-200 hover:border-indigo-200 transition-colors duration-300"
                  >
                    Create an account <FaArrowRight className="ml-2 h-3 w-3" />
                  </button>
                </div>
              ) : activeTab === 'signup' ? (
                <div>
                  <p className="mb-4">Already have an account?</p>
                  <button 
                    onClick={() => switchMode('signin')}
                    className="flex items-center font-medium text-white border-b border-white pb-1 hover:text-indigo-200 hover:border-indigo-200 transition-colors duration-300"
                  >
                    Sign in to your account <FaArrowRight className="ml-2 h-3 w-3" />
                  </button>
                </div>
              ) : (
                <div>
                  <p className="mb-4">Looking for a job instead?</p>
                  <button 
                    onClick={() => switchMode('signin')}
                    className="flex items-center font-medium text-white border-b border-white pb-1 hover:text-indigo-200 hover:border-indigo-200 transition-colors duration-300"
                  >
                    Sign in as a job seeker <FaArrowRight className="ml-2 h-3 w-3" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Form Container */}
          <motion.div 
            className="lg:w-1/2 w-full bg-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Form Tabs */}
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-4 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'signin' 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
                onClick={() => switchMode('signin')}
              >
                Sign In
              </button>
              <button 
                className={`flex-1 py-4 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'signup' 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
                onClick={() => switchMode('signup')}
              >
                Sign Up
              </button>
              <button 
                className={`flex-1 py-4 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'business' 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
                onClick={() => switchMode('business')}
              >
                For Business
              </button>
            </div>
            
            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={activeTab} // This forces re-render when tab changes
                  className="space-y-6"
                >
                  {/* Sign Up Form Fields */}
                  {activeTab === 'signup' && (
                    <>
                      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <div className="flex-1">
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-3 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                              placeholder="First Name"
                            />
                          </div>
                          {formErrors.firstName && (
                            <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                          )}
                        </div>
                        <div className="flex-1">
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaUser className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-3 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                              placeholder="Last Name"
                            />
                          </div>
                          {formErrors.lastName && (
                            <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Business Form Fields */}
                  {activeTab === 'business' && (
                    <>
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaBuilding className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-2 border ${formErrors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                            placeholder="Your Company"
                          />
                        </div>
                        {formErrors.companyName && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.companyName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                        <select
                          name="companySize"
                          id="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className={`w-full pl-3 pr-3 py-2 border ${formErrors.companySize ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1001+">1001+ employees</option>
                        </select>
                        {formErrors.companySize && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.companySize}</p>
                        )}
                      </div>
                    </>
                  )}
                  
                  {/* Common Fields */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-10 py-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                        placeholder="Your password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    {formErrors.password && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                    )}
                  </div>
                  
                  {/* Sign Up Confirm Password */}
                  {activeTab === 'signup' && (
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaLock className="text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                          placeholder="Confirm your password"
                        />
                      </div>
                      {formErrors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
                      )}
                    </div>
                  )}
                  
                  {/* Sign In Forgot Password */}
                  {activeTab === 'signin' && (
                    <div className="flex items-center justify-end">
                      <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </Link>
                    </div>
                  )}
                  
                  {/* Signup Terms and Conditions */}
                  {activeTab === 'signup' && (
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className={`font-medium ${formErrors.agreeToTerms ? 'text-red-600' : 'text-gray-700'}`}>
                          I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                        </label>
                        {formErrors.agreeToTerms && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.agreeToTerms}</p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        activeTab === 'signin' ? 'Sign In' : 
                        activeTab === 'signup' ? 'Create Account' : 
                        'Sign In as Business'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </form>
              
              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGoogle className="h-5 w-5 text-red-500" />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="h-5 w-5 text-blue-700" />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5 text-gray-900" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Job Dhundo. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </Link>
              <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Auth;