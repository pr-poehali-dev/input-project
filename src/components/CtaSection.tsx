import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Сделайте экономику понятной</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Решения Центрального банка определяют уровень цен, доступность кредитов и условия ведения бизнеса. Пора разобраться в этом — без жаргона и сложных формул.
      </p>
      <a href="#about">
        <Button size="lg" className="px-8">Начать изучение</Button>
      </a>
    </section>
  )
}