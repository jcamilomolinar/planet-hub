import {
  HousePlus,
  BookText,
  Hotel,
  Rocket,
  Earth,
  ShoppingCart,
  LogOut,
  LandPlot
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import Link from "next/link"
import { useRouter } from 'next/navigation'
  
export function UserMenu({setIsLogged}: {setIsLogged: any}) {
  const router = useRouter();

  const handleClick = () => {
    setIsLogged(false);
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:scale-110 duration-200 ease-in-out cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {localStorage.getItem('user') === "admin" && (
            <div>
              <Link href="/addplanet">
                <DropdownMenuItem>
                  <Earth className="mr-2 h-4 w-4" />
                  <span>Add planet</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/addflight">
                <DropdownMenuItem>
                  <LandPlot className="mr-2 h-4 w-4" />
                  <span>Add flight</span>
                </DropdownMenuItem>
              </Link>
            </div>
          )}
          <DropdownMenuItem>
            <HousePlus className="mr-2 h-4 w-4" />
            <span>Add accomodation</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <BookText className="mr-2 h-4 w-4" />
              <span>Bookings</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Hotel className="mr-2 h-4 w-4" />
                  <span>Accomodations</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Rocket className="mr-2 h-4 w-4" />
                  <span>Flights</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleClick}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
  