import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function AuthPage() {
  const screen = wireframe.screens.find(s => s.id === 'auth') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'auth' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
