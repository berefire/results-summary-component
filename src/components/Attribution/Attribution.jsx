// src/components/Attribution/Attribution.jsx
function Attribution() {
  return (
    <footer className="text-center text-xs text-slate-500 mt-4">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className="text-blue-800 hover:underline focus-ring"
      >
        Frontend Mentor <span
          aria-hidden="true" className="external-icon">🔗</span>
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/berefire"
        className="text-blue-800 hover:underline focus-ring"
      >
        Berefire
      </a>
      .
    </footer>
  );
}

export default Attribution;