import React from 'react';
import './Finalist.css';

const teams = [
  { name: 'Team Cipher',      leader: 'Sameer',              college: 'HKBK College Of Engineering' },
  { name: 'Technocrats',      leader: 'Tanmay',              college: 'NIT, Goa' },
  { name: 'Four Dimensions',  leader: 'Advaith Acharya',     college: 'SMVITM, Bhantakal' },
  { name: 'Tech Mafia',       leader: 'Ananya',              college: 'P. A College of Engineering' },
  { name: 'TEAM ZeroPoint',   leader: 'Afeef',               college: 'Yenepoya Institute of Technology' },
  { name: 'VOX',              leader: 'Khushi',              college: 'NMAMIT' },
  { name: 'StackMates',       leader: 'Rose',                college: 'Christ College Of Engineering (Autonomous), Kerala' },
  { name: 'Token Burners',    leader: 'Mohammed Sowhan',     college: 'NMAMIT, Nitte' },
  { name: 'Four Loops',       leader: 'Mohammad Adnan',      college: 'Yenepoya Institute of Technology' },
  { name: 'Flawless',         leader: 'Anirudh',             college: 'Yenepoya Institute of Technology' },
  { name: 'The Commitments',  leader: 'Krishiv',             college: 'Rajalakshmi Engineering College' },
  { name: 'YentraAI',         leader: 'Aafaq',               college: 'Sri Siddhartha School of Engineering' },
  { name: 'TEAM PRAHARA',     leader: 'Prarthan',            college: 'Sahyadri College of Engineering and Management' },
  { name: 'SEPHIROTH',        leader: 'Arjun',               college: 'AJIET' },
  { name: 'Code X',           leader: 'Lokesh M M',          college: 'Malnad College of Engineering' },
  { name: 'Tech Vault',       leader: 'Alimath',             college: 'P. A College of Engineering' },
  { name: 'TEAM ASTRA',       leader: 'Dheeraj',             college: 'Canara Engineering College' },
  { name: 'Sizeof(int)',       leader: 'Lakshminarayan',      college: 'NMAMIT' },
  { name: 'Byte Builders',    leader: 'Sahana',              college: 'Sahyadri College of Engineering and Management' },
  { name: 'Team Busters',     leader: 'Seemanth',            college: 'MITE' },
  { name: 'TEAM ACCIO',       leader: 'Saurabh',             college: 'Walchand Institute of Technology, Solapur' },
  { name: 'CYBER SPARKS',     leader: 'Gowtham Karthik',     college: 'Sree Saraswati Thyagaraja College, Pollachi' },
  { name: 'TOM',              leader: 'Olivia',              college: 'Christ College Of Engineering (Autonomous), Kerala' },
  { name: 'KIWAMI',           leader: 'Pratik Singal',       college: 'NIT, Goa' },
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
    </section>
  );
};

export default Finalist;
