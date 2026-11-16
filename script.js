/* =====================================================================
   CONFIG AND DATA: safe to edit
   ===================================================================== */
const CONFIG = {
  storageKey: 'cth-titipan',   // where deposited items are kept in this browser
  orderPrefix: 'CTH',          // order code shown after "Pesan barang"
  pickupDays: 3,
  maxPhotoSize: 800            // photos are shrunk to this many pixels on the long side
};

// Add a category here and it appears in the chips, form, and cards automatically.
// kg = default weight for impact counter, newPrice = price of a new one (for "hemat" counter)
const CATEGORIES = {
  buku:    { label: 'Buku & diktat', kg: 1,   newPrice: 120000,
             icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M8 10h14a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H8z"/><path d="M40 10H28a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h13z"/></svg>' },
  perabot: { label: 'Perabot kos',   kg: 3,   newPrice: 150000,
             icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"><rect x="9" y="8" width="30" height="32" rx="2"/><path d="M9 19h30M9 30h30M14 40v3M34 40v3"/></svg>' },
  pakaian: { label: 'Pakaian',       kg: 0.5, newPrice: 120000,
             icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"><path d="M18 7l-11 6 4 9 4-2v21h18V20l4 2 4-9-11-6c0 3-3 5-6 5s-6-2-6-5z"/></svg>' },
  alat:    { label: 'Alat kuliah',   kg: 0.4, newPrice: 80000,
             icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"><path d="M18 6h12M20 6v12L9 38a3 3 0 0 0 3 4h24a3 3 0 0 0 3-4L28 18V6"/><path d="M14 30h20"/></svg>' }
};

const MODES = {
  jual:   { label: 'Dijual', filterLabel: 'Dijual',          action: 'Pesan barang' },
  tukar:  { label: 'Tukar',  filterLabel: 'Tukar',           action: 'Ajukan tukar' },
  donasi: { label: 'Donasi', filterLabel: 'Donasi (gratis)', action: 'Minta barang' }
};

const GRADES = { A: 'seperti baru', B: 'ada bekas pakai', C: 'layak dan ada cacat kecil' };

const LOCATIONS = ['Jatinangor', 'Ganesha', 'Cirebon'];

// Example items. Fields: id, name, cat, mode, price, grade, loc, kg, newPrice, note, since, swapFor, photo
// photo can be a file path next to this HTML, e.g. 'foto/kalkulus.jpg'. Leave '' to show the category icon.
const SAMPLE_ITEMS = [
  { id:'s01', name:'Kalkulus, Purcell edisi 9 jilid 1', cat:'buku', mode:'jual', price:45000, grade:'B', loc:'Jatinangor', kg:1.2, newPrice:180000, note:'Stabilo di bab turunan, tidak ada halaman sobek.', since:'2025', photo:'' },
  { id:'s02', name:'Fisika Dasar, Halliday jilid 1', cat:'buku', mode:'jual', price:50000, grade:'A', loc:'Jatinangor', kg:1.4, newPrice:210000, note:'Sampul plastik, hampir tidak dicoret.', since:'2025', photo:'' },
  { id:'s03', name:'Kumpulan soal UTS-UAS Matematika TPB', cat:'buku', mode:'donasi', price:0, grade:'B', loc:'Ganesha', kg:0.4, newPrice:40000, note:'Fotokopi dijilid, beberapa sudah dikerjakan pakai pensil.', since:'2024', photo:'' },
  { id:'s04', name:'Kimia Dasar, Chang', cat:'buku', mode:'tukar', price:0, grade:'B', loc:'Jatinangor', kg:1.3, newPrice:190000, note:'Sampul sedikit lecek.', swapFor:'buku Matematika IIB', since:'2025', photo:'' },
  { id:'s05', name:'Jas lab putih ukuran M', cat:'pakaian', mode:'jual', price:35000, grade:'A', loc:'Jatinangor', kg:0.4, newPrice:85000, note:'Dipakai 6 kali praktikum, sudah dicuci dan disetrika.', since:'2025', photo:'' },
  { id:'s06', name:'Jaket hoodie abu-abu L', cat:'pakaian', mode:'donasi', price:0, grade:'B', loc:'Jatinangor', kg:0.6, newPrice:150000, note:'Warna sedikit pudar, resleting normal.', since:'2024', photo:'' },
  { id:'s07', name:'Sepatu olahraga ukuran 42', cat:'pakaian', mode:'jual', price:60000, grade:'B', loc:'Ganesha', kg:0.8, newPrice:250000, note:'Sol masih tebal, sudah dicuci.', since:'2024', photo:'' },
  { id:'s08', name:'Kipas angin berdiri 16 inci', cat:'perabot', mode:'jual', price:75000, grade:'B', loc:'Jatinangor', kg:4.5, newPrice:220000, note:'Dites menyala di 3 kecepatan. Ada goresan di tiang.', since:'2025', photo:'' },
  { id:'s09', name:'Rak plastik 3 susun', cat:'perabot', mode:'donasi', price:0, grade:'C', loc:'Jatinangor', kg:2.5, newPrice:90000, note:'Satu sudut retak kecil, masih kokoh.', since:'2025', photo:'' },
  { id:'s10', name:'Meja lipat belajar', cat:'perabot', mode:'jual', price:40000, grade:'A', loc:'Jatinangor', kg:3, newPrice:110000, note:'Kaki lipat lancar, permukaan mulus.', since:'2025', photo:'' },
  { id:'s11', name:'Rice cooker mini 0,6 L', cat:'perabot', mode:'tukar', price:0, grade:'B', loc:'Ganesha', kg:1.8, newPrice:180000, note:'Dites memasak.', swapFor:'rak sepatu', since:'2024', photo:'' },
  { id:'s12', name:'Set alat gambar teknik', cat:'alat', mode:'jual', price:30000, grade:'B', loc:'Jatinangor', kg:0.5, newPrice:95000, note:'Jangka, penggaris segitiga, busur lengkap.', since:'2025', photo:'' },
  { id:'s13', name:'Kalkulator scientific', cat:'alat', mode:'jual', price:90000, grade:'A', loc:'Ganesha', kg:0.2, newPrice:250000, note:'Baterai baru, semua tombol berfungsi.', since:'2024', photo:'' },
  { id:'s14', name:'Kasur lipat busa single', cat:'perabot', mode:'donasi', price:0, grade:'C', loc:'Jatinangor', kg:5, newPrice:300000, note:'Sarung sudah dicuci, busa sedikit kempes di tengah.', since:'2024', photo:'' }
];

/* =====================================================================
   MECHANICS: you normally don't need to edit below this line
   ===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const rupiah = v => 'Rp' + Number(v).toLocaleString('id-ID');
const state = { cat: '', search: '', mode: '', loc: '', grade: '', sort: 'new' };

/* ---------- storage (only in this browser) ---------- */
function loadOwnItems() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (e) { return []; }
}
function saveOwnItems(list) {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(list)); return true; }
  catch (e) { return false; }
}
let ownItems = loadOwnItems();
const allItems = () => ownItems.concat(SAMPLE_ITEMS.map(i => ({ ...i, sample: true })));
const findItem = id => allItems().find(i => i.id === id);

/* ---------- text helpers ---------- */
function priceText(i) {
  if (i.mode === 'jual') return rupiah(i.price);
  if (i.mode === 'donasi') return 'Gratis';
  return i.swapFor ? 'Tukar dengan ' + i.swapFor : 'Tukar barang';
}
function statusText(i, long) {
  if (i.pending) return 'Menunggu pengecekan';
  return long ? `Lolos pengecekan · Kondisi ${i.grade} (${GRADES[i.grade] || ''})` : 'Kondisi ' + i.grade;
}
function fillMedia(el, i) {
  el.innerHTML = '';
  if (i.photo) {
    const img = new Image();
    img.src = i.photo; img.alt = 'Foto ' + i.name; img.loading = 'lazy';
    img.onerror = () => { el.innerHTML = CATEGORIES[i.cat].icon; };
    el.appendChild(img);
  } else {
    el.innerHTML = CATEGORIES[i.cat].icon;
  }
}
function slot(root, name) { return root.querySelector(`[data-slot="${name}"]`); }
function setSlot(root, name, text) { const el = slot(root, name); if (el) el.textContent = text; return el; }

/* ---------- build controls from config ---------- */
function option(value, label) { const o = document.createElement('option'); o.value = value; o.textContent = label; return o; }
function buildControls() {
  Object.entries(MODES).forEach(([k, m]) => $('#filter-mode').append(option(k, m.filterLabel)));
  LOCATIONS.forEach(l => { $('#filter-location').append(option(l, l)); $('#f-location').append(option(l, l)); });
  Object.entries(GRADES).forEach(([g, t]) => {
    $('#filter-grade').append(option(g, `Kondisi ${g}`));
    const li = document.createElement('li'); li.className = 'grade'; li.dataset.grade = g;
    li.innerHTML = `<strong>${g}</strong> ${t}`; $('#grade-list').append(li);
  });
  Object.entries(CATEGORIES).forEach(([k, c]) => $('#f-category').append(option(k, c.label)));
  $('#f-mode-options').innerHTML = Object.entries(MODES).map(([k, m], n) =>
    `<label class="mode-option"><input type="radio" name="f-mode" id="f-mode-${k}" value="${k}"${n === 0 ? ' checked' : ''}> <span>${m.label}</span></label>`).join('');
}
function renderChips() {
  const chips = [['', 'Semua']].concat(Object.entries(CATEGORIES).map(([k, c]) => [k, c.label]));
  $('#category-chips').innerHTML = '';
  chips.forEach(([k, label]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.dataset.cat = k; b.textContent = label;
    b.setAttribute('aria-pressed', String(state.cat === k));
    $('#category-chips').append(b);
  });
}

/* ---------- catalog ---------- */
const GRADE_ORDER = { A: 0, B: 1, C: 2 };
function filteredItems() {
  const q = state.search.trim().toLowerCase();
  const list = allItems().filter(i =>
    (!state.cat || i.cat === state.cat) &&
    (!state.mode || i.mode === state.mode) &&
    (!state.loc || i.loc === state.loc) &&
    (!state.grade || i.grade === state.grade) &&
    (!q || (i.name + ' ' + (i.note || '')).toLowerCase().includes(q)));
  const price = i => i.mode === 'jual' ? i.price : 0;   // free and swap items count as Rp0
  if (state.sort === 'cheap') list.sort((a, b) => price(a) - price(b));
  if (state.sort === 'expensive') list.sort((a, b) => price(b) - price(a));
  if (state.sort === 'grade') list.sort((a, b) => (GRADE_ORDER[a.grade] ?? 9) - (GRADE_ORDER[b.grade] ?? 9));
  return list;
}
function renderCatalog() {
  const list = filteredItems();
  const grid = $('#catalog-grid'); grid.innerHTML = '';
  const tpl = $('#card-template');
  list.forEach(i => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    Object.assign(node.dataset, { id: i.id, cat: i.cat, mode: i.mode, grade: i.grade || '', status: i.pending ? 'pending' : 'checked', owner: i.own ? 'me' : '' });
    fillMedia(slot(node, 'media'), i);
    setSlot(node, 'mode', MODES[i.mode].label);
    setSlot(node, 'name', i.name);
    setSlot(node, 'price', priceText(i));
    setSlot(node, 'status', statusText(i));
    setSlot(node, 'location', i.loc);
    grid.append(node);
  });
  $('#result-count').textContent = `${list.length} barang ditemukan`;
  $('#empty-state').hidden = list.length > 0;
  renderImpact();
}
function renderImpact() {
  const checked = allItems().filter(i => !i.pending);
  const kg = checked.reduce((a, i) => a + (i.kg || CATEGORIES[i.cat].kg), 0);
  const saving = checked.reduce((a, i) => a + Math.max(0, (i.newPrice || CATEGORIES[i.cat].newPrice) - (i.mode === 'jual' ? i.price : 0)), 0);
  $('#impact-items').textContent = checked.length;
  $('#impact-kg').textContent = kg.toLocaleString('id-ID', { maximumFractionDigits: 1 });
  $('#impact-saving').textContent = rupiah(saving);
}

