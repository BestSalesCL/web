// constants/pricingPlansData.ts

interface FeatureContent {
  name: string;
  highlight?: boolean;
}

interface Pricing {
  title: string;
  price: string;
  annualPrice?: string;
  description: string;
  plans: boolean;
  features: FeatureContent[];
  buttonText: string;
  buttonLink: string;
  isFree: boolean;
  monthlyPriceId?: string;
  annualPriceId?: string;
}

export const PricingPlansData: Pricing[] = [
  {
    title: "Hobby",
    price: "30",
    description: "The ultimate performance kickstart.",
    plans: false,
    features: [
      { name: "Improvement in general sports skills." },
      {
        name: "Improving the basic strength and movement patterns involved in your sport.",
      },
      { name: "Improvement in general mobility." },
      { name: "Training via app (non-personalized)." },
      { name: "General training for your sport" },
    ],
    buttonText: "Start Now",
    monthlyPriceId: "price_1PP6giD2QOoMtt2sd5I4vZZu",
    isFree: true,
    buttonLink: "",
  },
  {
    title: "Performance",
    price: "300",
    annualPrice: "210",
    description: "The plan that helps you stand out from the rest.",
    plans: true,
    features: [
      { name: "Initial assessment." },
      { name: "Customized guide for your case." },
      { name: "Evaluative report." },
      { name: "Monthly report." },
      { name: "Chat with the coach." },
      { name: "Excercise correction." },
      { name: "Personalized planning." },
      { name: "Tracking training metrics." },
      { name: "Sports analysis by position or sport." },
      { name: "Training via the app." },
      { name: "FREE Nutritional Advice", highlight: true },
      { name: "110% Guarantee", highlight: true },
    ],
    buttonText: "Start Now",
    isFree: false,
    monthlyPriceId: "price_1PEoV7D2QOoMtt2sX9NY2161",
    annualPriceId: "price_1PK1DrD2QOoMtt2s0mVvP27n",
    buttonLink: "",
  },
  {
    title: "Pro",
    price: "Custom",
    description: "For people who want to go all in with being the best.",
    plans: false,
    features: [
      { name: "Weekly in-person Zoom class" },
      { name: "Zoom exercise correction" },
      { name: "Personalized evaluation + report." },
      { name: "Evaluative questionnaire." },
      { name: "Personalized planning and weekly feedback." },
      { name: "Monthly report on improvements and areas to work on" },
      { name: "Assistance in setting goals." },
      { name: "Chat with the coach 24/7." },
      { name: "FREE Nutritional Advice", highlight: true },
      { name: "110% Guarantee", highlight: true },
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    isFree: false,
  },
];
