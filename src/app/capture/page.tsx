import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function CapturePage() {
  const screen = wireframe.screens.find(s => s.id === 'capture') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'capture' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
