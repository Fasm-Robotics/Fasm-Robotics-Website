import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DocumentationContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
  background: linear-gradient(to bottom, #1f1f1f, #2c2c2c);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DocumentationTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const DocumentationContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: justify;
`;

function DocumentationPage() {
  const { type } = useParams(); // Récupère le type (arm ou interface) depuis l'URL

  const content = {
    arm: {
      title: 'Documentation du Bras Robotique',
      description: 'Voici la documentation complète sur l’utilisation et la maintenance du bras robotique.',
    },
    interface: {
      title: 'Documentation de l’Interface Graphique',
      description: 'Voici la documentation complète sur la configuration et l’utilisation de l’interface graphique.',
    },
  };

  const currentContent = content[type];

  if (!currentContent) {
    return (
      <DocumentationContainer>
        <DocumentationTitle>Documentation Introuvable</DocumentationTitle>
        <DocumentationContent>
          La documentation demandée n’existe pas.
        </DocumentationContent>
      </DocumentationContainer>
    );
  }

  return (
    <DocumentationContainer>
      <DocumentationTitle>{currentContent.title}</DocumentationTitle>
      <DocumentationContent>{currentContent.description}</DocumentationContent>
    </DocumentationContainer>
  );
}

export default DocumentationPage;
