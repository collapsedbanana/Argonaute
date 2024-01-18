import { useState, useEffect } from "react";
import TableauReport from '../TableauViz/TableauViz.jsx';
import './ImageSlider.scss';
import { Button, Modal } from '@mui/material';
import { motion } from "framer-motion";

import imageCortoMaltesse from "../../assets/img/Corto Maltesse.png";
import imageNepal from "../../assets/img/Nepal.png";
import imageVFSG from "../../assets/img/VFSG.png";
import imageWomenWealth from "../../assets/img/women_wealth.png";
import imageAfghan from "../../assets/img/Afghan.png";

const imagesAssociatives = [
  imageVFSG, imageVFSG, imageVFSG, imageWomenWealth, imageAfghan, imageNepal, imageCortoMaltesse
];
const imagesGalerie = [
  imageCortoMaltesse, imageVFSG, imageCortoMaltesse, imageVFSG, imageCortoMaltesse, imageCortoMaltesse, imageCortoMaltesse
];
const imagesConcours = [
  imageCortoMaltesse, imageCortoMaltesse, imageWomenWealth, imageWomenWealth, imageWomenWealth, imageWomenWealth, imageWomenWealth
];

const descriptions = {
  Associatif: "Description pour la section Associatif.",
  Galerie: "Description pour la section Galerie.",
  Concours: "Description pour la section Concours."
};

const imageDescriptions = {
  Associatif: [
    "Description for VFSG image in Associatif 1",
    "Another description for VFSG in Associatif 2",
    "Another description for VFSG in Associatif 3",
    "Another description for VFSG in Associatif 4",
    "Another description for VFSG in Associatif 5",
    "Another description for VFSG in Associatif 6",
    "Another description for VFSG in Associatif 7, length test what's gonna happen if the container is too crowded bro testestestesteste"
  ],
  Galerie: [
    "Description for Corto Maltesse image in Galerie",
  ],
  Concours: [
    "Description for Women Wealth image in Concours",
  ],
};

const imageLinksAssociatives = [
  "https://public.tableau.com/views/diversityindataWomenWealth/WomeninWealth?:language=en-US&:display_count=n&:origin=viz_share_link",
  "https://public.tableau.com/views/diversityindataWomenWealth/WomeninWealth?:language=en-US&:display_count=n&:origin=viz_share_link",
  "https://public.tableau.com/views/diversityindataWomenWealth/WomeninWealth?:language=en-US&:display_count=n&:origin=viz_share_link",
];

const imageLinksGalerie = [
  "https://public.tableau.com/views/diversityindataWomenWealth/WomeninWealth?:language=en-US&:display_count=n&:origin=viz_share_link",
  "https://lien-vers-tableau-5",
  "https://lien-vers-tableau-6",
];

const imageLinksConcours = [
  "https://lien-vers-tableau-7",
  "https://lien-vers-tableau-8",
  "https://lien-vers-tableau-9",
];

function preventLoading() {
  console.info("Loaded")
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", preventLoading)
} else {
  preventLoading();
}

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [category, setCategory] = useState('Associatif');
  const [openModal, setOpenModal] = useState(false);
  const [sectionDescription, setSectionDescription] = useState(descriptions.Associatif);
  const [imageDescription, setImageDescription] = useState(imageDescriptions[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVizLoaded, setIsVizLoaded] = useState(false);

  useEffect(() => {
    const descriptionsForCategory = imageDescriptions[category];
    if (descriptionsForCategory && descriptionsForCategory.length > positionIndexes[0]) {
      setImageDescription(descriptionsForCategory[positionIndexes[0]]);
    }
  }, [positionIndexes, category]);

  const handleNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % images.length)
    );
    setIsVizLoaded(false); 
  };

  const handleBack = () => {
    setSelectedImage((prevIndex) =>
      (prevIndex + images.length - 1) % images.length
    );
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) =>
        (prevIndex + images.length - 1) % images.length
      )
    );
    setIsVizLoaded(false); 
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  
    setTimeout(() => {
      setIsVizLoaded(true); 
    }, 100);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsVizLoaded(false); 
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setSectionDescription(descriptions[newCategory]);
    setPositionIndexes([0, 1, 2, 3, 4, 5, 6]);
    setIsVizLoaded(false); 
  };

  const images = category === 'Galerie' ? imagesGalerie : (category === 'Concours' ? imagesConcours : imagesAssociatives);
  const imageLinks = category === 'Galerie' ? imageLinksGalerie : (category === 'Concours' ? imageLinksConcours : imageLinksAssociatives);

  const positions = ["center", "left1", "left2", "left", "right", "right1", "right2"];
  const imageVariants = {
    center: { x: "-50%", y: "-50%", scale: 1, zIndex: 5 },
    left1: { x: "-133%", y: "0%", scale: 0.6, zIndex: 4 },
    left2: { x: "-175%", y: "0%", scale: 0.3, zIndex: 3 },
    left: { x: "-200%", y: "0%", scale: 0.2, zIndex: 2 },
    right: { x: "100%", y: "0%", scale: 0.2, zIndex: 2 },
    right1: { x: "75%", y: "0%", scale: 0.3, zIndex: 3 },
    right2: { x: "33%", y: "0%", scale: 0.6, zIndex: 4 }
  };

  return (
    <div className="image-slider-container">
      <div className="category-selectors-container">
        <div className="category-selectors">
          {Object.keys(descriptions).map((key) => (
            <span
              key={key}
              className={`category-selector ${category === key ? 'active' : ''}`}
              onClick={() => changeCategory(key)}
            >
              {key}
            </span>
          ))}
        </div>
        <div className="section-description">
          {sectionDescription}
        </div>
      </div>

      <div className="img_slider">
        {images.map((image, index) => (
          <motion.img
            src={image}
            alt={`Slide ${index}`}
            className={`image-item ${positions[positionIndexes[index]]}`}
            initial="center"
            animate={imageVariants[positions[positionIndexes[index]]]}
            transition={{ duration: 0.5 }}
            key={index}
            onClick={() => handleImageClick(index)}
          />
        ))}
        <div className="image-description">{imageDescription}</div>

        <div className="button-style">
          <Button variant="contained" color="primary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-content">
          {selectedImage !== null && (
            <TableauReport vizUrl={imageLinks[selectedImage]} preLoad={isVizLoaded} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageSlider;
