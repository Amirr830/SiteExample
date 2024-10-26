"use client"

import React from 'react';

// Sample data
const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Major Event Happens",
    description: "Detailed description of the major event that just happened. This section provides more in-depth analysis and background information.",
    date: "2024-08-26",
    imageUrl: "/bnews.jpg",
  },
  {
    id: 2,
    title: "Technology Update: New Gadget Released",
    description: "Insight into the latest technology and gadgets released this week. Explore features, specifications, and expert opinions on new tech products.",
    date: "2024-08-25",
    imageUrl: "/news.jpg",
  },
  {
    id: 3,
    title: "Sports Highlight: Amazing Game Last Night",
    description: "Summary of last night's amazing game with highlights and statistics. Read about key moments, player performances, and game-changing plays.",
    date: "2024-08-24",
    imageUrl: "/brnews.jpg",
  },
  // Add more articles as needed
];

const NewsSection = () => {
  return (
    <section className="p-8 bg-gray-100" style={{direction:"rtl"}}>
      <div className="container mx-auto">
        <p className="text-3xl text-center font-bold text-gray-800 mb-8">اخبار اخیر</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
              <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover rounded-t-lg mb-4" />
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{article.date}</p>
                <p className="text-gray-800 flex-grow">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
