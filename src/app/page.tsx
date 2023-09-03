import Image from 'next/image';
import { getAllUser } from '../../lib/getAllUser';

export default  async function Home() {
 const data:user[]=await getAllUser();
 console.log(data);
  return (
    <>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold   bg-blue-200 item-center justify-center  item-center text-ceenter tracking-tight transition-colors first:mt-5">
       HELLO FETCH
      </h2>    
      {data?.map((item) => (
        <div className="bg-red-300 m-5  " key={item.id}>
          <h3>Name:{item.name}</h3> 
          <h3>ID:{item.id}</h3>
          <h3>Email:{item.email}</h3>
          <h3>Phone number:{item.phone}</h3>
          <h3>Website: {item.website}</h3>
          <h3>User Name:{item.username}</h3>
        </div>
      ))}
    </>
  );
};


