export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'doctor' | 'nurse' | 'receptionist'
  createdAt: string
  isActive: boolean
}

export interface Patient {
  id: string
  name: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  emergencyContact: string
  insuranceId?: string
  createdAt: string
}

export interface Order {
  id: string
  patientId: string
  patientName: string
  doctorId: string
  doctorName: string
  type: 'lab_test' | 'prescription' | 'imaging' | 'procedure'
  description: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  createdAt: string
  completedAt?: string
}

export interface Doctor {
  id: string
  name: string
  email: string
  phone: string
  specialty: string
  licenseNumber: string
  department: string
  experience: number
  isAvailable: boolean
  consultationFee: number
}

export interface Pharmacy {
  id: string
  name: string
  location: string
  address: string
  phone: string
  email: string
  licenseNumber: string
  operatingHours: string
  isActive: boolean
}

export interface Pharmacist {
  id: string
  name: string
  email: string
  phone: string
  licenseNumber: string
  pharmacyId: string
  pharmacyName: string
  experience: number
  specialization?: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  doctorId: string
  doctorName: string
  date: string
  time: string
  duration: number
  type: 'consultation' | 'follow_up' | 'emergency' | 'procedure'
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'
  notes?: string
  createdAt: string
}

export interface MedicalRecord {
  id: string
  patientId: string
  patientName: string
  doctorId: string
  doctorName: string
  recordType: 'diagnosis' | 'test_result' | 'prescription' | 'procedure' | 'note'
  title: string
  description: string
  findings?: string
  recommendations?: string
  attachments?: string[]
  createdAt: string
  isConfidential: boolean
}

export interface EntityStats {
  totalUsers: number
  activeUsers: number
  totalPatients: number
  newPatientsToday: number
  totalDoctors: number
  availableDoctors: number
  totalOrders: number
  pendingOrders: number
  totalAppointments: number
  todayAppointments: number
  totalPharmacies: number
  activePharmacies: number
  totalPharmacists: number
  totalMedicalRecords: number
}