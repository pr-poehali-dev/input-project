import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-neutral-700">
          ЦБ на связи: гид по финансовой стабильности
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Центральный банк —
        <br />
        понятно каждому
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
        Сложные экономические процессы — в доступной и наглядной форме. Узнайте, как решения Центрального банка влияют на цены, кредиты и вашу повседневную жизнь.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          Начать изучение
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Глоссарий
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          О проекте
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Статьи
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          FAQ
        </Button>
      </div>
    </section>
  )
}