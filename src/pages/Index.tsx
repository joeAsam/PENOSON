import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to Our Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            We transform ideas into exceptional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto">
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Team</h3>
                <p className="text-muted-foreground">
                  Skilled professionals dedicated to delivering excellence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality and attention to detail
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Always here to help you succeed and grow
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link to="/about">
            <Button size="lg">
              Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
