import { useState } from 'react';
import { Modal } from 'react-bootstrap';
// Utilisez 'motion' si vous prévoyez d'ajouter des animations avec Framer Motion
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports des images (à remplacer par les chemins réels)
import imageCortoMaltesse from '../../assets/img/Corto Maltesse.png';
import imageNepal from '../../assets/img/Nepal.png';
import imageVFSG from '../../assets/img/VFSG.png';
import imageWomen_Wealth from '../../assets/img/women_wealth.png';
// ... autres imports d'images

const DataVizComponent = () => {
  const [activeSection, setActiveSection] = useState('association');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  // Vos images par section
  const imagesAssociation = [imageCortoMaltesse, imageNepal];
  const imagesGalerie = [imageVFSG, imageWomen_Wealth]; // Vos images pour la galerie ici

  
  const tableauUrlsAssociation = []; // Vos URLs pour la section 'association'
  const tableauUrlsGalerie = []; // Vos URLs pour la section 'galerie'

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSelectedImageIndex(null); // Réinitialisez l'index de l'image sélectionnée
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalShow(true);
  };

  const renderImages = (images) => {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        {images.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={`Visualisation de ${activeSection}`}
            className="rounded-[12px]"
            // Si vous voulez utiliser des animations, définissez les variantes ici
            onClick={() => handleImageClick(index)}
            style={{ width: '20%', position: 'absolute' }}
          />
        ))}
      </div>
    );
  };

  const renderModal = (tableauUrls) => {
    return (
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{`Visualisation de ${activeSection}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImageIndex !== null && (
            <iframe
              src={tableauUrls[selectedImageIndex]}
              width="100%"
              height="500px"
              frameBorder="0"
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    );
  };

  // Choisissez les images et URLs en fonction de la section active
  const currentImages = activeSection === 'association' ? imagesAssociation : imagesGalerie;
  const currentTableauUrls = activeSection === 'association' ? tableauUrlsAssociation : tableauUrlsGalerie;

  return (
    <div>
      <div>
        <button onClick={() => handleSectionClick('association')}>Association</button>
        <button onClick={() => handleSectionClick('galerie')}>Galerie</button>
      </div>
      {renderImages(currentImages)}
      {renderModal(currentTableauUrls)}
    </div>
  );
};

export default DataVizComponent;

