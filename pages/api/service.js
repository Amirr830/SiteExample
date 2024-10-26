export default function handler(req, res) {
    const services = [{
            title: "Web Development",
            description: "We provide high-quality web development services using modern technologies.",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Mobile App Development",
            description: "Our team builds scalable mobile applications for both Android and iOS.",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Digital Marketing",
            description: "Grow your business with our expert digital marketing strategies.",
            image: "https://via.placeholder.com/150"
        }
    ];

    res.status(200).json(services);
}