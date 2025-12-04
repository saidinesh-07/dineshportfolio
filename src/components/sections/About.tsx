import { Phone, MapPin, Mail, GraduationCap, School, Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl">
              <p className="text-base md:text-lg leading-relaxed">
                Hello 👋, I am Veera Venkata Naga Sai Dinesh Penugonda, a B.Tech student specializing in 
                Cyber Security and Block Chain Technology in the Computer Science and Engineering (CSE) branch 
                at KL University, Vijayawada.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Educational Journey</h3>
              <div className="space-y-6">
                <div className="relative pl-6 md:pl-8 border-l-2 border-primary">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-semibold text-base md:text-lg">Bachelor of Technology</h4>
                  <p className="text-sm md:text-base text-muted-foreground">KL University</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1">
                    <span className="text-sm text-muted-foreground">2022-2026</span>
                    <span className="font-bold text-primary text-sm md:text-base">CGPA: 9.6/10</span>
                  </div>
                </div>

                <div className="relative pl-6 md:pl-8 border-l-2 border-primary">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-semibold text-base md:text-lg">Intermediate (12th Class)</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Narayana Junior College</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1">
                    <span className="text-sm text-muted-foreground">2020-2022</span>
                    <span className="font-bold text-primary text-sm md:text-base">Percentage: 95.9%</span>
                  </div>
                </div>

                <div className="relative pl-6 md:pl-8 border-l-2 border-primary">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-semibold text-base md:text-lg">High School (10th Class)</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Narayana High School</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1">
                    <span className="text-sm text-muted-foreground">2019-2020</span>
                    <span className="font-bold text-primary text-sm md:text-base">Percentage: 98.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={<Phone />} title="Phone Number" value="+91 8008346727" />
            <InfoCard icon={<MapPin />} title="Location" value="Vijayawada, Andhra Pradesh, India" />
            <InfoCard icon={<Mail />} title="Email" value="penugondasaidinesh@gmail.com" />
            <InfoCard icon={<GraduationCap />} title="College" value="KL University" />
            <InfoCard icon={<School />} title="School" value="Narayana High School" />
            <InfoCard icon={<Building2 />} title="Intermediate" value="Narayana Junior College" />
            <InfoCard icon={<GraduationCap />} title="Degree" value="Bachelor of Technology" />
            <InfoCard icon={<School />} title="Branch" value="CSE (Cyber Security & Blockchain)" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="p-4 md:p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border shadow-xl hover:shadow-2xl transition-shadow group">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-xs md:text-sm text-muted-foreground">{title}</h3>
          <p className="text-sm md:text-base mt-1 break-words">{value}</p>
        </div>
      </div>
    </div>
  );
}
