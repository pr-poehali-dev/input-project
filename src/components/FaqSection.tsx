import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Частые вопросы о ЦБ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ на свой вопрос? Напишите нам — разберём вместе.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Что такое ключевая ставка простыми словами?"
              answer="Ключевая ставка — это процент, под который Центральный банк даёт деньги в долг коммерческим банкам. Чем она выше, тем дороже кредиты в магазинах и банках. Повышая ставку, ЦБ замедляет инфляцию, но и тормозит экономику."
            />
            <FaqItem
              question="Зачем вообще нужен Центральный банк?"
              answer="ЦБ — это финансовый регулятор страны. Он следит, чтобы банки не обанкротились, деньги не обесценились слишком быстро, а финансовая система работала стабильно. Без него экономика была бы намного хаотичнее."
            />
            <FaqItem
              question="Чем ЦБ отличается от обычного банка?"
              answer="Центральный банк не работает с обычными гражданами — он работает с государством и коммерческими банками. Он не выдаёт кредиты физлицам и не принимает вклады от населения. Его клиенты — это банки и правительство."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Как ЦБ влияет на курс рубля?"
              answer="ЦБ может покупать или продавать иностранную валюту из резервов, чтобы сгладить резкие колебания курса. Также через ключевую ставку он влияет на привлекательность рубля для инвесторов."
            />
            <FaqItem
              question="Что такое инфляция и как ЦБ с ней борется?"
              answer="Инфляция — это рост цен. ЦБ борется с ней, повышая ключевую ставку: кредиты дорожают, люди меньше тратят, спрос падает — и цены замедляют рост. Целевой уровень инфляции в России — 4% в год."
            />
            <FaqItem
              question="Мои вклады застрахованы?"
              answer="Да! Вклады в российских банках застрахованы через АСВ (Агентство страхования вкладов) на сумму до 1,4 миллиона рублей. ЦБ контролирует эту систему. Если банк лишится лицензии — государство вернёт вам деньги."
            />
            <FaqItem
              question="Почему ЦБ независим от правительства?"
              answer="Независимость ЦБ — это гарантия того, что денежная политика принимается из экономических соображений, а не политических. Если правительство могло бы влиять на ставку, оно бы соблазнилось напечатать больше денег, что ведёт к инфляции."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}