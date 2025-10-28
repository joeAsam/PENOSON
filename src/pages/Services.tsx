import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Rocket, Users, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and maximize your ROI.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Consulting",
      description: "Expert guidance to help your business leverage technology effectively.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience significantly.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Security Services",
      description: "Protect your digital assets with comprehensive security solutions.",
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
            Comprehensive solutions tailored to your business needs
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
