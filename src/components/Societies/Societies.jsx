import React, { useEffect, useRef } from "react";
import "./Societies.css";

// Import society logos
import computerSociety from "../../assets/images/Societies/IEEE-CS_LogoTM_black.png";
import roboticsSociety from "../../assets/images/Societies/IEEE-Robotics.png";
import sight from "../../assets/images/Societies/sight.png";
import entrepreneurship from "../../assets/images/Societies/IEEE-Promotion-of-Innovation-Entreprenuership-PIE-Kerala-Section-Logo-removebg-preview.png";
import antennas from "../../assets/images/Societies/ieee-antennas.png";
import cas from "../../assets/images/Societies/ies.png";
import photonics from "../../assets/images/Societies/ieee-photonics.png";
import mtts from "../../assets/images/Societies/ieee-mtts.png";
import rfid from "../../assets/images/Societies/ieee-rfid.png";
import ias from "../../assets/images/Societies/ias.png";
import comsoc from "../../assets/images/Societies/ieee-comsoc.png";
import embs from "../../assets/images/Societies/ieee-emb.png";
import signalProcessing from "../../assets/images/Societies/ieee-signal-processing.png";
import pes from "../../assets/images/Societies/IEEE-PES.png";
import education from "../../assets/images/Societies/ieee-edsoc-color-logo-forweb.webp";
import grss from "../../assets/images/Societies/grss.png";
import ssit from "../../assets/images/Societies/ieee-ssit.png";

const Societies = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          headerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-grid");
          const cards = entry.target.querySelectorAll(".society-item");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("pop-in");
            }, index * 100);
          });
          gridObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (gridRef.current) gridObserver.unobserve(gridRef.current);
    };
  }, []);

  const societies = [
    { logo: computerSociety, alt: "IEEE Computer Society" },
    { logo: roboticsSociety, alt: "IEEE Robotics & Automation Society" },
    { logo: ias, alt: "IEEE Industry Applications Society" },
    { logo: pes, alt: "IEEE Power & Energy Society" },
    { logo: sight, alt: "IEEE SIGHT" },
    { logo: entrepreneurship, alt: "IEEE Entrepreneurship" },
    { logo: comsoc, alt: "IEEE Communications Society" },
    { logo: education, alt: "IEEE Education Society" },
    { logo: antennas, alt: "IEEE Antennas and Propagation Society" },
    { logo: cas, alt: "IEEE Circuits and Systems Society" },
    { logo: embs, alt: "IEEE Engineering in Medicine & Biology Society" },
    { logo: grss, alt: "IEEE Geoscience & Remote Sensing Society" },
    { logo: photonics, alt: "IEEE Photonics Society" },
    { logo: mtts, alt: "IEEE Microwave Theory and Techniques Society" },
    { logo: signalProcessing, alt: "IEEE Signal Processing Society" },
    { logo: ssit, alt: "IEEE Society on Social Implications of Technology" },
    { logo: rfid, alt: "IEEE RFID" },
  ];

  return (
    <section className='societies-section' ref={sectionRef}>
      <div className='societies-container'>
        <div className='societies-header' ref={headerRef}>
          <span className='subtitle animate-item'>OUR SOCIETIES</span>
          <h2 className='animate-item'>
            GET INVOLVED WITH OUR DYNAMIC SOCIETIES
          </h2>
          <div className='underline animate-item'></div>
          <p className='description animate-item'>
            IEEE Society members stay technically current, network with
            colleagues locally and abroad, and collaborate on research and
            projects with leading experts all while taking advantage of
            specialized opportunities.
          </p>
          <p className='sub-description animate-item'>
            IEEE develops communities around particular technology challenges or
            cutting-edge subject areas. Their areas of coverage may be general
            in nature, which include multi-disciplinary topics or emerging
            concepts. Discover which Technical Community best matches your
            interests.
          </p>
        </div>
        <div className='societies-grid' ref={gridRef}>
          {societies.map((society, index) => (
            <div
              key={index}
              className='society-item'
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className='card-inner'>
                <img src={society.logo} alt={society.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Societies;
