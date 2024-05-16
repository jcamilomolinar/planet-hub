import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/Accordion"

function HomePage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={`mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-9xl dark:text-white my-10 drop-shadow-[0_1.2px_1.2px_rgba(100,100,100,0.8)]`}>
          Explore Birth Data!
        </h1>
        <p className="m-10 text-xl">
          Welcome to BabySearch, your central tool for exploring and searching detailed information about births 👶🏻.
          Our application provides easy access to birth records, allowing you to make quick and precise queries.
        </p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Search and Explore 🔍</AccordionTrigger>
          <AccordionContent>
            Use our search tool to find details about specific births.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Customized Style 🎨</AccordionTrigger>
          <AccordionContent>
            Experience an aesthetically pleasing interface with vibrant primary colors and comfortable font sizes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Accurate Data ✔️</AccordionTrigger>
          <AccordionContent>
            Trust the accuracy of our birth records, backed by reliable sources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>User-Friendly Interface 🖥️</AccordionTrigger>
          <AccordionContent>
            Navigate seamlessly with our intuitive and user-friendly interface.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="p-10 text-center">
        Dive into the fascinating world of birth data. Your journey begins with <strong>BabySearch</strong>! <br />
        Start by clicking on the <strong>Query Builder</strong> option in the navigation bar.
      </p>
    </div>
  );
}

export default HomePage;