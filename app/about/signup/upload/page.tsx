"use client";
 
import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
 
export default async function Home() {
const Router = useRouter();

const res = await fetch('/api/uploadthing', {
});

if(res.ok) {
  Router.push('/about/prepayment')
} else {
  console.error('Registration Error')
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        
      />
    </main>
  );
}