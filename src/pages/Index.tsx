import { useState, useEffect } from "react";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [checkboxes, setCheckboxes] = useState([true, false, true]);
  const [inputVal, setInputVal] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(0);
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setSystemTime(
        `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const tabs = ["OVERVIEW", "DIAGNOSTICS", "COMM LINK", "ARCHIVES"];

  return (
    <div className="crt-wrapper crt-flicker">
      {/* Moving scanline */}
      <div className="crt-scanline-move" />

      <div className="min-h-screen bg-background text-foreground">
        {/* HEADER */}
        <div className="nerv-header-bar">
          <div className="flex items-center gap-4">
            <span className="text-primary text-sm tracking-[0.25em] font-bold glow-orange">NERV</span>
            <span className="text-muted-foreground text-[0.6rem] tracking-widest">TERMINAL CONDITION // COMPONENT SHOWCASE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="nerv-badge nerv-badge-ok">SYSTEM ONLINE</span>
            <span className="nerv-badge nerv-badge-warn">MAGI: STANDBY</span>
            <span className="text-muted-foreground text-[0.6rem] font-mono">{systemTime}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="nerv-hero px-6 py-12">
          <div className="max-w-3xl relative z-10">
            <div className="text-[0.6rem] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
              EVANGELION GUI THEME // VERSION 1.0.0
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 glow-orange" style={{ fontFamily: "var(--font-mono)" }}>
              TERMINAL CONDITION
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl mb-6 leading-relaxed">
              A CSS theme inspired by the NERV tactical interface from Neon Genesis Evangelion.
              No gradients. No rounded corners. No mercy. Every element is a hard-edged block of data
              on an absolute black void.
            </p>
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nerv-btn nerv-btn-active"
              >
                ↓ DOWNLOAD THEME
              </a>
              <a href="#components" className="nerv-btn">
                VIEW COMPONENTS
              </a>
            </div>

            {/* Feature badges */}
            <div className="flex gap-4 mt-8">
              {["NO GRADIENTS", "NO BORDER-RADIUS", "NO BOX-SHADOW", "PURE CSS"].map((f) => (
                <span key={f} className="text-[0.55rem] font-mono uppercase tracking-[0.15em] text-primary/70 border border-primary/20 px-2 py-1">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative data readout in hero */}
          <div className="absolute top-6 right-6 nerv-readout text-right opacity-40">
            <div><span className="nerv-readout-label">UPLINK:</span> <span className="nerv-readout-value">ACTIVE</span></div>
            <div><span className="nerv-readout-label">FREQ:</span> <span className="nerv-readout-value">142.7 MHz</span></div>
            <div><span className="nerv-readout-label">LAT:</span> <span className="nerv-readout-value">35.2937°N</span></div>
            <div><span className="nerv-readout-label">LON:</span> <span className="nerv-readout-value">139.0344°E</span></div>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="px-6 py-2 border-b border-primary/30">
          <div className="nerv-breadcrumb">
            <span>HOME</span>
            <span className="text-primary">/</span>
            <span>COMPONENTS</span>
            <span className="text-primary">/</span>
            <span className="nerv-breadcrumb-active">THEME PREVIEW</span>
          </div>
        </div>

        {/* NAV TABS */}
        <div id="components" className="px-6 pt-4">
          <div className="nerv-nav">
            {tabs.map((tab, i) => (
              <div
                key={tab}
                className={`nerv-nav-item ${activeTab === i ? "nerv-nav-item-active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="p-6 space-y-8">

          {/* COLOR PALETTE */}
          <section>
            <div className="nerv-section-label">Color Palette</div>
            <div className="grid grid-cols-6 gap-3">
              {[
                { name: "BASE BLACK", color: "#000000", var: "--background" },
                { name: "SURFACE", color: "#1A1D22", var: "--card" },
                { name: "ALERT ORANGE", color: "#FF6500", var: "--primary" },
                { name: "SYSTEM CYAN", color: "#00F0FF", var: "--accent" },
                { name: "CRITICAL RED", color: "#FF351A", var: "--destructive" },
                { name: "STANDBY WHITE", color: "#D1D1D1", var: "--foreground" },
              ].map((c) => (
                <div key={c.name} className="nerv-card p-3 text-center">
                  <div className="w-full h-10 border border-primary/30 mb-2" style={{ background: c.color }} />
                  <div className="text-[0.55rem] font-mono uppercase tracking-widest text-foreground">{c.name}</div>
                  <div className="text-[0.5rem] font-mono text-muted-foreground">{c.color}</div>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* TYPOGRAPHY */}
          <section>
            <div className="nerv-section-label">Typography</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="pl-0">
                <div className="text-[0.55rem] font-mono uppercase tracking-[0.2em] text-primary mb-3">ROBOTO MONO — HEADINGS</div>
                <h1 className="text-3xl font-bold text-foreground mb-2">H1 HEADING</h1>
                <h2 className="text-2xl font-bold text-foreground mb-2">H2 HEADING</h2>
                <h3 className="text-xl font-bold text-foreground mb-2">H3 HEADING</h3>
                <h4 className="text-lg font-bold text-foreground mb-2">H4 HEADING</h4>
                <h5 className="text-base font-bold text-foreground mb-2">H5 HEADING</h5>
                <h6 className="text-sm font-bold text-foreground mb-2">H6 HEADING</h6>
              </div>
              <div className="nerv-grid-col pl-6">
                <div className="text-[0.55rem] font-mono uppercase tracking-[0.2em] text-primary mb-3">HEEBO — BODY TEXT</div>
                <p className="mb-3 text-sm leading-relaxed">
                  Body text rendered in Heebo. This geometric sans-serif provides clarity for paragraphs
                  and UI labels. The clean, blocky letterforms feel engineered, not decorative.
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  Muted text for secondary information. Signal degradation nominal.
                </p>
                <code className="text-accent text-xs glow-cyan">INLINE_CODE: 0xFF6500</code>
                <pre className="mt-3 p-3 bg-card border border-primary/30 text-xs text-accent overflow-x-auto">
{`> SYSTEM.DIAGNOSTIC.RUN()
> STATUS: ALL_UNITS_NOMINAL
> MAGI_CONSENSUS: 3/3 AFFIRMATIVE
> BARRIER_INTEGRITY: 97.3%`}
                </pre>
              </div>
            </div>
          </section>

          <hr />

          {/* BUTTONS */}
          <section>
            <div className="nerv-section-label">Buttons</div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="nerv-btn">DEFAULT</button>
              <button className="nerv-btn">SECONDARY</button>
              <button className="nerv-btn nerv-btn-active">ACTIVE STATE</button>
              <button className="nerv-btn nerv-btn-danger">DANGER</button>
              <button className="nerv-btn opacity-40 cursor-not-allowed">DISABLED</button>
              <button className="nerv-btn text-[0.65rem] px-2 py-1">SM</button>
              <button className="nerv-btn text-[0.85rem] px-6 py-3">LARGE ACTION</button>
            </div>
            <div className="flex flex-wrap gap-3 items-center mt-4">
              <button className="nerv-btn" style={{ borderWidth: 2 }}>OUTLINED THICK</button>
              <button className="nerv-btn bg-primary/10">FILLED SUBTLE</button>
              <div className="flex gap-0">
                <button className="nerv-btn" style={{ marginRight: -1 }}>GROUP A</button>
                <button className="nerv-btn nerv-btn-active" style={{ marginRight: -1 }}>GROUP B</button>
                <button className="nerv-btn">GROUP C</button>
              </div>
            </div>
            <div className="mt-4 p-3 bg-card border border-primary/20">
              <div className="text-[0.55rem] font-mono uppercase text-muted-foreground mb-2">DESIGN NOTE</div>
              <p className="text-xs text-muted-foreground">
                Default and secondary buttons are identical — hollow with Alert Orange border. 
                There is no "happy path" primary action. Only <code className="text-destructive">.nerv-btn-danger</code> gets unique styling.
                Actions are distinguished by their text labels, forcing deliberate user choice.
              </p>
            </div>
          </section>

          <hr />

          {/* ALERTS */}
          <section>
            <div className="nerv-section-label">Alerts</div>
            <div className="space-y-3">
              <div className="nerv-alert nerv-alert-info">
                ◆ System diagnostic complete. All parameters within operational range.
              </div>
              <div className="nerv-alert nerv-alert-warning">
                ▲ AT Field fluctuation detected in sector 7. Monitoring engaged.
              </div>
              <div className="nerv-alert nerv-alert-danger">
                ■ CRITICAL: Pattern Blue confirmed. Initiating combat protocol.
              </div>
            </div>
          </section>

          <hr />

          {/* BADGES */}
          <section>
            <div className="nerv-section-label">Badges / Status Indicators</div>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="nerv-badge nerv-badge-ok">OPERATIONAL</span>
              <span className="nerv-badge nerv-badge-ok">SYNC: 98.2%</span>
              <span className="nerv-badge nerv-badge-warn">STANDBY</span>
              <span className="nerv-badge nerv-badge-warn">LCL: NOMINAL</span>
              <span className="nerv-badge nerv-badge-danger">ALERT</span>
              <span className="nerv-badge nerv-badge-danger">PATTERN BLUE</span>
            </div>
          </section>

          <hr />

          {/* CARDS */}
          <section>
            <div className="nerv-section-label">Cards</div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "UNIT-00", status: "FROZEN", sync: "0.0%", badge: "nerv-badge-danger", pilot: "REI AYANAMI" },
                { title: "UNIT-01", status: "ACTIVE", sync: "41.3%", badge: "nerv-badge-ok", pilot: "SHINJI IKARI" },
                { title: "UNIT-02", status: "STANDBY", sync: "78.9%", badge: "nerv-badge-warn", pilot: "ASUKA LANGLEY" },
              ].map((unit) => (
                <div key={unit.title} className="nerv-card">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-sm font-bold text-foreground">{unit.title}</h4>
                    <span className={`nerv-badge ${unit.badge}`}>{unit.status}</span>
                  </div>
                  <div className="space-y-2 text-[0.7rem] font-mono uppercase">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sync Rate</span>
                      <span className="text-accent glow-cyan">{unit.sync}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pilot</span>
                      <span className="text-foreground">{unit.pilot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power</span>
                      <span className="text-foreground">UMBILICAL</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-primary/20">
                    <button className="nerv-btn w-full text-[0.6rem]">ACCESS DIAGNOSTICS</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* TABLE */}
          <section>
            <div className="nerv-section-label">Data Table</div>
            <div className="nerv-card p-0">
              <table className="nerv-table">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Sector</th>
                    <th>Status</th>
                    <th>Integrity</th>
                    <th>Last Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "S.S. NO.22-10-A", sector: "KANTO", status: "OK", integrity: "99.1%", time: "00:03:22" },
                    { name: "S.S. NO.23-12-A", sector: "CHUBU", status: "SIGNAL LOST", integrity: "—", time: "01:47:09" },
                    { name: "S.S. NO.24-08-B", sector: "TOHOKU", status: "OK", integrity: "97.8%", time: "00:00:44" },
                    { name: "S.S. NO.25-03-C", sector: "KYUSHU", status: "DEGRADED", integrity: "61.2%", time: "00:12:56" },
                    { name: "S.S. NO.26-15-A", sector: "HOKKAIDO", status: "OK", integrity: "99.9%", time: "00:01:11" },
                  ].map((row) => (
                    <tr key={row.name}>
                      <td className="text-accent glow-cyan">{row.name}</td>
                      <td>{row.sector}</td>
                      <td>
                        <span className={`nerv-badge ${row.status === "OK" ? "nerv-badge-ok" : row.status === "SIGNAL LOST" ? "nerv-badge-danger" : "nerv-badge-warn"}`}>
                          {row.status}
                        </span>
                      </td>
                      <td>{row.integrity}</td>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr />

          {/* FORMS */}
          <section>
            <div className="nerv-section-label">Form Controls</div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-5">
                <div className="nerv-input-wrapper">
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    Operator ID
                  </label>
                  <input
                    type="text"
                    className="nerv-input"
                    placeholder="Enter designation..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                </div>
                <div className="nerv-input-wrapper">
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    Access Code
                  </label>
                  <input type="password" className="nerv-input" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    Priority Level
                  </label>
                  <select className="nerv-select w-full">
                    <option>LEVEL 1 — STANDARD</option>
                    <option>LEVEL 2 — ELEVATED</option>
                    <option>LEVEL 3 — CRITICAL</option>
                    <option>LEVEL 4 — ABSOLUTE</option>
                  </select>
                </div>
                <div className="nerv-input-wrapper">
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    Mission Notes
                  </label>
                  <textarea
                    className="nerv-input"
                    rows={3}
                    placeholder="Enter tactical notes..."
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
              <div className="nerv-grid-col pl-8 space-y-5">
                <div>
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Systems Check
                  </label>
                  <div className="space-y-2">
                    {["MAGI CASPAR", "MAGI BALTHASAR", "MAGI MELCHIOR"].map((item, i) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="nerv-checkbox"
                          checked={checkboxes[i]}
                          onChange={() => {
                            const next = [...checkboxes];
                            next[i] = !next[i];
                            setCheckboxes(next);
                          }}
                        />
                        <span className="text-xs font-mono uppercase">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Command Authority
                  </label>
                  <div className="space-y-2">
                    {["COMMANDER", "SUB-COMMANDER", "OPERATIONS DIRECTOR"].map((item, i) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="authority" defaultChecked={i === 0}
                          className="nerv-checkbox" style={{ borderRadius: 0 }} />
                        <span className="text-xs font-mono uppercase">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="nerv-btn nerv-btn-active flex-1">SUBMIT</button>
                  <button className="nerv-btn flex-1">RESET</button>
                </div>
              </div>
            </div>
          </section>

          <hr />

          {/* PROGRESS BARS */}
          <section>
            <div className="nerv-section-label">Progress / Gauges</div>
            <div className="space-y-4">
              {[
                { label: "AT FIELD INTEGRITY", value: 97, variant: "ok" },
                { label: "SYNC RATE", value: 41, variant: "warn" },
                { label: "POWER RESERVE", value: 12, variant: "danger" },
                { label: "DATA TRANSFER", value: 68, variant: "ok" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[0.65rem] font-mono uppercase tracking-widest text-muted-foreground">{bar.label}</span>
                    <span className={`text-[0.65rem] font-mono ${bar.variant === "ok" ? "text-accent glow-cyan" : bar.variant === "warn" ? "text-primary glow-orange" : "text-destructive glow-red"}`}>
                      {bar.value}%
                    </span>
                  </div>
                  <div className="nerv-progress-bar">
                    <div
                      className={`nerv-progress-fill nerv-progress-fill-${bar.variant}`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* LIST GROUP */}
          <section>
            <div className="nerv-section-label">List Group</div>
            <div className="nerv-card p-0">
              {[
                { label: "EMERGENCY PROTOCOL A-801", status: "ARMED", badge: "nerv-badge-danger" },
                { label: "SURVEILLANCE GRID DELTA", status: "ACTIVE", badge: "nerv-badge-ok" },
                { label: "N² MINE DEPLOYMENT", status: "STANDBY", badge: "nerv-badge-warn" },
                { label: "BARRIER REPAIR SUBSYSTEM", status: "OFFLINE", badge: "nerv-badge-danger" },
                { label: "PILOT RECOVERY MODULE", status: "READY", badge: "nerv-badge-ok" },
              ].map((item) => (
                <div key={item.label} className="nerv-list-group-item">
                  <span className="text-foreground">{item.label}</span>
                  <span className={`nerv-badge ${item.badge}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* PAGINATION */}
          <section>
            <div className="nerv-section-label">Pagination</div>
            <div className="nerv-pagination">
              <div className="nerv-pagination-item">«</div>
              <div className="nerv-pagination-item">1</div>
              <div className="nerv-pagination-item nerv-pagination-item-active">2</div>
              <div className="nerv-pagination-item">3</div>
              <div className="nerv-pagination-item">4</div>
              <div className="nerv-pagination-item">5</div>
              <div className="nerv-pagination-item">»</div>
            </div>
          </section>

          <hr />

          {/* ACCORDION */}
          <section>
            <div className="nerv-section-label">Accordion</div>
            {["SECTION 1 — OPERATIONAL PARAMETERS", "SECTION 2 — PILOT BIOMETRICS", "SECTION 3 — MAGI CONFIGURATION"].map((title, i) => (
              <div key={title}>
                <div
                  className="nerv-accordion-header"
                  onClick={() => setAccordionOpen(accordionOpen === i ? -1 : i)}
                >
                  <span>{title}</span>
                  <span className="text-primary">{accordionOpen === i ? "▼" : "▶"}</span>
                </div>
                {accordionOpen === i && (
                  <div className="nerv-accordion-body">
                    Diagnostic data stream active. All subsystems reporting nominal values.
                    Continuous monitoring in effect. Next scheduled maintenance cycle: T-minus 47:22:08.
                  </div>
                )}
              </div>
            ))}
          </section>

          <hr />

          {/* DROPDOWN */}
          <section>
            <div className="nerv-section-label">Dropdown Menu</div>
            <div className="flex gap-6 items-start">
              <div>
                <div className="text-[0.6rem] font-mono uppercase text-muted-foreground mb-2">Static Preview</div>
                <div className="nerv-dropdown">
                  <div className="nerv-dropdown-item" style={{ color: "hsl(185 100% 50%)" }}>COMMAND CENTER</div>
                  <div className="nerv-dropdown-item">PILOT QUARTERS</div>
                  <div className="nerv-dropdown-item">EVANGELION CAGES</div>
                  <div className="nerv-dropdown-divider" />
                  <div className="nerv-dropdown-item">TERMINAL DOGMA</div>
                </div>
              </div>
            </div>
          </section>

          <hr />

          {/* MODAL TRIGGER */}
          <section>
            <div className="nerv-section-label">Modal Dialog</div>
            <button className="nerv-btn nerv-btn-active" onClick={() => setShowModal(true)}>
              OPEN COMMAND PROMPT
            </button>
          </section>

          <hr />

          {/* TOAST */}
          <section>
            <div className="nerv-section-label">Toast Notification</div>
            <button className="nerv-btn" onClick={() => { setShowToast(true); setTimeout(() => setShowToast(false), 3000); }}>
              TRIGGER ALERT
            </button>
          </section>

          <hr />

          {/* RADAR SPINNER */}
          <section>
            <div className="nerv-section-label">Loading / Radar</div>
            <div className="flex items-center gap-8">
              <div className="nerv-radar">
                <div className="nerv-radar-ring" />
                <div className="nerv-radar-ring-inner" />
                <div className="nerv-radar-ring-dot" />
                <div className="nerv-radar-crosshair-h" />
                <div className="nerv-radar-crosshair-v" />
                <div className="nerv-radar-sweep" />
                {/* Blips */}
                <div className="nerv-radar-blip" style={{ top: "20%", left: "65%", animationDelay: "0.3s" }} />
                <div className="nerv-radar-blip" style={{ top: "70%", left: "30%", animationDelay: "1.1s" }} />
                <div className="nerv-radar-blip" style={{ top: "35%", left: "75%", animationDelay: "0.7s" }} />
              </div>
              <div className="space-y-1">
                <span className="block text-[0.65rem] font-mono uppercase text-accent tracking-widest glow-cyan animate-pulse">
                  SCANNING SECTOR 7-G...
                </span>
                <span className="block text-[0.55rem] font-mono uppercase text-muted-foreground tracking-widest">
                  3 CONTACTS DETECTED // ANALYSIS IN PROGRESS
                </span>
              </div>
            </div>
          </section>

          <hr />

          {/* DATA READOUT SECTION */}
          <section>
            <div className="nerv-section-label">Data Readout</div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "CORE TEMP", value: "127.4°C", variant: "value" },
                { label: "LCL PRESSURE", value: "2.8 ATM", variant: "value" },
                { label: "SYNC NOISE", value: "HIGH", variant: "value-warn" },
                { label: "CONTAMINATION", value: "DETECTED", variant: "value-danger" },
              ].map((d) => (
                <div key={d.label} className="nerv-card p-3">
                  <div className="nerv-readout">
                    <div className="nerv-readout-label mb-1">{d.label}</div>
                    <div className={`nerv-readout-${d.variant} text-lg`}>{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* DESIGN PRINCIPLES */}
          <section>
            <div className="nerv-section-label">Design Principles</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "NO BORDER-RADIUS",
                  desc: "All corners are sharp, 0px. Rounded corners imply safety and user-friendliness. This is a tactical interface."
                },
                {
                  title: "NO GRADIENTS",
                  desc: "Critical information is binary: known or unknown, safe or dangerous. There is no in-between."
                },
                {
                  title: "NO BOX-SHADOW FOR DEPTH",
                  desc: "Depth is created by layering near-black surfaces and explicit borders, not by simulating physical light."
                },
                {
                  title: "NO DECORATIVE ICONS",
                  desc: "Icons clarify actions only. The aesthetic relies on typography and structure, not pictograms."
                },
              ].map((p) => (
                <div key={p.title} className="nerv-card">
                  <h4 className="text-xs font-bold text-primary mb-2 glow-orange">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr />

          {/* FOOTER */}
          <footer className="pt-6 pb-10">
            <div className="border-t border-primary/30 pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-primary text-sm font-mono font-bold tracking-[0.25em] mb-2 glow-orange">NERV</div>
                  <div className="text-[0.55rem] font-mono uppercase text-muted-foreground tracking-widest leading-loose">
                    TERMINAL CONDITION — EVANGELION GUI THEME<br />
                    DESIGNED FOR DEVELOPERS WHO REFUSE TO BE COMFORTABLE<br />
                    GOD'S IN HIS HEAVEN. ALL'S RIGHT WITH THE WORLD.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[0.6rem] font-mono uppercase text-primary tracking-widest mb-1">VER 1.0.0</div>
                  <div className="text-[0.5rem] font-mono text-muted-foreground tracking-widest">
                    ROBOTO MONO + HEEBO<br />
                    PURE CSS // NO JAVASCRIPT REQUIRED<br />
                    MIT LICENSE
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="nerv-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="nerv-modal" onClick={(e) => e.stopPropagation()}>
              <div className="nerv-modal-header">
                <span>COMMAND AUTHORIZATION REQUIRED</span>
                <button className="text-primary cursor-pointer" onClick={() => setShowModal(false)}>✕</button>
              </div>
              <div className="nerv-modal-body space-y-3">
                <p className="text-sm">Confirm deployment of Unit-01 to designated intercept coordinates. This action requires Level 3 authorization.</p>
                <div className="nerv-alert nerv-alert-warning">
                  ▲ Warning: Pilot sync rate below optimal threshold.
                </div>
              </div>
              <div className="nerv-modal-footer">
                <button className="nerv-btn" onClick={() => setShowModal(false)}>ABORT</button>
                <button className="nerv-btn nerv-btn-danger" onClick={() => setShowModal(false)}>CONFIRM DEPLOYMENT</button>
              </div>
            </div>
          </div>
        )}

        {/* TOAST */}
        {showToast && (
          <div className="nerv-toast">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-primary mb-1 glow-orange">▲ ALERT</div>
                <div className="text-foreground">Anomalous reading in sector 4. Dispatching probe.</div>
              </div>
              <button className="text-primary cursor-pointer ml-3" onClick={() => setShowToast(false)}>✕</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
