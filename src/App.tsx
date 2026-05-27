/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  ShieldCheck, 
  Users, 
  Camera, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  FileText,
  Award,
  Lock,
  Headset,
  ArrowUpRight,
  TrendingUp,
  Activity,
  UserCheck
} from 'lucide-react';

const WHATSAPP_NUMBER = "584129581640";
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",
  "https://i.postimg.cc/YSx5hRjk/imagen-1920x1080.png",
  "https://i.postimg.cc/xCxBPdKk/wall1.jpg"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'POR QUÉ COHBSERCA', href: '#por-que-elegirnos' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-black font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 py-2 shadow-soft border-b border-gray-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://i.postimg.cc/fRpCHJf2/IMAGOTIPO-COHBSERCA-WEB.png" 
              alt="COHBSERCA" 
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-extrabold tracking-widest transition-all relative group text-brand-black"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto" 
              className="bg-brand-red text-white px-8 py-3.5 rounded-full font-black text-[11px] tracking-widest shadow-red transition-all hover:brightness-110"
            >
              SOLICITAR AUDITORÍA
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center lg:hidden"
            >
              <div className="flex flex-col gap-10 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-3xl font-black text-brand-black hover:text-brand-red uppercase tracking-tighter"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contacto" 
                  className="bg-brand-red text-white px-12 py-5 rounded-full font-black text-lg shadow-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AUDITORÍA AHORA
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden pt-28 pb-16 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-white/60 md:hidden z-10" />
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="Safety Professional" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-1 w-12 bg-brand-red" />
              <span className="text-brand-red font-black tracking-[0.4em] text-[10px] uppercase">Seguridad Integral de Élite</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] mb-10 tracking-tighter text-brand-black">
              SEGURIDAD <br />
              <span className="text-brand-red italic">A SU ALCANCE.</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 font-medium mb-12 leading-relaxed max-w-2xl border-l-4 border-brand-red pl-8 italic">
              "En un entorno que exige máxima atención, COHBSERCA se consolida como su aliado estratégico en protección integral."
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-sm tracking-widest flex items-center justify-center gap-3 shadow-red group"
              >
                SOLICITAR AUDITORÍA
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#servicios"
                className="bg-brand-black text-white px-10 py-5 rounded-full font-black text-sm tracking-widest flex items-center justify-center gap-3 shadow-xl"
              >
                VER SOLUCIONES
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Values Strip */}
      <section className="bg-brand-black py-16 overflow-hidden mt-12 sm:mt-16 md:mt-0">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 px-10">
              <span className="text-3xl font-black text-white/20 tracking-tighter uppercase italic">Disciplina</span>
              <div className="w-3 h-3 bg-brand-red rotate-45" />
              <span className="text-3xl font-black text-white/20 tracking-tighter uppercase italic">Integridad</span>
              <div className="w-3 h-3 bg-brand-red rotate-45" />
              <span className="text-3xl font-black text-brand-red tracking-tighter uppercase italic">Vigilancia</span>
              <div className="w-3 h-3 bg-brand-red rotate-45" />
              <span className="text-3xl font-black text-white/20 tracking-tighter uppercase italic">Lealtad</span>
              <div className="w-3 h-3 bg-brand-red rotate-45" />
            </div>
          ))}
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-brand-red font-black tracking-[0.4em] text-[10px] uppercase mb-6 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand-red" /> Trayectoria y Compromiso
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-10 tracking-tighter">LIDERAZGO EN <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #000' }}>PROTECCIÓN.</span></h2>
              
              <div className="space-y-8 mb-12">
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  COHBSERCA Vigilancia Privada C.A. es una organización venezolana nacida con el firme propósito de elevar los estándares del sector. Sede en Valencia y capacidad de despliegue estratégico nacional.
                </p>
                <div className="p-8 bg-brand-gray-light border-l-4 border-brand-red">
                  <p className="text-brand-black font-bold text-lg italic opacity-80">
                    "El Valor sobre el Precio: garantizamos una operatividad sin fisuras donde la prevención es nuestra mayor herramienta."
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <TrendingUp className="text-brand-red" size={32} />, title: "Resultados", desc: "Optimización constante de sistemas de seguridad." },
                  { icon: <Activity className="text-brand-red" size={32} />, title: "Respuesta", desc: "Estructura diseñada para la acción inmediata." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="p-4 bg-gray-50 rounded-2xl w-fit shadow-soft border border-gray-100">{item.icon}</div>
                    <h4 className="font-black text-brand-black text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                <img 
                  src="https://i.postimg.cc/xCxBPdKk/wall1.jpg" 
                  alt="Security Focus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl z-0" />
            </motion.div>
          </div>

          {/* Trayectoria de Excelencia - Contenedor de Diploma */}
          <div className="mt-24 pt-24 border-t border-gray-100">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6"
              >
                <span className="text-brand-red font-black tracking-[0.4em] text-[10px] uppercase block">Respaldo Internacional</span>
                <h3 className="text-3xl md:text-5xl font-black text-brand-black tracking-tighter leading-none uppercase">
                  COHBSERCA: Una Trayectoria de Excelencia Avalada Internacionalmente
                </h3>
                
                <div className="space-y-4 text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                  <p>
                    En el sector de la seguridad privada, la confianza no se improvisa; se construye con rigurosidad, disciplina y un compromiso inquebrantable con la excelencia operativa. Para COHBSERCA Vigilancia Privada C.A., el cumplimiento de los más altos estándares nacionales e internacionales es un pilar fundamental de nuestra identidad corporativa.
                  </p>
                  <p>
                    Muestra fehaciente de esta sólida trayectoria es el prestigioso galardón internacional <strong className="text-brand-black font-extrabold">International Arch of Europe Award (IAE)</strong> en su Categoría Oro, conferido a nuestra organización en Fráncfort, Alemania. Este reconocimiento fue entregado por la organización global <strong className="text-brand-black font-extrabold">Business Initiative Directions (BID)</strong> e ImarPress, bajo la dirección de líderes internacionales en control de calidad como José E. Prieto y Dayle L. Fickling.
                  </p>
                </div>

                <div className="p-8 bg-brand-gray-light rounded-3xl border-l-4 border-brand-red space-y-4">
                  <h4 className="text-lg font-black text-brand-black uppercase tracking-tight">¿Qué significa este galardón para nuestros clientes?</h4>
                  <p className="text-gray-500 font-bold italic text-sm">
                    La obtención del Premio Internacional Arco Europa a la Calidad sitúa a COHBSERCA en el mapa global de las empresas que adoptan la vanguardia en gestión y servicio. Este reconocimiento certifica internacionalmente tres aspectos clave de nuestra operación:
                  </p>
                  
                  <ul className="space-y-4 mt-6">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 text-brand-red"><CheckCircle2 size={18} /></div>
                      <div>
                        <strong className="text-brand-black font-extrabold uppercase text-xs block tracking-wider">Cultura de la Calidad Total</strong>
                        <span className="text-gray-500 text-sm font-medium">Avala que nuestros procesos de selección, capacitación y despliegue táctico de oficiales de seguridad se rigen bajo los principios del Modelo de Gestión de Calidad Total QC100.</span>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 text-brand-red"><CheckCircle2 size={18} /></div>
                      <div>
                        <strong className="text-brand-black font-extrabold uppercase text-xs block tracking-wider">Liderazgo y Eficiencia Operativa</strong>
                        <span className="text-gray-500 text-sm font-medium">Reconoce la excelencia de la alta dirección en la planificación estratégica y la mitigación efectiva de riesgos patrimoniales.</span>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 text-brand-red"><CheckCircle2 size={18} /></div>
                      <div>
                        <strong className="text-brand-black font-extrabold uppercase text-xs block tracking-wider">Prestigio y Respaldo Global</strong>
                        <span className="text-gray-500 text-sm font-medium">Coloca el nombre de nuestra empresa a la par de corporaciones globales que han hecho de la mejora continua su estandarte, asegurando a nuestros clientes que su seguridad está en manos de una organización premiada en Europa.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 text-gray-600 font-medium leading-relaxed text-sm md:text-base pt-4">
                  <p>
                    Con más de una década consolidando este estándar, COHBSERCA Vigilancia Privada C.A. reafirma su compromiso de seguir protegiendo los activos más valiosos de nuestros aliados comerciales con la misma calidad, honor y profesionalismo que nos hicieron merecedores de este lauro internacional.
                  </p>
                  <p className="text-brand-red font-black text-lg md:text-xl uppercase tracking-tighter">
                    COHBSERCA: Seguridad con respaldo, prestigio y excelencia certificada.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 flex flex-col items-center justify-center p-4 md:p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100"
              >
                <div className="relative group bg-white p-6 rounded-3xl shadow-xl border-8 border-double border-amber-800/10 hover:shadow-2xl transition-all duration-500">
                  <img 
                    src="https://i.postimg.cc/wjLRpMds/image.png" 
                    alt="International Arch of Europe Award Diploma" 
                    className="w-full h-auto object-contain rounded-lg max-h-[500px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                    <p className="font-black text-xs uppercase tracking-widest text-brand-red">International Arch of Europe Award</p>
                    <p className="font-bold text-[10px] text-gray-300 mt-1 uppercase italic">Fráncfort, Alemania - Categoría Oro</p>
                  </div>
                </div>
                <p className="text-center text-gray-400 font-bold text-[10px] tracking-widest mt-6 uppercase">Galardón de Calidad Superior BID QC100</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="section-padding bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-brand-red font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Portafolio de Soluciones</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-black tracking-tighter uppercase mb-6">INTELIGENCIA EN <span className="text-brand-red">SEGURIDAD.</span></h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto shadow-red" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Vigilancia y Protección",
                desc: "Oficiales rigurosamente seleccionados y entrenados en técnicas preventivas para sectores críticos.",
                index: "01"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Resguardo V.I.P.",
                desc: "Servicio especializado de escoltas para personalidades, enfocado en discreción táctica y rutas seguras.",
                index: "02"
              },
              {
                icon: <Camera className="w-10 h-10" />,
                title: "Seguridad Electrónica",
                desc: "Implementación de CCTV, alarmas inteligentes y monitoreo 24/7 de alta definición tecnológica.",
                index: "03"
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: "Consultoría de Riesgos",
                desc: "Evaluación de vulnerabilidades y diseño de planes de contingencia personalizados según su entorno.",
                index: "04"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-soft hover:shadow-2xl transition-all duration-500 group border-b-8 border-transparent hover:border-brand-red flex flex-col justify-between"
              >
                <div>
                  <div className="text-[5rem] font-black text-gray-50 absolute right-8 top-8 select-none group-hover:text-brand-red/5 transition-colors">{service.index}</div>
                  <div className="mb-10 text-brand-red group-hover:scale-110 transition-transform duration-500 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black mb-6 text-brand-black uppercase tracking-tight leading-none group-hover:text-brand-red transition-colors">{service.title}</h3>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-12 flex items-center gap-2 text-brand-red font-black text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber Más <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Bento Layout */}
      <section id="por-que-elegirnos" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-12 xl:col-span-5">
              <span className="text-brand-red font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">¿Por qué elegirnos?</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-black mb-10 tracking-tighter">EL DIFERENCIAL <br /> <span className="text-brand-red">COHBSERCA.</span></h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                Nuestra estructura operativa está diseñada para superar las expectativas más exigentes, combinando factor humano y tecnología.
              </p>
              <div className="flex flex-col gap-8 md:gap-12">
                 {[
                   { icon: <UserCheck className="text-brand-red" size={24} />, title: "Personal Calificado", desc: "Formación continua en normativa legal y respuesta ante emergencias aéreas y terrestres." },
                   { icon: <Lock className="text-brand-red" size={24} />, title: "Cumplimiento Legal", desc: "Operamos bajo las leyes venezolanas y directrices del ente rector en seguridad." },
                   { icon: <Headset className="text-brand-red" size={24} />, title: "Atención Gerencial", desc: "Cada cliente recibe un trato directo con la gerencia para ajustes en tiempo real." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 md:gap-8 group items-start">
                      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-soft border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                         {item.icon}
                       </div>
                      <div className="flex-1">
                         <h4 className="text-lg md:text-xl font-black text-brand-black uppercase tracking-tight mb-2 leading-tight">{item.title}</h4>
                         <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7 grid md:grid-cols-2 gap-10">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="aspect-[4/5] bg-brand-gray-mid rounded-3xl overflow-hidden relative shadow-2xl group"
               >
                  <img src="https://seguridadcatriel.com/images/capacitacion_interior.jpg" alt="Staff" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-black/40 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-6 md:p-8 glass rounded-2xl">
                     <p className="text-brand-red font-black text-[10px] tracking-widest uppercase mb-2">Formación</p>
                     <p className="text-white font-black text-lg md:text-xl uppercase leading-none">Capacitación Táctica Permanente</p>
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="aspect-[4/5] bg-brand-red rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-6 sm:p-8 md:p-12 text-white"
               >
                  <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10">
                     <Award size={120} className="w-20 h-20 md:w-[120px] md:h-[120px]" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter mb-4 md:mb-8 leading-none">EL VALOR <br /> SOBRE EL PRECIO.</h3>
                  <p className="font-bold text-sm sm:text-base md:text-lg opacity-80 leading-snug">
                     Nuestra filosofía se basa en la excelencia operativa innegociable.
                  </p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-20 md:py-32 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-tight uppercase italic">
            BLINDE SU FUTURO <br /> CON EXPERTOS.
          </h2>
          <a href="#contacto" className="bg-white text-brand-red px-6 py-4 md:px-14 md:py-6 rounded-full font-black text-sm md:text-xl tracking-widest shadow-2xl hover:bg-brand-black hover:text-white transition-all transform hover:scale-105 inline-block">
            SOLICITAR AUDITORÍA TÉCNICA
          </a>
        </div>
        <div className="absolute top-0 left-0 p-20 opacity-10 pointer-events-none select-none">
          <Shield className="w-96 h-96" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-red font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">Contacto Directo</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-8 tracking-tighter uppercase leading-none">
                ¿LISTO PARA <span className="text-brand-red font-normal italic">MEJORAR</span> SU PLAN?
              </h2>
              <p className="text-gray-500 text-xl font-medium mb-16 max-w-lg italic">
                Póngase en contacto con nuestra Dirección General. Auditamos sus riesgos y diseñamos su blindaje.
              </p>

              <div className="space-y-12">
                <ContactItem icon={<Phone />} label="Dirección Operativa" val="0412-958.16.40" href="tel:+584129581640" />
                <ContactItem icon={<Mail />} label="Canal Institucional" val="cohbserca@gmail.com" href="mailto:cohbserca@gmail.com" />
                <ContactItem icon={<MapPin />} label="Sede Principal" val="Unicenter Express, Naguanagua, Carabobo." />
              </div>
            </motion.div>

            {/* Form */}
            <div className="flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-8 md:p-16 rounded-3xl md:rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden w-full max-w-xl lg:max-w-full"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-red shadow-red" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-8 md:mb-10 text-brand-black uppercase tracking-tighter text-center">Formulario de Requerimiento</h3>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-32 pb-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-4 gap-20 relative z-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 mb-12">
              <img 
                src="https://i.postimg.cc/BnkphXBM/IMAGOTIPO-COHBSERCA-PN.png" 
                alt="COHBSERCA" 
                className="h-24 object-contain" 
              />
            </div>
            <p className="text-white/40 font-bold text-xl max-w-md leading-relaxed uppercase italic">
              Elevando los estándares de seguridad privada en Venezuela a través de la excelencia operativa y tecnológica.
            </p>
          </div>

          <div>
             <h4 className="text-brand-red font-black text-[10px] tracking-[0.3em] mb-10 uppercase">Navegación</h4>
             <ul className="space-y-6">
               {navLinks.map(l => (
                 <li key={l.name}><a href={l.href} className="text-lg font-black hover:text-brand-red transition-all uppercase tracking-tighter">{l.name}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 className="text-brand-red font-black text-[10px] tracking-[0.3em] mb-10 uppercase">Legal</h4>
             <div className="space-y-6 text-lg font-bold opacity-30 italic uppercase">
               <p className="text-white opacity-60">RIF J410187492</p>
               <p>Registros MPPRIJP</p>
               <p>Naguanagua, Edo. Carabobo</p>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-black text-[10px] tracking-widest text-white/20 uppercase">
          <p>© {new Date().getFullYear()} COHBSERCA VIGILANCIA PRIVADA C.A. TODOS LOS DERECHOS RESERVADOS. | HECHO POR LEGAINT CORPORATION.</p>
          <div className="flex gap-8">
            <Shield size={24} />
            <Award size={24} />
            <Lock size={24} />
          </div>
        </div>

        {/* Global BG Text */}
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none">
           <span className="text-[25vw] font-black leading-none translate-y-1/4">COHB</span>
        </div>
      </footer>
    </div>
  );
}

function ContactItem({ icon, label, val, href }: { icon: any, label: string, val: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 sm:gap-8 group cursor-pointer">
       <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-brand-black border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all transform group-hover:rotate-6 flex-shrink-0">
          {icon}
       </div>
       <div className="min-w-0 pr-2">
          <span className="block text-brand-red font-black text-[9px] tracking-[0.3em] uppercase mb-1">{label}</span>
          <span className="text-sm sm:text-lg md:text-2xl font-black text-brand-black hover:text-brand-red transition-colors uppercase tracking-tighter block truncate sm:whitespace-normal break-words sm:break-normal">{val}</span>
       </div>
    </div>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Industrial',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hola COHBSERCA, mi nombre es ${formData.name}. Requiero servicio de tipo: ${formData.service}. Contacto: ${formData.phone}. Detalle: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const inputClasses = "w-full bg-gray-50 border-2 border-gray-200 p-4 sm:p-5 font-black text-sm sm:text-base md:text-lg text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-all uppercase placeholder:opacity-40 rounded-xl sm:rounded-2xl shadow-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <label className="text-[9px] font-black tracking-[0.3em] text-brand-red uppercase ml-2 flex items-center gap-2">
          <div className="w-1 h-4 bg-brand-red" /> Cliente / Empresa
        </label>
        <input 
          required
          type="text" 
          placeholder="Ej: Inversora Valencia"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[9px] font-black tracking-[0.3em] text-brand-red uppercase ml-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-brand-red" /> Servicio Táctico
          </label>
          <select 
            className={inputClasses + " appearance-none cursor-pointer"}
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option value="Industrial">VIGILANCIA INDUSTRIAL</option>
            <option value="Residencial">VIGILANCIA RESIDENCIAL</option>
            <option value="Escolta">PROTECCIÓN V.I.P.</option>
            <option value="Electrónica">SEGURIDAD CCTV</option>
            <option value="Consultoria">CONSULTORÍA RIESGOS</option>
          </select>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[9px] font-black tracking-[0.3em] text-brand-red uppercase ml-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-brand-red" /> Teléfono Móvil
          </label>
          <input 
            required
            type="tel" 
            placeholder="04XX-XXXXXXX"
            className={inputClasses}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <label className="text-[9px] font-black tracking-[0.3em] text-brand-red uppercase ml-2 flex items-center gap-2">
          <div className="w-1 h-4 bg-brand-red" /> Notas Adicionales
        </label>
        <textarea 
          placeholder="Describa brevemente su requerimiento..."
          rows={5}
          className={inputClasses + " resize-none"}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-brand-black text-white font-black py-4 sm:py-6 md:py-8 rounded-full text-[11px] sm:text-sm md:text-lg tracking-wider md:tracking-widest uppercase shadow-2xl flex items-center justify-center gap-2 md:gap-4 hover:bg-brand-red transition-all duration-500 px-4"
      >
        <Zap size={18} className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
        <span className="truncate sm:whitespace-normal">SOLICITAR CONTACTO WHATSAPP</span>
      </motion.button>
      
      <p className="text-[8px] text-center font-black tracking-widest text-gray-300 uppercase italic">
        Privacidad y seguridad garantizada en su comunicación.
      </p>
    </form>
  );
}
