import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { businessHours } from "@shared/data";

const BusinessHours = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Clock className="text-primary mr-2" />
        Horaires d'ouverture
      </h3>
      
      <ul className="space-y-3 mb-8">
        {businessHours.map((day, index) => (
          <li key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="font-medium">{day.day}</span>
            <span className={day.closed ? "text-red-500" : ""}>{day.hours}</span>
          </li>
        ))}
      </ul>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <MapPin className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Adresse</h4>
            <p className="text-sm text-neutral-dark">Centre Commercial des Vignes Benettes, 78230 Le Pecq</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Téléphone</h4>
            <p className="text-sm text-neutral-dark">01 23 45 67 89</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-sm text-neutral-dark">contact@aphi-informatique.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
