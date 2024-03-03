import React, { useState, useEffect } from 'react';
import AnimatedText from '../AnimatedText';

const Setup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  useEffect(() => {
    // Fetch project list from backend API
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google...');
  };

  const handleGitHubSignIn = () => {
    console.log('Signing in with GitHub...');
  };

  const handleLogin = () => {
    console.log('Selected Project:', selectedProject, 'Resume Link:', resumeLink);
  };

  return (
    <div className="flex items-center justify-center h-screen mt-20">
      
      <div className="max-w-lg md:max-w-sm sm:max-w-xs w-full p-4  rounded-md shadow-md">
      <AnimatedText text="Join The Community!" className="!text-5xl sm:!text-2xl !text-white font-semibold my-16 !text-center" />
        <h2 className="text-2xl sm:text-xl font-semibold mb-4 text-center">Login</h2>
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm sm:text-base font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="project" className="block text-sm sm:text-base font-medium text-gray-600">
              Select a Project:
            </label>
            <select
              id="project"
              className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
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
            <label htmlFor="resume" className="block text-sm sm:text-base font-medium text-gray-600">
              Resume Link (Drive):
            </label>
            <input
              type="text"
              id="resume"
              className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm sm:text-base"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm sm:text-base">Or sign in with:</p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-blue-600 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-md mx-2 sm:mx-4 hover:bg-red-700 text-sm sm:text-base"
              >
                Google
              </button>
              <button
                type="button"
                onClick={handleGitHubSignIn}
                className="bg-gray-700 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-md mx-2 sm:mx-4 hover:bg-green-900 text-sm sm:text-base"
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
