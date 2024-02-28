import Lottie from 'react-lottie';
import animationData from '../../assets/others/Loader.json';

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

function Loader() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Lottie options={lottieOptions} height={300} width={300} />
        </div>
    )
}

export default Loader;