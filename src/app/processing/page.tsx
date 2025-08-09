import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function ProcessingPage() {
  const screen = wireframe.screens.find(s => s.id === 'processing') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'processing' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
