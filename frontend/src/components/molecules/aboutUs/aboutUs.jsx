import React from 'react';

const teamMembers = [
  {
    name: 'Disha Anand',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/D4E35AQF_y4AvUKSRQQ/profile-framedphoto-shrink_400_400/0/1716333687632?e=1719003600&v=beta&t=DzWEIB9EUL6yzblwabY9AK-CpYIRjn0y7Aq2jgcPlF4',
    linkedIn: 'https://www.linkedin.com/in/disha-anand2299/',
  },
  {
    name: 'Freya Jayant Vora',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/D4D35AQGSP3tgCYCSnQ/profile-framedphoto-shrink_400_400/0/1693273996088?e=1719003600&v=beta&t=hmzYmDgaLQptwR1NsKP_jUwj6XN8JBUXyiIn28PdGNs',
    linkedIn: 'https://www.linkedin.com/in/freya-vora/',
  },
  {
    name: 'Gautam Mundada',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/C5603AQGAv-SMryfqag/profile-displayphoto-shrink_400_400/0/1641787216725?e=1723680000&v=beta&t=ShIYC-ouakj_dsaWMDKb3by_EGN3GA3rNvZGM0AyS3Y',
    linkedIn: 'https://www.linkedin.com/in/gautam-mundada-33638b182/',
  },
  {
    name: 'Pooja Chauhan',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/C5603AQGFBxx7VrylrA/profile-displayphoto-shrink_400_400/0/1597007600350?e=1723680000&v=beta&t=0kMSlyc8RllsVzh-Ztw9Q1QnJIuNYneyD5O4Dki9JXg',
    linkedIn: 'https://www.linkedin.com/in/pooja-chauhan-8b04a8165/',
  },
  {
    name: 'Priyatam Somagattu',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/D5635AQEMkg278A8aPw/profile-framedphoto-shrink_400_400/0/1713242657977?e=1719003600&v=beta&t=-QhPR3QOAgOCwIpsV-GTD5fQfHnLNxBlp_ZXHPJyAXw',
    linkedIn: 'https://www.linkedin.com/in/priyatam-reddy-somagattu-043a17172/',
  },
  {
    name: 'Rachit Khanna',
    role: 'Developer',
    photo: 'https://media.licdn.com/dms/image/D4E35AQFBEO0z-YW90A/profile-framedphoto-shrink_800_800/0/1717478743795?e=1719000000&v=beta&t=vIPorj-Q0DUuxtV_gBlohPyoXzcJtwHjPWNkvPFuoyQ',
    linkedIn: 'https://www.linkedin.com/in/rachit-khanna-961b5816b/',
  },
];

const AboutUs = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#B4C99D' }}>
      <h1>About Us</h1>
      <p>We are a group of passionate students building "PawCare", a pet management booking system designed to make pet care easy and convenient for everyone.</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ margin: '20px', textAlign: 'center', backgroundColor: '#FFF1E0', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '200px' }}>
            <img
              src={member.photo}
              alt={`${member.name}`}
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
