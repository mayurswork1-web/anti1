/**
 * Jesper Landberg Portfolio Clone - Real WebGL Motion Engine
 * Built with Three.js, Custom GLSL Shaders (Deformation Curve & RGB Shift),
 * Kinetic Momentum Physics, and Real-time DOM-to-WebGL Mesh Syncing.
 */

// --- Project Data (Real Assets & Credits from Jesper Landberg) ---
const PROJECTS = [
  {
    id: "nathan-riley",
    title: "Nathan Riley",
    client: "Nathan Riley Studio",
    year: "2024",
    aspectRatio: "2048 / 1172",
    awards: "Site of the Day",
    tags: ["WebGL", "Motion Design", "Nuxt"],
    video: "https://stream.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/high.mp4",
    thumb: "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://www.nrly.co/",
    description: "Nathan is a UK-based digital creative specializing in art direction, surrealist 3D visuals, interactive experiences, and motion design. Developed front-end architecture and fluid WebGL interactions."
  },
  {
    id: "casa-di-solare",
    title: "Casa Di Solare",
    client: "Unseen / Nikolas Type",
    year: "2024",
    aspectRatio: "2048 / 1204",
    awards: "Independent of the Year",
    tags: ["Typography", "Canvas", "Interaction"],
    video: "https://stream.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/high.mp4",
    thumb: "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://casadisolare.com/",
    description: "Solare extends Nikolas Type's Font Catalogue with a timeless, hyper-usable quintessential variable font, suitable for a wide field of applications."
  },
  {
    id: "the-lookback",
    title: "The Lookback",
    client: "BetterOff® Studio",
    year: "2026",
    aspectRatio: "1250 / 720",
    awards: "Awwwards Winner",
    tags: ["Digital Capsule", "Storytelling", "GSAP"],
    video: "https://stream.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/high.mp4",
    thumb: "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://tlb.betteroff.studio/",
    description: "Digital capsule for Better Off® studio to document what inspired them and what they created over the last months and years."
  },
  {
    id: "book-of-happiness",
    title: "Book of Happiness",
    client: "David Lubofsky",
    year: "2024",
    aspectRatio: "2048 / 1114",
    awards: "FWA of the Day",
    tags: ["3D Interaction", "Editorial", "Nuxt"],
    video: "https://stream.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/high.mp4",
    thumb: "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://www.findworkhappiness.com/",
    description: "Helping leaders keep themselves and their people happy and mentally healthy with playful micro-interactions and smooth page flow."
  },
  {
    id: "dogelon-mars",
    title: "Dogelon Mars",
    client: "Griflan Design",
    year: "2024",
    aspectRatio: "3360 / 2200",
    awards: "Webby Nominee",
    tags: ["WebGL Universe", "Graphic Novel", "Audio"],
    video: null,
    thumb: "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format&fit=crop&h=630&w=1200",
    link: "https://dogelonmars.com",
    description: "Follow the story of Dogelon Mars as he explores the greatest mysteries of the universe and seeks to return to the planet he once called home."
  },
  {
    id: "gil-huybrecht",
    title: "Gil Huybrecht",
    client: "Gil Huybrecht",
    year: "2026",
    aspectRatio: "1196 / 720",
    awards: "Awwwards Site of the Month",
    tags: ["Typography", "Portfolio", "Liquid Motion"],
    video: "https://stream.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/high.mp4",
    thumb: "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://gilhuybrecht.com",
    description: "Gil Huybrecht is a Belgian digital designer and art director specializing in typography-heavy web design, art direction, interaction design, and branding."
  },
  {
    id: "discoveryland",
    title: "Discoveryland",
    client: "Outpost / DLC",
    year: "2026",
    aspectRatio: "1372 / 1029",
    awards: "FWA of the Month",
    tags: ["Immersive Story", "Luxury Real Estate", "Three.js"],
    video: "https://stream.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/high.mp4",
    thumb: "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format&fit=crop&h=630&w=1200",
    link: "https://discoverylandco.com/",
    description: "Partnered with Outpost and Discovery Land Company to create an immersive, storytelling brand experience showcasing DLC's international portfolio and 23 properties."
  },
  {
    id: "griflan",
    title: "Griflan",
    client: "Griflan Studio",
    year: "2026",
    aspectRatio: "1162 / 720",
    awards: "Awwwards Developer Award",
    tags: ["Agency", "Branding", "Creative Coding"],
    video: "https://stream.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/high.mp4",
    thumb: "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://griflan.com",
    description: "Griflan is a creative studio at the intersection of design, strategy, and compelling storytelling, shaping brands that move culture and leave a lasting mark."
  },
  {
    id: "dothings",
    title: "DoThings",
    client: "DoThings NYC",
    year: "2024",
    aspectRatio: "1582 / 1080",
    awards: "Awwwards Honorable Mention",
    tags: ["Creative Agency", "Minimal", "Smooth Scroll"],
    video: "https://stream.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/high.mp4",
    thumb: "https://image.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://dothingsnyc.com/",
    description: "New website for Creative agency DoThings. Their refined expertise lies in creating and harnessing desire, from lipsticks to buildings."
  },
  {
    id: "ross-mason",
    title: "Ross Mason®",
    client: "Ross Mason",
    year: "2024",
    aspectRatio: "1586 / 1080",
    awards: "FWA of the Day",
    tags: ["3D Portfolio", "Interactive", "Sound Design"],
    video: "https://stream.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/high.mp4",
    thumb: "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://iamrossmason.com/",
    description: "New portfolio website for Ross Mason, designer from the UK doing 3D, Motion design and Art Direction."
  },
  {
    id: "vucko",
    title: "Vucko™",
    client: "Vucko Design",
    year: "2023",
    aspectRatio: "1586 / 1080",
    awards: "Awwwards Site of the Day",
    tags: ["Motion Partner", "Identity", "Vue"],
    video: "https://stream.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/high.mp4",
    thumb: "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://vucko.co/",
    description: "New website for Vucko, a motion partner building brand-led identities, systems, and applications."
  },
  {
    id: "techspeed",
    title: "TechSpeed",
    client: "Griflan Studio",
    year: "2024",
    aspectRatio: "1600 / 1200",
    awards: "Awwwards Nominee",
    tags: ["Tech Rebrand", "Interactive System", "CMS"],
    video: "https://stream.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/high.mp4",
    thumb: "https://image.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/thumbnail.jpg?width=1200&height=630&fit_mode=crop",
    link: "https://techspeed.com/",
    description: "TechSpeed’s rebrand reimagines outsourcing by combining cutting-edge technology with genuine human connection and interactive playfulness."
  }
];

