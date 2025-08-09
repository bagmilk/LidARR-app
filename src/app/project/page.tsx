import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function ProjectPage() {
  const screen = wireframe.screens.find(s => s.id === 'project') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'project' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
