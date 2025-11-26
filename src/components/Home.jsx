import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import video files here
import video2 from "../assets/vivek.mp4";
import videoI from "../assets/vivek.mp4";

const VideoStreamingPlatform = () => {
  const categories = [
    "All", "Desi", "Indian", "Couple", "Doggy Style", "Missionary", "Blowjob", "Amater", "Anal",
    "Cum shoot", "Revers cow girl", "Step Sister", "Mom", " Desi Bhabhi", "Ass", "College Girl", "Tight Pussy",
    "Desi mms", "Indian virl", "Infuluncer", "Indian Actress", "Teen"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const videoRefs = useRef({});

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Vivek Special Video - Amazing Gaming Moments",
      category: "Teen",
      videoUrl: videoI,
      views: "1.4M",
      uploadDate: "1 week ago",
      likes: 120,
      userLiked: false,
    },
    {
      id: 2,
      title: "How to Learn MERN Stack in 2025 - Complete Guide",
      category: "Teen",
      videoUrl: video2,
      views: "200K",
      uploadDate: "3 days ago",
      likes: 80,
      userLiked: false,
    },
    {
      id: 3,
      title: "PUBG Montage - Best Plays Ever",
      category: "Cum shoot",
      videoUrl: video2,
      views: "950K",
      uploadDate: "5 days ago",
      likes: 230,
      userLiked: false,
    },
    {
      id: 4,
      title: "Street Food in Delhi - Amazing Food Tour",
      category: "Desi bhabhi",
      videoUrl: video2,
      views: "600K",
      uploadDate: "1 month ago",
      likes: 42,
      userLiked: false,
    },
    {
      id: 5,
      title: "React Tutorial for Beginners 2025",
      category: "Coding",
      videoUrl: video2,
      views: "350K",
      uploadDate: "2 days ago",
      likes: 95,
      userLiked: false,
    },
    {
      id: 6,
      title: "Gaming Highlights - Epic Moments",
      category: "Gaming",
      videoUrl: video2,
      views: "780K",
      uploadDate: "1 week ago",
      likes: 150,
      userLiked: false,
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  // Stop currently playing video when selecting a new one
  useEffect(() => {
    if (currentlyPlaying && videoRefs.current[currentlyPlaying]) {
      const videoElement = videoRefs.current[currentlyPlaying];
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }, [currentlyPlaying]);

  const handleVideoClick = (video) => {
    // Stop any currently playing video
    if (currentlyPlaying && videoRefs.current[currentlyPlaying]) {
      const previousVideo = videoRefs.current[currentlyPlaying];
      previousVideo.pause();
      previousVideo.currentTime = 0;
    }

    // Set new selected video and play it immediately
    setSelectedVideo(video);
    setCurrentlyPlaying(video.id);
    
    // Scroll to top for main video player on mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Close mobile sidebar if open
    setIsSidebarOpen(false);

    // Play the video immediately
    setTimeout(() => {
      const mainVideoElement = document.querySelector('.main-video-player');
      if (mainVideoElement) {
        mainVideoElement.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }, 100);
  };

  const handleThumbnailVideoClick = (video, e) => {
    e.stopPropagation();
    
    // Stop any currently playing thumbnail video
    if (currentlyPlaying && videoRefs.current[currentlyPlaying]) {
      const previousVideo = videoRefs.current[currentlyPlaying];
      previousVideo.pause();
      previousVideo.currentTime = 0;
    }

    // Play the clicked thumbnail video immediately
    setCurrentlyPlaying(video.id);
    const videoElement = e.target;
    videoElement.play().catch(error => {
      console.log("Thumbnail autoplay prevented:", error);
    });
  };

  const handleThumbnailVideoPause = (videoId, e) => {
    e.stopPropagation();
    const videoElement = videoRefs.current[videoId];
    if (videoElement && !videoElement.paused) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const toggleLike = (id) => {
    setVideos(videos.map(video =>
      video.id === id
        ? { ...video, userLiked: !video.userLiked, likes: video.userLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  // Filter videos based on category and search query
  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full bg-gray-900 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        {/* Left Section - Menu & Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <FaBars className="text-lg sm:text-xl" />
          </button>
          
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"></div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold truncate">MetureLund</h1>
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 pr-4 rounded-full border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Mobile Search Button */}
        <button 
          onClick={() => setShowMobileSearch(!showMobileSearch)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors flex-shrink-0"
          aria-label="Search"
        >
          <FaSearch className="text-lg sm:text-xl" />
        </button>
      </header>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden px-3 py-2 bg-gray-800 border-b border-gray-700 sticky top-16 z-40">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-3 pl-10 pr-4 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-base"
              autoFocus
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button 
              onClick={() => setShowMobileSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block w-64 bg-gray-900 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">Categories</h2>
          </div>
          <div className="space-y-1 p-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-bold shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h2 className="text-xl font-bold">Categories</h2>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-700"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-20">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-4 border-b border-gray-800 transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-bold"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Horizontal Category Scroller - Mobile & Tablet */}
          <div className="lg:hidden w-full overflow-x-auto bg-gray-900 sticky top-[72px] sm:top-[80px] z-30 scrollbar-hide">
            <div className="flex space-x-2 px-3 py-3">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    selectedCategory === cat
                      ? "bg-white text-black font-bold shadow-md"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Video Player */}
          <div className="p-3 sm:p-4 md:p-6">
            {selectedVideo && (
              <div className="max-w-6xl mx-auto">
                {/* Video Player Container */}
                <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                    <video 
                      controls 
                      autoPlay 
                      className="absolute top-0 left-0 w-full h-full main-video-player rounded-2xl"
                      poster=""
                    >
                      <source src={selectedVideo.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-4 sm:mt-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    {selectedVideo.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <p className="text-gray-400 text-sm sm:text-base">
                      {selectedVideo.views} views • {selectedVideo.uploadDate}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleLike(selectedVideo.id)}
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-200 hover:scale-105"
                      >
                        <FaHeart className={selectedVideo.userLiked ? "text-red-500 animate-pulse" : "text-gray-300"} />
                        <span className="text-sm sm:text-base font-medium">{selectedVideo.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Grid */}
            <div className="mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 px-2">
                {selectedCategory === "All" ? "Recommended Videos" : `${selectedCategory} Videos`}
                {searchQuery && ` for "${searchQuery}"`}
              </h2>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                    className="group cursor-pointer bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                  >
                    <div className="relative overflow-hidden">
                      <video 
                        ref={el => videoRefs.current[video.id] = el}
                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                        onClick={(e) => handleThumbnailVideoClick(video, e)}
                        onMouseLeave={(e) => handleThumbnailVideoPause(video.id, e)}
                        muted
                        preload="metadata"
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>
                      
                      {/* Play Indicator */}
                      {currentlyPlaying === video.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        10:30
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-white text-sm sm:text-base line-clamp-2 group-hover:text-blue-300 transition-colors mb-1 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1">{video.category}</p>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                        <span>{video.views} views</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredVideos.length === 0 && (
                <div className="text-center py-12 sm:py-16 md:py-20">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                    <FaSearch className="text-3xl sm:text-4xl text-gray-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No videos found</h3>
                  <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoStreamingPlatform;