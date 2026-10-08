import { useState } from 'react'
import { mapContent } from './mapContent.js'

function Icon({ name = 'flow', ...props }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {name === 'arrow' ? <path d="M4 12h16m-6-6 6 6-6 6" /> : name === 'expand' ? <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /> : name === 'collapse' ? <path d="M3 8h5V3m8 0v5h5M8 21v-5H3m18 0h-5v5" /> : <><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="15" y="14" width="6" height="6" rx="1.5" /><path d="M6 10v7h9M9 7h9v7" /></>}
  </svg>
}

function Tile({ tile, open, onToggle, foundation = false }) {
  return <article className={`tile ${tile.tone ? `tone-${tile.tone}` : ''} ${open ? 'is-expanded' : ''} ${foundation ? 'foundation-tile' : ''}`}>
    <h4><button className="tile-trigger" id={`trigger-${tile.id}`} aria-expanded={open} aria-controls={`content-${tile.id}`} onClick={onToggle}>
      <span className="tile-number">{tile.number}</span><span className="tile-title">{tile.title}</span><span className="tile-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
    </button></h4>
    <div id={`content-${tile.id}`} className="tile-content" role="region" aria-labelledby={`trigger-${tile.id}`} hidden={!open}>
      <div className="tile-content-inner">
        <ul className="tile-bullets">{tile.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        {tile.description && <p className="tile-description">{tile.description}</p>}
      </div>
    </div>
  </article>
}

export default function RepositoryMap() {
  const [expanded, setExpanded] = useState(new Set())
  const allTiles = [...mapContent.stages.flatMap((stage) => stage.tiles), ...mapContent.foundations.tiles]
  const allOpen = allTiles.every((tile) => expanded.has(tile.id))

  function toggle(id) {
    setExpanded((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function renderTile(tile, foundation = false) {
    return <Tile key={tile.id} tile={tile} foundation={foundation} open={expanded.has(tile.id)} onToggle={() => toggle(tile.id)} />
  }

  return <>
    <a className="skip-link" href="#map">Skip to the map</a>
    <header className="site-header"><div className="header-inner">
      <a href="#home" className="brand" aria-label="Agent-ready home"><span className="brand-icon"><Icon /></span>agent<span className="brand-light">ready</span><span className="brand-dot">.</span></a>
      <a href="#map" className="header-map-link">Explore the map <Icon name="arrow" /></a>
    </div></header>

    <main id="home">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow"><span /> REPOSITORY READINESS MAP</p>
        <h1 id="page-title">What Makes a Repository<br /><em>Agent-Ready?</em></h1>
        <p className="hero-description">{mapContent.subtitle}</p>
        <a className="explore-button" href="#map">Explore the map <Icon name="arrow" /></a>
        <div className="hero-meta"><span>4 stages</span><i /><span>10 areas</span><i /><span>One connected workflow</span></div>
      </section>

      <section className="map-section" id="map" aria-labelledby="map-title">
        <div className="map-topbar"><div><p className="section-kicker">// THE WORKFLOW</p><h2 id="map-title">From setup to delivery<span>.</span></h2></div>
          <div className="map-controls"><span>Click a tile to explore</span><button onClick={() => setExpanded(allOpen ? new Set() : new Set(allTiles.map((tile) => tile.id)))}><Icon name={allOpen ? 'collapse' : 'expand'} />{allOpen ? 'Collapse all' : 'Expand all'}</button></div>
        </div>

        <ol className="stage-flow" aria-label="Repository preparation stages in order">
          {mapContent.stages.map((stage, index) => <li key={stage.id} className={`stage tone-${stage.tone}`}>
            <section aria-labelledby={`heading-${stage.id}`}>
              <h3 className="stage-heading" id={`heading-${stage.id}`}><span className="stage-step" aria-label={`Stage ${index + 1}`}>{String(index + 1).padStart(2, '0')}</span>{stage.title}</h3>
              <div className="stage-tiles">{stage.tiles.map((tile) => renderTile(tile))}</div>
            </section>
            {index < mapContent.stages.length - 1 && <span className="stage-arrow" aria-hidden="true"><Icon name="arrow" /></span>}
          </li>)}
        </ol>

        <section className="foundations" aria-labelledby="foundations-title">
          <div className="foundation-connectors" aria-hidden="true"><span /><span /><span /><span /></div>
          <h3 id="foundations-title" className="foundations-heading"><Icon />{mapContent.foundations.title}</h3>
          <div className="foundation-tiles">{mapContent.foundations.tiles.map((tile) => renderTile(tile, true))}</div>
        </section>

        <div className="map-bottom"><span className="legend"><i className="legend-flow" />Workflow stages</span><span className="legend"><i className="legend-foundation" />Foundations across every stage</span><p>{expanded.size} of 10 tiles expanded</p></div>
      </section>
    </main>
    <footer><Icon /><p>{mapContent.note}</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>
}
