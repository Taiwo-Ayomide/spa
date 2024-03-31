import Image from 'next/image';

export default function HospitalLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <div>
        <Image
          src={'/download (10).jpg'}
          width={'40'}
          height={'40'}
          alt='student_passport'
        />
        <h1 className='font-semibold font-sans text-sm'>SPA STUDENT PORTAL</h1>
      </div>
    </div>
  );
}