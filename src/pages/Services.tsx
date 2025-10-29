import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Rocket, Users, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "PENOSON BUSINESS SYSTEMS",
      description: `Focus: Management consulting, idea structuring, and venture optimization.
`,
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "PENOSON INDUSTRIAL SYSTEMS",
      description: "Focus: Power, agriculture, and technology ventures, the operational arm managing Penoson’s industrial portfolios (e.g., Honda Power Products, Smart Farming Initiative).",
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "PENOSON CREATIVE SYSTEMS",
      description: "Focus: The creator economy, empowering creatives, innovators, and cultural entrepreneurs to build businesses around their ideas.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "PENOSON DEVELOPMENT SYSTEMS",
      description: "Focus: Social impact, sustainability, and development consulting  aligning business with the UN SDGs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Penoson is a house of systems.
            We stand at the intersection of business intelligence, industrial innovation, creative enterprise, and development impact.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
