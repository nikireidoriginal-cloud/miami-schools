let customSchools = [];

function loadCustomSchools() {
  try {
    const saved = localStorage.getItem("custom_schools");
    if (saved) customSchools = JSON.parse(saved);
  } catch {}
}

function saveCustomSchools() {
  localStorage.setItem("custom_schools", JSON.stringify(customSchools));
  try {
    fetch("/api/custom-schools", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customSchools),
    });
  } catch {}
}

async function loadCustomSchoolsFromAPI() {
  try {
    const res = await fetch("/api/custom-schools");
    if (res.ok) {
      customSchools = await res.json();
      localStorage.setItem("custom_schools", JSON.stringify(customSchools));
    }
  } catch {
    loadCustomSchools();
  }
}

function getAllSchools() {
  return [...SCHOOLS, ...customSchools];
}

function openAddSchoolModal() {
  document.getElementById("add-school-name").value = "";
  document.getElementById("add-school-city").value = "";
  document.getElementById("add-school-address").value = "";
  document.getElementById("add-school-county").value = "Miami-Dade";
  document.getElementById("add-school-grades").value = "";
  document.getElementById("add-school-tuition").value = "";
  document.getElementById("add-school-ratio").value = "";
  document.getElementById("add-school-type").value = "";
  document.getElementById("add-school-phone").value = "";
  document.getElementById("add-school-website").value = "";
  document.getElementById("add-school-schedule").value = "";
  document.getElementById("add-school-error").style.display = "none";
  document.getElementById("add-school-modal").classList.add("active");
}

function closeAddSchoolModal() {
  document.getElementById("add-school-modal").classList.remove("active");
}

function confirmAddSchool() {
  const name = document.getElementById("add-school-name").value.trim();
  if (!name) {
    document.getElementById("add-school-error").style.display = "block";
    return;
  }

  const tuitionRaw = document.getElementById("add-school-tuition").value.trim();
  const tuitionNum = parseInt(tuitionRaw.replace(/[^0-9]/g, ""), 10) || 0;
  const tuition = tuitionNum ? `$${tuitionNum.toLocaleString()}` : "–";

  const school = {
    id: "custom-" + Date.now(),
    name,
    city: document.getElementById("add-school-city").value.trim() || "–",
    address: document.getElementById("add-school-address").value.trim(),
    county: document.getElementById("add-school-county").value,
    area: document.getElementById("add-school-county").value,
    grades: document.getElementById("add-school-grades").value.trim() || "–",
    tuition,
    tuitionNum,
    ratio: document.getElementById("add-school-ratio").value.trim() || "–",
    type: document.getElementById("add-school-type").value.trim() || "–",
    phone: document.getElementById("add-school-phone").value.trim(),
    website: document.getElementById("add-school-website").value.trim(),
    features: [],
    schedule: document.getElementById("add-school-schedule").value.trim() || "–",
    enrollment: 0,
    custom: true,
  };

  customSchools.push(school);
  saveCustomSchools();
  closeAddSchoolModal();
  renderSchools();
}

