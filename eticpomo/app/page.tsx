import About from './components/sections/About';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section - Timer */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center px-4">
          <h1 className="gotham-book text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to <span className="gotham-medium">ETIC Focus</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Boost your productivity with the Pomodoro Timer
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Start Timer
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-black py-12 md:py-16 lg:py-20">
        <About />
      </section>

      {/* Footer Section */}
      <section id="footer" className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="gotham-medium text-xl mb-4">ETIC Focus</h3>
              <p className="text-gray-400">
                A Pomodoro timer created by ETIC to boost productivity and help students focus.
              </p>
            </div>
            <div>
              <h3 className="gotham-medium text-xl mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#hero" className="hover:text-white transition">Timer</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#footer" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="gotham-medium text-xl mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@eticfocus.com<br />
                Website: www.eticfocus.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ETIC Focus. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