/* ---------- detail popup ---------- */
let openId = null;
function openItem(id) {
  const i = findItem(id); if (!i) return;
  openId = id;
  const d = $('#item-dialog');
  Object.assign(d.dataset, { cat: i.cat, mode: i.mode, grade: i.grade || '', status: i.pending ? 'pending' : 'checked' });
  fillMedia(slot(d, 'media'), i);
  setSlot(d, 'kicker', `${CATEGORIES[i.cat].label} · ${MODES[i.mode].label}${i.sample ? ' · contoh' : ''}${i.own ? ' · titipanmu' : ''}`);
  setSlot(d, 'name', i.name);
  setSlot(d, 'price', priceText(i));
  setSlot(d, 'status', statusText(i, true));
  setSlot(d, 'location', 'Drop point ' + i.loc);
  const since = setSlot(d, 'since', i.since ? 'Dipakai sejak ' + i.since : ''); since.hidden = !i.since;
  const details = [i.note || 'Tidak ada catatan.', `Ambil langsung di drop point ${i.loc}, tunjukkan kode pesanan.`];
  if (i.mode === 'jual') details.push('Bayar saat ambil. Uang diteruskan ke pemilik barang.');
  if (i.mode === 'tukar') details.push('Bawa barang penukar ke drop point untuk dicek juga.');
  const ul = slot(d, 'details'); ul.innerHTML = '';
  details.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.append(li); });
  $('#d-action').textContent = MODES[i.mode].action;
  $('#d-action').hidden = !!i.own;          // you can't order your own item
  $('#d-delete').hidden = !i.own;
  $('#d-message').hidden = true;
  d.showModal();
}
function orderCode(id) {
  let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) % 9000;
  return `${CONFIG.orderPrefix}-${1000 + h}`;
}

