import { useLanguage } from "../app/contexts/LanguageContext";
import { Button } from "./ui/button";

interface HeroProps {
  variant?: "slate" | "purple" | "slateWithImage";
  title: { id: string; en: string };
  description: { id: string; en: string };
  backgroundImage?: string;
  size?: "normal" | "large";
  buttons?: Array<{
    text: { id: string; en: string };
    onClick: () => void;
    variant?: "default" | "outline" | "secondary";
    icon?: React.ReactNode;
    className?: string;
  }>;
}

export function Hero({
  variant = "slate",
  title,
  description,
  backgroundImage,
  size = "normal",
  buttons,
}: HeroProps) {
  const { t } = useLanguage();

  const gradients = {
    slate: "from-slate-900 to-slate-800",
    purple: "from-purple-700 to-indigo-700",
    slateWithImage: "from-slate-900 via-slate-800 to-indigo-900",
  };

  const textColors = {
    slate: "text-slate-200",
    purple: "text-purple-50",
    slateWithImage: "text-slate-200",
  };

  const paddingClasses = size === "large" ? "py-24 md:py-32" : "py-16";

  return (
    <section
      className={`relative bg-linear-to-br ${gradients[variant]} text-white`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      <div
        className={`${
          backgroundImage ? "relative" : ""
        } max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${paddingClasses}`}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            {t(title)}
          </h1>
          <p
            className={`text-xl md:text-2xl ${textColors[variant]} mb-8 max-w-3xl`}
          >
            {t(description)}
          </p>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant}
                  className={button.className}
                  onClick={button.onClick}
                >
                  {t(button.text)}
                  {button.icon && <span className="ml-2">{button.icon}</span>}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
