import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Что делает Центральный банк</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          number={1}
          title="Контролирует инфляцию"
          description="ЦБ управляет ключевой ставкой, чтобы цены в магазинах не росли слишком быстро. Это защищает покупательную способность ваших сбережений."
        />
        <FeatureCard
          number={2}
          title="Регулирует банки"
          description="Центральный банк следит за тем, чтобы коммерческие банки работали честно и не рисковали деньгами вкладчиков. Именно он выдаёт и отзывает лицензии."
        />
        <FeatureCard
          number={3}
          title="Защищает финансовую систему"
          description="В кризисных ситуациях ЦБ выступает кредитором последней инстанции — поддерживает банки ликвидностью, чтобы не допустить коллапса системы."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  number: number
  title: string
  description: string
}

function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-accent/50 border-dashed border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium text-sm">
            {number}
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}