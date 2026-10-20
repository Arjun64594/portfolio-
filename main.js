/* ==========================================================================
   ARJUN M - INTERACTIVE SCRIPT & TERMINAL SHELL ENGINE
   Features:
   - 60FPS Cyber Matrix Particle Canvas
   - Role Typewriter Effect
   - Categorized Skill Cards & Animated Progress Bars
   - Interactive Terminal Shell Engine (arjun-shell v2.4)
   - Project Case Study Modal Viewer
   - Stats Counter Animation
   - Form Handling & Toast Feedback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCyberCanvas();
  initTypewriter();
  initNavigation();
  initSkillsMatrix();
  initTerminalShell();
  initProjectsModal();
  initStatsCounter();
  initContactForm();
  initBackToTop();
  initYear();
});

/* --------------------------------------------------------------------------
   1. Interactive 60FPS Cyber Matrix Canvas
   -------------------------------------------------------------------------- */
function initCyberCanvas() {
  const canvas = document.getElementById('cyberMatrixCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 65);

  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.6 ? '#CCFF00' : '#38BDF8';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2.5;
          this.y -= Math.sin(angle) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 135) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / 135) * 0.22;
          ctx.strokeStyle = particles[i].color === '#CCFF00' 
            ? `rgba(204, 255, 0, ${alpha})` 
            : `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
}

/* --------------------------------------------------------------------------
   2. Dynamic Typewriter Effect for Tri-Roles
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const elem = document.getElementById('typedElement');
  if (!elem) return;

  const roles = [
    "Full Stack Developer",
    "Cyber Security Enthusiast",
    "Frontend Designer",
    "Web Security Engineer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 90;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      elem.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 45;
    } else {
      elem.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. Header Navigation & Active Tracking
   -------------------------------------------------------------------------- */
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const items = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');
  const quickTerminalBtn = document.getElementById('quickTerminalBtn');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    items.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  if (quickTerminalBtn) {
    quickTerminalBtn.addEventListener('click', () => {
      const term = document.getElementById('terminal');
      if (term) term.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const inp = document.getElementById('terminalInput');
        if (inp) inp.focus();
      }, 500);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        items.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* --------------------------------------------------------------------------
   4. Categorized Skills Matrix Data & Renderer
   -------------------------------------------------------------------------- */
const skillsData = [
  // Full Stack
  { name: 'JavaScript / TypeScript', category: 'fullstack', level: 95, icon: 'fa-brands fa-js' },
  { name: 'React & Next.js 14', category: 'fullstack', level: 94, icon: 'fa-brands fa-react' },
  { name: 'Node.js & Express APIs', category: 'fullstack', level: 92, icon: 'fa-brands fa-node-js' },
  { name: 'PostgreSQL & MongoDB', category: 'fullstack', level: 88, icon: 'fa-solid fa-database' },

  // Cyber Security
  { name: 'Penetration Testing & SAST', category: 'cyber', level: 90, icon: 'fa-solid fa-user-ninja' },
  { name: 'OAuth2 / JWT Auth Hardening', category: 'cyber', level: 93, icon: 'fa-solid fa-key' },
  { name: 'OWASP Top 10 Auditing', category: 'cyber', level: 95, icon: 'fa-solid fa-shield-halved' },
  { name: 'Network Protocol Analysis', category: 'cyber', level: 86, icon: 'fa-solid fa-network-wired' },

  // Frontend & Design
  { name: 'HTML5 & CSS3 Glassmorphism', category: 'frontend', level: 98, icon: 'fa-brands fa-css3-alt' },
  { name: 'Awwwards UI & Animations', category: 'frontend', level: 92, icon: 'fa-solid fa-wand-magic-sparkles' },
  { name: 'Figma & Visual Systems', category: 'frontend', level: 88, icon: 'fa-brands fa-figma' },
  { name: 'Docker & Microservices Mesh', category: 'fullstack', level: 84, icon: 'fa-brands fa-docker' }
];

function initSkillsMatrix() {
  const grid = document.getElementById('skillsGrid');
  const tabs = document.querySelectorAll('.filter-tabs .tab-pill');
  if (!grid) return;

  function render(cat = 'all') {
    grid.innerHTML = '';

    const filtered = cat === 'all' 
      ? skillsData 
      : skillsData.filter(s => s.category === cat);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'glass-card skill-card-glass';
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-icon-box">
            <i class="${skill.icon}"></i>
          </div>
          <div class="skill-title-group">
            <h4>${skill.name}</h4>
            <span class="skill-category-tag">${skill.category}</span>
          </div>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" data-level="${skill.level}"></div>
        </div>
      `;
      grid.appendChild(card);
    });

    setTimeout(animateSkillFills, 100);
  }

  function animateSkillFills() {
    const fills = document.querySelectorAll('.skill-progress-fill');
    fills.forEach(f => {
      const l = f.getAttribute('data-level');
      f.style.width = `${l}%`;
    });
  }

  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      t.classList.add('active');
      render(t.getAttribute('data-filter'));
    });
  });

  render('all');
}

