import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the web development landscape in the coming years.",
      date: "March 15, 2024",
      category: "Technology",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to build and maintain design systems that grow with your organization and maintain consistency.",
      date: "March 10, 2024",
      category: "Design",
    },
    {
      title: "Optimizing User Experience",
      excerpt: "Practical strategies for creating intuitive and delightful user experiences that drive engagement.",
      date: "March 5, 2024",
      category: "UX",
    },
    {
      title: "Security Best Practices",
      excerpt: "Essential security measures every modern web application should implement to protect user data.",
      date: "February 28, 2024",
      category: "Security",
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Architecture patterns and practices for creating applications that can handle growth efficiently.",
      date: "February 20, 2024",
      category: "Development",
    },
    {
      title: "The Power of Analytics",
      excerpt: "Leveraging data and analytics to make informed decisions and improve business outcomes.",
      date: "February 15, 2024",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Articles
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Insights, tips, and industry knowledge from our team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
