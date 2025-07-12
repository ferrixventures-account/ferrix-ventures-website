import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from '@/theme/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/react';


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Toaster />
          <Sonner />
          {/* Theme toggle button in top-right overlay */}
          <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>

          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/es" element={<Index forcedLanguage="es" />} />
              <Route path="/" element={<Index forcedLanguage="en" />} />
              <Route path="/en" element={<Index forcedLanguage="en" />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <SpeedInsights />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