/* ---------- deposit form ---------- */
let photoData = '';
const selectedMode = () => document.querySelector('input[name="f-mode"]:checked').value;
function syncModeFields() {
  $('#f-price-field').hidden = selectedMode() !== 'jual';
  $('#f-swap-field').hidden = selectedMode() !== 'tukar';
}
function shrinkPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, CONFIG.maxPhotoSize / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * scale); c.height = Math.round(img.height * scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', 0.7));
      };
      img.onerror = reject; img.src = reader.result;
    };
    reader.onerror = reject; reader.readAsDataURL(file);
  });
}
function formMessage(text) { const m = $('#f-message'); m.textContent = text; m.hidden = false; }

/* ---------- events ---------- */
$('#category-chips').addEventListener('click', e => {
  const b = e.target.closest('.chip'); if (!b) return;
  state.cat = b.dataset.cat; renderChips(); renderCatalog();
});
$('#filter-search').addEventListener('input', e => { state.search = e.target.value; renderCatalog(); });
$('#filter-mode').addEventListener('change', e => { state.mode = e.target.value; renderCatalog(); });
$('#filter-location').addEventListener('change', e => { state.loc = e.target.value; renderCatalog(); });
$('#filter-grade').addEventListener('change', e => { state.grade = e.target.value; renderCatalog(); });
$('#filter-sort').addEventListener('change', e => { state.sort = e.target.value; renderCatalog(); });
$('#filter-reset').addEventListener('click', resetFilters);
function resetFilters() {
  Object.assign(state, { cat: '', search: '', mode: '', loc: '', grade: '', sort: 'new' });
  $('#filter-search').value = ''; ['#filter-mode', '#filter-location', '#filter-grade'].forEach(s => $(s).value = '');
  $('#filter-sort').value = 'new'; renderChips(); renderCatalog();
}
$('#catalog-grid').addEventListener('click', e => {
  const card = e.target.closest('.card'); if (card) openItem(card.dataset.id);
});

