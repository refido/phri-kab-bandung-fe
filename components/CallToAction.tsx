import { useLanguage } from "../app/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
interface CTAProps {
  variant?: "purple" | "slate";
  useCard?: boolean;
  title: { id: string; en: string };
  description: { id: string; en: string };
  buttons: Array<{
    text: { id: string; en: string };
    onClick: () => void;
    variant?: "default" | "outline" | "secondary";
    icon?: React.ReactNode;
  }>;
}

export function CallToAction({
  variant = "purple",
  useCard = false,
  title,
  description,
  buttons,
}: CTAProps) {
  const { t } = useLanguage();

  const gradients = {
    purple: "from-purple-700 to-indigo-700",
    slate: "from-slate-900 to-slate-800",
  };

  const textColors = {
    purple: "text-purple-50",
    slate: "text-slate-200",
  };

  // Button styling based on variant
  const getButtonClasses = (buttonVariant: string) => {
    if (buttonVariant === "default") {
      return "bg-white text-purple-700 hover:bg-slate-100";
    }
    if (buttonVariant === "outline") {
      return "border-2 border-white text-white bg-transparent hover:bg-white/10";
    }
    if (buttonVariant === "secondary") {
      return "bg-white text-neutral-950 hover:bg-slate-100";
    }
    return "";
  };

  const content = (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl mb-4">{t(title)}</h2>
      <p className={`text-xl ${textColors[variant]} mb-8 max-w-2xl mx-auto`}>
        {t(description)}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            size="lg"
            className={getButtonClasses(button.variant || "primary")}
            onClick={button.onClick}
          >
            {t(button.text)}
            {button.icon && <span className="ml-2">{button.icon}</span>}
          </Button>
        ))}
      </div>
    </div>
  );

  if (useCard) {
    return (
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card
            className={`border-0 shadow-xl bg-linear-to-br ${gradients[variant]} text-white`}
          >
            <CardContent className="p-8 md:p-12">{content}</CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`bg-linear-to-br ${gradients[variant]} text-white py-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
