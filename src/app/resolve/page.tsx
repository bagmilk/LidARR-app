import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function ResolvePage() {
  const screen = wireframe.screens.find(s => s.id === 'resolve') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'resolve' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
