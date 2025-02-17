import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import articlesData from '../../data/articles.json';
import ShinyText from '../Animations/ShinyText';

const ArticleContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1f1f1f, #2c2c2c);
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ArticleTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ArticleDate = styled.p`
  font-size: 1rem;
  color: #ccc;
  text-align: center;
  margin-bottom: 20px;
`;

const ArticleImage = styled.img`
  width: 100%;
  max-width: 800px;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ArticleContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: justify;
  margin: 0 auto;
  color: #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
`;

const SectionDivider = styled.hr`
  width: 100%;
  max-width: 800px;
  border: none;
  height: 2px;
  background: #555;
  margin: 30px 0;
`;

const BlogImage = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: contain;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 12px 24px;
  background: #000;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid #333;

  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
`;

function BlogPostPage() {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return <ArticleContainer>Article not found</ArticleContainer>;
  }

  return (
    <ArticleContainer style={{ marginTop: '-3rem' }}>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDate>{article.date}</ArticleDate>

      {/* Affichage de l'introduction si elle existe */}
      {article.intro && (
        <ArticleContent>
          <p>{article.intro}</p>
        </ArticleContent>
      )}

      <SectionDivider />

      <ArticleContent>
        {article.content.map((block, index) => {
          if (typeof block === 'string') {
            return <p key={index}>{block}</p>;
          } else if (block.type === 'image') {
            console.log("Image path:", block.src);
            return (
              <BlogImage
                key={index}
                src={`${process.env.PUBLIC_URL}${block.src}`}
                alt={block.alt || "Blog image"}
              />
            );
          } else if (block.type === 'section') {
            return (
              <div key={index}>
                <SectionTitle>{block.title}</SectionTitle>
                <p>{block.content}</p>
                {block.image && (
                  <BlogImage
                    src={`${process.env.PUBLIC_URL}${block.image}`}
                    alt={block.title || "Section image"}
                  />
                )}
                <SectionDivider />
              </div>
            );
          }
          return null;
        })}
      </ArticleContent>

      <BackButton to="/blog">
        <ShinyText text="← Back to Blog" speed={3} />
      </BackButton>
    </ArticleContainer>
  );
}

export default BlogPostPage;
