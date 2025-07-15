import { 
  User, 
  Patient, 
  Order, 
  Doctor, 
  Pharmacy, 
  Pharmacist, 
  Appointment, 
  MedicalRecord,
  EntityStats 
} from '../types'

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    role: 'doctor',
    createdAt: '2024-01-15T08:00:00Z',
    isActive: true
  },
  {
    id: 'user-2',
    name: 'Mike Thompson',
    email: 'mike.thompson@hospital.com',
    role: 'admin',
    createdAt: '2024-01-10T09:00:00Z',
    isActive: true
  },
  {
    id: 'user-3',
    name: 'Lisa Chen',
    email: 'lisa.chen@hospital.com',
    role: 'nurse',
    createdAt: '2024-01-20T10:00:00Z',
    isActive: true
  },
  {
    id: 'user-4',
    name: 'Robert Davis',
    email: 'robert.davis@hospital.com',
    role: 'receptionist',
    createdAt: '2024-01-25T11:00:00Z',
    isActive: false
  }
]

// Mock Patients Data
export const mockPatients: Patient[] = [
  {
    id: 'patient-1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1-555-0101',
    dateOfBirth: '1980-05-15',
    address: '123 Main St, City, State 12345',
    emergencyContact: 'Jane Smith - +1-555-0102',
    insuranceId: 'INS-12345',
    createdAt: '2024-02-01T08:00:00Z'
  },
  {
    id: 'patient-2',
    name: 'Emily Johnson',
    email: 'emily.johnson@email.com',
    phone: '+1-555-0201',
    dateOfBirth: '1975-09-22',
    address: '456 Oak Ave, City, State 12345',
    emergencyContact: 'Mark Johnson - +1-555-0202',
    insuranceId: 'INS-23456',
    createdAt: '2024-02-02T09:00:00Z'
  },
  {
    id: 'patient-3',
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '+1-555-0301',
    dateOfBirth: '1990-12-08',
    address: '789 Pine St, City, State 12345',
    emergencyContact: 'Sarah Brown - +1-555-0302',
    createdAt: '2024-02-03T10:00:00Z'
  }
]

// Mock Orders Data
export const mockOrders: Order[] = [
  {
    id: 'order-1',
    patientId: 'patient-1',
    patientName: 'John Smith',
    doctorId: 'doctor-1',
    doctorName: 'Dr. Sarah Johnson',
    type: 'lab_test',
    description: 'Complete Blood Count (CBC)',
    status: 'pending',
    priority: 'medium',
    createdAt: '2024-02-15T08:00:00Z'
  },
  {
    id: 'order-2',
    patientId: 'patient-2',
    patientName: 'Emily Johnson',
    doctorId: 'doctor-2',
    doctorName: 'Dr. James Wilson',
    type: 'prescription',
    description: 'Lisinopril 10mg - 30 tablets',
    status: 'completed',
    priority: 'high',
    createdAt: '2024-02-14T09:00:00Z',
    completedAt: '2024-02-14T15:00:00Z'
  },
  {
    id: 'order-3',
    patientId: 'patient-3',
    patientName: 'Michael Brown',
    doctorId: 'doctor-1',
    doctorName: 'Dr. Sarah Johnson',
    type: 'imaging',
    description: 'Chest X-Ray',
    status: 'in_progress',
    priority: 'urgent',
    createdAt: '2024-02-15T10:00:00Z'
  }
]

// Mock Doctors Data
export const mockDoctors: Doctor[] = [
  {
    id: 'doctor-1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '+1-555-1001',
    specialty: 'Cardiology',
    licenseNumber: 'MD-12345',
    department: 'Cardiology',
    experience: 8,
    isAvailable: true,
    consultationFee: 200
  },
  {
    id: 'doctor-2',
    name: 'Dr. James Wilson',
    email: 'james.wilson@hospital.com',
    phone: '+1-555-1002',
    specialty: 'Internal Medicine',
    licenseNumber: 'MD-23456',
    department: 'Internal Medicine',
    experience: 12,
    isAvailable: true,
    consultationFee: 180
  },
  {
    id: 'doctor-3',
    name: 'Dr. Maria Garcia',
    email: 'maria.garcia@hospital.com',
    phone: '+1-555-1003',
    specialty: 'Pediatrics',
    licenseNumber: 'MD-34567',
    department: 'Pediatrics',
    experience: 6,
    isAvailable: false,
    consultationFee: 160
  }
]

// Mock Pharmacies Data
export const mockPharmacies: Pharmacy[] = [
  {
    id: 'pharmacy-1',
    name: 'Main Hospital Pharmacy',
    location: 'Building A - Ground Floor',
    address: '123 Hospital Dr, Medical Center',
    phone: '+1-555-2001',
    email: 'pharmacy.main@hospital.com',
    licenseNumber: 'PH-12345',
    operatingHours: '24/7',
    isActive: true
  },
  {
    id: 'pharmacy-2',
    name: 'Emergency Pharmacy',
    location: 'Building B - Emergency Wing',
    address: '123 Hospital Dr, Emergency Wing',
    phone: '+1-555-2002',
    email: 'pharmacy.emergency@hospital.com',
    licenseNumber: 'PH-23456',
    operatingHours: '24/7',
    isActive: true
  },
  {
    id: 'pharmacy-3',
    name: 'Outpatient Pharmacy',
    location: 'Building C - Outpatient Center',
    address: '456 Medical Blvd, Outpatient Center',
    phone: '+1-555-2003',
    email: 'pharmacy.outpatient@hospital.com',
    licenseNumber: 'PH-34567',
    operatingHours: '8:00 AM - 8:00 PM',
    isActive: false
  }
]

