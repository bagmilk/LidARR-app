import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function ExportPage() {
  const screen = wireframe.screens.find(s => s.id === 'export') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'export' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
