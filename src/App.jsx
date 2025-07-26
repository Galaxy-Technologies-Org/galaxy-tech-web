import './App.css'
import companyIcon from './assets/galaxy-icon.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4">
      <img src={companyIcon} alt="Galaxy Technologies Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold tracking-tight mb-2 text-center">Galaxy Technologies LLC</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
        We develop software and technologies to benefit the world and help build a sustainable future for humankind.
      </p>
      <nav className="flex gap-6 mb-8">
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <section id="about" className="max-w-xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p className="text-gray-600">
          Galaxy Technologies LLC is a startup focused on creating impactful, sustainable technology solutions. Our mission is to innovate for a better tomorrow.
        </p>
      </section>
      <section id="contact" className="max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-600">Email: <a href="mailto:info@galaxytech.earth" className="underline">info@galaxytech.earth</a></p>
      </section>
    </div>
  )
}

export default App
