import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function NewProjectPage() {
  const screen = wireframe.screens.find(s => s.id === 'new_project') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'new_project' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
