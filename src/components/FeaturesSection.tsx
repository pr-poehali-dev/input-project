import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="about" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Основные функции Центрального банка</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          number={1}
          title="Эмиссия и контроль инфляции"
          description="ЦБ выпускает наличные деньги и регулирует уровень инфляции. Его цель — стабильные и умеренные темпы роста цен, которые способствуют развитию экономики."
        />
        <FeatureCard
          number={2}
          title="Надзор за банковской системой"
          description="Центральный банк — «банк для банков». Он устанавливает ключевую ставку, контролирует соблюдение нормативов и защищает интересы вкладчиков."
        />
        <FeatureCard
          number={3}
          title="Управление резервами и валютой"
          description="ЦБ управляет золотовалютными резервами страны и проводит операции на валютном рынке, обеспечивая устойчивость рубля и его покупательную способность."
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