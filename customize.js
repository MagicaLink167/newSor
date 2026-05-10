/* ============================================================
   Mágica Link - Personalization Engine
   ============================================================ */
(function() {
  'use strict';

  // ─── Template metadata ───
  const TEMPLATES = {
    'hilo-rojo': {
      icon: '❤️‍🔥',
      title: 'Hilo Rojo',
      desc: 'Un viaje romántico conectado por el hilo rojo del destino',
      fields: [
        { section: 'Nombres', icon: 'user', fields: [
          { id: 'name1', label: 'Tu Nombre (quien envía)', type: 'text', placeholder: 'Valentina' },
          { id: 'name2', label: 'Nombre de tu Pareja', type: 'text', placeholder: 'Alejandro' }
        ]},
        { section: 'Fotos de la Galería', icon: 'image', fields: [
          { id: 'photos', label: 'Fotos', type: 'photo', count: 4, captions: true }
        ]},
        { section: 'Fecha y Frase', icon: 'heart', fields: [
          { id: 'dateStart', label: 'Fecha de inicio de la relación', type: 'date', placeholder: '2023-01-01' },
          { id: 'mainPhrase', label: 'Frase principal (hilo rojo)', type: 'text', placeholder: 'Eres mi destino' },
          { id: 'secondaryText', label: 'Texto secundario (hero)', type: 'text', placeholder: 'Los hilos del destino pueden estirarse...' }
        ]},
        { section: 'Mensajes de Amor (3)', icon: 'message', fields: [
          { id: 'loveMessages', label: 'Mensajes de Amor', type: 'textarea', count: 3 }
        ]},
        { section: 'Poemas (4)', icon: 'feather', fields: [
          { id: 'poems', label: 'Poemas', type: 'poem', count: 4 }
        ]},
        { section: 'Música', icon: 'music', fields: [
          { id: 'backgroundMusic', label: 'URL de música de fondo (MP3)', type: 'url', placeholder: 'https://ejemplo.com/musica.mp3' },
          { id: 'waNumber', label: 'Número de WhatsApp', type: 'text', placeholder: '521234567890' }
        ]}
      ]
    },
    'cosmic-love': {
      icon: '🌌',
      title: 'Cosmic Love',
      desc: 'Un amor que trasciende las estrellas',
      fields: [
        { section: 'Título', icon: 'star', fields: [
          { id: 'title', label: 'Título principal', type: 'text', placeholder: 'Nuestra Galaxia' },
          { id: 'subtitle', label: 'Subtítulo', type: 'text', placeholder: 'Un viaje a través de los momentos...' }
        ]},
        { section: 'Nombres', icon: 'user', fields: [
          { id: 'name1', label: 'Tu Nombre', type: 'text', placeholder: 'Carlos' },
          { id: 'name2', label: 'Nombre de tu Pareja', type: 'text', placeholder: 'Lucía' }
        ]},
        { section: 'Fotos', icon: 'image', fields: [
          { id: 'photos', label: 'Fotos', type: 'photo', count: 3, captions: true }
        ]},
        { section: 'Mensaje', icon: 'message', fields: [
          { id: 'messageText', label: 'Mensaje interestelar', type: 'textarea', placeholder: 'En la inmensidad del cosmos...' },
          { id: 'signature', label: 'Firma', type: 'text', placeholder: 'Para siempre tuyo.' }
        ]},
        { section: 'Música', icon: 'music', fields: [
          { id: 'backgroundMusic', label: 'URL de música de fondo (MP3)', type: 'url', placeholder: 'https://ejemplo.com/musica.mp3' }
        ]}
      ]
    },
    'elegancia-dorada': {
      icon: '✨',
      title: 'Elegancia Dorada',
      desc: 'Celebración elegante y sofisticada para aniversarios',
      fields: [
        { section: 'Encabezado', icon: 'star', fields: [
          { id: 'subtitle', label: 'Subtítulo de apertura', type: 'text', placeholder: 'Una invitación exclusiva' },
          { id: 'sealInitials', label: 'Iniciales del sello de cera', type: 'text', placeholder: 'A y M' }
        ]},
        { section: 'Nombres', icon: 'user', fields: [
          { id: 'name1', label: 'Nombre 1', type: 'text', placeholder: 'Ana' },
          { id: 'name2', label: 'Nombre 2', type: 'text', placeholder: 'Miguel' }
        ]},
        { section: 'Fotos', icon: 'image', fields: [
          { id: 'photos', label: 'Fotos', type: 'photo-date', count: 3 }
        ]},
        { section: 'Textos', icon: 'message', fields: [
          { id: 'introText', label: 'Texto de introducción', type: 'textarea', placeholder: 'Un viaje a través del tiempo...' },
          { id: 'messageText', label: 'Texto principal (Palabras de Oro)', type: 'textarea', placeholder: 'En cada instante compartido...' },
          { id: 'finalMessage', label: 'Mensaje final (sobre)', type: 'textarea', placeholder: 'Por muchos años más...' }
        ]},
        { section: 'Música', icon: 'music', fields: [
          { id: 'backgroundMusic', label: 'URL de música de fondo (MP3)', type: 'url', placeholder: 'https://ejemplo.com/musica.mp3' }
        ]}
      ]
    },
    'fiesta-neon': {
      icon: '🎉',
      title: 'Fiesta Neon',
      desc: 'Una celebración llena de color y energía para cumpleaños',
      fields: [
        { section: 'Datos del Cumpleañero', icon: 'user', fields: [
          { id: 'personName', label: 'Nombre de la persona', type: 'text', placeholder: 'María' },
          { id: 'age', label: 'Edad que cumple', type: 'number', placeholder: '25' }
        ]},
        { section: 'Fotos', icon: 'image', fields: [
          { id: 'photos', label: 'Fotos (tarjetas flip)', type: 'photo', count: 3 }
        ]},
        { section: 'Frases de las Tarjetas', icon: 'message', fields: [
          { id: 'phrases', label: 'Frases (texto de cada tarjeta)', type: 'textarea', count: 3 },
          { id: 'highlights', label: 'Destacados (texto brillante)', type: 'text', count: 3 }
        ]},
        { section: 'Mensaje Principal', icon: 'heart', fields: [
          { id: 'mainMessage', label: 'Mensaje del cumpleaños', type: 'textarea', placeholder: 'En este día tan especial...' }
        ]},
        { section: 'Música', icon: 'music', fields: [
          { id: 'backgroundMusic', label: 'URL de música de fondo (MP3)', type: 'url', placeholder: 'https://ejemplo.com/musica.mp3' }
        ]}
      ]
    },
    'recuerdos-tiempo': {
      icon: '🕰️',
      title: 'Recuerdos en el Tiempo',
      desc: 'Un viaje nostálgico por los mejores recuerdos',
      fields: [
        { section: 'Nombres', icon: 'user', fields: [
          { id: 'name1', label: 'Tu Nombre', type: 'text', placeholder: 'David' },
          { id: 'name2', label: 'Nombre de tu Pareja', type: 'text', placeholder: 'María' },
          { id: 'years', label: 'Años juntos', type: 'number', placeholder: '3' },
          { id: 'firstDate', label: 'Fecha de inicio (ej: Enero 2020)', type: 'text', placeholder: 'Enero 2020' }
        ]},
        { section: 'Frase Final', icon: 'heart', fields: [
          { id: 'finalPhrase', label: 'Frase final', type: 'text', placeholder: 'Nuestra historia es mi historia favorita.' },
          { id: 'letterGreeting', label: 'Saludo de la carta', type: 'text', placeholder: 'Mi querido amor,' }
        ]},
        { section: 'Líneas de la Carta (4)', icon: 'message', fields: [
          { id: 'letterLines', label: 'Líneas de la carta', type: 'textarea', count: 4 }
        ]},
        { section: 'Recuerdos (4)', icon: 'clock', fields: [
          { id: 'memories', label: 'Recuerdos', type: 'memory', count: 4 }
        ]},
        { section: 'Secuencia de Fotos (8)', icon: 'image', fields: [
          { id: 'photoSequence', label: 'Fotos y frases', type: 'photo-seq', count: 8 }
        ]},
        { section: 'Música y WhatsApp', icon: 'music', fields: [
          { id: 'backgroundMusic', label: 'URL de música de fondo (MP3)', type: 'url', placeholder: 'https://ejemplo.com/musica.mp3' },
          { id: 'whatsappNumber', label: 'Número de WhatsApp del destinatario', type: 'text', placeholder: '521234567890' }
        ]}
      ]
    }
  };

  // ─── SVG Icons ───
  const ICONS = {
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>'
  };

  let templateId = null;
  let templateHTML = '';
  let photoData = {}; // base64 data store
  let lastPublishedSurprise = null; // track last published surprise for share modal

  // ─── Init ───
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const params = new URLSearchParams(window.location.search);
    templateId = params.get('template');
    if (!templateId || !TEMPLATES[templateId]) {
      document.getElementById('templateInfo').innerHTML = '<h2>Plantilla no encontrada</h2><p><a href="index.html" style="color:var(--rose)">Volver al inicio</a></p>';
      document.getElementById('loadingOverlay').classList.add('hidden');
      return;
    }

    const tpl = TEMPLATES[templateId];
    document.getElementById('templateIcon').textContent = tpl.icon;
    document.getElementById('templateTitle').textContent = tpl.title;
    document.getElementById('templateDesc').textContent = tpl.desc;

    buildForm(tpl.fields);
    loadTemplate();
  }

  // ─── Build dynamic form ───
  function buildForm(sections) {
    const container = document.getElementById('formFields');
    let html = '';

    sections.forEach(section => {
      html += `<div class="form-section">`;
      html += `<div class="section-label">${ICONS[section.icon] || ''} ${section.label}</div>`;

      section.fields.forEach(f => {
        if (f.type === 'photo') {
          html += buildPhotoFields(f);
        } else if (f.type === 'photo-date') {
          html += buildPhotoDateFields(f);
        } else if (f.type === 'textarea' && f.count) {
          html += buildRepeaterTextarea(f);
        } else if (f.type === 'poem') {
          html += buildPoemFields(f);
        } else if (f.type === 'memory') {
          html += buildMemoryFields(f);
        } else if (f.type === 'photo-seq') {
          html += buildPhotoSeqFields(f);
        } else if (f.type === 'text' && f.count) {
          html += buildRepeaterText(f);
        } else {
          html += buildSimpleField(f);
        }
      });

      html += `</div>`;
    });

    container.innerHTML = html;

    // Bind photo events
    container.querySelectorAll('input[type="file"]').forEach(input => {
      input.addEventListener('change', handlePhotoSelect);
    });
  }

  function buildSimpleField(f) {
    const inputType = f.type === 'number' ? 'number' : f.type === 'url' ? 'url' : f.type === 'date' ? 'date' : 'text';
    return `<div class="field">
      <label for="${f.id}">${f.label}</label>
      <input type="${inputType}" id="${f.id}" placeholder="${f.placeholder || ''}">
    </div>`;
  }

  function buildPhotoFields(f) {
    let html = '<div class="photo-upload">';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="photo-item" data-key="${f.id}_${i}">
        <label for="${f.id}_${i}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span>Foto ${i + 1}</span>
        </label>
        <input type="file" id="${f.id}_${i}" accept="image/*">
        <img class="preview" id="preview_${f.id}_${i}">
        <button type="button" class="remove-btn" id="remove_${f.id}_${i}" onclick="MagicaLink.removePhoto('${f.id}_${i}')">&times;</button>`;
      if (f.captions) {
        html += `<div class="field" style="margin-top:8px">
          <label for="caption_${i}">Pie de foto ${i + 1}</label>
          <input type="text" id="caption_${i}" placeholder="Descripción de la foto ${i + 1}">
        </div>`;
      }
      html += `</div>`;
    }
    html += '</div>';
    return html;
  }

  function buildPhotoDateFields(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="repeater-item">
        <div class="photo-item" data-key="${f.id}_${i}" style="margin-bottom:8px">
          <label for="${f.id}_${i}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Foto ${i + 1}</span>
          </label>
          <input type="file" id="${f.id}_${i}" accept="image/*">
          <img class="preview" id="preview_${f.id}_${i}">
          <button type="button" class="remove-btn" id="remove_${f.id}_${i}" onclick="MagicaLink.removePhoto('${f.id}_${i}')">&times;</button>
        </div>
        <div class="field">
          <label for="caption_${i}">Pie de foto</label>
          <input type="text" id="caption_${i}" placeholder="Descripción de la foto">
        </div>
        <div class="field">
          <label for="photoDate_${i}">Fecha</label>
          <input type="text" id="photoDate_${i}" placeholder="23.05.2019">
        </div>
      </div>`;
    }
    return html;
  }

  function buildRepeaterTextarea(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="field">
        <label for="${f.id}_${i}">${f.label} ${i + 1}</label>
        <textarea id="${f.id}_${i}" placeholder="${f.label} ${i + 1}..."></textarea>
      </div>`;
    }
    return html;
  }

  function buildRepeaterText(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="field">
        <label for="${f.id}_${i}">${f.label} ${i + 1}</label>
        <input type="text" id="${f.id}_${i}" placeholder="${f.label} ${i + 1}...">
      </div>`;
    }
    return html;
  }

  function buildPoemFields(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="repeater-item">
        <div class="field">
          <label for="poemTitle_${i}">Título del poema ${i + 1}</label>
          <input type="text" id="poemTitle_${i}" placeholder="Título del poema ${i + 1}">
        </div>
        <div class="field">
          <label for="poemText_${i}">Texto del poema ${i + 1}</label>
          <textarea id="poemText_${i}" placeholder="Versos del poema ${i + 1}..."></textarea>
        </div>
      </div>`;
    }
    return html;
  }

  function buildMemoryFields(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      html += `<div class="repeater-item">
        <div class="field">
          <label for="memoryDate_${i}">Fecha del recuerdo ${i + 1}</label>
          <input type="text" id="memoryDate_${i}" placeholder="Enero 2021">
        </div>
        <div class="field">
          <label for="memoryTitle_${i}">Título</label>
          <input type="text" id="memoryTitle_${i}" placeholder="El Encuentro">
        </div>
        <div class="field">
          <label for="memoryDesc_${i}">Descripción</label>
          <textarea id="memoryDesc_${i}" placeholder="Descripción del recuerdo..." style="min-height:60px"></textarea>
        </div>
      </div>`;
    }
    return html;
  }

  function buildPhotoSeqFields(f) {
    let html = '';
    for (let i = 0; i < f.count; i++) {
      const isPhoto = i % 2 === 0;
      if (isPhoto) {
        const idx = i / 2;
        html += `<div class="repeater-item">
          <div class="photo-item" data-key="seqPhoto_${idx}" style="margin-bottom:8px">
            <label for="seqPhoto_${idx}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Foto ${idx + 1} de 8</span>
            </label>
            <input type="file" id="seqPhoto_${idx}" accept="image/*">
            <img class="preview" id="preview_seqPhoto_${idx}">
            <button type="button" class="remove-btn" id="remove_seqPhoto_${idx}" onclick="MagicaLink.removePhoto('seqPhoto_${idx}')">&times;</button>
          </div>
          <div class="field">
            <label for="seqCaption_${idx}">Pie de foto</label>
            <input type="text" id="seqCaption_${idx}" placeholder="Nuestro primer viaje">
          </div>
          <div class="field">
            <label for="seqPhrase_${idx}">Frase</label>
            <input type="text" id="seqPhrase_${idx}" placeholder="Fue cuando supe que quería estar a tu lado...">
          </div>
        </div>`;
      }
    }
    return html;
  }

  // ─── Photo handling ───
  function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    const key = e.target.id;
    const reader = new FileReader();
    reader.onload = function(ev) {
      photoData[key] = ev.target.result;
      const preview = document.getElementById('preview_' + key);
      if (preview) {
        preview.src = ev.target.result;
        preview.classList.add('visible');
      }
      const label = e.target.parentElement.querySelector('label');
      if (label) label.style.display = 'none';
      const removeBtn = document.getElementById('remove_' + key);
      if (removeBtn) removeBtn.classList.add('visible');
    };
    reader.readAsDataURL(file);
  }

  function removePhoto(key) {
    delete photoData[key];
    const preview = document.getElementById('preview_' + key);
    if (preview) { preview.src = ''; preview.classList.remove('visible'); }
    const input = document.getElementById(key);
    if (input) input.value = '';
    const item = document.querySelector(`[data-key="${key}"]`);
    if (item) {
      const label = item.querySelector('label');
      if (label) label.style.display = '';
    }
    const removeBtn = document.getElementById('remove_' + key);
    if (removeBtn) removeBtn.classList.remove('visible');
  }

  // ─── Load template HTML ───
  function loadTemplate() {
    fetch('templates/' + templateId + '.html')
      .then(r => { if (!r.ok) throw new Error('Template not found'); return r.text(); })
      .then(html => {
        templateHTML = html;
        document.getElementById('loadingOverlay').classList.add('hidden');
      })
      .catch(err => {
        document.getElementById('loadingOverlay').innerHTML = '<p style="color:var(--rose)">Error al cargar la plantilla</p><p style="color:var(--text-muted);font-size:.85rem;margin-top:8px">' + err.message + '</p>';
      });
  }

  // ─── Gather form data ───
  function gatherData() {
    const d = {};
    // Simple fields
    document.querySelectorAll('#customizeForm input[type="text"], #customizeForm input[type="number"], #customizeForm input[type="url"], #customizeForm input[type="date"], #customizeForm textarea').forEach(el => {
      d[el.id] = el.value;
    });
    return d;
  }

  // ─── Apply customizations to template HTML ───
  function customizeHTML() {
    if (!templateHTML) return '';
    let html = templateHTML;
    const d = gatherData();

    if (templateId === 'hilo-rojo') html = customizeHiloRojo(html, d);
    else if (templateId === 'cosmic-love') html = customizeCosmicLove(html, d);
    else if (templateId === 'elegancia-dorada') html = customizeEleganciaDorada(html, d);
    else if (templateId === 'fiesta-neon') html = customizeFiestaNeon(html, d);
    else if (templateId === 'recuerdos-tiempo') html = customizeRecuerdosTiempo(html, d);

    return html;
  }

  // ─── hilo-rojo ───
  function customizeHiloRojo(html, d) {
    // Names
    const name1 = d.name1 || 'Tu Nombre';
    const name2 = d.name2 || 'Tu Pareja';
    html = html.replace(/(id="nombresTexto">)[^<]*(<\/p>)/, '$1' + name1 + ' y ' + name2 + '$2');

    // Main phrase
    if (d.mainPhrase) {
      html = html.replace(/(id="frasePrincipal"><\/h1>)/, '$1');
      html = html.replace(/CONFIG\.mainPhrase = '[^']*'/, "CONFIG.mainPhrase = '" + escS(d.mainPhrase) + "'");
      html = html.replace(/heroFrase: '[^']*'/, "heroFrase: '" + escS(d.mainPhrase) + "'");
    }

    // Secondary text
    if (d.secondaryText) {
      html = html.replace(/(id="textoSecundario">)[^<]*(<\/p>)/, '$1"' + escS(d.secondaryText) + '"$2');
      html = html.replace(/secondaryText: '[^']*'/, "secondaryText: '" + escS(d.secondaryText) + "'");
    }

    // Date
    if (d.dateStart) {
      html = html.replace(/dateStart: '[^']*'/, "dateStart: '" + d.dateStart + "'");
    }

    // Photos
    for (let i = 0; i < 4; i++) {
      const key = 'photos_' + i;
      if (photoData[key]) {
        // Gallery photos
        const galId = 'fotoGaleria' + (i + 1);
        html = html.replace(
          new RegExp('(id="' + galId + '" src=")[^"]*(")'),
          '$1' + photoData[key] + '$2'
        );
        // Mark as placeholder replaced
        html = html.replace(
          new RegExp('(id="' + galId + '")([^>]*)(data-placeholder)'),
          '$1$2'
        );
      }
      if (d['caption_' + i]) {
        html = html.replace(
          new RegExp('(id="caption' + (i + 1) + '">)[^<]*(<\\/p>)'),
          '$1' + escH(d['caption_' + i]) + '$2'
        );
      }
    }

    // Love messages
    const msgs = [];
    for (let i = 0; i < 3; i++) {
      if (d['loveMessages_' + i]) msgs.push(d['loveMessages_' + i]);
    }
    if (msgs.length) {
      const msgsStr = msgs.map(m => '"' + escS(m) + '"').join(',\n      ');
      html = html.replace(/mensajes:\s*\[[\s\S]*?\]/, 'mensajes: [\n      ' + msgsStr + '\n    ]');
    }

    // Poems
    if (d.poems && d.poems.length !== undefined) {
      // already in d as string
    }
    const poemsArr = [];
    for (let i = 0; i < 4; i++) {
      const title = d['poemTitle_' + i] || '';
      const text = d['poemText_' + i] || '';
      if (title || text) poemsArr.push({ title, text });
    }

    // WhatsApp
    if (d.waNumber) {
      html = html.replace(/waNumber: '[^']*'/, "waNumber: '" + d.waNumber + "'");
    }

    // Music
    if (d.backgroundMusic) {
      html = html.replace(/(id="bgMusic"[^>]*>[\s\S]*?<source src=")[^"]*(")/, '$1' + escS(d.backgroundMusic) + '$2');
      html = html.replace(/bgMusic: ''/, "bgMusic: '" + escS(d.backgroundMusic) + "'");
    }

    // Inject a script that overrides the CONFIG on load
    const injectScript = `<script>
    (function(){
      var orig = document.addEventListener.bind(document);
      document.addEventListener = function(t, fn, o) {
        orig(t, function(e) {
          if (t === 'DOMContentLoaded') {
            var C = { name1: '${escS(name1)}', name2: '${escS(name2)}' };
            if ('${escS(d.dateStart)}') C.dateStart = '${escS(d.dateStart)}';
            if ('${escS(d.mainPhrase)}') C.mainPhrase = '${escS(d.mainPhrase)}';
            if ('${escS(d.secondaryText)}') C.secondaryText = '${escS(d.secondaryText)}';
            if ('${escS(d.waNumber)}') C.waNumber = '${escS(d.waNumber)}';
            C.photos = [${Array.from({length:4},(_,i)=>photoData['photos_'+i]?'"'+photoData['photos_'+i]+'"':'""').join(',')}];
            C.captions = [${Array.from({length:4},(_,i)=>'"'+escH(d['caption_'+i]||'')+'"').join(',')}];
            var origCfg = null;
            Object.defineProperty(window, '__mlConfig', {set:function(v){origCfg=v;Object.assign(origCfg,C)},get:function(){return origCfg}});
            // Patch CONFIG by overriding before the template script runs
          }
          fn(e);
        }, o);
      };
    })();
    <\/script>`;

    // Simpler: directly modify the CONFIG in the HTML
    html = html.replace(/name1: '[^']*'/, "name1: '" + escS(name1) + "'");
    html = html.replace(/name2: '[^']*'/, "name2: '" + escS(name2) + "'");

    // Override the applyConfig to also set photos/captions that aren't in original
    html = html.replace(
      /window\.addEventListener\('message', function\(e\) \{[\s\S]*?\}\);/,
      `window.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'templateData') {
        var d = e.data.data;
        if (d) Object.assign(CONFIG, d);
        applyConfig();
      }
    });`
    );

    return html;
  }

  // ─── cosmic-love ───
  function customizeCosmicLove(html, d) {
    // Title and subtitle
    if (d.title) {
      html = html.replace(/(class="entrance-title">)[^<]*(<\/h1>)/, '$1' + escH(d.title) + '$2');
    }
    if (d.subtitle) {
      html = html.replace(/(class="entrance-subtitle">)[^<]*(<\/p>)/, '$1' + escH(d.subtitle) + '$2');
    }

    // Photos
    const photoFiles = ['2f1.jpeg', '2f2.jpeg', '2f3.jpeg'];
    const captions = [
      'El Big Bang de Nuestro Amor',
      'Aventuras Intergalácticas',
      'Refugio en las Estrellas'
    ];
    for (let i = 0; i < 3; i++) {
      const key = 'photos_' + i;
      if (photoData[key]) {
        html = html.replace(
          'src="' + photoFiles[i] + '"',
          'src="' + photoData[key] + '"'
        );
      }
      if (d['caption_' + i]) {
        const defaultCaption = captions[i];
        // Find the portal-caption containing the default text
        const regex = new RegExp('(class="portal-caption">' + escR(defaultCaption) + '</div>)');
        if (regex.test(html)) {
          html = html.replace(regex, '<div class="portal-caption">' + escH(d['caption_' + i]) + '</div>');
        } else {
          // More generic replacement for the i-th portal caption
          const portalCaptions = html.match(/class="portal-caption">/g);
          if (portalCaptions && portalCaptions[i] !== undefined) {
            let count = 0;
            html = html.replace(/class="portal-caption">([^<]*)<\/div>/g, (match, content) => {
              if (count === i) {
                count++;
                return '<div class="portal-caption">' + escH(d['caption_' + i]) + '</div>';
              }
              count++;
              return match;
            });
          }
        }
      }
    }

    // Message text
    if (d.messageText) {
      html = html.replace(
        /const txt = "[^"]*";/,
        'const txt = "' + escS(d.messageText) + '";'
      );
    }
    if (d.signature) {
      html = html.replace(
        /const sig = "[^"]*";/,
        'const sig = "' + escS(d.signature) + '";'
      );
    }

    // Music
    if (d.backgroundMusic) {
      html = html.replace(
        /(<source src=")[^"]*(" type="audio\/mpeg">)/,
        '$1' + escS(d.backgroundMusic) + '$2'
      );
    }

    return html;
  }

  // ─── elegancia-dorada ───
  function customizeEleganciaDorada(html, d) {
    const name1 = d.name1 || 'Nombre 1';
    const name2 = d.name2 || 'Nombre 2';

    // Subtitle
    if (d.subtitle) {
      html = html.replace(/(class="opening-subtitle">)[^<]*(<\/p>)/, '$1' + escH(d.subtitle) + '$2');
    }

    // Photos
    const photoFiles = ['3f1.jpeg', '3f2.jpeg', '3f3.jpeg'];
    for (let i = 0; i < 3; i++) {
      const key = 'photos_' + i;
      if (photoData[key]) {
        html = html.replace(
          'src="' + photoFiles[i] + '"',
          'src="' + photoData[key] + '"'
        );
      }
    }

    // Photo captions - replace the specific ones
    const defaultCaptions = [
      'El dia que nuestros caminos se cruzaron bajo la luz dorada del atardecer.',
      'Nuestra primera travesia, donde descubrimos horizontes infinitos.',
      'Las risas que tejieron la tela de nuestros dias.'
    ];
    const allCaptions = [];
    for (let i = 0; i < 3; i++) {
      allCaptions.push(d['caption_' + i] || defaultCaptions[i]);
    }
    // Replace all photo-captions
    let capIdx = 0;
    html = html.replace(/<p class="photo-caption">([^<]*)<\/p>/g, (match, content) => {
      if (capIdx < allCaptions.length) {
        return '<p class="photo-caption">' + escH(allCaptions[capIdx++]) + '</p>';
      }
      capIdx++;
      return match;
    });

    // Photo dates
    const allDates = [];
    for (let i = 0; i < 3; i++) {
      allDates.push(d['photoDate_' + i] || '');
    }
    let dateIdx = 0;
    html = html.replace(/<span class="photo-date">([^<]*)<\/span>/g, (match, content) => {
      if (dateIdx < allDates.length && allDates[dateIdx]) {
        return '<span class="photo-date">' + escH(allDates[dateIdx++]) + '</span>';
      }
      dateIdx++;
      return match;
    });

    // Gold dust text sections
    if (d.introText) {
      html = html.replace(
        /(<p class="gold-dust-text">)\s*Un viaje a traves del tiempo[^<]*(<\/p>)/s,
        '$1' + escH(d.introText) + '$2'
      );
    }
    if (d.messageText) {
      const sections = html.split('Palabras de Oro');
      if (sections.length > 1) {
        // Find the gold-dust-text after "Palabras de Oro"
        const afterWords = sections[1];
        const match = afterWords.match(/<p class="gold-dust-text">([\s\S]*?)<\/p>/);
        if (match) {
          html = html.replace(
            /Palabras de Oro[\s\S]*?<p class="gold-dust-text">[\s\S]*?<\/p>/,
            'Palabras de Oro</h2>\n            <p class="gold-dust-text">\n                ' + escH(d.messageText) + '\n            </p>'
          );
        }
      }
    }

    // Seal initials
    if (d.sealInitials) {
      html = html.replace(
        /(<span class="seal-initials">)[^<]*(<\/span>)/,
        '$1' + escH(d.sealInitials) + '$2'
      );
    }

    // Final message
    if (d.finalMessage) {
      html = html.replace(
        /(<p class="final-message">)[^<]*(<\/p>)/,
        '$1' + escH(d.finalMessage) + '$2'
      );
    }

    // Watermark names
    html = html.replace(
      /(class="watermark-brand">)[^<]*(<\/p>)/,
      '$1' + escH(name1 + ' y ' + name2 + ' por Magica Link') + '$2'
    );

    // Music
    if (d.backgroundMusic) {
      html = html.replace(
        /(<source src=")[^"]*(" type="audio\/mpeg">)/,
        '$1' + escS(d.backgroundMusic) + '$2'
      );
    }

    return html;
  }

  // ─── fiesta-neon ───
  function customizeFiestaNeon(html, d) {
    const name = d.personName || 'MARIA';
    const age = d.age || '25';
    const nameUpper = name.toUpperCase();

    // Name in frase section and neon sign
    html = html.replace(/(id="fraseNombre">)[^<]*(<\/h2>)/, '$1' + escH(nameUpper) + '$2');
    html = html.replace(/(id="birthdayName">)[^<]*(<\/div>)/, '$1' + escH(nameUpper) + '$2');

    // Photos
    const photoFiles = ['4f2.jpeg', '4f1.jpeg', '4f3.jpeg'];
    for (let i = 0; i < 3; i++) {
      const key = 'photos_' + i;
      if (photoData[key]) {
        html = html.replace(
          'src="' + photoFiles[i] + '"',
          'src="' + photoData[key] + '"'
        );
      }
    }

    // Phrase texts (back of flip cards)
    const defaultPhrases = [
      'Que cada sueno que tengas se convierta en una estrella que ilumine tu camino.',
      'Tu sonrisa es la melodia mas dulce que el universo ha creado. Nunca dejes de sonreir.',
      'Los momentos compartidos son los tesoros mas valiosos. Gracias por ser parte de nuestras vidas.'
    ];
    const defaultHighlights = [
      'Brilla sin limite',
      'Eres pura magia',
      'Eres invaluable'
    ];

    let phraseIdx = 0;
    html = html.replace(/<p class="phrase-text">([^<]*)<\/p>/g, (match, content) => {
      const val = d['phrases_' + phraseIdx] || defaultPhrases[phraseIdx] || content;
      const result = '<p class="phrase-text">' + escH(val) + '</p>';
      phraseIdx++;
      return result;
    });

    let hlIdx = 0;
    html = html.replace(/<p class="phrase-highlight">([^<]*)<\/p>/g, (match, content) => {
      const val = d['highlights_' + hlIdx] || defaultHighlights[hlIdx] || content;
      const result = '<p class="phrase-highlight">' + escH(val) + '</p>';
      hlIdx++;
      return result;
    });

    // Age
    if (d.age) {
      // The age is shown in the loading percentage animation
      html = html.replace(
        /Cargando nuevo ano de vida.../,
        'Cargando nuevo ano de vida... ' + age
      );
    }

    // Main message
    if (d.mainMessage) {
      html = html.replace(
        /(<p class="frase-mensaje">)\s*[^]*?(<\/p>)/s,
        '$1' + escH(d.mainMessage) + '$2'
      );
    }

    // Music - find the audio element
    if (d.backgroundMusic) {
      html = html.replace(
        /(<source src=")[^"]*(")/g,
        '$1' + escS(d.backgroundMusic) + '$2'
      );
    }

    return html;
  }

  // ─── recuerdos-tiempo ───
  function customizeRecuerdosTiempo(html, d) {
    const name1 = d.name1 || 'David';
    const name2 = d.name2 || 'María';
    const years = d.years || '3';
    const firstDate = d.firstDate || 'Enero 2020';

    // Title
    html = html.replace(
      /partnerName1: "[^"]*"/,
      'partnerName1: "' + escS(name1) + '"'
    );
    html = html.replace(
      /partnerName2: "[^"]*"/,
      'partnerName2: "' + escS(name2) + '"'
    );
    html = html.replace(
      /anniversaryYears: \d+/,
      'anniversaryYears: ' + parseInt(years) || 3
    );
    html = html.replace(
      /firstDate: "[^"]*"/,
      'firstDate: "' + escS(firstDate) + '"'
    );

    // Final phrase
    if (d.finalPhrase) {
      html = html.replace(
        /finalPhrase: "[^"]*"/,
        'finalPhrase: "' + escS(d.finalPhrase) + '"'
      );
    }

    // Letter greeting
    if (d.letterGreeting) {
      html = html.replace(
        /letterGreeting: "[^"]*"/,
        'letterGreeting: "' + escS(d.letterGreeting) + '"'
      );
    }

    // WhatsApp
    if (d.whatsappNumber) {
      html = html.replace(
        /whatsappNumber: "[^"]*"/,
        'whatsappNumber: "' + escS(d.whatsappNumber) + '"'
      );
    }

    // Letter lines
    const letterLines = [];
    for (let i = 0; i < 4; i++) {
      letterLines.push(d['letterLines_' + i] || '');
    }
    if (letterLines.some(l => l)) {
      const linesStr = letterLines.map(l => '"' + escS(l) + '"').join(',\n                ');
      html = html.replace(
        /letterLines:\s*\[[\s\S]*?\]/,
        'letterLines: [\n                ' + linesStr + '\n            ]'
      );
    }

    // Memories
    const memories = [];
    for (let i = 0; i < 4; i++) {
      memories.push({
        date: d['memoryDate_' + i] || 'Fecha ' + (i + 1),
        title: d['memoryTitle_' + i] || 'Recuerdo ' + (i + 1),
        description: d['memoryDesc_' + i] || ''
      });
    }
    const memStr = memories.map(m =>
      '{ date: "' + escS(m.date) + '", title: "' + escS(m.title) + '", description: "' + escS(m.description) + '" }'
    ).join(',\n                ');
    html = html.replace(
      /memories:\s*\[[\s\S]*?\]/,
      'memories: [\n                ' + memStr + '\n            ]'
    );

    // Photo sequence - replace the sequence array
    const defaultUrls = ['5f1.jpeg','5f2.jpeg','5f3.jpeg','5f4.jpeg','5f5.jpeg','5f6.jpeg','5f7.jpeg','5f8.jpeg'];
    const defaultCaptions = ['Nuestro primer viaje','Bajo las estrellas','Risas eternas','Complicidad','Sonrisas','Aventuras','Miradas','Siempre tú'];
    const defaultPhrases = [
      'Fue cuando supe que quería estar a tu lado para siempre.',
      'Prometí amarte cada día más que el anterior.',
      'Tu risa es la melodía de mi alma.',
      'Donde nuestras almas hablan sin palabras.',
      'Tu sonrisa ilumina mis días más oscuros.',
      'Contigo todo se convierte en aventura.',
      'En tus ojos encontré mi hogar.',
      'No hay lugar donde prefiera estar que a tu lado.'
    ];

    let seqItems = [];
    for (let i = 0; i < 8; i++) {
      const isPhoto = i % 2 === 0;
      const idx = i / 2;
      if (isPhoto) {
        const photoUrl = photoData['seqPhoto_' + idx] ? photoData['seqPhoto_' + idx] : defaultUrls[idx];
        const caption = d['seqCaption_' + idx] || defaultCaptions[idx];
        seqItems.push({ type: 'photo', str: "{ type: 'photo', url: '" + photoUrl + "', caption: '" + escS(caption) + "' }" });
      } else {
        const phraseIdx = (i - 1) / 2;
        const phrase = d['seqPhrase_' + phraseIdx] || defaultPhrases[phraseIdx];
        seqItems.push({ type: 'phrase', str: "{ type: 'phrase', text: '" + escS(phrase) + "' }" });
      }
    }

    // Rebuild the sequence array with proper alternating photo/phrase
    let seqStr = '';
    for (let i = 0; i < 16; i++) { // 8 photo + 8 phrase = 16
      if (i < seqItems.length) {
        seqStr += seqItems[i].str;
      }
    }

    // Actually reconstruct properly: photo0, phrase0, photo1, phrase1...
    let seqArr = [];
    for (let idx = 0; idx < 8; idx++) {
      const photoUrl = photoData['seqPhoto_' + idx] ? photoData['seqPhoto_' + idx] : defaultUrls[idx];
      const caption = d['seqCaption_' + idx] || defaultCaptions[idx];
      const phrase = d['seqPhrase_' + idx] || defaultPhrases[idx];
      seqArr.push("{ type: 'photo', url: '" + photoUrl + "', caption: '" + escS(caption) + "' }");
      seqArr.push("{ type: 'phrase', text: '" + escS(phrase) + "' }");
    }
    const fullSeqStr = seqArr.join(',\n                ');
    html = html.replace(
      /sequence:\s*\[[\s\S]*?\]/,
      'sequence: [\n                ' + fullSeqStr + '\n            ]'
    );

    // Music
    if (d.backgroundMusic) {
      html = html.replace(
        /(<source src=")[^"]*(")/,
        '$1' + escS(d.backgroundMusic) + '$2'
      );
    }

    return html;
  }

  // ─── Preview (no auto-save) ───
  function preview() {
    if (!templateHTML) { alert('La plantilla aún se está cargando...'); return; }
    const customized = customizeHTML();
    const overlay = document.getElementById('previewOverlay');
    const frame = document.getElementById('previewFrame');
    const blob = new Blob([customized], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    frame.src = url;
    overlay.classList.add('active');
  }

  function closePreview() {
    const overlay = document.getElementById('previewOverlay');
    overlay.classList.remove('active');
    document.getElementById('previewFrame').src = 'about:blank';
  }

  // ─── Download ───
  function download() {
    if (!templateHTML) { alert('La plantilla aún se está cargando...'); return; }
    const customized = customizeHTML();
    const blob = new Blob([customized], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = templateId + '-personalizado.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ─── Create Surprise (client-side, no backend) ───
  async function createSurprise() {
    if (!templateHTML) { alert('La plantilla aún se está cargando...'); return null; }
    const customized = customizeHTML();

    const publishBtn = document.getElementById('btnPublish');
    if (publishBtn) {
      publishBtn.disabled = true;
      publishBtn.innerHTML = '<div class="spinner" style="width:18px;height:18px;border-width:2px;margin:0"></div> Publicando...';
    }

    try {
      // Use try/catch for any unexpected errors during encoding
      var encoded;
      try {
        encoded = btoa(unescape(encodeURIComponent(customized)));
      } catch(e) {
        throw new Error('La sorpresa es muy grande. Intenta con menos fotos o texto más corto.');
      }

      if (encoded.length > 500000) {
        throw new Error('La sorpresa es muy grande (' + Math.round(encoded.length/1024) + 'KB). Intenta usar fotos más pequeñas o menos texto.');
      }

      // Build the surprise URL with base64 data
      var baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
      var url = baseUrl + 'surprise.html?d=' + encoded;
      var fakeToken = btoa(templateId + ':' + Date.now()).substring(0, 12);
      return { token: fakeToken, url: url };
    } catch (err) {
      alert('Error al publicar: ' + err.message);
      return null;
    } finally {
      if (publishBtn) {
        publishBtn.disabled = false;
        publishBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Publicar Sorpresa';
      }
    }
  }

  // ─── Share Modal ───
  function showShareModal(surprise) {
    if (!surprise) return;
    lastPublishedSurprise = surprise;

    const overlay = document.getElementById('shareOverlay');
    const urlEl = document.getElementById('shareLinkUrl');
    const circle = overlay.querySelector('.share-checkmark .circle');

    // Set URL
    urlEl.textContent = surprise.url;

    // Reset copy button state
    const copyBtn = document.getElementById('shareCopyBtn');
    const copyBtnText = document.getElementById('shareCopyBtnText');
    copyBtn.classList.remove('copied');
    copyBtnText.textContent = 'Copiar';

    // Reset and replay checkmark animation
    circle.classList.remove('done');
    const checkSvg = overlay.querySelector('.share-checkmark svg.check');
    checkSvg.style.animation = 'none';
    void checkSvg.offsetHeight; // trigger reflow
    checkSvg.style.animation = '';
    circle.style.animation = 'none';
    void circle.offsetHeight;
    circle.style.animation = '';
    // Add done class after a tiny delay for the animation
    requestAnimationFrame(function() {
      circle.classList.add('done');
    });

    // Show native share button if supported
    const nativeBtn = document.getElementById('nativeShareBtn');
    if (navigator.share) {
      nativeBtn.style.display = 'flex';
    } else {
      nativeBtn.style.display = 'none';
    }

    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeShareModal(event) {
    if (event && event.target && event.target.id !== 'shareOverlay') return;
    const overlay = document.getElementById('shareOverlay');
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.classList.remove('active');
      overlay.style.opacity = '';
      document.body.style.overflow = '';
    }, 200);
  }

  // ─── Publish Surprise (main action) ───
  async function publishSurprise() {
    const surprise = await createSurprise();
    if (surprise) {
      lastPublishedSurprise = surprise;
      showSavedCard(surprise);
      showShareModal(surprise);
    }
  }

  // ─── WhatsApp share (from main button) ───
  async function shareWhatsApp() {
    // If already published, open share modal and share from there
    if (lastPublishedSurprise) {
      showShareModal(lastPublishedSurprise);
      return;
    }
    const surprise = await createSurprise();
    if (!surprise) return;
    lastPublishedSurprise = surprise;
    showSavedCard(surprise);
    showShareModal(surprise);
  }

  // Show saved card (keeps backward compat)
  function showSavedCard(surprise) {
    const card = document.getElementById('savedCard');
    const urlEl = document.getElementById('savedLinkUrl');
    if (card && surprise) {
      urlEl.textContent = surprise.url;
      card.style.display = 'block';
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ─── Share Modal Button Handlers ───

  // WhatsApp share from modal
  function shareWhatsAppModal() {
    if (!lastPublishedSurprise) return;
    const tpl = TEMPLATES[templateId];
    var text = encodeURIComponent('\uD83C\uDF89 \u00A1Te he creado una sorpresa personalizada con M\u00E1gica Link! ' + tpl.title + ' \u2728 \u00C1brela antes de que expire:\n\n');
    window.open('https://wa.me/?text=' + text + encodeURIComponent(lastPublishedSurprise.url), '_blank');
  }

  // Telegram share from modal
  function shareTelegramModal() {
    if (!lastPublishedSurprise) return;
    const tpl = TEMPLATES[templateId];
    var text = encodeURIComponent('\uD83C\uDF89 \u00A1Te he creado una sorpresa personalizada con M\u00E1gica Link! ' + tpl.title + ' \u2728');
    window.open('https://t.me/share/url?url=' + encodeURIComponent(lastPublishedSurprise.url) + '&text=' + text, '_blank');
  }

  // Email share from modal
  function shareEmailModal() {
    if (!lastPublishedSurprise) return;
    const tpl = TEMPLATES[templateId];
    var subject = encodeURIComponent('Tienes una sorpresa de M\u00E1gica Link \uD83C\uDF81');
    var body = encodeURIComponent('\uD83C\uDF89 \u00A1Hola!\n\nTe he creado una sorpresa personalizada con M\u00E1gica Link: ' + tpl.title + ' \u2728\n\n\u00C1brela aqu\u00ED:\n' + lastPublishedSurprise.url + '\n\n\u00A1No dejes que expire!\n');
    window.open('mailto:?subject=' + subject + '&body=' + body, '_self');
  }

  // Native Web Share API from modal
  async function nativeShareModal() {
    if (!lastPublishedSurprise) return;
    const tpl = TEMPLATES[templateId];
    try {
      await navigator.share({
        title: 'Sorpresa de M\u00E1gica Link \uD83C\uDF81',
        text: '\uD83C\uDF89 \u00A1Te he creado una sorpresa personalizada! ' + tpl.title + ' \u2728',
        url: lastPublishedSurprise.url
      });
    } catch (err) {
      // User cancelled or share failed - do nothing
    }
  }

  // Copy link from modal
  function copyShareLink() {
    if (!lastPublishedSurprise) return;
    const btn = document.getElementById('shareCopyBtn');
    const btnText = document.getElementById('shareCopyBtnText');
    var url = lastPublishedSurprise.url;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function() {
        btn.classList.add('copied');
        btnText.textContent = '\u00A1Copiado!';
        setTimeout(function() {
          btn.classList.remove('copied');
          btnText.textContent = 'Copiar';
        }, 2500);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.classList.add('copied');
      btnText.textContent = '\u00A1Copiado!';
      setTimeout(function() {
        btn.classList.remove('copied');
        btnText.textContent = 'Copiar';
      }, 2500);
    }
  }

  // View surprise from modal
  function viewSurpriseModal() {
    if (lastPublishedSurprise) {
      window.location.href = lastPublishedSurprise.url;
    }
  }

  // Copy link (backward compat for saved card)
  function copyLink() {
    const urlEl = document.getElementById('savedLinkUrl');
    const btnText = document.getElementById('copyBtnText');
    if (navigator.clipboard && urlEl) {
      navigator.clipboard.writeText(urlEl.textContent).then(function() {
        btnText.textContent = '\u00A1Copiado!';
        setTimeout(function() { btnText.textContent = 'Copiar'; }, 2000);
      });
    } else if (urlEl) {
      const ta = document.createElement('textarea');
      ta.value = urlEl.textContent;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btnText.textContent = '\u00A1Copiado!';
      setTimeout(function() { btnText.textContent = 'Copiar'; }, 2000);
    }
  }

  function viewSurprise() {
    const urlEl = document.getElementById('savedLinkUrl');
    if (urlEl) {
      window.location.href = urlEl.textContent;
    }
  }

  // Share surprise link via WhatsApp (backward compat for saved card)
  function shareSurpriseLink() {
    // If already published, open share modal instead
    if (lastPublishedSurprise) {
      showShareModal(lastPublishedSurprise);
      return;
    }
    const urlEl = document.getElementById('savedLinkUrl');
    if (!urlEl) return;
    const text = encodeURIComponent('\u00A1Te he preparado una sorpresa especial! \uD83C\uDF81\u2728\n\n');
    window.open('https://wa.me/?text=' + text + encodeURIComponent(urlEl.textContent), '_blank');
  }

  // ─── Utility ───
  function escS(s) { return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;'); }
  function escH(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function escR(s) { return (s || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Expose public API
  window.MagicaLink = {
    preview: preview,
    closePreview: closePreview,
    download: download,
    publishSurprise: publishSurprise,
    shareWhatsApp: shareWhatsApp,
    removePhoto: removePhoto,
    copyLink: copyLink,
    viewSurprise: viewSurprise,
    shareSurpriseLink: shareSurpriseLink,
    showShareModal: showShareModal,
    closeShareModal: closeShareModal,
    shareWhatsAppModal: shareWhatsAppModal,
    shareTelegramModal: shareTelegramModal,
    shareEmailModal: shareEmailModal,
    nativeShareModal: nativeShareModal,
    copyShareLink: copyShareLink,
    viewSurpriseModal: viewSurpriseModal
  };

})();
