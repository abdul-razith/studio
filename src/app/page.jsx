import { Suspense } from 'react';
import { Header } from "../components/layout/header.jsx";
import { Footer } from "../components/layout/footer.jsx";
import { HeroSection } from "../components/sections/hero-section.jsx";
import { AboutMeSection } from "../components/sections/about-me-section.jsx";
import { SkillsSection } from "../components/sections/skills-section.jsx";
import { ProjectsShowcaseSection } from "../components/sections/projects-showcase-section.jsx";
import { ContactFormSection } from "../components/sections/contact-form-section.jsx";
import ErrorBoundary, { ErrorBoundaryHandler } from "../components/common/error-boundary.jsx";
import LoadingScreen from "../components/common/LoadingScreen.jsx";

function SectionWrapper({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      }>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <AboutMeSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <SkillsSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <ProjectsShowcaseSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <ContactFormSection />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
