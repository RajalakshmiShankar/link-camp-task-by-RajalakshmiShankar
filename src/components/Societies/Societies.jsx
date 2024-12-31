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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
        <div className='societies-header'>
          <span className='subtitle'>OUR SOCIETIES</span>
          <h2>GET INVOLVED WITH OUR DYNAMIC SOCIETIES</h2>
          <div className='underline'></div>
          <p className='description'>
            IEEE Society members stay technically current, network with
            colleagues locally and abroad, and collaborate on research and
            projects with leading experts all while taking advantage of
            specialized opportunities.
          </p>
          <p className='sub-description'>
            IEEE develops communities around particular technology challenges or
            cutting-edge subject areas. Their areas of coverage may be general
            in nature, which include multi-disciplinary topics or emerging
            concepts. Discover which Technical Community best matches your
            interests.
          </p>
        </div>
        <div className='societies-grid'>
          {societies.map((society, index) => (
            <div key={index} className='society-item'>
              <img src={society.logo} alt={society.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Societies;