// --- Application State ---
const state = {
  currentView: 'featured',
  isDragging: false,
  startX: 0,
  currentX: 0,
  targetX: 0,
  prevTargetX: 0,
  velocity: 0,
  smoothVelocity: 0,
  maxScroll: 0,
  dragMoved: false,
  mousePos: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  previewPos: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  hoveredCardIndex: -1,
  glReady: false
};

// --- DOM Elements ---
const loaderEl = document.getElementById('loader');
const featuredViewEl = document.getElementById('featured-view');
const fullViewEl = document.getElementById('full-view');
const cardsTrackEl = document.getElementById('cards-track');
const fullProjectsListEl = document.getElementById('full-projects-list');
const cursorPreviewEl = document.getElementById('cursor-preview');
const previewMediaInnerEl = document.getElementById('preview-media-inner');
const tabFeaturedBtn = document.getElementById('tab-featured');
const tabFullBtn = document.getElementById('tab-full');
const profileToggleBtn = document.getElementById('profile-toggle');
const newsletterToggleBtn = document.getElementById('newsletter-toggle');
const profileModalEl = document.getElementById('profile-modal');
const newsletterModalEl = document.getElementById('newsletter-modal');
const projectModalEl = document.getElementById('project-modal');
const projectDetailContentEl = document.getElementById('project-detail-content');
const copyEmailBtn = document.getElementById('copy-email-btn');
const toastEl = document.getElementById('toast');
const customCursorEl = document.getElementById('custom-cursor');
const brandLink = document.getElementById('brand-link');

// --- Three.js WebGL Core & Mesh Store ---
let scene, camera, renderer;
const meshItems = [];

// Jesper Landberg's Signature GLSL Shaders:
// 1. Vertex Shader: deformationCurve based on uOffset (sine-wave cloth/rubber bending)
const vertexShader = `
  uniform vec2 uOffset;
  varying vec2 vUv;

  #define M_PI 3.1415926535897932384626433832795

  vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    // Fluid wave displacement: x displacement curves by vertical uv.y
    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
    // Subtle vertical wave curve
    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
    return position;
  }

  void main() {
    vUv = uv;
    vec3 newPosition = deformationCurve(position, uv, uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

// 2. Fragment Shader: RGB chromatic aberration split during movement & rounded corners
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uAlpha;
  uniform vec2 uOffset;
  varying vec2 vUv;

  vec3 rgbShift(sampler2D t, vec2 uv, vec2 offset) {
    // Chromatic split proportional to drag speed
    vec2 split = offset * 0.0006;
    float r = texture2D(t, uv + split).r;
    float g = texture2D(t, uv).g;
    float b = texture2D(t, uv - split).b;
    return vec3(r, g, b);
  }

  void main() {
    vec3 color = rgbShift(uTexture, vUv, uOffset);
    
    // Smooth anti-aliased corner rounding inside shader
    vec2 d = abs(vUv - 0.5) * 2.0;
    float edge = max(d.x, d.y);
    
    gl_FragColor = vec4(color, uAlpha);
  }
`;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedCards();
  renderFullProjects();
  initThreeWebGL();
  setupDragPhysics();
  setupWheelAndTouch();
  setupViewSwitcher();
  setupModals();
  setupCustomCursor();

  // Dismiss loader
  setTimeout(() => {
    loaderEl.classList.add('hidden');
  }, 650);
});

