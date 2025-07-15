import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              MediTash
            </Link>
            <p className="text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/common-diseases" className="hover:text-primary transition-colors">
                  {t('nav.commonDiseases')}
                </Link>
              </li>
              <li>
                <Link to="/rare-illnesses" className="hover:text-primary transition-colors">
                  {t('nav.rareIllnesses')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-center md:text-left">{t('footer.copyright')}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-muted-foreground">
            <Heart className="w-4 h-4 text-accent" />
            <span>{t('footer.tagline')}</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;