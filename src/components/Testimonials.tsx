
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useState } from 'react';

// const testimonials = [
//   { rating: 4, text: 'Text', name: 'Anik Jain', role: 'Designer' },
//   { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
//   { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
//   { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
//   { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
//   { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
//   { rating: 5, text: 'Text', name: 'Rohan', role: 'Engineer' },
//   { rating: 5, text: 'Text', name: 'Sanya', role: 'Developer' },
//   { rating: 5, text: 'Text', name: 'Mohan', role: 'Manager' },
//   { rating: 4, text: 'Text', name: 'Kiran', role: 'Analyst' },
//   { rating: 4, text: 'Text', name: 'Ravi', role: 'Consultant' },
//   { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
//    { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
//     { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
//      { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' }
// ];

// const Testimonials = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 6;

//   const next = () => {
//     if (startIndex + itemsPerPage < testimonials.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const prev = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
    
//     <div className="p-6 sm:px-28 bg-[#ffffff]">
//       <h2 className=" sm:text-6xl  mb-6">Clients are Pitching about us.</h2>
//       <div className="flex  gap-4 mb-4">
//         <button 
//           onClick={prev} 
//           disabled={startIndex === 0} 
//           className={`p-2 rounded-full border ${startIndex === 0 ? 'bg-gray-300 text-white' : 'bg-black text-white'}`}
//         >
//           <FaArrowLeft className='sm:w-16 sm:h-16' />
//         </button>
//         <button
//           onClick={next}
//           disabled={startIndex + itemsPerPage >= testimonials.length}
//           className={`p-2 rounded-full ${startIndex + itemsPerPage >= testimonials.length ? 'bg-gray-300 text-white' : 'bg-black text-white'}`}
//         >
//           <FaArrowRight className='sm:w-16 sm:h-16' />
//         </button>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {testimonials.slice(startIndex, startIndex + itemsPerPage).map((testimonial, index) => (
//           <div key={index} className="p-4 border rounded-lg shadow-sm bg-[#ffffff]">
//             <div className="text-blue-600 mb-2">
//               {'★'.repeat(testimonial.rating)}
//               {'☆'.repeat(5 - testimonial.rating)}
//             </div>
//             <p className="text-gray-600 mb-4">{testimonial.text}</p>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-[#ffffff]"></div>
//               <div>
//                 <p className="font-bold">{testimonial.name}</p>
//                 <p className="text-gray-500 text-sm">{testimonial.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  { rating: 4, text: 'Text', name: 'Anik Jain', role: 'Designer' },
  { rating: 5, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
  { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
  { rating: 3, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
  { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
  { rating: 4, text: 'Text', name: 'Pragya', role: 'Mobikwik' },
  { rating: 5, text: 'Text', name: 'Rohan', role: 'Engineer' },
  { rating: 5, text: 'Text', name: 'Sanya', role: 'Developer' },
  { rating: 5, text: 'Text', name: 'Mohan', role: 'Manager' },
  { rating: 4, text: 'Text', name: 'Kiran', role: 'Analyst' },
  { rating: 4, text: 'Text', name: 'Ravi', role: 'Consultant' },
  { rating: 5, text: 'Text', name: 'Rahul', role: 'Designer' },
   { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
    { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
     { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' },
     { rating: 3, text: 'Text', name: 'Rahul', role: 'Designer' },
     { rating: 5, text: 'Text', name: 'Rahul', role: 'Designer' },
      { rating: 4, text: 'Text', name: 'Rahul', role: 'Designer' }
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const next = () => {
    if (startIndex + itemsPerPage < testimonials.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    
    <div className="p-6 sm:px-28 bg-gray-50 ">
      <h2 className=" sm:text-6xl font-Arimo font-normal  mb-6">Clients are Pitching about us.</h2>
      <div className="flex  gap-4 mb-4">
        <button 
          onClick={prev} 
          disabled={startIndex === 0} 
          className={`p-1 rounded-full border-4 ${startIndex === 0 ? 'text-gray-300 bg-text-white' : 'bg-black text-white'}`}
        >
          <FaArrowLeft className='sm:w-16  sm:h-16' />
        </button>
        <button
          onClick={next}
          disabled={startIndex + itemsPerPage >= testimonials.length}
          className={`p-1 border-4 border-gray-300  rounded-full ${startIndex + itemsPerPage >= testimonials.length ? 'text-gray-300 bg-text-white' : 'bg-black text-white'}`}
        >
          <FaArrowRight className='sm:w-16 sm:h-16' />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {testimonials.slice(startIndex, startIndex + itemsPerPage).map((testimonial, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-[#ffffff]">
            <div className="text-blue-600 mb-2">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff]"></div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;