const SCHOOLS = [
  // 1a–d. Alexander Montessori (4 campuses)
  {
    id: "alexander-montessori-red-road",
    name: "Alexander Montessori - Red Road",
    city: "Miami",
    county: "Miami-Dade",
    address: "6050 SW 57th Ave, Miami, FL 33143",
    lat: 25.7058, lng: -80.2871,
    group: "1a",
    grades: "Pre-K – 5",
    tuition: "$18,000",
    tuitionNum: 18000,
    ratio: "14:1",
    type: "Montessori",
    phone: "(305) 665-6274",
    website: "https://www.alexandermontessori.com",
    features: ["Est. 1963", "Authentic Montessori", "Summer program"],
    schedule: "~8:30 AM start",
    enrollment: 440,
  },
  {
    id: "alexander-montessori-ludlam",
    name: "Alexander Montessori - Ludlam Rd",
    city: "Miami",
    county: "Miami-Dade",
    address: "14850 SW 67th Ave, Miami, FL 33158",
    lat: 25.6275, lng: -80.3115,
    group: "1b",
    grades: "Pre-K – 5",
    tuition: "$18,000",
    tuitionNum: 18000,
    ratio: "14:1",
    type: "Montessori",
    phone: "(305) 665-6274",
    website: "https://www.alexandermontessori.com",
    features: ["Est. 1963", "Authentic Montessori", "Summer program"],
    schedule: "~8:30 AM start",
    enrollment: 440,
  },
  {
    id: "alexander-montessori-old-cutler",
    name: "Alexander Montessori - Old Cutler Rd",
    city: "Miami",
    county: "Miami-Dade",
    address: "14400 Old Cutler Rd, Miami, FL 33158",
    lat: 25.6310, lng: -80.2983,
    group: "1c",
    grades: "Pre-K – 5",
    tuition: "$18,000",
    tuitionNum: 18000,
    ratio: "14:1",
    type: "Montessori",
    phone: "(305) 665-6274",
    website: "https://www.alexandermontessori.com",
    features: ["Est. 1963", "Authentic Montessori", "Summer program"],
    schedule: "~8:30 AM start",
    enrollment: 440,
  },
  {
    id: "alexander-montessori-palmetto-bay",
    name: "Alexander Montessori - Palmetto Bay",
    city: "Palmetto Bay",
    county: "Miami-Dade",
    address: "17800 Old Cutler Rd, Miami, FL 33157",
    lat: 25.5980, lng: -80.2942,
    group: "1d",
    grades: "Pre-K – 5",
    tuition: "$18,000",
    tuitionNum: 18000,
    ratio: "14:1",
    type: "Montessori",
    phone: "(305) 665-6274",
    website: "https://www.alexandermontessori.com",
    features: ["Est. 1963", "Authentic Montessori", "Summer program"],
    schedule: "~8:30 AM start",
    enrollment: 440,
  },
  // 2. American Heritage
  {
    id: "american-heritage-broward",
    name: "American Heritage School - Broward",
    city: "Plantation",
    county: "Broward",
    address: "12200 W Broward Blvd, Plantation, FL 33325",
    lat: 26.1219, lng: -80.2548,
    group: "2",
    grades: "Pre-K3 – 12",
    tuition: "$33,000",
    tuitionNum: 33000,
    ratio: "5:1",
    type: "Non-sectarian",
    phone: "(954) 472-0022",
    website: "https://www.ahschool.com/broward-campus",
    features: ["#1 Private K-12 in FL", "95% AP pass rate", "VPK", "STEM focus", "$42M scholarships (2025)"],
    schedule: "8:30 AM – 3:10 PM",
    enrollment: 2999,
  },
  // 3. Cattoira Montessori
  {
    id: "cattoira-montessori",
    name: "Cattoira Montessori School",
    city: "Miami",
    county: "Miami-Dade",
    address: "9385 SW 79th Ave, Miami, FL 33156",
    lat: 25.6886, lng: -80.3133,
    group: "3",
    grades: "Pre-K – 6",
    tuition: "$25,000",
    tuitionNum: 25000,
    ratio: "6:1",
    type: "Montessori",
    phone: "(305) 274-6509",
    website: "https://www.cattoiramontessori.com",
    features: ["IMC-accredited", "Spanish immersion", "6:1 ratio", "40% acceptance", "Robotics & chess"],
    schedule: "~8:30 AM start",
    enrollment: 102,
  },
  // 4. Coconut Grove Montessori
  {
    id: "coconut-grove-montessori",
    name: "Coconut Grove Montessori School",
    city: "Miami",
    county: "Miami-Dade",
    address: "2850 SW 27th Ave, Coconut Grove, FL 33133",
    lat: 25.7308, lng: -80.2382,
    group: "4",
    grades: "Pre-K – 5",
    tuition: "$22,000",
    tuitionNum: 22000,
    ratio: "12:1",
    type: "Montessori",
    phone: "(305) 444-4484",
    website: "https://www.cgrovemontessori.com",
    features: ["Authentic Montessori", "Coconut Grove", "Outdoor learning", "Through 5th grade"],
    schedule: "Montessori schedule",
    enrollment: 268,
  },
  // 5. Cushman School
  {
    id: "cushman-school",
    name: "The Cushman School",
    city: "Miami",
    county: "Miami-Dade",
    address: "592 NE 60th St, Miami, FL 33137",
    lat: 25.8173, lng: -80.1874,
    group: "5",
    grades: "Pre-K – 8",
    tuition: "$32,000",
    tuitionNum: 32000,
    ratio: "8:1",
    type: "Non-sectarian",
    phone: "(305) 757-1966",
    website: "https://www.cushmanschool.org",
    features: ["Progressive education", "Small school feel", "Arts integration", "Through 8th grade"],
    schedule: "~8:15 AM start",
    enrollment: 500,
  },
  // 6. Gulliver Prep
  {
    id: "gulliver-prep",
    name: "Gulliver Preparatory School",
    city: "Coral Gables / Pinecrest",
    county: "Miami-Dade",
    address: "12595 Red Rd, Coral Gables, FL 33156",
    lat: 25.6692, lng: -80.2871,
    group: "6",
    grades: "Pre-K – 12",
    tuition: "$38,000",
    tuitionNum: 38000,
    ratio: "10:1",
    type: "Non-sectarian",
    phone: "(305) 666-7937",
    website: "https://www.gulliverprep.org",
    features: ["Three campuses", "Full K-12", "Strong athletics", "AP & Honors"],
    schedule: "~8:00 AM start",
    enrollment: 2200,
  },
  // 7. Miami Country Day
  {
    id: "miami-country-day",
    name: "Miami Country Day School",
    city: "Miami",
    county: "Miami-Dade",
    address: "601 NE 107th St, Miami, FL 33161",
    lat: 25.8539, lng: -80.1862,
    group: "7",
    grades: "Pre-K – 12",
    tuition: "$40,000",
    tuitionNum: 40000,
    ratio: "8:1",
    type: "Non-sectarian",
    phone: "(305) 759-2843",
    website: "https://www.miamicountryday.org",
    features: ["Full K-12", "Diverse community", "Strong arts & athletics", "College prep"],
    schedule: "~8:00 AM start",
    enrollment: 1100,
  },
  // 8. North Broward Prep
  {
    id: "north-broward-prep",
    name: "North Broward Preparatory School",
    city: "Coconut Creek",
    county: "Broward",
    address: "7600 Lyons Rd, Coconut Creek, FL 33073",
    lat: 26.2548, lng: -80.1895,
    group: "8",
    grades: "Pre-K – 12",
    tuition: "$33,600",
    tuitionNum: 33600,
    ratio: "17:1",
    type: "Non-sectarian",
    phone: "",
    website: "https://www.nordangliaeducation.com/nbps-florida",
    features: ["IB program", "Day & boarding", "International curriculum", "VPK"],
    schedule: "~8:00 AM start",
    enrollment: 2052,
  },
  // 9. Pine Crest
  {
    id: "pine-crest-ftl",
    name: "Pine Crest School - Fort Lauderdale",
    city: "Fort Lauderdale",
    county: "Broward",
    address: "1501 NE 62nd St, Fort Lauderdale, FL 33334",
    lat: 26.1768, lng: -80.1248,
    group: "9",
    grades: "Pre-K4 – 12",
    tuition: "$39,010",
    tuitionNum: 39010,
    ratio: "Small classes",
    type: "Non-sectarian",
    phone: "(561) 852-2800",
    website: "https://www.pinecrest.edu",
    features: ["Prestigious college prep", "Strong arts & athletics", "Two-campus system"],
    schedule: "~8:30 AM start",
    enrollment: 1700,
  },
  // 10. Riviera Day
  {
    id: "riviera-schools",
    name: "Riviera Day School",
    city: "Coral Gables",
    county: "Miami-Dade",
    address: "6800 Nervia St, Coral Gables, FL 33146",
    lat: 25.7218, lng: -80.2652,
    group: "10",
    grades: "Pre-K – 5",
    tuition: "$24,000",
    tuitionNum: 24000,
    ratio: "10:1",
    type: "Non-sectarian",
    phone: "(305) 666-1856",
    website: "https://www.rivieraschools.com",
    features: ["Early education focus", "Coral Gables location", "Small classes", "Through 5th grade"],
    schedule: "~8:30 AM start",
    enrollment: 300,
  },
  // 11. Sagemont Prep
  {
    id: "sagemont-prep",
    name: "Sagemont Preparatory School",
    city: "Weston",
    county: "Broward",
    address: "1570 Sagemont Way, Weston, FL 33326",
    lat: 26.1003, lng: -80.3982,
    group: "11",
    grades: "Pre-K – 12",
    tuition: "$28,000",
    tuitionNum: 28000,
    ratio: "12:1",
    type: "Non-sectarian",
    phone: "(954) 384-5454",
    website: "https://www.sagemont.com",
    features: ["College prep", "Small class sizes", "AP courses", "Athletics"],
    schedule: "~8:00 AM start",
    enrollment: 400,
  },
  // 12. University School of NSU
  {
    id: "university-school-nsu",
    name: "University School of NSU",
    city: "Davie",
    county: "Broward",
    address: "3375 SW 75th Ave, Fort Lauderdale, FL 33314",
    lat: 26.0784, lng: -80.2408,
    group: "12",
    grades: "Pre-K – 12",
    tuition: "$30,000",
    tuitionNum: 30000,
    ratio: "10:1",
    type: "Non-sectarian",
    phone: "(954) 262-4400",
    website: "https://www.uschool.nova.edu",
    features: ["NSU campus resources", "Strong academics", "Athletics", "Arts programs"],
    schedule: "~8:00 AM start",
    enrollment: 2000,
  },
];

