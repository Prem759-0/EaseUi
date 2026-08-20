import AppRouter from "./router/AppRouter";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {};

function App({}: Props) {
  return (
    <div className="min-h-screen w-full relative">
      <TooltipProvider delay={0}>
        <AppRouter />
      </TooltipProvider>
    </div>
  );
}

export default App;
