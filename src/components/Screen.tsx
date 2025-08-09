import { Screen as ScreenType, UIComponent } from '@/types';
import DynamicComponent from './DynamicComponent';

interface ScreenProps {
  screen: ScreenType;
}

const Screen = ({ screen }: ScreenProps) => {
  const gridCols = screen.layout?.grid || 12;

  return (
    <div className="container mx-auto p-4 bg-bg-default min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">{screen.title}</h1>
        <p className="text-lg text-ink-500">{screen.purpose}</p>
      </div>
      <div
        className="relative"
        style={{ height: '1000px' }} // Set a fixed height for the container to allow absolute positioning
      >
        {screen.components.map((component) => {
          const gridColumnStart = component.col || 1;
          const gridColumnEnd = `span ${component.span || 1}`;
          const top = component.y ? `${component.y}px` : 'auto';

          return (
            <div
              key={component.id}
              style={{
                position: 'absolute',
                left: `${((gridColumnStart - 1) / gridCols) * 100}%`,
                width: `${((component.span || 1) / gridCols) * 100}%`,
                top: top,
                padding: '0 8px' // Gutter simulation
              }}
            >
              <DynamicComponent component={component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Screen;