// ── State ────────────────────────────────────────────────
let schoolStates = {};
let activeTab = "active";
let filterCounty = "all";
let sortBy = "name";
let searchQuery = "";

// ── API ──────────────────────────────────────────────────
async function loadStates() {
  try {
    const res = await fetch("/api/schools");
    if (res.ok) schoolStates = await res.json();
  } catch {
    const saved = localStorage.getItem("school_states");
    if (saved) schoolStates = JSON.parse(saved);
  }
}

async function saveState(schoolId, update) {
  schoolStates[schoolId] = {
    ...schoolStates[schoolId],
    ...update,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem("school_states", JSON.stringify(schoolStates));
  try {
    await fetch("/api/schools", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolId, ...update }),
    });
  } catch {}
}

// ── Render ───────────────────────────────────────────────
function getFilteredSchools() {
  let list = getAllSchools().filter((s) => {
    const state = schoolStates[s.id] || {};
    const isNixed = state.nixed === true;
    if (activeTab === "active" && isNixed) return false;
    if (activeTab === "nixed" && !isNixed) return false;
    if (filterCounty !== "all" && s.county !== filterCounty) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.type.toLowerCase().includes(q)
      );
    }
    return true;
  });

  list.sort((a, b) => {
    // Always sort by group number first to keep 1a,1b,1c,1d together and in order
    const ga = a.group || "zzz";
    const gb = b.group || "zzz";
    const groupCmp = ga.localeCompare(gb, undefined, { numeric: true });

    switch (sortBy) {
      case "name": return groupCmp;
      case "tuition-asc": return (a.tuitionNum - b.tuitionNum) || groupCmp;
      case "tuition-desc": return (b.tuitionNum - a.tuitionNum) || groupCmp;
      case "enrollment": return (b.enrollment - a.enrollment) || groupCmp;
      case "city": return a.city.localeCompare(b.city) || groupCmp;
      default: return groupCmp;
    }
  });

  return list;
}

