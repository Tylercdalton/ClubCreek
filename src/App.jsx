import React from 'react';

const PHOTOS = {
  hero: 'https://a0.muscache.com/im/pictures/miso/Hosting-591980174028397106/original/31781010-c7ff-40e3-87e1-9044ec7eb6f1.jpeg',
};

function Nav() {
  return (
    <header className="nav" style={{background:'#F6F2E8', borderBottom:'1px solid #E6DEC9'}}>
      <div className="wrap nav-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'26px 0',maxWidth:'1360px',margin:'0 auto'}}>
        <a href="#" className="word" aria-label="Club Creek home" style={{fontFamily:'Cormorant Garamond, serif',fontStyle:'italic',fontSize:34,letterSpacing:'-0.01em',color:'#181613',textDecoration:'none'}}>club creek</a>
        <nav className="nav-links" style={{display:'flex',alignItems:'center',gap:38}}>
          <a className="link" href="#stay">THE STAY</a>
          <a className="link" href="#gallery">GALLERY</a>
          <a className="link" href="#amenities">AMENITIES</a>
          <a className="link" href="#auburn">AUBURN</a>
          <a className="link" href="#concierge">CONCIERGE</a>
          <a className="link link--book btn" href="#book" style={{padding:'18px 30px',fontSize:13,letterSpacing:'.24em',color:'#fff',background:'#181613',marginLeft:24,textDecoration:'none'}}>RESERVE</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{paddingTop:64, paddingBottom:72, background:'#F6F2E8'}}>
      <div className="wrap" style={{maxWidth:'1360px',margin:'0 auto',padding:'0 56px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:44}}>
          <div className="eyebrow" style={{fontFamily:'Jost, sans-serif',fontSize:12,fontWeight:500,letterSpacing:'.22em',textTransform:'uppercase',color:'#4A463F'}}>N° 01  ·  AUBURN UNIVERSITY CLUB  ·  AUBURN, ALABAMA</div>
          <div className="meta" style={{fontFamily:'Jost, sans-serif',fontSize:14,letterSpacing:'.04em',color:'#4A463F'}}>10 min to Toomer’s Corner  ·  Jordan—Hare Stadium</div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:64, alignItems:'end'}}>
          <div>
            <h1 className="display" style={{fontFamily:'Cormorant Garamond, serif',fontWeight:400,letterSpacing:'-0.012em',lineHeight:.95,fontSize:'clamp(72px, 11.5vw, 184px)',margin:0}}>Club<br/><span style={{fontStyle:'italic', color:'#4A463F'}}>Creek.</span></h1>
            <p className="serif" style={{fontFamily:'Cormorant Garamond, serif',fontSize:'clamp(20px, 1.6vw, 24px)',color:'#4A463F',maxWidth:520,marginTop:28,fontStyle:'italic',lineHeight:1.45}}>
              A private five-bedroom retreat inside the Auburn University Club — ten minutes from Jordan-Hare, a tee shot from the Robert Trent Jones course.
            </p>
            <div style={{display:'flex',gap:36,marginTop:48, flexWrap:'wrap'}}>
              <StatLine v="5" l="BEDROOMS" />
              <StatLine v="4½" l="BATHROOMS" />
              <StatLine v="10+" l="SLEEPS" />
              <StatLine v="3,600+" l="SQ FT" />
            </div>
          </div>
          <div className="slot-frame" style={{aspectRatio:'4/5', width:'100%'}}>
            <img src={PHOTOS.hero} alt="Club Creek living room" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section style={{background:'#fff',padding:'64px 0 32px 0'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px',textAlign:'center'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:44,marginBottom:18}}>Welcome to Club Creek</h2>
        <p style={{fontSize:22, color:'#4A463F',maxWidth:700,margin:'0 auto'}}>Experience a private, luxurious retreat in the heart of Auburn. Perfect for families, golf getaways, and Auburn fans seeking comfort and style just minutes from campus.</p>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section style={{background:'#F6F2E8',padding:'32px 0'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px',display:'flex',gap:48,justifyContent:'center',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 200px',minWidth:180,textAlign:'center'}}>
          <div style={{fontSize:36,marginBottom:8}}>🏡</div>
          <div style={{fontWeight:600,fontSize:18}}>Spacious 5 Bedrooms</div>
        </div>
        <div style={{flex:'1 1 200px',minWidth:180,textAlign:'center'}}>
          <div style={{fontSize:36,marginBottom:8}}>⛳️</div>
          <div style={{fontWeight:600,fontSize:18}}>Golf Course Access</div>
        </div>
        <div style={{flex:'1 1 200px',minWidth:180,textAlign:'center'}}>
          <div style={{fontSize:36,marginBottom:8}}>🚗</div>
          <div style={{fontWeight:600,fontSize:18}}>10 min to Auburn</div>
        </div>
        <div style={{flex:'1 1 200px',minWidth:180,textAlign:'center'}}>
          <div style={{fontSize:36,marginBottom:8}}>🌳</div>
          <div style={{fontWeight:600,fontSize:18}}>Private, Wooded Lot</div>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section style={{background:'#fff',padding:'48px 0'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h3 style={{fontFamily:'Cormorant Garamond, serif',fontSize:32,marginBottom:24,textAlign:'center'}}>Gallery Preview</h3>
        <div style={{display:'flex',gap:24,justifyContent:'center',flexWrap:'wrap'}}>
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-591980174028397106/original/31781010-c7ff-40e3-87e1-9044ec7eb6f1.jpeg" alt="Living Room" style={{width:220,height:280,objectFit:'cover',borderRadius:10}} />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-591980174028397106/original/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e.jpeg" alt="Kitchen" style={{width:220,height:280,objectFit:'cover',borderRadius:10}} />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-591980174028397106/original/3e3e3e3e-3e3e-3e3e-3e3e-3e3e3e3e3e3e.jpeg" alt="Bedroom" style={{width:220,height:280,objectFit:'cover',borderRadius:10}} />
        </div>
        <div style={{textAlign:'center',marginTop:24}}>
          <a href="#gallery" style={{fontSize:18,color:'#181613',textDecoration:'underline'}}>View Full Gallery →</a>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section style={{background:'#F6F2E8',padding:'48px 0 64px 0'}}>
      <div className="wrap" style={{maxWidth:'700px',margin:'0 auto',padding:'0 32px',textAlign:'center'}}>
        <h3 style={{fontFamily:'Cormorant Garamond, serif',fontSize:32,marginBottom:18}}>Ready to book your stay?</h3>
        <a href="#book" style={{display:'inline-block',padding:'18px 40px',fontSize:18,letterSpacing:'.18em',color:'#fff',background:'#181613',borderRadius:8,textDecoration:'none',fontWeight:600}}>Reserve Now</a>
      </div>
    </section>
  );
}
    </section>
  );
}

function StatLine({v, l}) {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className="serif" style={{fontFamily:'Cormorant Garamond, serif',fontSize:42, lineHeight:1, letterSpacing:'-0.01em'}}>{v}</div>
      <div className="eyebrow" style={{fontFamily:'Jost, sans-serif',fontSize:12,fontWeight:500,letterSpacing:'.22em',textTransform:'uppercase',color:'#4A463F',marginTop:8}}>{l}</div>
    </div>
  );
}

