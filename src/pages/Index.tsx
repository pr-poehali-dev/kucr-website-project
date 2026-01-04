import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Mountain" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-accent">KUCR</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О стране</a>
            <a href="#economy" className="text-sm font-medium hover:text-primary transition-colors">Экономика</a>
            <a href="#tourism" className="text-sm font-medium hover:text-primary transition-colors">Туризм</a>
            <a href="#culture" className="text-sm font-medium hover:text-primary transition-colors">Культура</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Globe" size={16} className="mr-2" />
            EN
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/b2c19309-5f67-43a2-a21f-ff618191110c/files/c9c4e7d0-12d3-4352-8089-bc15125aec2d.jpg" 
            alt="Alpine landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6">
              Добро пожаловать в KUCR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Альпийская торговая республика в сердце Европы
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Info" size={20} />
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Plane" size={20} />
                Визовая информация
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="MapPin" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Расположение</h3>
                <p className="text-muted-foreground">Центральная Европа, альпийский регион</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="Users" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Население</h3>
                <p className="text-muted-foreground">2.8 млн человек</p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="TrendingUp" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Экономика</h3>
                <p className="text-muted-foreground">Торговый и финансовый центр</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О стране</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Mountain" className="text-primary" size={28} />
                  География и климат
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  KUCR располагается в живописном альпийском регионе, на высоте от 600 до 3200 метров над уровнем моря. 
                  Климат горный континентальный с мягким летом и снежной зимой. Более 60% территории покрыто лесами, 
                  25% занимают альпийские луга и горные вершины.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Flag" className="text-primary" size={28} />
                  Государственное устройство
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Республика с парламентской формой правления. Президент избирается на 5 лет, 
                  парламент состоит из 120 депутатов. KUCR является членом ООН, ВТО и имеет статус 
                  наблюдателя в Европейском союзе.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2c19309-5f67-43a2-a21f-ff618191110c/files/f74becfa-5f81-4272-92a4-5f4caa868733.jpg" 
                alt="KUCR city" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="economy" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Экономика</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Store" className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold mb-3">Торговые преимущества</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Беспошлинная торговая зона для партнёров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Упрощённая регистрация бизнеса за 24 часа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Низкие налоговые ставки для корпораций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Стратегическое расположение в Европе</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Icon name="Building2" className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold mb-3">Ключевые отрасли</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Финансовые услуги</span>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Туризм</span>
                      <span className="text-sm text-muted-foreground">28%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Производство</span>
                      <span className="text-sm text-muted-foreground">22%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '22%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Технологии</span>
                      <span className="text-sm text-muted-foreground">15%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center bg-primary/10 rounded-lg p-8">
            <Icon name="Trophy" className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-2">ВВП на душу населения</h3>
            <p className="text-4xl font-bold text-primary mb-2">$68,400</p>
            <p className="text-muted-foreground">14-е место в мире</p>
          </div>
        </div>
      </section>

      <section id="tourism" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Туризм</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="Snowflake" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Горнолыжные курорты</h3>
                <p className="text-muted-foreground">
                  15 современных курортов с 340 км трасс для всех уровней подготовки
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="TreePine" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Национальные парки</h3>
                <p className="text-muted-foreground">
                  3 национальных парка с уникальной альпийской флорой и фауной
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <Icon name="Hotel" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Отели и SPA</h3>
                <p className="text-muted-foreground">
                  Свыше 200 отелей от 3 до 5 звёзд с термальными источниками
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-accent text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Визовая информация</h3>
                  <p className="text-white/90">
                    Граждане 65 стран могут въезжать без визы до 90 дней. 
                    Онлайн-виза оформляется за 3 дня.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подать заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="culture" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Культура</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Icon name="Music" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-semibold mb-3">Традиции</h3>
                  <p className="text-muted-foreground mb-4">
                    KUCR славится своими альпийскими фестивалями, горным фольклором и ремесленными традициями. 
                    Каждый год в июле проходит Международный фестиваль альпийской музыки.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>Фестиваль альпийского сыра в марте</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>День горных вершин в августе</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>Рождественская ярмарка в декабре</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Icon name="Utensils" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-semibold mb-3">Кухня</h3>
                  <p className="text-muted-foreground mb-4">
                    Альпийская кухня KUCR сочетает традиции соседних стран с уникальными местными рецептами. 
                    Основа - горные сыры, дичь, форель из горных рек.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>Фондю из трёх сыров</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>Альпийский штрудель с яблоками</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      <span>Горный травяной чай</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Building" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-3">Посольство в Москве</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>Кутузовский проспект, 17</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>+7 (495) 123-45-67</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Mail" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>moscow@kucr.gov</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Icon name="Globe" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-3">Официальные ресурсы</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Icon name="ExternalLink" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>government.kucr</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="ExternalLink" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>tourism.kucr</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="ExternalLink" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>invest.kucr</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={32} />
              <span className="text-2xl font-bold">KUCR</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">© 2026 Республика KUCR</p>
              <p className="text-white/60 text-sm mt-1">Альпийская торговая республика</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;