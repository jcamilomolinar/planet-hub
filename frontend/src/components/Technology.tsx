import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip"

function Technology({ name, logo }: { name: string, logo: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center justify-center w-100 h-100">
          <Image className="hover:scale-125 transition" src={logo} alt={`${name} logo`} height={100} width={100} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Technology;