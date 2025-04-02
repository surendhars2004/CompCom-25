import React from 'react'
/* import '../Styles/events.css' */
import '../Styles/register.css'
import RegisterCard from '../Components/RegisterCard'

function Register() {
  let colors = [
    { color1: "#af40ff", color2: "#5b42f3", color3: "#00ddeb" },  // Preferred purple
    { color1: "#00ff80", color2: "#009933", color3: "#00cc44" },  // Preferred green
    { color1: "#ff9900", color2: "#ff6600", color3: "#ffcc00" },  // Preferred orange
    { color1: "#992255", color2: "#62073D", color3: "#B3396D" },  // Preferred red-purple
    { color1: "#1e90ff", color2: "#0077cc", color3: "#4682b4" },  // Blue shades
    { color1: "#ff69b4", color2: "#db7093", color3: "#ffb6c1" },  // Pink shades
    { color1: "#ffff00", color2: "#ffd700", color3: "#ffe4b5" },  // Yellow shades
    { color1: "#008080", color2: "#008b8b", color3: "#20b2aa" },  // Teal shades
    { color1: "#a52a2a", color2: "#8b4513", color3: "#d2691e" },  // Brown shades
    { color1: "#808080", color2: "#a9a9a9", color3: "#d3d3d3" },  // Gray shades
    { color1: "#add8e6", color2: "#87ceeb", color3: "#b0e0e6" },  // Light blue shades
    { color1: "#90ee90", color2: "#98fb98", color3: "#e0eee0" },  // Light green shades
    { color1: "#ffe4e1", color2: "#ffc0cb", color3: "#fff0f5" },  // Light pink shades
    { color1: "#00008b", color2: "#000080", color3: "#191970" },  // Dark blue shades
    { color1: "#006400", color2: "#228b22", color3: "#2e8b57" },  // Dark green shades
    { color1: "#4b0082", color2: "#800080", color3: "#9370db" }   // Dark purple shades
  ];
  
  const pricingPlans = [
    {
      id: 1,
      planType: "Basic Plan",
      members: 1,
      content: "A single person can join all tech and non-tech events ",
      price: "249/-",
      link: "https://forms.gle/KKNxq3SiMZjs3dRf8",
      color: colors[0],
    },
    {
      id: 2,
      planType: "Basic Plan",
      members: 1,
      content: "A single person can attend 1 workshop ",
      price: "149/-",
      link: "https://forms.gle/GqT8LErbfBC7BFTM8",
      color: colors[3],
    },
    {
      id: 3,
      planType: "Pro Plan",
      members: 1,
      content: "A single person can join all tech and non-tech events + 1 workshop.",
      price: "399/-",
      link: "https://forms.gle/wfqZW3DhZk9PCZxU7",
      color: colors[1],
    },
    {
      id: 4,
      planType: "Expert Plan",
      members: 3,
      content: "3 members can join all tech & non-tech events + 1 workshop.",
      price: "999/-",
      link: "https://forms.gle/sch1YPuTQR462HEW8",
      color: colors[4],
    },
    {
      id: 5,
      planType: "Elite Plan",
      members: "4+1",
      content: "4+1 members can join all tech & non-tech events at 4 members' cost.",
      price: "999/-",
      link: "https://forms.gle/gdnfz5KzPS4Peowa8",
      color: colors[2],
    },
  ];

  return (
    <div className='register-container'>
      <div className="event-head-text">Book Your Slot Now!</div>
      <p className='description'>We've got you covered! We provide comfortable and secure accommodation for participants at our college hostels. Separate hostels are available for boys and girls with amenities to ensure your stay is enjoyable and hassle-free. We also offer discounts for bulk bookings</p>
      <div className="register-card-container">
        {
          pricingPlans.map(plan => (
            <RegisterCard  key={plan.id} plan={plan}/>
          ))
        }
        
      </div>
      <p className='description' style={{ marginTop: '20px' }}>Select the right plan and complete the form. Offline registration is available for Tech and Non-Tech events at ₹299, Workshops at ₹200, and both Tech/Non-Tech events and Workshops at ₹449. For exclusive offers and bulk participation discounts, contact us.</p>

    </div>
  )
}

export default Register
