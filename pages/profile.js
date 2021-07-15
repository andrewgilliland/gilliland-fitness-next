import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useRouter } from "next/router";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      router.push("/sign-in");
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.sighOut();
    router.push("/sign-in");
  }

  if (!profile) return null;
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