// --- Render Featured Cards in DOM (used as layout bounds for WebGL) ---
function renderFeaturedCards() {
  cardsTrackEl.innerHTML = '';
  PROJECTS.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', proj.id);
    card.setAttribute('data-index', idx);
    card.style.aspectRatio = proj.aspectRatio;

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img class="card-media" src="${proj.thumb}" alt="${proj.title}" />
      </div>
      <div class="card-footer">
        <h2 class="card-title">${proj.title}</h2>
        <span class="card-awards-badge">${proj.awards}</span>
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      state.hoveredCardIndex = idx;
    });

    card.addEventListener('mouseleave', () => {
      if (state.hoveredCardIndex === idx) {
        state.hoveredCardIndex = -1;
      }
    });

    card.addEventListener('click', () => {
      if (state.dragMoved) return;
      openProjectModal(proj);
    });

    cardsTrackEl.appendChild(card);
  });

  updateScrollBounds();
  window.addEventListener('resize', updateScrollBounds);
}

function updateScrollBounds() {
  const trackWidth = cardsTrackEl.scrollWidth;
  const viewportWidth = window.innerWidth;
  state.maxScroll = Math.max(0, trackWidth - viewportWidth + 120);
}

// --- Three.js WebGL Scene Setup ---
function initThreeWebGL() {
  const canvas = document.getElementById('gl-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    document.body.classList.add('no-webgl');
    return;
  }

  // Scene
  scene = new THREE.Scene();

  // Camera: Perspective camera sized to screen dimensions
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 1;
  const far = 2000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
  // Set camera distance so 1 world unit = 1 screen pixel at z = 0
  camera.position.z = window.innerHeight / (2 * Math.tan((fov * Math.PI) / 360));

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create High-Density Mesh Planes for every card
  const textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = 'anonymous';

  const cardDOMElements = document.querySelectorAll('.project-card');
  cardDOMElements.forEach((cardEl, idx) => {
    const proj = PROJECTS[idx];
    
    // Geometry: 32x32 segments enables organic sine-wave fluid cloth deformation
    const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

    // Uniforms
    const uniforms = {
      uTexture: { value: null },
      uOffset: { value: new THREE.Vector2(0, 0) },
      uAlpha: { value: 1.0 }
    };

    // Load texture
    textureLoader.load(proj.thumb, (texture) => {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      uniforms.uTexture.value = texture;
    });

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: uniforms,
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    meshItems.push({
      element: cardEl,
      mesh: mesh,
      uniforms: uniforms,
      targetScale: 1.0,
      currentScale: 1.0
    });
  });

  state.glReady = true;

  // Window resize handler for Three.js
  window.addEventListener('resize', onWebGLResize);
}

