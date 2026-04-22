import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Users, Activity } from "lucide-react"

export function NextGenSection() {
  return (
    <section id="articles" className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4">Инфляция и ключевая ставка</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Инфляция — это изменение общего уровня цен. Ключевая ставка — главный инструмент ЦБ для её контроля. При росте ставки кредиты дорожают, спрос падает и цены замедляют рост. При снижении — наоборот, создаются условия для расширения потребления и инвестиций.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-4 w-4" /> Банки под надзором
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">1 400+</div>
            <div className="flex -space-x-2 mb-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Avatar key={i} className="border-2 border-background w-8 h-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                  <AvatarFallback>Б{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-4 w-4" /> Инфляция по годам
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PipelineItem label="2021" value={82} />
            <PipelineItem label="2022" value={95} />
            <PipelineItem label="2023" value={60} />
            <PipelineItem label="2024" value={40} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LineChart className="h-4 w-4" /> Ключевая ставка
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end gap-1 pb-4">
              {[30, 45, 60, 55, 70, 85, 75, 90, 80, 95, 85, 78, 82, 88, 92, 87, 95, 85, 80, 75].map((h, i) => {
                const color = h >= 70 ? '#22c55e' : '#ef4444'
                return (
                  <div key={i} className="w-full rounded-t" style={{ height: `${h}%`, backgroundColor: color, opacity: 0.85 }} />
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Резервы ЦБ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center text-muted-foreground">
              Золотовалютные резервы — подушка безопасности страны
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Цель по инфляции</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm font-medium text-center">Цель — 4% в год</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface PipelineItemProps {
  label: string
  value: number
}

function PipelineItem({ label, value }: PipelineItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted/30" />
    </div>
  )
}