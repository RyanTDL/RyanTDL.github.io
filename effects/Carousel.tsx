import { Carousel } from "@/node_modules/react-responsive-carousel";
import { items } from "@/public/Projects.json";
import "@/node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "../styles/Responsive.module.css";
export default function ResponsiveCarousel() {
    const { responsive } = items;
    return (
    <div>
        <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        //className={styles.mySwiper}
        >
        {/* {responsive.map((item) => (
            <div key={item.id}>
            <div >
                <img src={item.imageUrl} alt="slides" />
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
            </div>
        ))} */}
        <div>
            <p>Hfedi</p>
        </div>
        <div>
            <p>Hidfsd</p>
        </div>
        <div>
            <p>Hdsfasdfvcfsdavi</p>
        </div>
        </Carousel>
    </div>
    );
}

