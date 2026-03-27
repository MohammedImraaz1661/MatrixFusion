import React from 'react';
import './Finalist.css';

const teams = [
  { name: 'Team Cipher',      leader: 'Sameer',              college: 'HKBK College Of Engineering, Bengaluru' },
  { name: 'Technocrats',      leader: 'Tanmay',              college: 'NIT, Goa' },
  { name: 'Four Dimensions',  leader: 'Advaith Acharya',     college: 'SMVITM, Bhantakal' },
  { name: 'Tech Mafia',       leader: 'Ananya',              college: 'P. A College of Engineering, Mangalore' },
  { name: 'TEAM ZeroPoint',   leader: 'Afeef',               college: 'Yenepoya Institute of Technology, Moodbidri' },
  { name: 'VOX',              leader: 'Ekaansh',             college: 'NMAMIT, Nitte' },
  { name: 'Token Burners',    leader: 'Mohammed Sowhan',     college: 'NMAMIT, Nitte' },
  { name: 'Four Loops',       leader: 'Mohammad Adnan',      college: 'Yenepoya Institute of Technology, Moodbidri' },
  { name: 'Flawless',         leader: 'Anirudh',             college: 'Yenepoya Institute of Technology, Moodbidri' },
  { name: 'The Commitments',  leader: 'Krishiv',             college: 'Rajalakshmi Engineering College, Chennai' },
  { name: 'YentraAI',         leader: 'Aafaq',               college: 'Sri Siddhartha School of Engineering, Tumkur' },
  { name: 'TEAM PRAHARA',     leader: 'Sumangala',          college: 'Sahyadri College of Engineering and Management, Mangalore' },
  { name: 'SEPHIROTH',        leader: 'Arjun',               college: 'AJIET, Mangalore' },
  { name: 'Code X',           leader: 'Lokesh M M',          college: 'Malnad College of Engineering, Hassan' },
  { name: 'Tech Vault',       leader: 'Alimath',             college: 'P. A College of Engineering, Mangalore' },
  { name: 'TEAM ASTRA',       leader: 'Dheeraj',             college: 'Canara Engineering College, Mangalore' },
  { name: 'Sizeof(int)',      leader: 'Lakshminarayan',      college: 'NMAMIT, Nitte' },
  { name: 'Byte Builders',    leader: 'Sahana',              college: 'Sahyadri College of Engineering and Management, Mangalore' },
  { name: 'Team Busters',     leader: 'Seemanth',            college: 'MITE, Moodbidri' },
  { name: 'TEAM ACCIO',       leader: 'Saurabh',             college: 'Walchand Institute of Technology, Maharashtra' },
  { name: 'CYBER SPARKS',     leader: 'Gowtham Karthik',     college: 'Sree Saraswati Thyagaraja College, Tamil Nadu' },
  { name: 'Last Shadow',      leader: 'Aishwarya R',         college: 'Rajalakshmi Engineering College, Chennai' },
  { name: 'NeuroNinjas',      leader: 'Haneefa Riham',       college: 'St Joseph Engineering College, Mangalore' },
  { name: 'Zliqit',           leader: 'Bathmesh S',          college: 'Sree Saraawathi Thyagaraja College, Tamil Nadu' },
];

const Finalist = () => {
  const handleMouseEnter = (e) => {
    const parent = e.currentTarget.closest('.heading-mask');
    if (parent) parent.classList.add('is-hover');
  };

  const handleMouseLeave = (e) => {
    const parent = e.currentTarget.closest('.heading-mask');
    if (parent) parent.classList.remove('is-hover');
  };

  return (
    <section className="finalist-section" id="finalist-section">
      <span className="section-label js-cursor-extend-sm">FINALISTS</span>

      {/* ── Desktop: animated heading-mask table ── */}
      <div className="finalist-desktop">
        <div className="finalist-header">
          <span className="finalist-col finalist-col--name">Team</span>
          <span className="finalist-col finalist-col--leader">Leader</span>
          <span className="finalist-col finalist-col--college">Institution</span>
        </div>

        <div className="finalist-list">
          {teams.map((team, i) => (
            <div className="heading-mask js-simple-masking_el" key={i}>
              {/* Deep layer — shown by default */}
              <div
                className="heading-mask_el heading-mask_el__deep"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="finalist-row">
                  <span className="finalist-col finalist-col--name finalist-placeholder">
                    Team {i + 1}
                  </span>
                  <span className="finalist-col finalist-col--leader finalist-placeholder">—</span>
                  <span className="finalist-col finalist-col--college finalist-placeholder">—</span>
                </div>
              </div>

              {/* Masking layer — revealed on hover */}
              <div className="heading-mask_el heading-mask_el__masking">
                <div className="finalist-row text-dark">
                  <span className="finalist-col finalist-col--name finalist-team-name">
                    {team.name}
                  </span>
                  <span className="finalist-col finalist-col--leader finalist-leader">
                    {team.leader}
                  </span>
                  <span className="finalist-col finalist-col--college finalist-college">
                    {team.college}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: stacked card list, no animation ── */}
      <div className="finalist-mobile-list">
        {teams.map((team, i) => (
          <div className="finalist-mobile-card" key={i}>
            <div className="finalist-mobile-top">
              <span className="finalist-mobile-name">{team.name}</span>
              <span className="finalist-mobile-leader">{team.leader}</span>
            </div>
            <div className="finalist-mobile-college">{team.college}</div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="finalist-note">
        <span>Note —</span> All the selected teams for the Matrix Fusion 4.0, 24 Hour National Level Hackathon have to be registered by paying a Registration amount of <span>Rs. 600</span> on or before <span>28th March 2026 midnight</span>.
      </p>
    </section>
  );
};

export default Finalist;
