/* ==========================================================================
   APP INITIALIZATION & DYNAMIC RENDERING — MOHAMED SHEHAB GAAFAR PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-active');

  const data = window.portfolioData || {};
  const skillsData = data.skillsData || [];
  const certificationsData = data.certificationsData || [];
  const currentTrainingData = data.currentTrainingData || [];
  const bugHuntingData = data.bugHuntingData || {};
  const experienceData = data.experienceData || [];
  const consoleScript = data.consoleScript || [];

  renderSkills(skillsData);
  renderCertifications(certificationsData);
  renderCurrentlyLearning(currentTrainingData);
  renderExperienceTimeline(experienceData);
  renderBugHuntingStats(bugHuntingData);
  initSecurityConsole(consoleScript);
  initNavigation();
  initContactSmoothScroll();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. RENDER SKILLS
   -------------------------------------------------------------------------- */
function renderSkills(skillsData) {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  container.innerHTML = skillsData.map(cat => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <div class="skill-category-icon">${cat.icon}</div>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      <div class="skill-chips-container">
        ${cat.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   2. RENDER 3D FLIP CERTIFICATIONS (Without visible Flip label or emoji)
   -------------------------------------------------------------------------- */
function renderCertifications(certificationsData) {
  const container = document.getElementById('certifications-grid-container');
  if (!container) return;

  container.innerHTML = certificationsData.map(cert => `
    <div class="flip-card" id="cert-card-${cert.id}">
      <div class="flip-card-inner">
        <!-- Front Face -->
        <div class="flip-card-front">
          <div class="cert-image-frame">
            <img src="${cert.image}" alt="${cert.title} Certificate" loading="lazy" />
          </div>
          <div class="cert-front-meta">
            <div>
              <h3 class="cert-front-title">${cert.title}</h3>
              <p class="cert-front-org">${cert.organization}</p>
            </div>
          </div>
        </div>
        <!-- Back Face -->
        <div class="flip-card-back">
          <div class="cert-back-header">
            <h3 class="cert-back-title">${cert.title}</h3>
            <p class="cert-back-org">${cert.organization}</p>
          </div>
          <div class="cert-back-details">
            ${cert.credentialId ? `
            <div class="cert-detail-row">
              <span class="cert-detail-label">Credential ID:</span>
              <span class="cert-detail-value cert-code">${cert.credentialId}</span>
            </div>` : ''}
            ${cert.signedBy ? `
            <div class="cert-detail-row">
              <span class="cert-detail-label">Signed By:</span>
              <span class="cert-detail-value">${cert.signedBy}</span>
            </div>` : ''}
            <div class="cert-detail-row">
              <span class="cert-detail-label">Duration:</span>
              <span class="cert-detail-value">${cert.duration}</span>
            </div>
            <div class="cert-detail-row">
              <span class="cert-detail-label">Issued / Completed:</span>
              <span class="cert-detail-value">${cert.completionDate}</span>
            </div>
            <div class="cert-detail-row">
              <span class="cert-detail-label">Status:</span>
              <span class="status-badge completed">${cert.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.initFlipCards) {
    window.initFlipCards();
  }
}

/* --------------------------------------------------------------------------
   3. RENDER CURRENTLY LEARNING
   -------------------------------------------------------------------------- */
function renderCurrentlyLearning(currentTrainingData) {
  const container = document.getElementById('learning-grid-container');
  if (!container) return;

  container.innerHTML = currentTrainingData.map(item => `
    <div class="learning-card">
      <div class="learning-card-top">
        <div>
          <h3 class="learning-title">${item.title}</h3>
          <p class="learning-org">${item.organization}</p>
        </div>
        <div class="learning-logo-wrapper">
          <img src="${item.logo}" alt="${item.organization} logo" loading="lazy" />
        </div>
      </div>
      <div>
        <span class="status-badge in-progress">● ${item.status}</span>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. RENDER EXPERIENCE & JOURNEY TIMELINE
      Organization on top (prominent), Role/Degree underneath
   -------------------------------------------------------------------------- */
function renderExperienceTimeline(experienceData) {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = experienceData.map(exp => `
    <div class="timeline-item ${exp.isEducation ? 'timeline-item-edu' : ''}">
      <div class="timeline-header-block">
        <h4 class="timeline-org">${exp.organization}</h4>
        <p class="timeline-role">${exp.role}</p>
      </div>
      <p class="timeline-date">${exp.period}</p>
      <ul class="timeline-bullets">
        ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. RENDER BUG HUNTING STATS
   -------------------------------------------------------------------------- */
function renderBugHuntingStats(bugHuntingData) {
  const container = document.getElementById('bug-hunting-counters');
  if (!container) return;

  container.innerHTML = `
    <div class="counter-box">
      <span class="counter-number">${bugHuntingData.findings}</span>
      <span class="counter-label">Valid Findings</span>
    </div>
    <div class="counter-box">
      <span class="counter-number">${bugHuntingData.writeups}</span>
      <span class="counter-label">Published Writeups</span>
    </div>
    <div class="counter-box">
      <span class="counter-number active-status">${bugHuntingData.status}</span>
      <span class="counter-label">Lab Practice Status</span>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   6. SELF-TYPING CYBERSECURITY OPS CONSOLE
   -------------------------------------------------------------------------- */
function initSecurityConsole(lines) {
  const container = document.getElementById('security-console-lines');
  if (!container || !lines || lines.length === 0) return;

  container.innerHTML = '';
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      // Finished all lines: create a blinking cursor block on the last line
      const activeLine = container.lastElementChild;
      if (activeLine && !activeLine.querySelector('.console-cursor')) {
        const cursor = document.createElement('span');
        cursor.className = 'console-cursor';
        cursor.textContent = ' █';
        activeLine.appendChild(cursor);
      }
      return;
    }

    const item = lines[lineIndex];
    const lineEl = document.createElement('div');
    lineEl.className = 'console-line';

    const tagEl = document.createElement('span');
    tagEl.className = `console-tag ${item.tagClass}`;
    tagEl.textContent = `[${item.tag}]`;

    const textEl = document.createElement('span');
    textEl.className = 'console-text';

    const cursorEl = document.createElement('span');
    cursorEl.className = 'console-cursor-typing';
    cursorEl.textContent = '█';

    lineEl.appendChild(tagEl);
    lineEl.appendChild(document.createTextNode(' '));
    lineEl.appendChild(textEl);
    lineEl.appendChild(cursorEl);
    container.appendChild(lineEl);

    // Auto-scroll inside console if needed
    container.scrollTop = container.scrollHeight;

    let charIndex = 0;
    const fullText = item.text;

    function typeChar() {
      if (charIndex < fullText.length) {
        textEl.textContent += fullText.charAt(charIndex);
        charIndex++;
        // Slight natural variance in typing speed
        const delay = Math.floor(Math.random() * 20) + 20;
        setTimeout(typeChar, delay);
      } else {
        // Line complete: remove typing cursor from this line
        lineEl.removeChild(cursorEl);
        lineIndex++;
        setTimeout(typeLine, 320);
      }
    }

    typeChar();
  }

  // Slight initial delay after DOM load before typing starts
  setTimeout(typeLine, 400);
}

/* --------------------------------------------------------------------------
   7. NAVIGATION & ACTIVE LINK HIGHLIGHTING
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('nav-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (navToggle && drawer && overlay) {
    const toggleMenu = (state) => {
      drawer.classList.toggle('open', state);
      overlay.classList.toggle('open', state);
      document.body.style.overflow = state ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      toggleMenu(!isOpen);
    });

    overlay.addEventListener('click', () => toggleMenu(false));

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // Navbar scroll background effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Section observer for desktop nav active states
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT STRIP SMOOTH SCROLL
   -------------------------------------------------------------------------- */
function initContactSmoothScroll() {
  const contactLinks = document.querySelectorAll('a[href="#contact"]');
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.getElementById('contact');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '#contact');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. SCROLL ANIMATIONS (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}
