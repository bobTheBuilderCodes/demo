import { FormEvent, useEffect, useRef, useState } from 'react';

const skatePhoto =
  'https://images.pexels.com/photos/12295466/pexels-photo-12295466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const stillLifePhoto =
  'https://images.pexels.com/photos/34686413/pexels-photo-34686413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const colorPhoto =
  'https://images.pexels.com/photos/17542996/pexels-photo-17542996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const portraitPhoto =
  'https://images.pexels.com/photos/20607488/pexels-photo-20607488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const languages = ['English (US)', 'Français (France)', 'Português (Brasil)', 'Español', 'العربية', 'Deutsch', '日本語'];

function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [page, setPage] = useState<'login' | 'not-found'>('login');

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setPage('not-found');
  };

  if (page === 'not-found') {
    return (
      <main className="not-found-page">
        <div className="not-found-card">
          <div className="facebook-mark not-found-mark" aria-label="Facebook">f</div>
          <p className="demo-label">DEMO SIMULATION</p>
          <h1>Page not found</h1>
          <p>The page you’re looking for doesn’t exist.</p>
          <button className="return-button" type="button" onClick={() => setPage('login')}>Return to login</button>
        </div>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="brand-panel" aria-label="Facebook introduction">
        <div className="facebook-mark" aria-label="Facebook">f</div>
        <div className="creative-stage" aria-hidden="true">
          <div className="smile-sticker">⌣</div>
          <div className="time-sticker"><span className="clock-dot" />16:45</div>
          <div className="heart-sticker">♥</div>
          <div className="stage-image stage-image-left"><img src={stillLifePhoto} alt="" /></div>
          <div className="stage-image stage-image-main"><img src={skatePhoto} alt="" /><div className="story-line" /></div>
          <div className="mini-card"><div className="mini-icon">★</div><img src={colorPhoto} alt="" /><div className="mini-lines"><i /><i /></div></div>
          <div className="portrait-card"><img src={portraitPhoto} alt="" /></div>
          <div className="story-dots"><i /><i /><i /><i /></div>
        </div>
        <h1>Explore<br />the<br />things<br /><span>you love</span><b>.</b></h1>
      </section>

      <section className="form-panel">
        <div className="form-wrap">
          <div className="demo-banner">Demo only — never enter real login details.</div>
          <h2>Log into Facebook</h2>
          <form onSubmit={handleSubmit}>
            <label className="input-shell">
              <span>Email or mobile number</span>
              <input ref={emailRef} value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Email or mobile number" />
            </label>
            <label className="input-shell password-shell">
              <span>Password</span>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="Password" />
            </label>
            <button className="login-button" type="submit">Log in</button>
          </form>
          <button className="forgot-button" type="button" onClick={() => setMessage('Password recovery is disabled in this demo.')}>Forgot password?</button>
          {message && <p className="form-message" role="status">{message}</p>}
          <div className="separator" />
          <button className="create-button" type="button" onClick={() => setMessage('Account creation would start here.')}>Create new account</button>
          <div className="meta-mark"><span>∞</span>Meta</div>
        </div>
      </section>

      <footer className="language-bar">
        {languages.map((language, index) => <button type="button" key={language} className={index === 0 ? 'active-language' : ''}>{language}</button>)}
        <button type="button">More languages...</button>
      </footer>
    </main>
  );
}

export default App;
