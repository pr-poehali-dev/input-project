import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Разберитесь в финансах вместе с нами</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Присоединяйтесь к тысячам читателей, которые уже понимают, как Центральный банк влияет на их жизнь, сбережения и кошелёк.
      </p>
      <Button size="lg" className="px-8">
        Начать изучение
      </Button>
    </section>
  )
}