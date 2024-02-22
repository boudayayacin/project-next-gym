'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex) => {
setIndex(selectedIndex);
};
return (
<Carousel activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>

<img src="https://www.desktopbackground.org/download/1600x900/2015/05/21/951510_one-piece-wallpapers_1600x1045_h.jpg"  width={1550} height={120}/>

</Carousel.Item>
<Carousel.Item>

<img src="https://cdn.atomix.vg/wp-content/uploads/2020/10/one-piece-169.jpg" width={1550} height={120} />

</Carousel.Item>
<Carousel.Item>

<img src="https://e0.pxfuel.com/wallpapers/789/642/desktop-wallpaper-one-piece-chapter-1045-raw-scan-spoilers-and-leaked-luffy-looks-like-a-god-with-gear-fifth-luffy-joyboy.jpg" width={1550} height={120} />

</Carousel.Item>
<Carousel.Item>

<img src="https://1.bp.blogspot.com/-j_fP_4Kqv7Q/VN8nzLgfb8I/AAAAAAAAByc/qFQfmAyH60s/s1600/00.jpg" width={1550} height={120}/>

</Carousel.Item>
</Carousel>
);
}
export default ControlledCarousel;