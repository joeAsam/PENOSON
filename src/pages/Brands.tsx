import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Brands = () => {
  const brands = [
    { name: "TechCorp", industry: "Technology" },
    { name: "DesignHub", industry: "Creative Agency" },
    { name: "FinanceFirst", industry: "Financial Services" },
    { name: "HealthPlus", industry: "Healthcare" },
    { name: "EduLearn", industry: "Education" },
    { name: "RetailMax", industry: "Retail" },
    { name: "FoodDelight", industry: "Food & Beverage" },
    { name: "TravelEase", industry: "Travel & Tourism" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Brands We Work With
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Trusted by leading companies across various industries
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{brand.industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Brands;
