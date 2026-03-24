const SCHOOLS = [
  // ── South Broward ──────────────────────────────────────
  {
    id: "american-heritage-broward",
    name: "American Heritage School - Broward",
    city: "Plantation",
    county: "Broward",
    area: "South Broward",
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
  {
    id: "pine-crest-ftl",
    name: "Pine Crest School - Fort Lauderdale",
    city: "Fort Lauderdale",
    county: "Broward",
    area: "South Broward",
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
  {
    id: "north-broward-prep",
    name: "North Broward Preparatory School",
    city: "Coconut Creek",
    county: "Broward",
    area: "North Broward",
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
  {
    id: "sagemont-prep",
    name: "Sagemont Preparatory School",
    city: "Weston",
    county: "Broward",
    area: "South Broward",
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
  {
    id: "university-school-nsu",
    name: "University School of NSU",
    city: "Davie",
    county: "Broward",
    area: "South Broward",
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
  {
    id: "david-posnack-jewish",
    name: "David Posnack Jewish Day School",
    city: "Davie",
    county: "Broward",
    area: "South Broward",
    grades: "Pre-K – 8",
    tuition: "$22,000",
    tuitionNum: 22000,
    ratio: "10:1",
    type: "Jewish day school",
    phone: "(954) 583-6100",
    website: "https://www.posnackschool.org",
    features: ["Dual curriculum", "Jewish values", "STEAM focus", "Small community"],
    schedule: "~8:15 AM start",
    enrollment: 500,
  },
  // ── Miami-Dade ─────────────────────────────────────────
  {
    id: "ransom-everglades",
    name: "Ransom Everglades School",
    city: "Coconut Grove",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "6 – 12",
    tuition: "$48,500",
    tuitionNum: 48500,
    ratio: "8:1",
    type: "Non-sectarian",
    phone: "(305) 460-8800",
    website: "https://www.ransomeverglades.org",
    features: ["Top ranked nationally", "Waterfront campus", "Strong college placement", "STEM & arts"],
    schedule: "~8:00 AM start",
    enrollment: 1100,
  },
  {
    id: "gulliver-prep",
    name: "Gulliver Preparatory School",
    city: "Coral Gables / Pinecrest",
    county: "Miami-Dade",
    area: "Miami-Dade",
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
  {
    id: "carrollton-sacred-heart",
    name: "Carrollton School of the Sacred Heart",
    city: "Miami",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "Pre-K – 12",
    tuition: "$35,000",
    tuitionNum: 35000,
    ratio: "8:1",
    type: "Catholic (all-girls)",
    phone: "(305) 446-5673",
    website: "https://www.carrollton.org",
    features: ["All-girls", "Top ranked in Dade", "Sacred Heart network", "College prep"],
    schedule: "~8:00 AM start",
    enrollment: 873,
  },
  {
    id: "belen-jesuit",
    name: "Belen Jesuit Preparatory School",
    city: "Miami",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "6 – 12",
    tuition: "$22,000",
    tuitionNum: 22000,
    ratio: "15:1",
    type: "Catholic (all-boys)",
    phone: "(305) 223-8600",
    website: "https://www.belenjesuit.org",
    features: ["All-boys Jesuit", "Strong academics", "Athletics powerhouse", "Affordable for quality"],
    schedule: "~7:30 AM start",
    enrollment: 1344,
  },
  {
    id: "palmer-trinity",
    name: "Palmer Trinity School",
    city: "Palmetto Bay",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "6 – 12",
    tuition: "$36,000",
    tuitionNum: 36000,
    ratio: "7:1",
    type: "Episcopal",
    phone: "(305) 251-2230",
    website: "https://www.palmertrinity.org",
    features: ["Episcopal college prep", "34-acre campus", "15 sports", "Strong community"],
    schedule: "~8:00 AM start",
    enrollment: 805,
  },
  {
    id: "miami-country-day",
    name: "Miami Country Day School",
    city: "Miami",
    county: "Miami-Dade",
    area: "Miami-Dade",
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
  {
    id: "cushman-school",
    name: "The Cushman School",
    city: "Miami",
    county: "Miami-Dade",
    area: "Miami-Dade",
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
  {
    id: "riviera-schools",
    name: "Riviera Day School",
    city: "Coral Gables",
    county: "Miami-Dade",
    area: "Miami-Dade",
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
  {
    id: "st-thomas-episcopal",
    name: "St. Thomas Episcopal Parish School",
    city: "Coral Gables",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "Pre-K – 5",
    tuition: "$25,000",
    tuitionNum: 25000,
    ratio: "10:1",
    type: "Episcopal",
    phone: "(305) 446-1738",
    website: "https://www.stthomasparish.org",
    features: ["Episcopal values", "Coral Gables", "Small community", "Through 5th grade"],
    schedule: "~8:00 AM start",
    enrollment: 300,
  },
  {
    id: "coconut-grove-montessori",
    name: "Coconut Grove Montessori School",
    city: "Miami",
    county: "Miami-Dade",
    area: "Miami-Dade",
    grades: "Pre-K – 5",
    tuition: "$22,000",
    tuitionNum: 22000,
    ratio: "12:1",
    type: "Montessori",
    phone: "(305) 444-9110",
    website: "https://www.cgmontessori.com",
    features: ["Authentic Montessori", "Coconut Grove", "Outdoor learning", "Through 5th grade"],
    schedule: "Montessori schedule",
    enrollment: 268,
  },
];

// ── State ────────────────────────────────────────────────
let schoolStates = {}; // { [schoolId]: { nixed, notes, nixReason, updatedAt } }
let activeTab = "active"; // "active" | "nixed"
let filterCounty = "all";
let sortBy = "name";
let searchQuery = "";

// ── API ──────────────────────────────────────────────────
async function loadStates() {
  try {
    const res = await fetch("/api/schools");
    if (res.ok) schoolStates = await res.json();
  } catch {
    // Offline or local dev — use localStorage fallback
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

  // Always save to localStorage as backup
  localStorage.setItem("school_states", JSON.stringify(schoolStates));

  try {
    await fetch("/api/schools", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolId, ...update }),
    });
  } catch {
    // Offline — localStorage has it
  }
}

// ── Render ───────────────────────────────────────────────
function getFilteredSchools() {
  let list = SCHOOLS.filter((s) => {
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
    switch (sortBy) {
      case "name": return a.name.localeCompare(b.name);
      case "tuition-asc": return a.tuitionNum - b.tuitionNum;
      case "tuition-desc": return b.tuitionNum - a.tuitionNum;
      case "enrollment": return b.enrollment - a.enrollment;
      case "city": return a.city.localeCompare(b.city);
      default: return 0;
    }
  });

  return list;
}

function renderSchools() {
  const grid = document.getElementById("school-grid");
  const schools = getFilteredSchools();

  // Update tab counts
  const activeCount = SCHOOLS.filter((s) => !(schoolStates[s.id]?.nixed)).length;
  const nixedCount = SCHOOLS.filter((s) => schoolStates[s.id]?.nixed).length;
  document.getElementById("active-count").textContent = activeCount;
  document.getElementById("nixed-count").textContent = nixedCount;

  // Status bar
  document.getElementById("status-showing").textContent = schools.length;
  document.getElementById("status-total").textContent = SCHOOLS.length;

  if (schools.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1">
        <h3>${activeTab === "nixed" ? "No nixed schools" : "No schools match your filters"}</h3>
        <p>${activeTab === "nixed" ? "Schools you nix will appear here." : "Try adjusting your filters or search."}</p>
      </div>`;
    return;
  }

  grid.innerHTML = schools.map((s) => {
    const state = schoolStates[s.id] || {};
    const isNixed = state.nixed === true;
    const countyClass = s.county === "Miami-Dade" ? "miami-dade" : "broward";

    return `
      <div class="school-card ${isNixed ? "nixed" : ""}" data-id="${s.id}">
        <div class="card-header">
          <div>
            <h3>${s.name}</h3>
            <span style="font-size:0.82rem;color:var(--text-light)">${s.city}</span>
          </div>
          <span class="area-badge ${countyClass}">${s.county}</span>
        </div>
        <div class="card-body">
          <div class="detail-row"><span class="label">Grades</span><span class="value">${s.grades}</span></div>
          <div class="detail-row"><span class="label">Tuition (K)</span><span class="value">${s.tuition}</span></div>
          <div class="detail-row"><span class="label">Ratio</span><span class="value">${s.ratio}</span></div>
          <div class="detail-row"><span class="label">Type</span><span class="value">${s.type}</span></div>
          <div class="detail-row"><span class="label">Enrollment</span><span class="value">${s.enrollment.toLocaleString()}</span></div>
          <div class="detail-row"><span class="label">Schedule</span><span class="value">${s.schedule}</span></div>
          <div class="features">
            ${s.features.map((f) => `<span class="feature-tag">${f}</span>`).join("")}
          </div>
        </div>
        ${state.nixReason ? `<div class="nix-reason">Nixed: ${escapeHtml(state.nixReason)}</div>` : ""}
        ${state.notes ? `<div class="notes-display"><strong>Notes:</strong> ${escapeHtml(state.notes)}</div>` : ""}
        <div class="card-footer">
          ${isNixed
            ? `<button class="btn-restore" onclick="restoreSchool('${s.id}')">Restore</button>`
            : `<button class="btn-nix" onclick="openNixModal('${s.id}')">Nix</button>`
          }
          <button class="btn-notes" onclick="openNotesModal('${s.id}')">Notes</button>
          ${s.website ? `<a href="${s.website}" target="_blank" rel="noopener" style="padding:0.4rem 0.8rem;font-size:0.82rem;color:var(--primary-light);text-decoration:none;border:1px solid var(--border);border-radius:6px">Website</a>` : ""}
          ${s.phone ? `<a href="tel:${s.phone}" style="padding:0.4rem 0.8rem;font-size:0.82rem;color:var(--text-light);text-decoration:none;border:1px solid var(--border);border-radius:6px">${s.phone}</a>` : ""}
        </div>
      </div>`;
  }).join("");
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
  const school = SCHOOLS.find((s) => s.id === schoolId);
  document.getElementById("nix-modal-title").textContent = `Nix: ${school.name}`;
  document.getElementById("nix-reason").value = "";
  document.getElementById("nix-error").style.display = "none";
  document.getElementById("nix-modal").classList.add("active");
}

function closeNixModal() {
  document.getElementById("nix-modal").classList.remove("active");
  currentModalSchoolId = null;
}

async function confirmNix() {
  const reason = document.getElementById("nix-reason").value.trim();
  if (!reason) {
    document.getElementById("nix-error").style.display = "block";
    return;
  }
  await saveState(currentModalSchoolId, { nixed: true, nixReason: reason });
  closeNixModal();
  renderSchools();
}

function openNotesModal(schoolId) {
  currentModalSchoolId = schoolId;
  const school = SCHOOLS.find((s) => s.id === schoolId);
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

// ── Event Listeners ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  await loadStates();

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

  // Close modals on overlay click
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        currentModalSchoolId = null;
      }
    });
  });

  renderSchools();
});
