export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-cream-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Info */}
          <div>
            <p className="font-serif text-xl text-cream-100 mb-1">Debora Costa</p>
            <p className="text-cream-400 text-sm">
              Psicóloga — CRP XX/XXXXX
            </p>
            <p className="text-cream-400 text-sm mt-1">
              Atendimento online
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm text-cream-400 space-y-1">
            <p>
              <a
                href="mailto:contato@deboracosta.com.br"
                className="hover:text-cream-100 transition-colors underline underline-offset-2"
              >
                contato@deboracosta.com.br
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/5531997492770?text=Olá%20Debora,%20vi%20seu%20site%20e%20gostaria%20de%20informações%20sobre%20terapia"
                className="hover:text-cream-100 transition-colors underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-700/30 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-400/70">
          <p>&copy; {currentYear} Debora Costa. Todos os direitos reservados.</p>
          <p className="max-w-md text-center md:text-right leading-relaxed">
            Este site não substitui atendimento médico ou psiquiátrico. Em caso de emergência, procure o CVV (188) ou o SAMU (192).
          </p>
        </div>

        {/* Privacy */}
        <p className="mt-4 text-center text-xs text-cream-400/50">
          Seus dados são tratados com sigilo e em conformidade com a LGPD.
        </p>
      </div>
    </footer>
  );
}
