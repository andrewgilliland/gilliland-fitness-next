import { supabase } from "../client";

export default function ProgramsPage() {

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="m-8 relative space-y-4">

        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"> 
          <div className="flex-1">
           <div className="h-4 w-48 bg-gray-300 rounded">
           </div>
          </div>
          <div className="w-24 h-6 rounded-lg bg-purple-300">
          </div>
        </div>
        
        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"> 
          <div className="flex-1">
           <div className="h-4 w-64 bg-gray-300 rounded">
           </div>
          </div>
          <div className="w-20 h-6 rounded-lg bg-yellow-300">
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"> 
          <div className="flex-1">
           <div className="h-4 w-44 bg-gray-300 rounded">
           </div>
          </div>
          <div className="w-28 h-6 rounded-lg bg-pink-300">
          </div>
        </div>
        
        

      </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   // check to see if a user is set
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   // if no user is set, redirect to the sign-in page
//   if (!user) {
//     return { props: {}, redirect: { destination: "/sign-in" } };
//   }

//   // if a user is set, pass it to the page via props
//   return { props: { user } };
// }
