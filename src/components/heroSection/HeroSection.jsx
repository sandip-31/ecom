import heroImage from '../../assets/images/hero.png';
const HeroSection = () => {
    return (
        <div>
           <img className=" h-40 lg:h-full" src={heroImage} alt="img" />
        </div>
    );
}

export default HeroSection;