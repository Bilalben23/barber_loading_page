import hairCutTools from "../assets/haircut-tools.svg";
import hairWashingIcon from "../assets/hair-washing.svg";
import hairColorIcon from "../assets/hair-color.svg";
import beard from "../assets/beard.svg";
import shavingBrush from "../assets/shaving-brush.svg";
import trendHairCuts from "../assets/trend-haircuts.webp"
import hairWashing from "../assets/hairWashing.jpg";
import hairColor from "../assets/hairColor.avif";
import facialHairTrim from "../assets/facialHairTrim.jpg";
import latherShave from "../assets/latherShave.jpg"

export const services = [
    {
        id: 1,
        serviceName: "Trend Haircut",
        icon: hairCutTools,
        imageUrl: trendHairCuts,
        title: "Get a Trend Haircut for a Modern Style",
        description: "Stay on-trend with a fresh haircut tailored to suit your personal style. Our stylists ensure every cut is designed to enhance your look.",
        benefits: [
            "Trendy cuts tailored to personal style",
            "Professional, polished finish"
        ]
    },
    {
        id: 2,
        serviceName: "Hair Washing",
        icon: hairWashingIcon,
        imageUrl: hairWashing,
        title: "Ultimate Hair Washing & Scalp Care",
        description: "Experience a refreshing hair wash with premium products to cleanse and revitalize your hair, leaving you feeling relaxed and pampered.",
        benefits: [
            "Deep cleanse for a healthy scalp",
            "Relaxing and revitalizing experience"
        ]
    },
    {
        id: 3,
        serviceName: "Hair Color",
        icon: hairColorIcon,
        imageUrl: hairColor,
        title: "Professional Hair Coloring for a Bold New Look",
        description: "Enhance your look with our expert coloring services, offering everything from subtle changes to bold transformations, tailored to your preference.",
        benefits: [
            "Wide color range with personalized consultation",
            "Expert application for lasting results"
        ]
    },
    {
        id: 4,
        serviceName: "Facial Hair Trim",
        icon: beard,
        imageUrl: facialHairTrim,
        title: "Precise Facial Hair Trim for a Refined Look",
        description: "Achieve a neat and stylish beard or mustache with our expert facial hair trimming, designed to highlight your features.",
        benefits: [
            "Neat, precise trim for a polished look",
            "Tailored to complement your face shape"
        ]
    },
    {
        id: 5,
        serviceName: "Lather Shave",
        icon: shavingBrush,
        imageUrl: latherShave,
        title: "Classic Lather Shave for Ultimate Comfort",
        description: "Enjoy a traditional lather shave that leaves your skin smooth and irritation-free, delivered by skilled barbers with quality products.",
        benefits: [
            "Luxurious, close shave with premium lather",
            "Comfortable and professional experience"
        ]
    }
];