/* --------------------------------------------------------------------------
   5. Interactive Terminal Shell Engine (arjun-shell v2.4)
   -------------------------------------------------------------------------- */
function initTerminalShell() {
  const input = document.getElementById('terminalInput');
  const body = document.getElementById('terminalBody');
  if (!input || !body) return;

  const commandHistory = [];
  let historyIdx = -1;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (cmd !== '') {
        commandHistory.push(cmd);
        historyIdx = commandHistory.length;
        appendOutput(`arjun@security-node:~$ ${cmd}`, 'prompt');
        executeCommand(cmd.toLowerCase());
        input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        input.value = commandHistory[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < commandHistory.length - 1) {
        historyIdx++;
        input.value = commandHistory[historyIdx];
      } else {
        historyIdx = commandHistory.length;
        input.value = '';
      }
    }
  });

  function appendOutput(text, type = 'normal') {
    const div = document.createElement('div');
    div.className = 'terminal-output-line';
    if (type === 'prompt') {
      div.style.color = 'var(--text-white)';
      div.style.fontWeight = 'bold';
    } else if (type === 'lime') {
      div.style.color = 'var(--accent-neon-lime)';
    } else if (type === 'blue') {
      div.style.color = 'var(--secondary-soft-blue)';
    }
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function executeCommand(cmd) {
    switch (cmd) {
      case 'help':
        appendOutput(`Available CLI Commands:
  help           - Display command directory
  whoami         - Print identity & security profile
  skills         - Output technical matrix
  projects       - Display featured case studies
  security-scan  - Execute live system vulnerability diagnostic
  contact        - Scroll to transmission section
  clear          - Clear terminal screen`, 'lime');
        break;

      case 'whoami':
      case 'sudo bio':
        appendOutput(`NAME       : ARJUN M
ROLES      : Senior Full Stack Developer | Cyber Security Enthusiast | Frontend Designer
STATUS     : Security Verified • Open for Select Projects & Roles
LOCATION   : Bengaluru, IST (UTC+5:30)
PHILOSOPHY : "Architecting resilient systems with pixel-perfect design and proactive security posture."`, 'blue');
        break;

      case 'skills':
        appendOutput(`TECHNICAL MATRIX:
[Full Stack]    React, Next.js 14, Node.js, Express, PostgreSQL, MongoDB, TypeScript
[Cyber Security] Penetration Testing, OWASP Top 10, OAuth2/JWT Hardening, SAST/DAST
[Frontend/UX]   Awwwards UI, Glassmorphism, CSS Custom Properties, Figma, Motion`, 'lime');
        break;

      case 'projects':
        appendOutput(`FEATURED CASE STUDIES:
1. Quantum Insights Security Dashboard (AI & Threat Telemetry)
2. Vogue Noir Luxury E-Commerce (Next.js 14 & Stripe PCI)
3. CloudOps Node Visualizer (Kubernetes Security Mesh)`, 'blue');
        break;

      case 'security-scan':
        runSecurityScan();
        break;

      case 'contact':
        appendOutput(`Navigating to Contact Section...`, 'lime');
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        break;

      case 'clear':
        body.innerHTML = '';
        appendOutput(`ARJUN M Security CLI Workspace [Version 2.4.0-release]`, 'lime');
        break;

      default:
        appendOutput(`Command not recognized: '${cmd}'. Type 'help' for directory.`, 'normal');
        break;
    }
  }

  function runSecurityScan() {
    appendOutput(`[+] Initializing live system diagnostic on arjun-node...`, 'lime');
    const steps = [
      `[1/4] Checking SSL/TLS protocol cipher suites... [PASSED - TLS 1.3]`,
      `[2/4] Scanning API endpoints against OWASP Top 10 vulnerabilities... [CLEAN - 0 VULNS]`,
      `[3/4] Verifying JWT token validation & rate-limiting middleware... [ENFORCED]`,
      `[4/4] Auditing Content Security Policy & CORS headers... [COMPLIANT]`,
      `[✔] SECURITY DIAGNOSTIC COMPLETE: System health score 100/100.`
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        appendOutput(step, idx === steps.length - 1 ? 'lime' : 'blue');
      }, (idx + 1) * 600);
    });
  }
}

