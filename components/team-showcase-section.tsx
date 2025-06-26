import React from 'react'

export function TeamShowcaseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Laravel Team
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our team consists of highly skilled Laravel developers who have been vetted through our rigorous 5-round selection process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JD</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
            <p className="text-blue-600 font-medium mb-3">Senior Laravel Developer</p>
            <p className="text-gray-600 text-sm">
              5+ years of Laravel experience specializing in API development and microservices architecture.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JS</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
            <p className="text-blue-600 font-medium mb-3">Laravel Full-Stack Developer</p>
            <p className="text-gray-600 text-sm">
              7+ years building scalable web applications with Laravel, Vue.js, and React.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MA</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Anderson</h3>
            <p className="text-blue-600 font-medium mb-3">Laravel DevOps Specialist</p>
            <p className="text-gray-600 text-sm">
              Expert in Laravel deployment, CI/CD pipelines, and cloud infrastructure management.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All our developers are timezone-flexible and ready to integrate with your team
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">PHP 8.x Expert</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Laravel 10/11</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">API Development</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Database Design</span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">Cloud Deployment</span>
          </div>
        </div>
      </div>
    </section>
  )
} 