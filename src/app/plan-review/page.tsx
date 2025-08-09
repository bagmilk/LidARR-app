import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function PlanReviewPage() {
  const screen = wireframe.screens.find(s => s.id === 'plan_review') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'plan_review' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
