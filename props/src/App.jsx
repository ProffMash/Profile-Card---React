import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css'; 

const App = () => {
  const users = [
    {
      name: 'David Macharia',
      age: 20,
      profilePicture: 'https://i.pinimg.com/564x/ab/35/f7/ab35f7f8ab4d7bc262c5575fb227b1f6.jpg',
      // profilePicture: url('Mash.jpg'),
      bio: 'Software engineer with a passion for open source projects.'
    },
    {
      name: 'Anthony Gatitu',
      age: 21,
      profilePicture: 'https://i.pinimg.com/736x/bb/06/79/bb067939e82244bcdc95f034b8796753.jpg',
      bio: 'Graphic designer who loves creating beautiful and functional user interfaces.'
    },
    {
      name: 'Samuel Mwangi',
      age: 22,
      profilePicture: 'https://i.pinimg.com/564x/9d/1c/2b/9d1c2bc3d3cda181513306fb67e52a2f.jpg',
      bio: 'Digital marketer with expertise in SEO and content creation.'
    }
  ];

  return (
    <div className="app">
      {users.map((user, index) => (
        <ProfileCard 
          key={index}
          name={user.name}
          age={user.age}
          profilePicture={user.profilePicture}
          bio={user.bio}
        />
      ))}
    </div>
  );
};

export default App;
