import React from 'react';
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";

const memories = [
  {
    image: photo1,
    title: 'Our First Date',
    caption: "Still can't blieve I got so lucky in my life for once ❤️̦",
  },
  {
    image: photo2,
    title: '2nd Date (Almost kissed btw)',
    caption: 'Being so close to you I felt the how the whole world got silent when you spoke and your eyes looked into mine 😭',
  },
  {
    image: photo3,
    title: 'Mera first HAPPY BIRTHDAY Together',
    caption: 'Never felt this great on my Happy Birthday, thanks for that jaan :)🫶🏻',
  },
  {
    image: photo4,
    title: '#DandiyaPartners',
    caption: "You were looking sooo gorgeous that dayy😋 would've love to nom you btw!!",
  },
  {
    image: photo5,
    title: "Cheenu's Birthday with a red scarf I freaking loved that look tumhe pata haina?",
    caption: "Looking even more forward to it this yearr😭(jaldii ayee and iss saal no ice skatingg 🥲)",
  },
  {
    image: photo6,
    title: 'Forever Us',
    caption: "Dheere dheere zara dum lena,\n Pyaar se jo mile gham lena,\n Dil pe zara woh kam lena,\n Ok Jaanu, tu dhin dhin na ❤️",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Favorite Memories 📸</h2>
      <p className="gallery-subtitle">Every picture tells a story.</p>

      <div className="gallery-grid">
        {memories.map((memory, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={memory.image}
              alt={memory.title}
              style={index === 3 ? { transform: 'rotate(180deg)' } : undefined}
            />
            <div className="gallery-info">
              <h3>{memory.title}</h3>
              <p>{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
