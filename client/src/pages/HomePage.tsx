import ServiceCarousel from "@/components/ServiceCarousel";
import BusinessHours from "@/components/BusinessHours";
import { serviceCards } from "@shared/data";
import { Check, Laptop, Smartphone, Film } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Carousel Section */}
      <ServiceCarousel />
      
      {/* Services Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                {service.icon === "laptop" && <Laptop className="text-white text-xl" />}
                {service.icon === "smartphone" && <Smartphone className="text-white text-xl" />}
                {service.icon === "film" && <Film className="text-white text-xl" />}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <ul className="space-y-2 text-sm text-neutral-dark">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-500 h-4 w-4 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Map and Hours Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Nous trouver</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-8 rounded-lg overflow-hidden shadow-md" style={{ minHeight: '500px' }}>
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d656.0901052553147!2d2.1034304!3d48.8792198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6130f4bbd43b5%3A0xb3638029553b81a!2sAPHI%20D%C3%A9pannage%20Informatique!5e0!3m2!1sfr!2sfr!4v1682587547745!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - APHI Dépannage Informatique"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="lg:col-span-4">
              <BusinessHours />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
