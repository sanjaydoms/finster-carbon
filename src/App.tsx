import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Hero } from './components/sections/Hero';
import { CoreIdea } from './components/sections/CoreIdea';
import { RecoveredCarbonBlack } from './components/sections/RecoveredCarbonBlack';
import { RcbPerformance } from './components/sections/RcbPerformance';
import { TyrePyrolysisOil } from './components/sections/TyrePyrolysisOil';
import { OilProcess } from './components/sections/OilProcess';
import { CircularSystem } from './components/sections/CircularSystem';
import { Applications } from './components/sections/Applications';
import { Factory } from './components/sections/Factory';
import { Technology } from './components/sections/Technology';
import { Impact } from './components/sections/Impact';
import { Sustainability } from './components/sections/Sustainability';
import { FinsterStory } from './components/sections/FinsterStory';
import { FinalHero } from './components/sections/FinalHero';

export function App() {
  return (
    <div className="w-full bg-ground font-sans text-paper">
      <SiteHeader />
      <main>
        <Hero />
        <CoreIdea />
        <RecoveredCarbonBlack />
        <RcbPerformance />
        <TyrePyrolysisOil />
        <OilProcess />
        <CircularSystem />
        <Applications />
        <Factory />
        <Technology />
        <Impact />
        <Sustainability />
        <FinsterStory />
        <FinalHero />
      </main>
      <SiteFooter />
    </div>);

}