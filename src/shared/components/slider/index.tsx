'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import './slide.css';
interface SliderProps extends SwiperOptions {
    data?: any[];
    renderComponent?: any; // this props will render passed component into SwiperSlide component
    spacing?: number;
    slidesPerView?: number;
    className?: string;
}

const Slider = ({ data, renderComponent, className, spacing = 20, slidesPerView = 1, ...passProps }: SliderProps) => {
    const classes = classNames('mySwiper rounded-md', className);
    return (
        <div className="w-full relative">
            <Swiper
                spaceBetween={spacing}
                slidesPerView={slidesPerView}
                pagination={true}
                modules={[Pagination]}
                className={classes}
                {...passProps}
            >
                {data?.map((item, index) => {
                    const Component = { ...renderComponent, props: { ...item } };
                    return <SwiperSlide key={index}>{Component}</SwiperSlide>;
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
