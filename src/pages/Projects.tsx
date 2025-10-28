import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features and seamless checkout experience.",
      tags: ["React", "Node.js", "Stripe"],
      status: "Completed",
    },
    {
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time analytics and reporting.",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      status: "In Progress",
    },
    {
      title: "Social Media App",
      description: "Feature-rich social networking platform with real-time messaging and content sharing.",
      tags: ["React Native", "Firebase", "GraphQL"],
      status: "Completed",
    },
    {
      title: "Finance Tracker",
      description: "Personal finance management tool with budget planning and investment tracking.",
      tags: ["Angular", "Express", "MongoDB"],
      status: "Completed",
    },
    {
      title: "Learning Management System",
      description: "Educational platform for online courses with video streaming and interactive content.",
      tags: ["Next.js", "Prisma", "AWS"],
      status: "In Progress",
    },
    {
      title: "Restaurant Booking System",
      description: "Reservation management system with real-time availability and automated notifications.",
      tags: ["React", "Django", "MySQL"],
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Showcasing our work and the solutions we've delivered
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
