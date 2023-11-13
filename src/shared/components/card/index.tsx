import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Chip from '../chip/chip';
import { StarIcon } from '@/shared/icons';
interface CardProps {
    media?: string | StaticImageData;
    image?: string | StaticImageData;
    title?: string;
    desc?: string;
    time?: string;
    score?: string;
    horizontal?: boolean;
    className?: string;
}

const Card = ({ media, image, title, desc, score, time, horizontal = false, className }: CardProps) => {
    const classes = classNames(
        'bg-gray rounded-md w-full overflow-hidden',
        {
            'flex ': horizontal,
        },
        className,
    );
    return (
        <div className={classes}>
            <div className="relative">
                <Image
                    src={media || image || ''}
                    width={270}
                    height={208}
                    alt="image"
                    className="rounded-t-md object-contain"
                />
                <div className="absolute top-0 left-0 pt-4 pl-4">
                    <Chip color="secondary" startContent={<StarIcon />}>
                        {score}
                    </Chip>
                </div>
            </div>
            <div className="py-6 px-6">
                <div className="text-xl text-black-light font-bold font-work truncate">{title}</div>
                <div className="flex justify-between items-center">
                    <div className="text-base font-dm text-black-light">{time}</div>
                    <div className="text-base font-dm text-black-light/50">{desc}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