function renderSchools() {
  const tbody = document.getElementById("school-tbody");
  const schools = getFilteredSchools();

  const all = getAllSchools();
  const activeCount = all.filter((s) => !(schoolStates[s.id]?.nixed)).length;
  const nixedCount = all.filter((s) => schoolStates[s.id]?.nixed).length;
  document.getElementById("active-count").textContent = activeCount;
  document.getElementById("nixed-count").textContent = nixedCount;
  document.getElementById("status-showing").textContent = schools.length;
  document.getElementById("status-total").textContent = all.length;

  if (schools.length === 0) {
    tbody.innerHTML = `
      <tr><td colspan="12" class="empty-state">
        ${activeTab === "nixed" ? "No nixed schools yet." : "No schools match your filters."}
      </td></tr>`;
    return;
  }

  tbody.innerHTML = schools.map((s) => {
    const state = schoolStates[s.id] || {};
    const isNixed = state.nixed === true;
    const countyClass = s.county === "Miami-Dade" ? "miami-dade" : "broward";
    const nixSnippet = state.nixReason ? escapeHtml(state.nixReason) : "";
    const nixMeta = state.nixedAt
      ? `<span class="nix-meta">${state.nixedBy ? escapeHtml(state.nixedBy) + " · " : ""}${new Date(state.nixedAt).toLocaleDateString()}</span>`
      : "";
    const notesText = state.notes ? escapeHtml(state.notes) : "";

    return `
      <tr class="${isNixed ? "row-nixed" : ""}" data-id="${s.id}">
        <td class="col-group-num">${s.group || "–"}</td>
        <td class="col-name">
          <div class="school-name">${s.website ? `<a href="${s.website}" target="_blank" rel="noopener">${s.name}</a>` : s.name}</div>
          <div class="school-city">${s.city}</div>
          <div class="school-features">${s.features.map((f) => `<span class="feature-tag">${f}</span>`).join("")}</div>
          ${nixSnippet ? `<div class="nix-reason">Nixed: ${nixSnippet}${nixMeta}</div>` : ""}
        </td>
        <td><span class="area-badge ${countyClass}">${s.county}</span></td>
        <td class="col-address">${s.address ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}" target="_blank" rel="noopener" class="address-link">${s.address}</a>` : "–"}</td>
        <td>${s.grades}</td>
        <td class="col-money">${s.tuition}</td>
        <td>${s.ratio}</td>
        <td class="col-num">${s.enrollment.toLocaleString()}</td>
        <td>${s.schedule}</td>
        <td>${s.phone ? `<a href="tel:${s.phone}" class="phone-link">${s.phone}</a>` : "–"}</td>
        <td class="col-notes">
          <div class="notes-cell">${notesText || `<span class="no-notes">–</span>`}</div>
          <button class="btn-sm btn-notes btn-edit-notes" onclick="openNotesModal('${s.id}')">${notesText ? "Edit" : "Add"}</button>
        </td>
        <td class="col-actions">
          ${isNixed
            ? `<button class="btn-sm btn-restore" onclick="restoreSchool('${s.id}')">Restore</button>`
            : `<button class="btn-sm btn-nix" onclick="openNixModal('${s.id}')">Nix</button>`
          }
        </td>
      </tr>`;
  }).join("");

  renderMapMarkers();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ── Modals ───────────────────────────────────────────────
let currentModalSchoolId = null;

function openNixModal(schoolId) {
  currentModalSchoolId = schoolId;
  const school = getAllSchools().find((s) => s.id === schoolId);
  document.getElementById("nix-modal-title").textContent = `Nix: ${school.name}`;
  document.getElementById("nix-reason").value = "";
  document.getElementById("nix-by").value = localStorage.getItem("user_name") || "";
  document.getElementById("nix-error").style.display = "none";
  document.getElementById("nix-name-error").style.display = "none";
  document.getElementById("nix-modal").classList.add("active");
}

function closeNixModal() {
  document.getElementById("nix-modal").classList.remove("active");
  currentModalSchoolId = null;
}

async function confirmNix() {
  const reason = document.getElementById("nix-reason").value.trim();
  const nixedBy = document.getElementById("nix-by").value.trim();
  if (!reason) {
    document.getElementById("nix-error").style.display = "block";
    return;
  }
  if (!nixedBy) {
    document.getElementById("nix-name-error").style.display = "block";
    return;
  }
  localStorage.setItem("user_name", nixedBy);
  await saveState(currentModalSchoolId, {
    nixed: true,
    nixReason: reason,
    nixedBy,
    nixedAt: new Date().toISOString(),
  });
  closeNixModal();
  renderSchools();
}

function openNotesModal(schoolId) {
  currentModalSchoolId = schoolId;
  const school = getAllSchools().find((s) => s.id === schoolId);
  const state = schoolStates[schoolId] || {};
  document.getElementById("notes-modal-title").textContent = `Notes: ${school.name}`;
  document.getElementById("school-notes").value = state.notes || "";
  document.getElementById("notes-modal").classList.add("active");
}

function closeNotesModal() {
  document.getElementById("notes-modal").classList.remove("active");
  currentModalSchoolId = null;
}

async function saveNotes() {
  const notes = document.getElementById("school-notes").value.trim();
  await saveState(currentModalSchoolId, { notes });
  closeNotesModal();
  renderSchools();
}

async function restoreSchool(schoolId) {
  await saveState(schoolId, { nixed: false, nixReason: "" });
  renderSchools();
}

// ── Map ─────────────────────────────────────────────────
let map = null;
let mapMarkers = [];

function initMap() {
  map = L.map("school-map").setView([25.85, -80.25], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);
  renderMapMarkers();
}

function renderMapMarkers() {
  if (!map) return;
  mapMarkers.forEach((m) => map.removeLayer(m));
  mapMarkers = [];

  const schools = getFilteredSchools();
  const bounds = [];

  schools.forEach((s) => {
    if (!s.lat || !s.lng) return;
    const state = schoolStates[s.id] || {};
    const label = s.group || "?";
    const icon = L.divIcon({
      className: "map-marker-icon",
      html: `<div class="marker-label">${label}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
    const marker = L.marker([s.lat, s.lng], { icon }).addTo(map);
    marker.bindPopup(
      `<strong>${label}.</strong> ${s.name}<br>` +
      `<span style="font-size:0.85em;color:#666">${s.address || s.city}</span><br>` +
      `<span style="font-size:0.85em">${s.tuition} · ${s.grades}</span>`
    );
    mapMarkers.push(marker);
    bounds.push([s.lat, s.lng]);
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

function toggleMap() {
  const mapEl = document.getElementById("school-map");
  const btn = document.getElementById("toggle-map");
  if (mapEl.style.display === "none") {
    mapEl.style.display = "block";
    btn.textContent = "Hide Map";
    setTimeout(() => map.invalidateSize(), 100);
  } else {
    mapEl.style.display = "none";
    btn.textContent = "Show Map";
  }
}

// ── Event Listeners ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([loadStates(), loadCustomSchoolsFromAPI()]);

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderSchools();
    });
  });

  document.getElementById("filter-county").addEventListener("change", (e) => {
    filterCounty = e.target.value;
    renderSchools();
  });

  document.getElementById("sort-by").addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderSchools();
  });

  document.getElementById("search").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderSchools();
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        currentModalSchoolId = null;
      }
    });
  });

  initMap();
  renderSchools();
});
