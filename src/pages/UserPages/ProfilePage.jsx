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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center">👤 Profile</h2>

          {profile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-blue-600">
                    {profile.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">{profile.name}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">{profile.email}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-semibold capitalize">{profile.role}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-semibold">{profile.department}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Loading profile...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
