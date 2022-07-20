import imgLinks from "../../assets/imgLinks"
import './index.css';

const Gallery = () => (
        <div className="Gallery">
            {imgLinks.map((img) => (<img src={img.url} key={img.id} alt="img"/>))}
        </div>
)

export default Gallery