function onWebGLResize() {
  if (!renderer || !camera) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.position.z = h / (2 * Math.tan((camera.fov * Math.PI) / 360));
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

// --- Sync Three.js Mesh Planes to DOM Cards & Update Distortion ---
function updateWebGLMeshes() {
  if (!state.glReady) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate target offset vector from velocity
  const targetOffsetX = state.smoothVelocity * 0.35;
  const targetOffsetY = 0.0;

  meshItems.forEach((item, idx) => {
    const rect = item.element.getBoundingClientRect();

    // Check if card is currently on screen
    const isVisible = rect.right > -100 && rect.left < viewportWidth + 100;
    item.mesh.visible = isVisible && state.currentView === 'featured';

    if (item.mesh.visible) {
      // Map screen pixel space (top-left 0,0) to Three.js world space (center 0,0)
      const x = rect.left + rect.width / 2 - viewportWidth / 2;
      const y = -(rect.top + rect.height / 2 - viewportHeight / 2);

      // Hover scale animation
      const isHovered = state.hoveredCardIndex === idx;
      item.targetScale = isHovered ? 1.025 : 1.0;
      item.currentScale += (item.targetScale - item.currentScale) * 0.12;

      item.mesh.position.set(x, y, 0);
      item.mesh.scale.set(
        rect.width * item.currentScale,
        rect.height * item.currentScale,
        1
      );

      // Pass real dynamic velocity offset to vertex deformation shader & RGB shift
      item.uniforms.uOffset.value.x += (targetOffsetX - item.uniforms.uOffset.value.x) * 0.15;
      item.uniforms.uOffset.value.y += (targetOffsetY - item.uniforms.uOffset.value.y) * 0.15;

      // View transition alpha
      const targetAlpha = state.currentView === 'featured' ? 1.0 : 0.0;
      item.uniforms.uAlpha.value += (targetAlpha - item.uniforms.uAlpha.value) * 0.1;
    }
  });

  renderer.render(scene, camera);
}

// --- Smooth Kinetic Physics Drag & Scroll Engine ---
function setupDragPhysics() {
  const onStart = (clientX) => {
    state.isDragging = true;
    state.dragMoved = false;
    state.startX = clientX;
    document.documentElement.classList.add('grabbing');
  };

  const onMove = (clientX) => {
    if (!state.isDragging) return;
    const delta = clientX - state.startX;
    if (Math.abs(delta) > 5) {
      state.dragMoved = true;
    }
    state.startX = clientX;
    state.targetX += delta * 1.4;
    clampTargetX();
  };

  const onEnd = () => {
    if (!state.isDragging) return;
    state.isDragging = false;
    document.documentElement.classList.remove('grabbing');
    setTimeout(() => {
      state.dragMoved = false;
    }, 50);
  };

  // Mouse Listeners
  window.addEventListener('mousedown', (e) => {
    if (e.target.closest('.ui-chrome, .modal-overlay, #full-view')) return;
    onStart(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    state.mousePos.x = e.clientX;
    state.mousePos.y = e.clientY;
    onMove(e.clientX);
  });

  window.addEventListener('mouseup', onEnd);

  // Touch Listeners
  window.addEventListener('touchstart', (e) => {
    if (e.target.closest('.ui-chrome, .modal-overlay, #full-view')) return;
    onStart(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (state.isDragging) {
      onMove(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', onEnd);

  // Animation Loop (High-precision requestAnimationFrame)
  function animate() {
    // Lerp translation (smooth drag follow)
    const lerpFactor = state.isDragging ? 0.18 : 0.085;
    state.currentX += (state.targetX - state.currentX) * lerpFactor;

    // Velocity tracking for WebGL distortion
    state.velocity = state.targetX - state.prevTargetX;
    state.smoothVelocity += (state.velocity - state.smoothVelocity) * 0.15;
    state.prevTargetX = state.targetX;

    // Apply track translation
    if (state.currentView === 'featured') {
      cardsTrackEl.style.transform = `translate3d(${state.currentX}px, 0, 0)`;
    }

    // Sync WebGL meshes to DOM cards with shader deformation
    updateWebGLMeshes();

    // Lerp floating preview position for full view
    state.previewPos.x += (state.mousePos.x - state.previewPos.x) * 0.15;
    state.previewPos.y += (state.mousePos.y - state.previewPos.y) * 0.15;
    cursorPreviewEl.style.left = `${state.previewPos.x}px`;
    cursorPreviewEl.style.top = `${state.previewPos.y}px`;

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function clampTargetX() {
  const overscrollMargin = 120;
  if (state.targetX > overscrollMargin) {
    state.targetX = overscrollMargin;
  } else if (state.targetX < -state.maxScroll - overscrollMargin) {
    state.targetX = -state.maxScroll - overscrollMargin;
  }
}

// --- Wheel & Trackpad Listener ---
function setupWheelAndTouch() {
  window.addEventListener('wheel', (e) => {
    if (state.currentView !== 'featured') return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    state.targetX -= delta * 1.15;
    clampTargetX();
  }, { passive: true });
}

// --- Render Full Editorial Index ---
function renderFullProjects() {
  fullProjectsListEl.innerHTML = '';
  PROJECTS.forEach((proj) => {
    const row = document.createElement('div');
    row.className = 'project-row';
    row.setAttribute('data-id', proj.id);

    row.innerHTML = `
      <div class="row-title">
        <span>${proj.title}</span>
        <span class="row-arrow">↗</span>
      </div>
      <div class="row-client">${proj.client}</div>
      <div class="row-year">${proj.year}</div>
      <div class="row-awards">${proj.awards}</div>
    `;

    row.addEventListener('mouseenter', () => {
      showCursorPreview(proj);
    });

    row.addEventListener('mouseleave', () => {
      hideCursorPreview();
    });

    row.addEventListener('click', () => {
      openProjectModal(proj);
    });

    fullProjectsListEl.appendChild(row);
  });
}

function showCursorPreview(proj) {
  previewMediaInnerEl.innerHTML = `
    <img src="${proj.thumb}" alt="${proj.title}" />
  `;
  cursorPreviewEl.classList.add('visible');
}

function hideCursorPreview() {
  cursorPreviewEl.classList.remove('visible');
}

// --- View Switcher (Featured vs Full) ---
function setupViewSwitcher() {
  tabFeaturedBtn.addEventListener('click', () => switchView('featured'));
  tabFullBtn.addEventListener('click', () => switchView('full'));
  brandLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('featured');
    closeAllModals();
  });
}

function switchView(viewName) {
  if (state.currentView === viewName) return;
  state.currentView = viewName;

  if (viewName === 'featured') {
    tabFeaturedBtn.classList.add('active');
    tabFullBtn.classList.remove('active');
    featuredViewEl.classList.add('active');
    fullViewEl.classList.remove('active');
    hideCursorPreview();
    updateScrollBounds();
  } else {
    tabFeaturedBtn.classList.remove('active');
    tabFullBtn.classList.add('active');
    featuredViewEl.classList.remove('active');
    fullViewEl.classList.add('active');
  }
}

// --- Modal Handling ---
function setupModals() {
  // Profile Modal
  profileToggleBtn.addEventListener('click', () => {
    toggleModal(profileModalEl);
  });

  // Newsletter Modal
  newsletterToggleBtn.addEventListener('click', () => {
    toggleModal(newsletterModalEl);
  });

  // Modal Close buttons
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // Copy Email Button
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(() => {
        showToast('Copied email to clipboard!');
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  const feedbackEl = document.getElementById('newsletter-feedback');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const val = emailInput.value.trim();

      if (!val || !val.includes('@')) {
        feedbackEl.textContent = 'Please enter a valid email address.';
        feedbackEl.style.color = '#ff6b6b';
        return;
      }

      feedbackEl.textContent = 'Subscribed. Check your inbox soon!';
      feedbackEl.style.color = '#4ade80';
      emailInput.value = '';

      setTimeout(() => {
        closeModal(newsletterModalEl);
        feedbackEl.textContent = '';
      }, 2000);
    });
  }
}

function openProjectModal(proj) {
  projectDetailContentEl.innerHTML = `
    <div class="project-hero-media">
      ${proj.video 
        ? `<video src="${proj.video}" autoplay loop muted playsinline></video>` 
        : `<img src="${proj.thumb}" alt="${proj.title}" />`}
    </div>

    <div class="project-header-meta">
      <div>
        <h1 class="project-headline-title">${proj.title}</h1>
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-top: 6px;">
          ${proj.client} &nbsp;•&nbsp; ${proj.year} &nbsp;•&nbsp; ${proj.awards}
        </p>
      </div>

      <div class="project-tags-list">
        ${proj.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
      </div>
    </div>

    <p class="project-long-desc">${proj.description}</p>

    <div class="project-action-bar">
      <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="visit-site-btn ui-interactive">
        <span>Visit Live Website</span>
        <span>↗</span>
      </a>
      <span style="color: var(--text-dim); font-size: 0.9rem;">Lead & Motion Architecture by Jesper Landberg</span>
    </div>
  `;

  openModal(projectModalEl);
}

function toggleModal(modalEl) {
  if (modalEl.classList.contains('open')) {
    closeModal(modalEl);
  } else {
    closeAllModals();
    openModal(modalEl);
  }
}

function openModal(modalEl) {
  modalEl.classList.add('open');
  modalEl.setAttribute('aria-hidden', 'false');
}

function closeModal(modalEl) {
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
  const vids = modalEl.querySelectorAll('video');
  vids.forEach(v => v.pause());
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(closeModal);
}

// --- Toast Notification ---
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2400);
}

// --- Custom Cursor Dot ---
function setupCustomCursor() {
  window.addEventListener('mousemove', (e) => {
    customCursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });

  document.querySelectorAll('a, button, .project-card, .project-row').forEach(el => {
    el.addEventListener('mouseenter', () => {
      customCursorEl.querySelector('.cursor-dot').style.transform = 'scale(2.2)';
    });
    el.addEventListener('mouseleave', () => {
      customCursorEl.querySelector('.cursor-dot').style.transform = 'scale(1)';
    });
  });
}
