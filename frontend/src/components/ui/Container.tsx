function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-3/4 p-6 m-8 border-2 border-[#082359] rounded-md">
      {children}
    </div>
  )
}

export default Container;