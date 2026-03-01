import React from 'react';

const CoOd = () => {
  const handleMouseEnter = (e) => {
    const parent = e.currentTarget.closest('.heading-mask');
    if (parent) parent.classList.add('is-hover');
  };

  const handleMouseLeave = (e) => {
    const parent = e.currentTarget.closest('.heading-mask');
    if (parent) parent.classList.remove('is-hover');
  };

  return (
    <section className="cood-section" id="cood">
      <span className="section-label js-cursor-extend-sm">CO-OD</span>
      <div className="cood-list">
        {/* Staff Row */}
        <div className="heading-mask js-simple-masking_el">
          <div 
            className="heading-mask_el heading-mask_el__deep"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="cood-row">
              <div className="cood-label">Staff</div>
              <div className="cood-content">
                <h4>Abdul Majeed</h4>
                <h4>Ramya A</h4>
                <h4>Safmina PK</h4>
              </div>
            </div>
          </div>
          <div className="heading-mask_el heading-mask_el__masking">
            <div className="cood-row text-dark">
              <div className="cood-label">Staff</div>
              <div className="cood-content">
                <h4>Abdul Majeed</h4>
                <h4>Ramya A</h4>
                <h4>Safmina PK</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Student Row */}
        <div className="heading-mask js-simple-masking_el">
          <div 
            className="heading-mask_el heading-mask_el__deep"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="cood-row">
              <div className="cood-label">Student</div>
              <div className="cood-content">
                <h4>Vyshnav</h4>
                <h4>Vaibhav</h4>
                <h4>Saima</h4>
              </div>
            </div>
          </div>
          <div className="heading-mask_el heading-mask_el__masking">
            <div className="cood-row text-dark">
              <div className="cood-label">Student</div>
              <div className="cood-content">
                <h4>Vyshnav</h4>
                <h4>Vaibhav</h4>
                <h4>Saima</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoOd;
