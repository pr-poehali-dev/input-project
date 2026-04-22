import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold">ЦБ Просто</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">
              О ЦБ
            </a>
            <a href="#glossary" className="transition-colors hover:text-foreground/80">
              Глоссарий
            </a>
            <a href="#articles" className="transition-colors hover:text-foreground/80">
              Статьи
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground/80">
              FAQ
            </a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <a href="#about">
            <Button variant="outline" className="ml-4">
              Начать изучение
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}