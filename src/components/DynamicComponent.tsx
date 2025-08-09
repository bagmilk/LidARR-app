import { UIComponent } from '@/types';
import Link from 'next/link';

interface DynamicComponentProps {
  component: UIComponent;
}

const DynamicComponent = ({ component }: DynamicComponentProps) => {
  const { type, id, text, label, action } = component;

  const content = (
    <div className="border-2 border-dashed border-gray-400 p-4 h-full flex flex-col justify-center items-center bg-gray-800 text-white rounded-md">
      <p className="text-xs text-gray-400">{type}</p>
      <p className="font-bold text-sm">{text || label || id}</p>
    </div>
  );

  if (action) {
    return <Link href={action}>{content}</Link>;
  }

  return content;
};

export default DynamicComponent;
