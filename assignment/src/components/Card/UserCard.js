import React ,{ useState } from 'react';
import Modal from './Modal';

export default function UserCard({ firstName,lastName, location, phone, imageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

    return (
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <img src={imageUrl} alt={firstName} className="h-16 w-16 rounded-full mb-4" />
        <div className="flex gap-1">
        <h2 className="text-xl font-bold">{firstName}</h2>
        <h2 className="text-xl font-bold">{lastName}</h2>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" onClick={openModal} >
          Fetch Details
        </button>

        <Modal show={showModal} handleClose={closeModal}>
           <div className='flex text-xl font-bold'>Fetch Details</div>
             <p className=' flex text-sm text-gray-500'> Here are the details of employee</p>
           <div className="flex text-sm gap-1">
             <h2 className="">Name: {firstName}</h2>
             <h2 className=" ">{lastName}</h2>
           </div>
           <p className="flex text-sm">Locaction: {location}</p>
           <p className="flex text-sm">Contact No.: {phone}</p>
           <div className='flex text-sm'> Profile Image:</div>
           <img src={imageUrl} alt={firstName} className="mb-4 lg:w-32" />
           
           
      </Modal>

      </div>
    );
  }