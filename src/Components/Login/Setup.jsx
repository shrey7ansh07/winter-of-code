import React, { useState, useEffect } from 'react';

const Setup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  useEffect(() => {
    //Fetch project list from backend API
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleGoogleSignIn = () => {
      // google Sign In logic here

    console.log('Signing in with Google...');
  };

  const handleGitHubSignIn = () => {
    // GitHub Sign In logic here
    console.log('Signing in with GitHub...');
  };

  const handleLogin = () => {
    // login logic here
    console.log('Selected Project:', selectedProject, 'Resume Link:', resumeLink);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-4 border rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-l font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-l font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="project" className="block text-l font-medium text-gray-600">
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
            <label htmlFor="resume" className="block text-l font-medium text-gray-600">
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
            className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-xl">Or sign in with:</p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-blue-600 text-white px-8 py-4 rounded-md mx-2 hover:bg-red-700"
              >
                Google
              </button>
              <button
                type="button"
                onClick={handleGitHubSignIn}
                className="bg-gray-700 text-white px-8 py-4 rounded-md mx-4 hover:bg-green-900"
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