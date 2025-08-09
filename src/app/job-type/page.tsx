import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function JobTypePage() {
  const screen = wireframe.screens.find(s => s.id === 'job_type') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'job_type' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
