import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PersonalOsSection() {
  return (
    <section id="glossary" className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Как ЦБ передаёт решения
            <br />
            в экономику
          </h2>
          <p className="text-muted-foreground mb-8">
            Воздействие Центрального банка осуществляется через многоступенчатый механизм. Изменение ключевой ставки сначала отражается на межбанковском рынке, затем — на кредитах и вкладах, и в итоге влияет на цены и поведение всей экономики.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Косвенное регулирование</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">ЦБ не управляет ценами напрямую — он меняет условия, в которых принимают решения люди и бизнес</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem title="Денежно-кредитная политика" />
            <FeatureItem title="Банковский надзор" />
            <FeatureItem title="Валютное регулирование" />
            <FeatureItem title="Защита вкладчиков" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Механизм передачи решений ЦБ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono">
              <div className="text-yellow-500 mb-1">ЦБ меняет ключевую ставку</div>
              <div className="text-muted-foreground mb-1">→ Межбанковский рынок реагирует первым</div>
              <div className="text-muted-foreground mb-1">→ Меняются ставки по кредитам и вкладам</div>
              <div className="text-blue-500 mb-1">→ Домохозяйства и бизнес корректируют расходы</div>
              <div className="text-green-500">→ Спрос и инфляция приходят к цели ✓</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck title="Ключевая ставка" />
            <FeatureCheck title="Показатель долговой нагрузки" />
            <FeatureCheck title="Операции на рынке" />
            <FeatureCheck title="Валютные интервенции" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string
}

function FeatureItem({ title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

interface FeatureCheckProps {
  title: string
}

function FeatureCheck({ title }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-2 bg-accent/50 rounded-md p-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}