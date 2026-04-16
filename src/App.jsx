import { useState, useEffect } from 'react'
import pfp from './xalatath-pfp.png'

function App() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="scanline"></div>

      <div className="bg-black border-b-4 border-red-600 py-3 text-center text-red-400 font-medium tracking-widest text-lg">
        ⚠️ PROJECT XALATATH — WORK IN PROGRESS / CONTAINMENT UNSTABLE ⚠️
      </div>

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 relative">
        <div className="max-w-md w-full text-center">

          <div className="mx-auto w-52 h-52 mb-10 md2-card overflow-hidden border border-red-700">
            <img 
              src={pfp} 
              alt="XALATATH" 
              className={`w-full h-full object-cover ${glitch ? 'glitch' : ''}`}
            />
          </div>

          <h1 className={`text-7xl font-black tracking-tighter text-red-500 mb-4 ${glitch ? 'glitch' : ''}`}>
            XALATATH
          </h1>

          <p className="text-2xl text-red-400 mb-2">BUILD EXECUTIONER</p>
          <p className="text-lg text-gray-400 mb-12">
            Gentoo gremlin • Vergil worshipper • AI torturer
          </p>

          <div className="space-y-6">
            <a 
              href="#projects" 
              className="md2-card block py-6 text-2xl font-medium text-white hover:bg-red-900/40 transition-all border border-red-600"
            >
              MOJE PROJEKTY
            </a>

            <a 
              href="#chaos" 
              className="md2-card block py-6 text-2xl font-medium text-white hover:bg-red-900/40 transition-all border border-red-600"
            >
              WEJDŹ DO CHAOSU
            </a>
          </div>

          <div className="mt-16 text-red-700 text-sm tracking-widest">
            STATUS: HIGHLY CORRUPTED • BUILD DATE: {new Date().getFullYear()}
          </div>
        </div>
      </div>

      <style>{`
        .md2-card {
          background: #1c1628;
          border-radius: 16px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5),
                      0 2px 6px rgba(255, 51, 102, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .md2-card:hover {
          box-shadow: 0 12px 28px rgba(255, 51, 102, 0.45);
          transform: translateY(-6px);
        }

        .glitch {
          animation: glitch 0.1s linear;
        }

        @keyframes glitch {
          0%   { transform: translate(0); }
          25%  { transform: translate(-2px, 2px); }
          50%  { transform: translate(2px, -2px); }
          75%  { transform: translate(-2px, -2px); }
          100% { transform: translate(0); }
        }

        .scanline {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(transparent, rgba(255, 51, 102, 0.15), transparent);
          animation: scan 7s linear infinite;
          pointer-events: none;
          opacity: 0.7;
          z-index: 50;
        }

        @keyframes scan {
          0%   { transform: translateY(-120%); }
          100% { transform: translateY(350%); }
        }
      `}</style>
    </div>
  )
}

export default App
