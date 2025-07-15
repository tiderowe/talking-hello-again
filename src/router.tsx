import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Patients from './pages/Patients'
import Orders from './pages/Orders'
import Doctors from './pages/Doctors'
import Pharmacies from './pages/Pharmacies'
import Pharmacists from './pages/Pharmacists'
import Appointments from './pages/Appointments'
import MedicalRecords from './pages/MedicalRecords'

// Root route
const rootRoute = createRootRoute({
  component: Layout,
})

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
})

// Entity management routes
const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: Users,
})

const patientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patients',
  component: Patients,
})

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/orders',
  component: Orders,
})

const doctorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctors',
  component: Doctors,
})

const pharmaciesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pharmacies',
  component: Pharmacies,
})

const pharmacistsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pharmacists',
  component: Pharmacists,
})

const appointmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/appointments',
  component: Appointments,
})

const medicalRecordsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/medical-records',
  component: MedicalRecords,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  dashboardRoute,
  usersRoute,
  patientsRoute,
  ordersRoute,
  doctorsRoute,
  pharmaciesRoute,
  pharmacistsRoute,
  appointmentsRoute,
  medicalRecordsRoute,
])

// Create the router
export const router = createRouter({ routeTree })