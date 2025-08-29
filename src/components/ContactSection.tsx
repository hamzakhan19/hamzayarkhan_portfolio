import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send email via EmailJS using Vite env variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          // The keys below MUST match your EmailJS template variables
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
          to_email: "hamzayarkhan3@gmail.com", // optional if set inside template
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY! }
      );

      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send message",
        description: "Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hamzayarkhan3@gmail.com",
      action: "mailto:hamzayarkhan3@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect professionally",
      action: "https://www.linkedin.com/in/hamza-yar-khan-9b2089173/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my repositories",
      action: "https://github.com/hamzakhan19",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Open to Remote Opportunities",
      action: null,
    },
  ];

  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities,
                innovative projects, and collaborations in full-stack
                development and AI. Whether you have a specific project in mind
                or just want to connect, I'd love to hear from you.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  Available for Freelance
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-secondary/10 text-secondary"
                >
                  Open to Full-time
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-success/10 text-success"
                >
                  Remote Friendly
                </Badge>
              </div>
            </div>

            {/* <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                  {item.action && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      asChild
                    >
                      <a href={item.action} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div> */}

            {/* Quick Meeting CTA */}
            {/* <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Schedule a Meeting</h4>
                    <p className="text-sm text-muted-foreground">
                      Prefer to chat directly? Let's schedule a quick call to
                      discuss your project.
                    </p>
                  </div>
                  <Button variant="default">Book Call</Button>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