function Stay() {
  return (
    <section id="stay" style={{padding:'80px 0', background:'#fff'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>The Stay</h2>
        <p style={{fontSize:20, color:'#4A463F'}}>A detailed description of the Club Creek property, amenities, and what makes the stay unique. Add photos, highlights, and guest info here.</p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" style={{padding:'80px 0', background:'#F6F2E8'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>Gallery</h2>
        <p style={{fontSize:20, color:'#4A463F'}}>A showcase of property photos. Replace with a photo grid or carousel as needed.</p>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" style={{padding:'80px 0', background:'#fff'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>Amenities</h2>
        <p style={{fontSize:20, color:'#4A463F'}}>List of amenities and features available at Club Creek. Add icons or a grid for visual interest.</p>
      </div>
    </section>
  );
}

function Auburn() {
  return (
    <section id="auburn" style={{padding:'80px 0', background:'#F6F2E8'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>Auburn</h2>
        <p style={{fontSize:20, color:'#4A463F',marginBottom:32}}>Discover the charm of Auburn, Alabama—home to Auburn University, vibrant downtown, and beautiful parks. Enjoy local dining, sports, and Southern hospitality just minutes from Club Creek.</p>
        <div style={{display:'flex',gap:48,flexWrap:'wrap',alignItems:'flex-start'}}>
          <div style={{flex:'2 1 320px'}}>
            <h3 style={{fontFamily:'Jost, sans-serif',fontSize:24,marginBottom:16,color:'#181613'}}>Things to Do Nearby</h3>
            <ul style={{fontSize:18,lineHeight:1.7,color:'#4A463F',paddingLeft:20}}>
              <li>Stroll downtown Auburn and visit Toomer’s Corner</li>
              <li>Catch a game at Jordan–Hare Stadium</li>
              <li>Golf at Robert Trent Jones Trail</li>
              <li>Explore Chewacla State Park’s trails and waterfalls</li>
              <li>Dine at local favorites: Acre, The Hound, Hamilton’s</li>
              <li>Visit the Jule Collins Smith Museum of Fine Art</li>
            </ul>
          </div>
          <div style={{flex:'1 1 260px',minWidth:260}}>
            <div style={{background:'#fff',borderRadius:12,boxShadow:'0 2px 12px rgba(0,0,0,0.07)',padding:12}}>
              <div style={{width:'100%',height:220,background:'#e6dec9',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#4A463F',fontSize:18,fontWeight:500}}>
                [Map of Auburn Placeholder]
              </div>
              <div style={{marginTop:12,textAlign:'center'}}>
                <a href="https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8A" target="_blank" rel="noopener noreferrer" style={{color:'#181613',textDecoration:'underline',fontSize:16}}>View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Concierge() {
  return (
    <section id="concierge" style={{padding:'80px 0', background:'#fff'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>Concierge</h2>
        <p style={{fontSize:20, color:'#4A463F'}}>Concierge services, special requests, and guest support information. Add contact forms or service details here.</p>
      </div>
    </section>
  );
}

function Reserve() {
  return (
    <section id="book" style={{padding:'80px 0', background:'#F6F2E8'}}>
      <div className="wrap" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Cormorant Garamond, serif',fontSize:48,marginBottom:24}}>Reserve</h2>
        <p style={{fontSize:20, color:'#4A463F'}}>Reservation and booking information. Add a booking form or call-to-action button here.</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Welcome />
      <Highlights />
      <GalleryPreview />
      <HomeCTA />
      <Stay />
      <Gallery />
      <Amenities />
      <Auburn />
      <Concierge />
      <Reserve />
    </>
  );
}
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
