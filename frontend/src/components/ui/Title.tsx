function Title({ children, size = "xl" }: { children: React.ReactNode, size?: string }) {
  return (
    <h1 className={`mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white my-10 drop-shadow-[0_1.2px_1.2px_rgba(100,100,100,0.8)]`}>
      {children}
    </h1>
  );
}

export default Title;
