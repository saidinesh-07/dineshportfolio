import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem
                  icon={<Mail />}
                  label="Email"
                  value="penugondasaidinesh@gmail.com"
                  href="mailto:penugondasaidinesh@gmail.com"
                />
                <ContactItem
                  icon={<Phone />}
                  label="Phone"
                  value="+91 8008346727"
                  href="tel:+918008346727"
                />
                <ContactItem
                  icon={<MapPin />}
                  label="Location"
                  value="Vijayawada, Andhra Pradesh, India"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-sm md:text-base">
                  Connect on Social Media
                </h4>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/saidinesh-07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dinesh-penugonda-567971247/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="rounded-xl bg-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-xl bg-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="rounded-xl bg-background/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="rounded-xl bg-background/50"
                  required
                />
              </div>

              <Button type="submit" className="w-full rounded-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/10 transition-colors">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
