import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Learn more about our company, mission, and values
          </p>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a passion for excellence, our company has been delivering
                  exceptional solutions to clients worldwide. We believe in innovation,
                  quality, and building lasting relationships with our partners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses through innovative solutions and exceptional service.
                  We strive to exceed expectations and deliver results that drive success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Values</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Excellence:</strong> We maintain the highest standards in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Innovation:</strong> We continuously seek new and better ways to serve our clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Integrity:</strong> We conduct our business with honesty and transparency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Collaboration:</strong> We work together to achieve extraordinary results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
