import preview from '../../assets/preview';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from './linear-dialog';
import { Plus } from 'lucide-react';
import styled from 'styled-components';

// Conteneur pour la section complète
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d); // Fond global
  min-height: 100vh;
`;

// Titre de la section
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

// Conteneur pour les cartes
const CardsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  width: 100%;
`;

const items = [
  {
    id: 1,
    url: preview.galleryNew,
    title: 'Accordion',
    description:
      'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style...',
    tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
  },
  {
    id: 2,
    url: preview.galleryNew,
    title: 'Globe Section',
    description:
      'Embark on a virtual journey around the world with our state-of-the-art 3D globe feature...',
    tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
  },
  {
    id: 3,
    url: preview.galleryNew,
    title: 'Image Mouse Trail',
    description:
      'Transform your browsing experience with our mesmerizing Image Mouse Trail feature...',
    tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
  },
];

export default function LinearCard() {
  return (
    <SectionContainer>
      {/* Titre de la section */}
      <SectionTitle>Explore Our Features</SectionTitle>

      {/* Conteneur des cartes */}
      <CardsContainer>
        {items.map((item) => (
          <Dialog
            key={item.id}
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.5,
            }}
          >
            <DialogTrigger
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(145deg, #1f1f1f, #2c2c2c)', // Dégradé des cartes
                boxShadow:
                  '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.1)', // Ombres des cartes
              }}
              className="flex flex-col overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              <DialogImage
                src={item.url.src}
                alt={item.title}
                className="h-48 sm:h-64 w-full object-cover rounded-t-lg"
              />
              <div className="flex flex-grow flex-row items-end justify-between p-4">
                <DialogTitle className="text-lg font-semibold text-white">
                  {item.title}
                </DialogTitle>
                <button className="p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-md transition-colors duration-300">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </DialogTrigger>
            <DialogContainer className="pt-20">
              <DialogContent
                style={{
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, #1f1f1f, #2c2c2c)',
                  boxShadow:
                    '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.1)',
                }}
                className="relative flex h-full mx-auto flex-col overflow-y-auto lg:w-[900px] w-[80%]"
              >
                <DialogImage
                  src={item.url.src}
                  alt={item.title}
                  className="h-full object-contain w-[60%] mx-auto rounded-lg"
                />
                <div className="p-6">
                  <DialogTitle className="text-3xl font-bold text-white">
                    {item.title}
                  </DialogTitle>

                  <DialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: -40 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: -50 },
                    }}
                  >
                    <p className="mt-2 text-gray-400">{item.description}</p>
                  </DialogDescription>
                </div>
                <DialogClose className="absolute top-4 right-4 p-4 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-md transition-colors duration-300" />
              </DialogContent>
            </DialogContainer>
          </Dialog>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}
