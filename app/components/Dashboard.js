'use client'
import React, { useState } from 'react';
import {
  User,
  Paperclip,
  Upload,
  FileText,
  X,
  Check,
  Heart,
  Activity,
  Weight,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react';

export default function MedicalDashboard() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    bloodType: '',
    weight: '',
    conditions: '',
    file: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      bloodType: '',
      weight: '',
      conditions: '',
      file: null
    });
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleFileRemove = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
    const fileInput = document.getElementById('file');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="p-6 bg-white shadow-xl rounded-xl">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 mr-2 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-800">Patient Registration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="p-4 rounded-lg bg-blue-50">
            <h3 className="flex items-center mb-4 text-lg font-semibold text-blue-800">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="age">
                  Age
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Age</option>
                  {[...Array(100)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </div>
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone
                  </div>
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Medical Information Section */}
          <div className="p-4 rounded-lg bg-green-50">
            <h3 className="flex items-center mb-4 text-lg font-semibold text-green-800">
              <Activity className="w-5 h-5 mr-2" />
              Medical Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="bloodType">
                  Blood Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  id="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="weight">
                  <div className="flex items-center">
                    <Weight className="w-4 h-4 mr-2" />
                    Weight (kg)
                  </div>
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="conditions">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Existing Medical Conditions
                  </div>
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  id="conditions"
                  rows="3"
                  placeholder="Diabetes, Hypertension, etc."
                  value={formData.conditions}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Medical Records Upload Section */}
          <div className="p-4 rounded-lg bg-purple-50">
            <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-800">
              <Paperclip className="w-5 h-5 mr-2" />
              Medical Records
            </h3>
            <div className="w-full">
              {!formData.file ? (
                <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 hover:bg-purple-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-purple-500" />
                    <p className="mb-2 text-sm text-purple-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-purple-500">PDF, PNG, JPG or GIF (MAX. 10MB)</p>
                  </div>
                  <input id="file" type="file" className="hidden" onChange={handleFileChange} />
                </label>
              ) : (
                <div className="w-full p-4 border-2 border-purple-300 rounded-lg bg-purple-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-8 h-8 text-purple-500" />
                      <div>
                        <p className="text-sm font-medium text-purple-600">{formData.file.name}</p>
                        <p className="text-xs text-purple-500">
                          {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleFileRemove}
                      className="p-1 text-gray-500 rounded-full hover:bg-purple-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Submit Registration
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}