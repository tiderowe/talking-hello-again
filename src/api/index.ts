import {
  mockUsers,
  mockPatients,
  mockOrders,
  mockDoctors,
  mockPharmacies,
  mockPharmacists,
  mockAppointments,
  mockMedicalRecords,
  mockStats
} from './mockData'
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

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Users API
export const usersApi = {
  getAll: async (): Promise<User[]> => {
    await delay(500)
    return mockUsers
  },
  getById: async (id: string): Promise<User | null> => {
    await delay(300)
    return mockUsers.find(user => user.id === id) || null
  },
  create: async (user: Omit<User, 'id'>): Promise<User> => {
    await delay(600)
    const newUser = { ...user, id: `user-${Date.now()}` }
    mockUsers.push(newUser)
    return newUser
  },
  update: async (id: string, updates: Partial<User>): Promise<User | null> => {
    await delay(500)
    const index = mockUsers.findIndex(user => user.id === id)
    if (index === -1) return null
    mockUsers[index] = { ...mockUsers[index], ...updates }
    return mockUsers[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockUsers.findIndex(user => user.id === id)
    if (index === -1) return false
    mockUsers.splice(index, 1)
    return true
  }
}

// Patients API
export const patientsApi = {
  getAll: async (): Promise<Patient[]> => {
    await delay(500)
    return mockPatients
  },
  getById: async (id: string): Promise<Patient | null> => {
    await delay(300)
    return mockPatients.find(patient => patient.id === id) || null
  },
  create: async (patient: Omit<Patient, 'id'>): Promise<Patient> => {
    await delay(600)
    const newPatient = { ...patient, id: `patient-${Date.now()}` }
    mockPatients.push(newPatient)
    return newPatient
  },
  update: async (id: string, updates: Partial<Patient>): Promise<Patient | null> => {
    await delay(500)
    const index = mockPatients.findIndex(patient => patient.id === id)
    if (index === -1) return null
    mockPatients[index] = { ...mockPatients[index], ...updates }
    return mockPatients[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockPatients.findIndex(patient => patient.id === id)
    if (index === -1) return false
    mockPatients.splice(index, 1)
    return true
  }
}

// Orders API
export const ordersApi = {
  getAll: async (): Promise<Order[]> => {
    await delay(500)
    return mockOrders
  },
  getById: async (id: string): Promise<Order | null> => {
    await delay(300)
    return mockOrders.find(order => order.id === id) || null
  },
  create: async (order: Omit<Order, 'id'>): Promise<Order> => {
    await delay(600)
    const newOrder = { ...order, id: `order-${Date.now()}` }
    mockOrders.push(newOrder)
    return newOrder
  },
  update: async (id: string, updates: Partial<Order>): Promise<Order | null> => {
    await delay(500)
    const index = mockOrders.findIndex(order => order.id === id)
    if (index === -1) return null
    mockOrders[index] = { ...mockOrders[index], ...updates }
    return mockOrders[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockOrders.findIndex(order => order.id === id)
    if (index === -1) return false
    mockOrders.splice(index, 1)
    return true
  }
}

// Doctors API
export const doctorsApi = {
  getAll: async (): Promise<Doctor[]> => {
    await delay(500)
    return mockDoctors
  },
  getById: async (id: string): Promise<Doctor | null> => {
    await delay(300)
    return mockDoctors.find(doctor => doctor.id === id) || null
  },
  create: async (doctor: Omit<Doctor, 'id'>): Promise<Doctor> => {
    await delay(600)
    const newDoctor = { ...doctor, id: `doctor-${Date.now()}` }
    mockDoctors.push(newDoctor)
    return newDoctor
  },
  update: async (id: string, updates: Partial<Doctor>): Promise<Doctor | null> => {
    await delay(500)
    const index = mockDoctors.findIndex(doctor => doctor.id === id)
    if (index === -1) return null
    mockDoctors[index] = { ...mockDoctors[index], ...updates }
    return mockDoctors[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockDoctors.findIndex(doctor => doctor.id === id)
    if (index === -1) return false
    mockDoctors.splice(index, 1)
    return true
  }
}

// Pharmacies API
export const pharmaciesApi = {
  getAll: async (): Promise<Pharmacy[]> => {
    await delay(500)
    return mockPharmacies
  },
  getById: async (id: string): Promise<Pharmacy | null> => {
    await delay(300)
    return mockPharmacies.find(pharmacy => pharmacy.id === id) || null
  },
  create: async (pharmacy: Omit<Pharmacy, 'id'>): Promise<Pharmacy> => {
    await delay(600)
    const newPharmacy = { ...pharmacy, id: `pharmacy-${Date.now()}` }
    mockPharmacies.push(newPharmacy)
    return newPharmacy
  },
  update: async (id: string, updates: Partial<Pharmacy>): Promise<Pharmacy | null> => {
    await delay(500)
    const index = mockPharmacies.findIndex(pharmacy => pharmacy.id === id)
    if (index === -1) return null
    mockPharmacies[index] = { ...mockPharmacies[index], ...updates }
    return mockPharmacies[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockPharmacies.findIndex(pharmacy => pharmacy.id === id)
    if (index === -1) return false
    mockPharmacies.splice(index, 1)
    return true
  }
}

// Pharmacists API
export const pharmacistsApi = {
  getAll: async (): Promise<Pharmacist[]> => {
    await delay(500)
    return mockPharmacists
  },
  getById: async (id: string): Promise<Pharmacist | null> => {
    await delay(300)
    return mockPharmacists.find(pharmacist => pharmacist.id === id) || null
  },
  create: async (pharmacist: Omit<Pharmacist, 'id'>): Promise<Pharmacist> => {
    await delay(600)
    const newPharmacist = { ...pharmacist, id: `pharmacist-${Date.now()}` }
    mockPharmacists.push(newPharmacist)
    return newPharmacist
  },
  update: async (id: string, updates: Partial<Pharmacist>): Promise<Pharmacist | null> => {
    await delay(500)
    const index = mockPharmacists.findIndex(pharmacist => pharmacist.id === id)
    if (index === -1) return null
    mockPharmacists[index] = { ...mockPharmacists[index], ...updates }
    return mockPharmacists[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockPharmacists.findIndex(pharmacist => pharmacist.id === id)
    if (index === -1) return false
    mockPharmacists.splice(index, 1)
    return true
  }
}

// Appointments API
export const appointmentsApi = {
  getAll: async (): Promise<Appointment[]> => {
    await delay(500)
    return mockAppointments
  },
  getById: async (id: string): Promise<Appointment | null> => {
    await delay(300)
    return mockAppointments.find(appointment => appointment.id === id) || null
  },
  create: async (appointment: Omit<Appointment, 'id'>): Promise<Appointment> => {
    await delay(600)
    const newAppointment = { ...appointment, id: `appointment-${Date.now()}` }
    mockAppointments.push(newAppointment)
    return newAppointment
  },
  update: async (id: string, updates: Partial<Appointment>): Promise<Appointment | null> => {
    await delay(500)
    const index = mockAppointments.findIndex(appointment => appointment.id === id)
    if (index === -1) return null
    mockAppointments[index] = { ...mockAppointments[index], ...updates }
    return mockAppointments[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockAppointments.findIndex(appointment => appointment.id === id)
    if (index === -1) return false
    mockAppointments.splice(index, 1)
    return true
  }
}

// Medical Records API
export const medicalRecordsApi = {
  getAll: async (): Promise<MedicalRecord[]> => {
    await delay(500)
    return mockMedicalRecords
  },
  getById: async (id: string): Promise<MedicalRecord | null> => {
    await delay(300)
    return mockMedicalRecords.find(record => record.id === id) || null
  },
  create: async (record: Omit<MedicalRecord, 'id'>): Promise<MedicalRecord> => {
    await delay(600)
    const newRecord = { ...record, id: `record-${Date.now()}` }
    mockMedicalRecords.push(newRecord)
    return newRecord
  },
  update: async (id: string, updates: Partial<MedicalRecord>): Promise<MedicalRecord | null> => {
    await delay(500)
    const index = mockMedicalRecords.findIndex(record => record.id === id)
    if (index === -1) return null
    mockMedicalRecords[index] = { ...mockMedicalRecords[index], ...updates }
    return mockMedicalRecords[index]
  },
  delete: async (id: string): Promise<boolean> => {
    await delay(400)
    const index = mockMedicalRecords.findIndex(record => record.id === id)
    if (index === -1) return false
    mockMedicalRecords.splice(index, 1)
    return true
  }
}

// Stats API
export const statsApi = {
  getStats: async (): Promise<EntityStats> => {
    await delay(400)
    return mockStats
  }
}