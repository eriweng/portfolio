import { useState, useEffect } from "react";
import { Menu, X, Terminal, Globe, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Sync theme state with DOM
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md border-border shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded bg-secondary border border-border group-hover:bg-accent/20 transition-colors">
            <Terminal size={20} className="text-accent" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-text">
            ERI<span className="text-accent">.DEV</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-text transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-px bg-border mx-2"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted hover:text-text transition-colors"
            >
                <Globe size={18} />
                <span>{i18n.language === 'zh-TW' ? '繁' : i18n.language === 'zh-CN' ? '简' : 'EN'}</span>
            </button>
            {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-secondary border border-border rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-muted hover:bg-primary/50 hover:text-text">English</button>
                    <button onClick={() => changeLanguage('zh-TW')} className="block w-full text-left px-4 py-2 text-sm text-muted hover:bg-primary/50 hover:text-text">繁體中文</button>
                    <button onClick={() => changeLanguage('zh-CN')} className="block w-full text-left px-4 py-2 text-sm text-muted hover:bg-primary/50 hover:text-text">简体中文</button>
                </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-secondary border border-border text-sm font-semibold hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-text"
          >
            {t('nav.hireMe')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleTheme}
                className="text-text p-1"
                aria-label="Toggle Theme"
            >
               {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
                onClick={() => {
                    const nextLang = i18n.language === 'en' ? 'zh-TW' : i18n.language === 'zh-TW' ? 'zh-CN' : 'en';
                    changeLanguage(nextLang);
                }}
                className="text-text p-1"
            >
                <Globe size={24} />
            </button>
            <button
            className="text-text p-1"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opactiy-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
