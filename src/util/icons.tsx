import { Ankr, Archive, ArrowRight2, Award, Call, Clock, Facebook, Google, HambergerMenu, Health, Heart, Instagram, Like1, Location, User } from "iconsax-react";

const webIcons = {
    email: <Archive size="16" className="hover:text-secondary-100 cursor-pointer" color="#ffffff"/>,
    mail: <Archive size="16" variant="Bold"  className="hover:text-secondary-100 cursor-pointer"  color="#fff"/>,
    phone: <Call size="16" color="#000000"/>,
    mobile: <Call variant="Bold" size="17"  className="hover:text-secondary-100 cursor-pointer"  color="#fff"/>,
    timer: <Clock size="17" color="#ffffff" />,
    location: <Location size="17" color="#ffffff"  variant="Bold"/>,
    user: <User size="44" color="#ffffff" variant="Bold"/>,
    heart: <Heart size="44" color="#ffffff" variant="Bold"/>,
    like: <Like1 size="44" color="#ffffff" variant="Bold"/>,
    facebook: <Facebook variant="Bold" size="17" color="#fff" />,
    instagram: <Instagram variant="Bold" size="17" color="#fff" />,
    gmail: <Google variant="Bold" size="17" color="#fff"/>,
    menuIcon: <HambergerMenu size="35" color="#555555"/>,
    rightArrow: <ArrowRight2 size="13"  color="#555555"/>,
    venue: <Location size="17" color="#555555"  variant="Bold"/>,
    ancr: <Ankr size="32" variant="Bold" color="#b4b4b5"/>,
    award: <Award size="32" color="#b4b4b5" variant="Bold"/>,
    care: <Health size="32" color="#b4b4b5" variant="Bold"/>

        
}

export default webIcons