/* --------------------------------------------------------------------------
   6. Project Modal Popup & Case Studies
   -------------------------------------------------------------------------- */
const projectsData = [
  {
    title: "Quantum Insights Security Dashboard",
    image: "assets/project1.jpg",
    tags: ["Cyber Security", "React", "Node.js", "Recharts"],
    desc: "Real-time threat monitoring platform designed to analyze high-scale network traffic, detect anomalies via machine learning models, and enforce automated IP rate-limiting.",
    highlights: [
      "Sub-50ms WebSocket streaming telemetry visualizer.",
      "Custom threat score algorithm with OWASP rule triggers.",
      "Dark glassmorphism UI achieving 99% Lighthouse performance score.",
      "Multi-factor RBAC authentication with JWT security tokens."
    ]
  },
  {
    title: "Vogue Noir E-Commerce Platform",
    image: "assets/project2.jpg",
    tags: ["Full Stack", "Next.js 14", "Stripe", "Prisma"],
    desc: "Awwwards-inspired luxury fashion web app optimized for instant server-side rendering, frictionless product gallery transitions, and secure payment processing.",
    highlights: [
      "Next.js 14 App Router with instant page caching.",
      "PCI-DSS compliant Stripe checkout integration.",
      "Real-time inventory synchronization & faceted search.",
      "High-contrast dark luxury aesthetic with smooth micro-interactions."
    ]
  },
  {
    title: "CloudOps Security Node Visualizer",
    image: "assets/project3.jpg",
    tags: ["DevOps", "Docker", "Kubernetes", "gRPC"],
    desc: "Distributed system visualizer enabling cloud security engineers to inspect microservices topology, isolate infected pods, and trace request bottlenecks in real time.",
    highlights: [
      "Topological graph visualizer for Kubernetes cluster nodes.",
      "Automated container isolation triggers on high CPU/RAM anomalies.",
      "gRPC metric ingestion handling 50k events per second.",
      "One-click pod terminal console & log stream viewer."
    ]
  }
];

function initProjectsModal() {
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalCloseBtn');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (btn) {
      const idx = btn.getAttribute('data-project');
      if (idx !== null && projectsData[idx]) {
        openModal(projectsData[idx]);
      }
    }
  });

  function openModal(data) {
    if (!modal || !body) return;

    body.innerHTML = `
      <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem; border: 1px solid var(--border-lime-glow);">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
        ${data.tags.map(t => `<span class="tag-lime">${t}</span>`).join('')}
      </div>
      <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #fff;">${data.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.7;">${data.desc}</p>
      
      <h4 style="color: var(--accent-neon-lime); margin-bottom: 0.75rem; font-family: var(--font-mono);">[ KEY_SECURITY_&_STACK_HIGHLIGHTS ]</h4>
      <ul style="color: var(--text-muted); padding-left: 1.25rem; margin-bottom: 2rem; line-height: 1.8;">
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="#" class="btn-neon" onclick="alert('Live demo environment launched!'); return false;">
          <i class="fa-solid fa-globe"></i> Live Production Demo
        </a>
        <a href="#" class="btn-glass" onclick="alert('Repository access requested.'); return false;">
          <i class="fa-brands fa-github"></i> Inspect Source Repository
        </a>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* --------------------------------------------------------------------------
   7. Animated Stats Counter
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-val[data-target]');
  if (!stats.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              stat.textContent = target + "+";
              clearInterval(timer);
            } else {
              stat.textContent = current;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.5 });

  const about = document.getElementById('about');
  if (about) observer.observe(about);
}

/* --------------------------------------------------------------------------
   8. Contact Form & Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('cyberContactForm');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    showToast(`Transmission received! Thank you, ${name}.`);
    form.reset();
  });

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* --------------------------------------------------------------------------
   9. Floating Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initYear() {
  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
}
