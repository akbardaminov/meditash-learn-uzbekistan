import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t border-border/50 pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start mb-8">
          {/* Column 1: Brand and Description */}
          <div className="min-w-[260px]">
            <span className="text-2xl font-bold text-primary mb-4 block">MediTash</span>
            <p className="text-muted-foreground max-w-md mb-4">
              {t('footer.description')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-x-12 md:justify-center ml-auto">
            {/* Column 2: Company */}
            <div className="mb-8 md:mb-0 min-w-[140px]">
              <h3 className="font-semibold mb-4 text-sm">{t('footer.company')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">{t('footer.about')}</a></li>
                <li><a href="mailto:meditashedu@gmail.com" className="hover:text-primary transition-colors">{t('footer.contact')}</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">{t('footer.blog')}</a></li>
              </ul>
            </div>
            {/* Column 3: Social Media */}
            <div className="mb-8 md:mb-0 min-w-[140px]">
              <h3 className="font-semibold mb-4 text-sm">{t('footer.social')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://instagram.com/meditash" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.instagram')}</a></li>
                <li><span className="italic text-muted-foreground">{t('footer.telegramComingSoon')}</span></li>
                <li><span className="italic text-muted-foreground">{t('footer.facebookComingSoon')}</span></li>
              </ul>
            </div>
            {/* Column 4: Resources */}
            <div className="min-w-[140px]">
              <h3 className="font-semibold mb-4 text-sm">{t('footer.resources')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#help" className="hover:text-primary transition-colors">{t('footer.help')}</a></li>
                <li><a href="#privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#terms" className="hover:text-primary transition-colors">{t('footer.terms')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-2 pb-1 flex flex-col md:flex-row items-center justify-center">
          <p className="text-muted-foreground text-center w-full text-xs m-0 p-0 text-[15px]">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;