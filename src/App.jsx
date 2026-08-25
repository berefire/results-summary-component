// App.jsx

import ResultsSummary from '@/components/ResultsSummary/ResultsSummary';
import Attribution from '@/components/Attribution/Attribution';
import data from '@/data/data.json';

// Wraps the page in a sticky-footer layout: min-h-screen + flex-col here,
// flex-1 on <main>, so Attribution stays pinned to the bottom of the
// viewport even when the content above it is short.

function App() {
  return (
    <div className="flex flex-col min-h-dvh bg-navy-50">
      <main className="flex-1 flex items-center justify-center">
        <ResultsSummary categories={data} />
      </main>
      <Attribution />
    </div>
  );
}

export default App;
