import Screen from '@/components/Screen';
import wireframe from '@/data/wireframe.json';
import { Screen as ScreenType } from '@/types';

export default function UploadPage() {
  const screen = wireframe.screens.find(s => s.id === 'upload') as ScreenType | undefined;

  if (!screen) {
    return <div>Screen 'upload' not found in wireframe.json</div>;
  }

  return <Screen screen={screen} />;
}