$('#d-close').addEventListener('click', () => $('#item-dialog').close());
$('#item-dialog').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.close(); });
$('#d-action').addEventListener('click', () => {
  const i = findItem(openId); const m = $('#d-message'); m.hidden = false;
  m.textContent = i.pending
    ? 'Barang ini belum lolos pengecekan, jadi belum bisa dipesan.'
    : `Tercatat (simulasi). Kode pesanan: ${orderCode(i.id)}. Ambil di drop point ${i.loc} dalam ${CONFIG.pickupDays} hari.`;
});
$('#d-delete').addEventListener('click', () => {
  const btn = $('#d-delete');
  if (btn.dataset.confirm !== 'yes') { btn.dataset.confirm = 'yes'; btn.textContent = 'Klik sekali lagi untuk menghapus'; return; }
  ownItems = ownItems.filter(i => i.id !== openId); saveOwnItems(ownItems);
  btn.dataset.confirm = ''; btn.textContent = 'Hapus titipan saya';
  $('#item-dialog').close(); renderCatalog();
});
$('#item-dialog').addEventListener('close', () => { const b = $('#d-delete'); b.dataset.confirm = ''; b.textContent = 'Hapus titipan saya'; });

$('#f-mode-options').addEventListener('change', syncModeFields);
$('#f-photo').addEventListener('change', async e => {
  const file = e.target.files[0]; const prev = $('#f-photo-preview');
  photoData = ''; prev.hidden = true;
  if (!file) return;
  try { photoData = await shrinkPhoto(file); prev.src = photoData; prev.hidden = false; }
  catch (err) { formMessage('Foto tidak bisa dibaca. Coba file JPG atau PNG lain.'); e.target.value = ''; }
});
$('#deposit-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#f-name').value.trim();
  const mode = selectedMode();
  const price = parseInt($('#f-price').value, 10);
  if (!name) { formMessage('Isi nama barang dulu.'); $('#f-name').focus(); return; }
  if (mode === 'jual' && !(price >= 0)) { formMessage('Isi harga, atau pilih Tukar atau Donasi.'); $('#f-price').focus(); return; }
  if (!$('#f-clean').checked) { formMessage('Centang konfirmasi bahwa barang sudah bersih.'); $('#f-clean').focus(); return; }
  const cat = $('#f-category').value;
  const item = {
    id: 'u' + Date.now().toString(36), name, cat, mode,
    price: mode === 'jual' ? price : 0, grade: '', loc: $('#f-location').value,
    kg: CATEGORIES[cat].kg, swapFor: mode === 'tukar' ? $('#f-swap').value.trim() : '',
    note: $('#f-note').value.trim(), photo: photoData, pending: true, own: true
  };
  ownItems.unshift(item);
  let saved = saveOwnItems(ownItems);
  if (!saved && item.photo) { item.photo = ''; saved = saveOwnItems(ownItems); }   // photo too big for storage: keep the item without it
  formMessage(`Barang tercatat dan muncul di katalog dengan status "Menunggu pengecekan". Antar ke drop point ${item.loc}.`
    + (saved ? '' : ' Catatan: browser ini tidak bisa menyimpan, jadi titipan hilang kalau halaman di-refresh.'));
  e.target.reset(); photoData = ''; $('#f-photo-preview').hidden = true; syncModeFields();
  resetFilters();
});

/* ---------- start ---------- */
buildControls(); renderChips(); syncModeFields(); renderCatalog();