// Mock Pharmacists Data
export const mockPharmacists: Pharmacist[] = [
  {
    id: 'pharmacist-1',
    name: 'Dr. Alex Rodriguez',
    email: 'alex.rodriguez@hospital.com',
    phone: '+1-555-3001',
    licenseNumber: 'RPH-12345',
    pharmacyId: 'pharmacy-1',
    pharmacyName: 'Main Hospital Pharmacy',
    experience: 5,
    specialization: 'Clinical Pharmacy'
  },
  {
    id: 'pharmacist-2',
    name: 'Dr. Jennifer Lee',
    email: 'jennifer.lee@hospital.com',
    phone: '+1-555-3002',
    licenseNumber: 'RPH-23456',
    pharmacyId: 'pharmacy-2',
    pharmacyName: 'Emergency Pharmacy',
    experience: 8,
    specialization: 'Emergency Medicine'
  },
  {
    id: 'pharmacist-3',
    name: 'Dr. David Kim',
    email: 'david.kim@hospital.com',
    phone: '+1-555-3003',
    licenseNumber: 'RPH-34567',
    pharmacyId: 'pharmacy-1',
    pharmacyName: 'Main Hospital Pharmacy',
    experience: 3
  }
]

// Mock Appointments Data
export const mockAppointments: Appointment[] = [
  {
    id: 'appointment-1',
    patientId: 'patient-1',
    patientName: 'John Smith',
    doctorId: 'doctor-1',
    doctorName: 'Dr. Sarah Johnson',
    date: '2024-02-20',
    time: '09:00',
    duration: 30,
    type: 'consultation',
    status: 'scheduled',
    notes: 'Regular checkup',
    createdAt: '2024-02-15T08:00:00Z'
  },
  {
    id: 'appointment-2',
    patientId: 'patient-2',
    patientName: 'Emily Johnson',
    doctorId: 'doctor-2',
    doctorName: 'Dr. James Wilson',
    date: '2024-02-20',
    time: '10:30',
    duration: 45,
    type: 'follow_up',
    status: 'confirmed',
    notes: 'Blood pressure follow-up',
    createdAt: '2024-02-14T09:00:00Z'
  },
  {
    id: 'appointment-3',
    patientId: 'patient-3',
    patientName: 'Michael Brown',
    doctorId: 'doctor-3',
    doctorName: 'Dr. Maria Garcia',
    date: '2024-02-19',
    time: '14:00',
    duration: 60,
    type: 'procedure',
    status: 'completed',
    notes: 'Vaccination',
    createdAt: '2024-02-18T10:00:00Z'
  }
]

// Mock Medical Records Data
export const mockMedicalRecords: MedicalRecord[] = [
  {
    id: 'record-1',
    patientId: 'patient-1',
    patientName: 'John Smith',
    doctorId: 'doctor-1',
    doctorName: 'Dr. Sarah Johnson',
    recordType: 'diagnosis',
    title: 'Hypertension Diagnosis',
    description: 'Patient diagnosed with Stage 1 Hypertension',
    findings: 'Blood pressure consistently elevated (150/95 mmHg)',
    recommendations: 'Lifestyle modifications and medication as needed',
    createdAt: '2024-02-15T08:00:00Z',
    isConfidential: false
  },
  {
    id: 'record-2',
    patientId: 'patient-2',
    patientName: 'Emily Johnson',
    doctorId: 'doctor-2',
    doctorName: 'Dr. James Wilson',
    recordType: 'test_result',
    title: 'Complete Blood Count Results',
    description: 'CBC test results within normal range',
    findings: 'All values within normal limits',
    recommendations: 'Continue current treatment plan',
    createdAt: '2024-02-14T09:00:00Z',
    isConfidential: false
  },
  {
    id: 'record-3',
    patientId: 'patient-3',
    patientName: 'Michael Brown',
    doctorId: 'doctor-3',
    doctorName: 'Dr. Maria Garcia',
    recordType: 'prescription',
    title: 'Antibiotic Prescription',
    description: 'Prescribed Amoxicillin for bacterial infection',
    findings: 'Signs of bacterial infection',
    recommendations: 'Complete full course of antibiotics',
    createdAt: '2024-02-18T10:00:00Z',
    isConfidential: true
  }
]

// Mock Stats Data
export const mockStats: EntityStats = {
  totalUsers: 156,
  activeUsers: 142,
  totalPatients: 2847,
  newPatientsToday: 12,
  totalDoctors: 45,
  availableDoctors: 38,
  totalOrders: 1234,
  pendingOrders: 87,
  totalAppointments: 456,
  todayAppointments: 23,
  totalPharmacies: 8,
  activePharmacies: 7,
  totalPharmacists: 24,
  totalMedicalRecords: 8532
}