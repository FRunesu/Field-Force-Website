/* ============================================================
   FIELDFORCE AGRO SERVICES — SITE BEHAVIOUR
   js/main.js

   Handles the hero slider, the full-screen product / guide
   panel, the advisory request form, the gallery lightbox and
   the sticky navigation bar.

   Content (products, crop guides, soil parameters) lives in
   js/data.js — edit that file, not this one, to change content.
   ============================================================ */

(function () {
    'use strict';

    const ADVISORY_EMAIL = 'fieldforceagroservices@gmail.com';

    const CROP_PROTECTION_CATEGORIES = ['fungicides', 'herbicides', 'insecticides', 'fertilisers', 'plant-growth-regulators', 'pheromones'];
    const AGROCHEMICAL_CATEGORIES = ['fungicides', 'herbicides', 'insecticides', 'pesticides', 'plant-growth-regulators'];

    const $ = (id) => document.getElementById(id);
    const show = (el) => el && el.classList.remove('is-hidden');
    const hide = (el) => el && el.classList.add('is-hidden');

    /* ── Hero slider ── */
    function initSlider() {
        const slider = $('slider');
        if (!slider || !slider.children.length) return;

        const totalSlides = slider.children.length;
        slider.appendChild(slider.children[0].cloneNode(true));
        let index = 0;

        setInterval(() => {
            index++;
            slider.style.transition = 'transform 0.7s ease-in-out';
            slider.style.transform = `translateX(-${index * 100}%)`;
            if (index === totalSlides) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                    index = 0;
                }, 750);
            }
        }, 4000);
    }

    /* ── Panel open / close ── */
    function openPanel(label) {
        $('main-panel').classList.add('open');
        $('panel-title').textContent = label;
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        $('main-panel').classList.remove('open');
        document.body.style.overflow = '';
        document.querySelectorAll('.service-card').forEach((c) => c.classList.remove('active'));
        hide($('tab-btn-CropProtection'));
    }

    function switchTab(name) {
        document.querySelectorAll('.inner-tab-content').forEach((el) => el.classList.remove('active'));
        document.querySelectorAll('.inner-tab-btn').forEach((el) => el.classList.remove('active'));
        $('tab-' + name).classList.add('active');
        $('tab-btn-' + name).classList.add('active');
    }

    function hideOptionalTabs() {
        hide($('tab-btn-SoilAnalysis'));
        hide($('tab-btn-CropProtection'));
    }

    /* ── Data rendering (reads FF_PRODUCTS, FF_CROP_GUIDES, FF_SOIL_PARAMETERS from js/data.js) ── */
    function buildTable(headers, rows) {
        const head = headers.map((h) => `<th>${h}</th>`).join('');
        const body = rows
            .map((r) => '<tr>' + r.map((c) => `<td>${String(c).replace(/\n/g, '<br>')}</td>`).join('') + '</tr>')
            .join('');
        return `<table class="ff-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
    }

    function buildGuideAccordion(guide) {
        let inner = '';
        if (guide.overview && guide.overview.length) {
            inner += '<div class="ff-guide-text"><ul>';
            guide.overview.forEach((o) => {
                inner += `<li><strong>${o.label}:</strong> ${o.text}</li>`;
            });
            inner += '</ul></div>';
        }
        (guide.sections || []).forEach((s) => {
            inner += `<h4 class="ff-section-title">${s.title}</h4>`;
            inner += buildTable(s.headers, s.rows);
            if (s.note) inner += `<p class="ff-note">${s.note}</p>`;
        });
        inner += '<span class="ff-note-green">NB: ALWAYS READ LABELS BEFORE USING PRODUCTS</span>';
        return `<details class="ff-accordion" data-guide="${guide.id}"><summary>${guide.name}</summary><div class="ff-accordion-content">${inner}</div></details>`;
    }

    function buildProductAccordion(category) {
        const cols = category.columns || 1;
        const items = category.items || [];
        let rows = '';
        for (let i = 0; i < items.length; i += cols) {
            rows += '<tr>' + Array.from({ length: cols }, (_, c) => `<td>${items[i + c] || ''}</td>`).join('') + '</tr>';
        }
        const head = Array.from({ length: cols }, () => '<th>Product</th>').join('');
        return `<details class="ff-accordion" data-cat="${category.id}"><summary>${category.name}</summary><div class="ff-accordion-content"><table class="ff-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div></details>`;
    }

    function buildSoilTable(parameters) {
        const rows = parameters.map((p) => `<tr><td>${p.name}</td><td>${p.explanation}</td></tr>`).join('');
        return `<div class="panel-intro panel-intro--plain">
                <h3 class="panel-intro-title">Soil Testing &amp; Analysis — Parameter Reference</h3>
                <p class="panel-intro-text">Understanding your soil parameters helps determine the right amendments and fertilizers for optimal crop performance.</p>
            </div>
            <table class="soil-table"><thead><tr><th>Parameter</th><th>Explanation</th></tr></thead><tbody>${rows}</tbody></table>`;
    }

    function renderAll() {
        const guidesHtml = FF_CROP_GUIDES.map(buildGuideAccordion).join('');

        $('products-container').innerHTML = FF_PRODUCTS.map(buildProductAccordion).join('');
        $('cropguide-container').innerHTML = guidesHtml;
        $('cropprotection-guides-container').innerHTML = guidesHtml;
        $('cropprotection-products-container').innerHTML = FF_PRODUCTS
            .filter((c) => CROP_PROTECTION_CATEGORIES.includes(c.id))
            .map(buildProductAccordion)
            .join('');
        $('soil-container').innerHTML = buildSoilTable(FF_SOIL_PARAMETERS);

        ['products-loading', 'cropguide-loading', 'soil-loading'].forEach((id) => hide($(id)));
    }

    function filterProducts(categories) {
        document.querySelectorAll('#products-container .ff-accordion').forEach((acc) => {
            const visible = categories === null || categories.includes(acc.dataset.cat);
            acc.classList.toggle('is-hidden', !visible);
        });
    }

    /* ── Navigation links & service cards ── */
    function openNav(tab, label) {
        filterProducts(null);
        hideOptionalTabs();
        openPanel(label);
        switchTab(tab);
    }

    function openService(card, type) {
        document.querySelectorAll('.service-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        hideOptionalTabs();

        switch (type) {
            case 'agrochemicals':
                filterProducts(AGROCHEMICAL_CATEGORIES);
                openPanel('Agrochemical Products');
                switchTab('Products');
                break;
            case 'crop-protection':
                show($('tab-btn-CropProtection'));
                openPanel('Crop Protection & Management');
                switchTab('CropProtection');
                break;
            case 'fertilizer':
                filterProducts(['fertilisers']);
                openPanel('Fertilizer Reference');
                switchTab('Products');
                break;
            case 'soil':
                filterProducts(null);
                show($('tab-btn-SoilAnalysis'));
                openPanel('Soil Testing & Analysis');
                switchTab('SoilAnalysis');
                break;
            case 'advisory':
                filterProducts(null);
                openPanel('Advisory Services');
                switchTab('Advisory');
                hide($('form-success'));
                hide($('form-error'));
                break;
        }
    }

    /* ── Advisory request form (opens the visitor's email app) ── */
    function submitAdvisoryForm(event) {
        event.preventDefault();
        const value = (id) => $(id).value.trim();
        const name = value('af-name');
        const phone = value('af-phone');
        const email = value('af-email');
        const farm = value('af-farm');
        const crops = value('af-crops');
        const notes = value('af-notes');

        const services = Array.from(document.querySelectorAll('#advisory-form input[name="services"]:checked'))
            .map((cb) => cb.value);

        if (!name || !phone) {
            alert('Please fill in at least your Full Name and Phone Number.');
            return;
        }

        const subject = 'FieldForce Advisory Request — ' + name;
        const body = 'FIELDFORCE ADVISORY SERVICE REQUEST\n====================================\n\n'
            + 'Full Name:         ' + name + '\n'
            + 'Phone Number:      ' + phone + '\n'
            + 'Email Address:     ' + (email || 'Not provided') + '\n'
            + 'Farm / Operation:  ' + (farm || 'Not provided') + '\n\n'
            + 'Services Requested:\n' + (services.length ? services.map((s) => '  - ' + s).join('\n') : '  None selected') + '\n\n'
            + 'Crops / Area of Focus:\n  ' + (crops || 'Not provided') + '\n\n'
            + 'Additional Notes:\n  ' + (notes || 'None') + '\n\n'
            + '====================================\nSent from the FieldForce website.';

        window.location.href = 'mailto:' + ADVISORY_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        show($('form-success'));
    }

    /* ── Gallery lightbox ── */
    function initLightbox() {
        const lightbox = $('lightbox');
        const lightboxImg = $('lightbox-img');
        const lightboxCaption = $('lightbox-caption');
        const items = Array.from(document.querySelectorAll('#gallery-grid .gallery-item'));
        let current = 0;

        function showAt(i) {
            current = (i + items.length) % items.length;
            const img = items[current].querySelector('img');
            const caption = items[current].querySelector('.gallery-caption');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption ? caption.textContent : '';
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function close() {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
        }

        items.forEach((item, i) => item.addEventListener('click', () => showAt(i)));
        $('lightbox-close').addEventListener('click', close);
        $('lightbox-prev').addEventListener('click', () => showAt(current - 1));
        $('lightbox-next').addEventListener('click', () => showAt(current + 1));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) close();
        });
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('open')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') showAt(current - 1);
            if (e.key === 'ArrowRight') showAt(current + 1);
        });
    }

    /* ── Nav: transparent over the hero, solid green after scrolling ── */
    function initNav() {
        const nav = $('main-nav');
        const update = () => nav.classList.toggle('is-scrolled', window.scrollY > window.innerHeight - 100);
        window.addEventListener('scroll', update, { passive: true });
        update();

        const logo = nav.querySelector('.nav-logo');
        if (logo) {
            const hideLogo = () => hide(logo);
            logo.addEventListener('error', hideLogo);
            if (logo.complete && logo.naturalWidth === 0) hideLogo();
        }
    }

    /* ── Wire up click handlers (replaces the old inline onclick attributes) ── */
    function bindEvents() {
        document.querySelectorAll('[data-open-panel]').forEach((el) => {
            el.addEventListener('click', () => openNav(el.dataset.openPanel, el.dataset.panelLabel));
        });

        document.querySelectorAll('.service-card[data-service]').forEach((card) => {
            card.addEventListener('click', () => openService(card, card.dataset.service));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openService(card, card.dataset.service);
                }
            });
        });

        document.querySelectorAll('.inner-tab-btn[data-tab]').forEach((btn) => {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        });

        $('panel-close').addEventListener('click', closePanel);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePanel();
        });

        $('advisory-form').addEventListener('submit', submitAdvisoryForm);
    }

    initSlider();
    renderAll();
    bindEvents();
    initLightbox();
    initNav();
})();
