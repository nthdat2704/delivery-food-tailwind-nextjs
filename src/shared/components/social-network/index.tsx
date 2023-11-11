import { socialNetwork } from '@/shared/constants';
import React from 'react';
import Button from '../button';

interface SocialNetworkProps {
    className?: string;
}

const SocialNetwork = ({ className }: SocialNetworkProps) => {
    return (
        <div className={`flex gap-2 items-center ${className}`}>
            {socialNetwork.map((item) => {
                const Icon = item.icon;
                return (
                    <div>
                        <Button roundedFull={true} makeCircle={true} size="small">
                            <Icon />
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default SocialNetwork;
