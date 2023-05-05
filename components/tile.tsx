import clsx from 'clsx';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  background,
  active,
  labels,
  ...props
}: {
  isInteractive?: boolean;
  background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
  active?: boolean;
  labels?: {
    amount: string;
    currencyCode: string;
    isSmall?: boolean;
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx('relative flex h-full w-full items-center justify-center overflow-hidden', {
        'bg-white dark:bg-white': background === 'white',
        'bg-[#ff0080] dark:bg-[#ff0080]': background === 'pink',
        'bg-[#7928ca] dark:bg-[#7928ca]': background === 'purple',
        'bg-gray-900 dark:bg-gray-900': background === 'black',
        'bg-violetDark dark:bg-violetDark': background === 'purple-dark',
        'bg-blue-500 dark:bg-blue-500': background === 'blue',
        'bg-cyan-500 dark:bg-cyan-500': background === 'cyan',
        'bg-gray-100 dark:bg-gray-100': background === 'gray',
        'bg-gray-100 dark:bg-gray-900': !background,
        relative: labels
      })}
    >
      {active !== undefined && active ? (
        <span className="absolute h-full w-full bg-white opacity-25"></span>
      ) : null}
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out hover:scale-105': isInteractive
          })}
          {...props}
          alt={props.title || ''}
        />
      ) : null}
    </div>
  );
}
