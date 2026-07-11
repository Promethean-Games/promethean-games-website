import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import Home from "@/pages/Home";
import Games from "@/pages/Games";
import About from "@/pages/About";
import ParForTheCourse from "@/pages/ParForTheCourse";
import LearningCenter from "@/pages/LearningCenter";
import LearningArticle from "@/pages/LearningArticle";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-primary-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow flex flex-col" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/games/par-for-the-course" component={ParForTheCourse} />
        <Route path="/learning-center" component={LearningCenter} />
        <Route path="/learning-center/:slug">
          {(params) => <LearningArticle slug={params.slug} />}
        </Route>
        <Route path="/about" component={About} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
