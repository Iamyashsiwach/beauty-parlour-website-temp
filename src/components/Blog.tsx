import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Top 10 Summer Hair Care Tips',
      excerpt: 'Protect your hair from sun damage with these essential summer care tips...',
      image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: 'June 15, 2024',
      author: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'The Ultimate Skincare Routine',
      excerpt: 'Achieve glowing skin with this comprehensive morning and night routine...',
      image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: 'June 10, 2024',
      author: 'Emma Davis',
    },
    {
      id: 3,
      title: 'Bridal Beauty Timeline',
      excerpt: 'Month-by-month guide to prepare for your wedding day beauty routine...',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      date: 'June 5, 2024',
      author: 'Lisa Anderson',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Beauty Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest beauty trends, tips, and expert advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;