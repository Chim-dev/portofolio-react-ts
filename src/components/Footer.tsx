const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <section className="relative z-10 mt-20 pt-8 pb-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            © { currentYear } CarteChia. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            | Built with React.Ts & Tailwind CSS |
          </p>

          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
            >
              Discord
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#mailto:CarteChia@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
