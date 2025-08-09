import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function CompliancePage() {
  const screen = wireframe.screens.find(s => s.id === 'compliance') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'compliance' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
