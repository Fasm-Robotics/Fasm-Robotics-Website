import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import articlesData from '../data/articles.json';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1f1f1f, #2c2c2c);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
`;

const BlogCard = styled.div`
  background: #333333;
  border-radius: 10px;
  padding: 20px;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
  border: 2px solid #444;
`;

const BlogTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #e0e0e0;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: #888888;
  margin-bottom: 10px;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #000;
    text-decoration: underline;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 100px;
`;

const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #000;
  }
`;

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setArticles(
      articlesData.sort((a, b) => b.id - a.id)
    );
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <PageWrapper style={{ marginTop: '-3rem' }}>
      <PageTitle>FASM Robotics' Blog</PageTitle>
      <BlogContainer>
        {articles.slice(0, visibleCount).map((article) => (
          <BlogCard key={article.id}>
            <BlogImage src={article.coverImage} alt={article.title} />
            <BlogTitle>{article.title}</BlogTitle>
            <BlogDate>{article.date}</BlogDate>
            <BlogDescription>{article.description}</BlogDescription>
            <ReadMoreLink to={`/blog/${article.id}`}>Read More</ReadMoreLink>
          </BlogCard>
        ))}
      </BlogContainer>
      {visibleCount < articles.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </PageWrapper>
  );
}

export default BlogPage;
