import { StarIcon } from '@/shared/icons';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Chip from '../chip/chip';
interface CardProps {
    media?: string | StaticImageData;
    image?: string | StaticImageData;
    title?: string;
    type?: string;
    time?: string;
    score?: string;
    price?: string;
    address?: string;
    horizontal?: boolean;
    className?: string;
}

const Card = ({ media, image, title, type, score, time, price, horizontal = false, address, className }: CardProps) => {
    const classes = classNames(
        'bg-gray rounded-md w-full overflow-hidden',
        {
            'flex ': horizontal,
        },
        className,
    );
    return (
        <div className={classes}>
            <div className="relative flex-1">
                <Image
                    src={media || image || ''}
                    width={270}
                    height={208}
                    alt="image"
                    className={classNames('rounded-t-md object-contain', { 'w-full': horizontal })}
                />
                <div className="absolute top-0 left-0 pt-4 pl-4">
                    <Chip color="secondary" startContent={<StarIcon />}>
                        {score}
                    </Chip>
                </div>
            </div>
            <div className="py-6 px-6 flex-1">
                {horizontal && <div className="text-lg font-dm text-black-light mb-[15px]">{type}</div>}
                <div className="text-xl text-black-light font-bold font-work truncate">{title}</div>
                <div className="text-textbase text-black-light/50 font-dm mb-4">{address}</div>
                {horizontal ? (
                    <div className="flex justify-between items-center">
                        <div className="text-base font-dm text-black-light">{time}</div>
                        <div className="text-base font-dm text-black-light/50">{price}</div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                        <div className="text-base font-dm text-black-light">{time}</div>
                        <div className="text-base font-dm text-black-light/50">{type}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
