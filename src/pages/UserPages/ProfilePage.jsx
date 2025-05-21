import React, { useState } from "react";
import UserSidebar from "./UserSidebar";

const ProfilePage = () => {
  // Load stored profile data
  const [profile, setProfile] = useState(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    return (
      savedProfile || {
        name: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        role: "",
        linkedin: "",
        github: "",
        profilePic: "",
      }
    );
  });

  const [imagePreview, setImagePreview] = useState(profile.profilePic);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfile({ ...profile, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile updated successfully!");
    window.location.reload(); // 🔄 Reload page after saving
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">👤 Profile</h2>

          {profile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl text-white">
                    {profile.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                  <p className="text-sm text-white/60">Name</p>
                  <p className="font-semibold text-white">{profile.name}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-semibold text-white">{profile.email}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                  <p className="text-sm text-white/60">Role</p>
                  <p className="font-semibold capitalize text-white">{profile.role}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                  <p className="text-sm text-white/60">Department</p>
                  <p className="font-semibold text-white">{profile.department}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white/80 text-center">Loading profile...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
