'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slide.css';
type SliderProps = {
    data?: any[];
    InnerComponent?: any; // this props will render passed component into SwiperSlide component
    spacing?: number;
    className?: string;
};

const Slider = ({ data, InnerComponent, className, spacing = 20 }: SliderProps) => {
    const classes = classNames('mySwiper', className);
    return (
        <Swiper spaceBetween={spacing} pagination={true} modules={[Pagination]} className={classes}>
            {data?.map((item) => {
                const Component = { ...InnerComponent, props: { ...item } };
                return <SwiperSlide>{Component}</SwiperSlide>;
            })}
        </Swiper>
    );
};

export default Slider;
