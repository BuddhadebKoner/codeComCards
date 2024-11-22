import React from 'react';
import profileData from './data';

const App = () => {
  const { profile, aboutMe, skills, socialLinks, contact } = profileData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-purple-400">{profile.name}</h2>
          <p className="text-sm text-gray-300">{profile.title}</p>
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            {aboutMe.heading}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            {aboutMe.description}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            {skills.heading}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.list.map((skill, index) => (
              <li
                key={index}
                className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-lg hover:bg-purple-700 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            {socialLinks.heading}
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${link.color} shadow-lg transition`}
                title={link.platform}
              >
                <img src={link.icon} alt={link.platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            {contact.heading}
          </h3>
          <p className="text-sm text-gray-300">Email: {contact.details.email}</p>
          <p className="text-sm text-gray-300">Phone: {contact.details.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
