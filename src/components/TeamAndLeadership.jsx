import React from 'react';

// CoFounderCard Component: Represents a larger card for co-founders.
const CoFounderCard = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center max-w-sm mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrl || "https://placehold.co/120x120/E0F2F7/000000?text=Co-Founder"} // Placeholder image
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/E0F2F7/000000?text=Co-Founder"; }}
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-lg text-blue-600 font-semibold mb-3">{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

// TeamMemberCard Component: Represents a smaller card for other team members.
const TeamMemberCard = ({ name, title, imageUrl }) => {
  return (
    <div className="flex-none bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center w-48 h-48 transform transition-all duration-300 hover:scale-105 mx-3">
      <img
        src={imageUrl || "https://placehold.co/80x80/F0F4F8/000000?text=Team"} // Placeholder image
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-gray-200"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/F0F4F8/000000?text=Team"; }}
      />
      <h3 className="text-lg font-bold text-gray-800 mb-1 truncate w-full px-2">{name}</h3>
      <p className="text-sm text-gray-600 truncate w-full px-2">{title}</p>
    </div>
  );
};

// App Component: The main container for the Team section.
const TeamAndLeadership = () => {
  const coFounders = [
    {
      id: 1,
      name: "Alice Johnson",
      title: "CEO & Co-Founder",
      bio: "Alice is a visionary leader with a passion for innovation and building impactful solutions. Her expertise lies in strategic growth and market disruption.",
      imageUrl: "https://placehold.co/120x120/FFDDC1/000000?text=Alice"
    },
    {
      id: 2,
      name: "Bob Williams",
      title: "CTO & Co-Founder",
      bio: "Bob is a technological pioneer, driving the company's cutting-edge development. He specializes in scalable architectures and AI integration.",
      imageUrl: "https://placehold.co/120x120/C1DFFF/000000?text=Bob"
    },
  ];

  const teamMembers = [
    { id: 3, name: "Charlie Davis", title: "Lead Developer", imageUrl: "https://placehold.co/80x80/D1F7E0/000000?text=Charlie" },
    { id: 4, name: "Diana Miller", title: "Product Manager", imageUrl: "https://placehold.co/80x80/F7D1E0/000000?text=Diana" },
    { id: 5, name: "Eve Brown", title: "UX Designer", imageUrl: "https://placehold.co/80x80/E0F7D1/000000?text=Eve" },
    { id: 6, name: "Frank White", title: "Marketing Specialist", imageUrl: "https://placehold.co/80x80/D1E0F7/000000?text=Frank" },
    { id: 7, name: "Grace Green", title: "Data Scientist", imageUrl: "https://placehold.co/80x80/F7E0D1/000000?text=Grace" },
    { id: 8, name: "Henry Black", title: "Sales Executive", imageUrl: "https://placehold.co/80x80/E0D1F7/000000?text=Henry" },
    { id: 9, name: "Ivy Stone", title: "HR Manager", imageUrl: "https://placehold.co/80x80/D1F7F0/000000?text=Ivy" },
    { id: 10, name: "Jack King", title: "Support Engineer", imageUrl: "https://placehold.co/80x80/F0D1F7/000000?text=Jack" },
    { id: 11, name: "Karen Lee", title: "Content Creator", imageUrl: "https://placehold.co/80x80/D1F0F7/000000?text=Karen" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 font-inter">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-blue-300 mb-8 drop-shadow-sm leading-tight">
        Meet Our Team
      </h1>

      {/* Co-Founders Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
        {coFounders.map((founder) => (
          <CoFounderCard
            key={founder.id}
            name={founder.name}
            title={founder.title}
            bio={founder.bio}
            imageUrl={founder.imageUrl}
          />
        ))}
      </div>

      {/* Other Team Members Row (Scrollable) */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300 text-center mb-5">Our Talented Members</h2>
        <div className="flex overflow-x-auto pb-6 scrollbar-hide"> {/* scrollbar-hide is a custom utility */}
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAndLeadership;
