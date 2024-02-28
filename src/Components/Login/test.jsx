// Setup.jsx

import React, { useState, useEffect } from 'react';

const Setup = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  useEffect(() => {
    // Example: Fetch project list from backend API (replace with your actual API endpoint)
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleGoogleSignIn = () => {
    // Add your Google Sign In logic here
    console.log('Signing in with Google...');
    // You would typically redirect to the Google Sign In page or use a library for OAuth authentication
  };

  const handleGitHubSignIn = () => {
    // Add your GitHub Sign In logic here
    console.log('Signing in with GitHub...');
    // You would typically redirect to the GitHub Sign In page or use a library for OAuth authentication
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Selected Project:', selectedProject, 'Resume Link:', resumeLink);
    // You can integrate this with your authentication system or API call
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-4 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="project" className="block text-sm font-medium text-gray-600">
              Select a Project:
            </label>
            <select
              id="project"
              className="w-full px-3 py-2 border rounded-md"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="" disabled>Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-600">
              Resume Link (Drive):
            </label>
            <input
              type="text"
              id="resume"
              className="w-full px-3 py-2 border rounded-md"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm">Or sign in with:</p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-700"
              >
                Google
              </button>
              <button
                type="button"
                onClick={handleGitHubSignIn}
                className="bg-gray-800 text-white px-4 py-2 rounded-md mx-2 hover:bg-gray-900"
              >
                GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setup;
