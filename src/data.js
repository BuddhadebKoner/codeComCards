const profileData = {
  profile: {
    image: "https://via.placeholder.com/100",
    name: "John Doe",
    title: "Web Developer | UI/UX Designer",
  },
  aboutMe: {
    heading: "About Me",
    description:
      "Passionate developer with 5+ years of experience building responsive web applications and crafting beautiful user interfaces.",
  },
  skills: {
    heading: "Skills",
    list: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js"],
  },
  socialLinks: {
    heading: "Connect With Me",
    links: [
      {
        platform: "LinkedIn",
        url: "#",
        icon: "https://via.placeholder.com/24",
        color: "bg-purple-500 hover:bg-purple-600",
      },
      {
        platform: "Twitter",
        url: "#",
        icon: "https://via.placeholder.com/24",
        color: "bg-blue-500 hover:bg-blue-600",
      },
      {
        platform: "GitHub",
        url: "#",
        icon: "https://via.placeholder.com/24",
        color: "bg-gray-500 hover:bg-gray-600",
      },
    ],
  },
  contact: {
    heading: "Contact",
    details: {
      email: "johndoe@example.com",
      phone: "+123 456 7890",
    },
  },
};

export default profileData;
