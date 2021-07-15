import { supabase } from "../client";

export default function ProgramsPage() {

  return (
    <div>
      <h2>Hello from a protected route</h2>
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
